import {EnumDictionary} from "./types/EnumDictionary";
import {ModOrAbility} from "./enum/modOrAbility";
import {Modifier} from "./modifier";
import {ModifierType} from "./enum/modifierType";
import {ArmorStat, SpecialArmorStat} from "./enum/armor-stat";
import {DestinyEnergyType} from "bungie-api-ts/destiny2/interfaces";

export const ModInformation: EnumDictionary<ModOrAbility, Modifier> = {
  // MODS
  // POSITIVE Mods
  [ModOrAbility.PowerfulFriends]: {
    id: ModOrAbility.PowerfulFriends,
    name: "Powerful Friends",
    description: "When you become Charged with Light, nearby allies also become Charged with Light, if they are not already.",
    type: ModifierType.CombatStyleMod,
    bonus: [{stat: ArmorStat.Mobility, value: 20}],
    cost: 4,
    requiredArmorAffinity: DestinyEnergyType.Arc,
    hash: 1484685887
  },
  [ModOrAbility.RadiantLight]: {
    id: ModOrAbility.RadiantLight,
    name: "Radiant Light",
    description: "Casting your Super causes nearby allies to become Charged with Light.",
    type: ModifierType.CombatStyleMod,
    bonus: [{stat: ArmorStat.Strength, value: 20}],
    cost: 3,
    requiredArmorAffinity: DestinyEnergyType.Arc,
    hash: 2979815167
  },
  // NEGATIVE Mods
  [ModOrAbility.ProtectiveLight]: {
    id: ModOrAbility.ProtectiveLight,
    name: "Protective Light",
    description: "While Charged with Light, you gain significant damage resistance against combatants when your shields are destroyed. This effect consumes all stacks of Charged with Light. The more stacks consumed, the longer the damage resistance lasts.",
    type: ModifierType.CombatStyleMod,
    bonus: [{stat: ArmorStat.Strength, value: -10}],
    cost: 2,
    requiredArmorAffinity: DestinyEnergyType.Void,
    hash: 3523075120
  },
  [ModOrAbility.ExtraReserves]: {
    id: ModOrAbility.ExtraReserves,
    name: "Extra Reserves",
    description: "While Charged with Light, defeating combatants with Void damage grants a chance to drop Special ammo. This effect consumes all stacks of Charged with Light. The more stacks you have, the higher your chance of gaining the ammo drop.",
    type: ModifierType.CombatStyleMod,
    bonus: [{stat: ArmorStat.Intellect, value: -10}],
    cost: 3,
    requiredArmorAffinity: DestinyEnergyType.Void,
    hash: 3523075121
  },
  [ModOrAbility.PreciselyCharged]: {
    id: ModOrAbility.PreciselyCharged,
    name: "Precisely Charged",
    description: "Become Charged with Light by getting multiple rapid precision final blows with Linear Fusion Rifles or Sniper Rifles.",
    type: ModifierType.CombatStyleMod,
    bonus: [{stat: ArmorStat.Discipline, value: -10}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Void,
    hash: 3523075122
  },
  [ModOrAbility.StacksOnStacks]: {
    id: ModOrAbility.StacksOnStacks,
    name: "Stacks on Stacks",
    description: "Gain an extra stack of Charged with Light for every stack you gain.",
    type: ModifierType.CombatStyleMod,
    bonus: [{stat: ArmorStat.Recovery, value: -10}],
    cost: 4,
    requiredArmorAffinity: DestinyEnergyType.Void,
    hash: 3523075123
  },
  [ModOrAbility.PrecisionCharge]: {
    id: ModOrAbility.PrecisionCharge,
    name: "Precision Charge",
    description: "Become Charged with Light by rapidly defeating combatants with precision kills from Bows, Hand Cannons, and Scout Rifles.",
    type: ModifierType.CombatStyleMod,
    bonus: [{stat: ArmorStat.Strength, value: -10}],
    cost: 2,
    requiredArmorAffinity: DestinyEnergyType.Void,
    hash: 2263321584
  },
  [ModOrAbility.SurpriseAttack]: {
    id: ModOrAbility.SurpriseAttack,
    name: "Surprise Attack",
    description: "While Charged with Light, reloading or readying a Sidearm will consume all stacks of Charged with Light and convert them into stacks of a major damage buff, which are depleted as you damage combatants with that Sidearm.",
    type: ModifierType.CombatStyleMod,
    bonus: [{stat: ArmorStat.Intellect, value: -10}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Void,
    hash: 2263321585
  },
  [ModOrAbility.EnergyConverter]: {
    id: ModOrAbility.EnergyConverter,
    name: "Energy Converter",
    description: "While Charged with Light, using your grenade attack grants you Super energy, consuming all stacks of Charged with Light. The more stacks you have, the more energy you gain, up to a maximum of 50% of your Super energy.",
    type: ModifierType.CombatStyleMod,
    bonus: [{stat: ArmorStat.Discipline, value: -10}],
    cost: 4,
    requiredArmorAffinity: DestinyEnergyType.Void,
    hash: 2263321586
  },
  [ModOrAbility.ChargeHarvester]: {
    id: ModOrAbility.ChargeHarvester,
    name: "Charge Harvester",
    description: "While you are not Charged with Light, any kill or assist has a small cumulative chance to cause you to become Charged with Light.",
    type: ModifierType.CombatStyleMod,
    bonus: [{stat: SpecialArmorStat.ClassAbilityRegenerationStat, value: -10}],
    cost: 3,
    requiredArmorAffinity: DestinyEnergyType.Void,
    hash: 2263321587
  },
  // Positive STASIS
  [ModOrAbility.WhisperOfDurance]: {
    id: ModOrAbility.WhisperOfDurance,
    name: "Whisper Of Durance",
    description: "Slow from your abilities lasts longer. For those abilities that linger, their duration will also increase.",
    type: ModifierType.Stasis,
    bonus: [{stat: ArmorStat.Strength, value: 10}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Any,
    hash: 3469412969
  },
  [ModOrAbility.WhisperOfChains]: {
    id: ModOrAbility.WhisperOfChains,
    name: "Whisper Of Chains",
    description: "While you are near frozen targets or a friendly Stasis crystal, you take reduced damage from targets.",
    type: ModifierType.Stasis,
    bonus: [{stat: ArmorStat.Recovery, value: 10}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Any,
    hash: 537774540
  },
  [ModOrAbility.WhisperOfShards]: {
    id: ModOrAbility.WhisperOfShards,
    name: "Whisper Of Shards",
    description: "Shattering a Stasis crystal temporarily boosts your grenade recharge rate. Shattering additional Stasis crystals increases the duration of this benefit.",
    type: ModifierType.Stasis,
    bonus: [{stat: ArmorStat.Resilience, value: 10}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Any,
    hash: 3469412975
  },
  [ModOrAbility.WhisperOfConduction]: {
    id: ModOrAbility.WhisperOfConduction,
    name: "Whisper Of Conduction",
    description: "Nearby Stasis shards track to your position.",
    type: ModifierType.Stasis,
    bonus: [{stat: ArmorStat.Resilience, value: 10}, {stat: ArmorStat.Intellect, value: 10}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Any,
    hash: 2483898429
  },
  // NEGATIVE STASIS

  [ModOrAbility.WhisperOfBonds]: {
    id: ModOrAbility.WhisperOfBonds,
    name: "Whisper of Bonds",
    description: "Defeating frozen targets grants you Super energy.",
    type: ModifierType.Stasis,
    bonus: [{stat: ArmorStat.Discipline, value: -10}, {stat: ArmorStat.Intellect, value: -10}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Any,
    hash: 3469412974
  },
  [ModOrAbility.WhisperOfHedrons]: {
    id: ModOrAbility.WhisperOfHedrons,
    name: "Whisper of Hedrons",
    description: "Dramatically increases weapon stability, weapon aim assist, Mobility, Resilience, and Recovery after freezing a target with Stasis.",
    type: ModifierType.Stasis,
    bonus: [{stat: ArmorStat.Strength, value: -10}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Any,
    hash: 3469412970
  },
  [ModOrAbility.WhisperOfFractures]: {
    id: ModOrAbility.WhisperOfFractures,
    name: "Whisper of Fractures",
    description: "Your melee energy recharges faster when you are near two or more targets.",
    type: ModifierType.Stasis,
    bonus: [{stat: ArmorStat.Discipline, value: -10}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Any,
    hash: 537774542
  },
  [ModOrAbility.WhisperOfHunger]: {
    id: ModOrAbility.WhisperOfHunger,
    name: "Whisper of Hunger",
    description: "Increases the melee energy gained from picking up Stasis shards.",
    type: ModifierType.Stasis,
    bonus: [{stat: ArmorStat.Mobility, value: -10}, {stat: ArmorStat.Recovery, value: -10}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Any,
    hash: 2483898431
  },
  // VOID
  [ModOrAbility.EchoOfExpulsion]: {
    id: ModOrAbility.EchoOfExpulsion,
    name: "Echo of Expulsion",
    description: "Void ability final blows cause targets to explode.",
    type: ModifierType.Void,
    bonus: [{stat: ArmorStat.Intellect, value: 10}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Any,
    hash: 2272984665
  },
  [ModOrAbility.EchoOfProvision]: {
    id: ModOrAbility.EchoOfProvision,
    name: "Echo of Provision",
    description: "Damaging targets with grenades grants melee energy.",
    type: ModifierType.Void,
    bonus: [{stat: ArmorStat.Strength, value: -10}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Any,
    hash: 2272984664
  },
  [ModOrAbility.EchoOfPersistence]: {
    id: ModOrAbility.EchoOfPersistence,
    name: "Echo of Persistence",
    description: "Void buffs applied to you (Invisibility, Overshield, and Devour) have increased duration.",
    type: ModifierType.Void,
    bonus: [{stat: SpecialArmorStat.ClassAbilityRegenerationStat, value: -10}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Any,
    hash: 2272984671
  },
  [ModOrAbility.EchoOfLeeching]: {
    id: ModOrAbility.EchoOfLeeching,
    name: "Echo of Leeching",
    description: "Melee final blows start health regeneration for you and nearby allies.",
    type: ModifierType.Void,
    bonus: [{stat: ArmorStat.Resilience, value: 10}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Any,
    hash: 2272984670
  },
  [ModOrAbility.EchoOfDomineering]: {
    id: ModOrAbility.EchoOfDomineering,
    name: "Echo of Domineering",
    description: "After suppressing a target, you gain greatly increased Mobility for a short duration and your equipped weapon is reloaded from reserves.",
    type: ModifierType.Void,
    bonus: [{stat: ArmorStat.Discipline, value: 10}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Any,
    hash: 2272984657
  },
  [ModOrAbility.EchoOfDilation]: {
    id: ModOrAbility.EchoOfDilation,
    name: "Echo of Dilation",
    description: "While crouched, you sneak faster and gain enhanced radar resolution.",
    type: ModifierType.Void,
    bonus: [{stat: ArmorStat.Mobility, value: 10}, {stat: ArmorStat.Intellect, value: 10}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Any,
    hash: 2272984656
  },
  [ModOrAbility.EchoOfUndermining]: {
    id: ModOrAbility.EchoOfUndermining,
    name: "Echo of Undermining",
    description: "Your Void grenades weaken targets.",
    type: ModifierType.Void,
    bonus: [{stat: ArmorStat.Discipline, value: -20}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Any,
    hash: 2272984668
  },
  [ModOrAbility.EchoOfInstability]: {
    id: ModOrAbility.EchoOfInstability,
    name: "Echo of Instability",
    description: "Defeating targets with grenades grants Volatile Rounds to your Void weapons.",
    type: ModifierType.Void,
    bonus: [{stat: ArmorStat.Strength, value: 10}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Any,
    hash: 2661180600
  },
  [ModOrAbility.EchoOfObscurity]: {
    id: ModOrAbility.EchoOfObscurity,
    name: "Echo of Obscurity",
    description: "Finisher final blows grant Invisibility.",
    type: ModifierType.Void,
    bonus: [{stat: ArmorStat.Recovery, value: 10}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Any,
    hash: 2661180602
  },
  [ModOrAbility.EchoOfHarvest]: {
    id: ModOrAbility.EchoOfHarvest,
    name: "Echo of Harvest",
    description: "Defeating weakened targets with precision final blows will create an Orb of Power.",
    type: ModifierType.Void,
    bonus: [{stat: ArmorStat.Intellect, value: -10}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Any,
    hash: 2661180601
  },
  [ModOrAbility.EchoOfStarvation]: {
    id: ModOrAbility.EchoOfStarvation,
    name: "Echo of Starvation",
    description: "Picking up an Orb of Power grants Devour.",
    type: ModifierType.Void,
    bonus: [{stat: ArmorStat.Recovery, value: -10}],
    cost: 1,
    requiredArmorAffinity: DestinyEnergyType.Any,
    hash: 2661180603
  },
}
