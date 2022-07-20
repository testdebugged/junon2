const ArmorEquipment = require("./armor_equipment")
const Protocol = require('../../../../common/util/protocol')
const Constants = require("../../../../common/constants.json")

class CowboyHat extends ArmorEquipment {

  getType() {
    return Protocol.definition().BuildingType.CowboyHat
  }

  getConstantsTable() {
    return "Equipments.CowboyHat"
  }

  getSpritePath() {
    return 'cowboy_hat.png'
  }
  
}

module.exports = CowboyHat
