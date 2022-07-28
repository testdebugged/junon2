const MeleeEquipment = require("./melee_equipment")
const Constants = require("./../../../../../common/constants.json")
const Protocol = require("./../../../../../common/util/protocol")

class HolySword extends MeleeEquipment {

  getSpritePath() {
    return 'holy_sword.png'
  }

  repositionSprite() {
    this.sprite.position.x = 20
    this.sprite.position.y = 5
  }

  getType() {
    return Protocol.definition().BuildingType.HolySword
  }

  getConstantsTable() {
    return "Equipments.HolySword"
  }

 
}

module.exports = HolySword