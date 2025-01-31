import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModInformation} from "../../../../data/ModInformation";
import {ModifierType} from "../../../../data/enum/modifierType";
import {Modifier, ModifierValue} from "../../../../data/modifier";
import {ArmorAffinityIcons, ArmorAffinityNames, ArmorStat, SpecialArmorStat} from "../../../../data/enum/armor-stat";
import {ConfigurationService} from "../../../../services/configuration.service";
import {CharacterClass} from "../../../../data/enum/character-Class";
import {ModOrAbility} from "../../../../data/enum/modOrAbility";
import {MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS} from "@angular/material/slide-toggle";
import {DestinyEnergyType} from 'bungie-api-ts/destiny2';
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-desired-mods-selection',
  templateUrl: './desired-mods-selection.component.html',
  styleUrls: ['./desired-mods-selection.component.css'],
  providers: [
    {provide: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, useValue: {disableToggleValue: false, disableDragValue: true}},
  ]
})
export class DesiredModsSelectionComponent implements OnInit, OnDestroy {
  ModifierType = ModifierType;
  dataSource: Modifier[];
  displayedColumns = ["name", "cost", "mobility", "resilience", "recovery", "discipline", "intellect", "strength"];
  private selectedClass: CharacterClass = CharacterClass.None;
  data: { data: Modifier[]; name: string, group: boolean, type: ModifierType }[];
  selectedMods: ModOrAbility[] = [];
  selectedElement: ModifierType = ModifierType.Void;

  constructor(private config: ConfigurationService) {
    const modifiers = Object.values(ModInformation).sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    let combatStyleMods = modifiers.filter(value => value.type == ModifierType.CombatStyleMod);
    let stasisFragments = modifiers.filter(value => value.type == ModifierType.Stasis);
    let voidFragments = modifiers.filter(value => value.type == ModifierType.Void);

    this.data = [
      {name: "Combat Style Mods", data: combatStyleMods, group: false, type: ModifierType.CombatStyleMod},
      {name: "Stasis Fragments", data: stasisFragments, group: true, type: ModifierType.Stasis},
      {name: "Void Fragments", data: voidFragments, group: true, type: ModifierType.Void},
    ]

    this.dataSource = modifiers;
  }

  ngOnInit(): void {
    this.config.configuration
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(c => {
        this.selectedMods = c.enabledMods;
        this.selectedClass = c.characterClass;
        this.selectedElement = c.selectedModElement;
      })
  }


  getModifierTextForValue(value: ModifierValue[], type: ArmorStat | SpecialArmorStat) {
    return value.filter(v => {
      if (v.stat == type)
        return true;
      if (v.stat == SpecialArmorStat.ClassAbilityRegenerationStat) {
        if (this.selectedClass == CharacterClass.Titan && type == ArmorStat.Resilience) return true;
        if (this.selectedClass == CharacterClass.Hunter && type == ArmorStat.Mobility) return true;
        if (this.selectedClass == CharacterClass.Warlock && type == ArmorStat.Recovery) return true;
      }
      return false;
    }).reduce((p, v) => p + v.value, 0);
  }

  handleRowClick(row: Modifier) {
    this.config.modifyConfiguration(c => {
      const pos = c.enabledMods.indexOf(row.id);
      if (pos > -1) {
        c.enabledMods.splice(pos, 1)
      } else {
        // Do not allow more than 5 stat mods
        const amountStatMods = c.enabledMods.filter(d => ModInformation[d].requiredArmorAffinity != DestinyEnergyType.Any).length;
        if (row.requiredArmorAffinity == DestinyEnergyType.Any || amountStatMods < 5)
          c.enabledMods.push(row.id)
      }
    })
  }

  clear() {
    this.config.modifyConfiguration(c => {
      c.enabledMods = []
    })
  }

  getAffinityName(id: DestinyEnergyType) {
    return ArmorAffinityNames[id];
  }

  getAffinityUrl(id: DestinyEnergyType) {
    return ArmorAffinityIcons[id];
  }

  setElement(element: ModifierType) {
    if (this.selectedElement == element)
      return;
    this.config.modifyConfiguration(c => {
      const pos = c.enabledMods
        .filter(m => ModInformation[m].type != ModifierType.CombatStyleMod && ModInformation[m].type != element)

      c.selectedModElement = element;

      for (let toDisableMods of pos) {
        const position = c.enabledMods.indexOf(toDisableMods);
        c.enabledMods.splice(position, 1)
      }
    })
  }

  private ngUnsubscribe = new Subject();

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
