const RangeEquipment = require("./range_equipment")
const Constants = require("../../../../../common/constants.json")
const Protocol = require("../../../../../common/util/protocol")

class SlimyScepter extends RangeEquipment {


  repositionSprite() {
    super.repositionSprite()

    this.sprite.position.x = 35
  }

  repositionSprite() {
    super.repositionSprite()

    // this.sprite.position.x 
  }

  getSpritePath() {
    return 'slimy_scepter.png'
  }

  getType() {
    return Protocol.definition().BuildingType.SlimyScepter
  }

  getConstantsTable() {
    return "Equipments.SlimyScepter"
  }

}

module.exports = SlimyScepter
