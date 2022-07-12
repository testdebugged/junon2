const MeleeEquipment = require("./melee_equipment")

const Protocol = require('../../../../common/util/protocol')
const Constants = require("../../../../common/constants.json")


class HolySword extends MeleeEquipment {
  onEquipmentConstructed() {
  }

  getType() {
    return Protocol.definition().BuildingType.HolySword
  }

  getConstantsTable() {
    return "Equipments.HolySword"
  }
}

module.exports = HolySword
