const MeleeEquipment = require("./melee_equipment")
const Projectiles = require("./../../projectiles/index")

const Protocol = require('../../../../common/util/protocol')
const Constants = require("../../../../common/constants.json")


class HolySword extends MeleeEquipment {
  onEquipmentConstructed() {
    
  }

  getType() {
    return Protocol.definition().BuildingType.HolySword
  }

  use(player, targetEntity) {
    super.use(player, targetEntity)

    let distance = Constants.tileSize * 1.5

    let firstPoint  = player.game.pointFromDistance(player.getX(), player.getY(), distance, player.getRadAngle())

    let points = [firstPoint]

    let minWidth = Constants.Projectiles.Flame.minWidth
    let maxWidth = Constants.Projectiles.Flame.maxWidth

    points.forEach((point) => {
      const randomWidth = Math.floor(Math.random() * (maxWidth - minWidth)) + minWidth

      if (!this.isObstructed(player, point)) {
        new Projectiles.Flame({
          weapon: this,
          source:      { x: point[0], y: point[1] },
          destination: { x: point[0], y: point[1] },
          w: randomWidth,
          h: randomWidth
        })
      }
    })

  }



  getConstantsTable() {
    return "Equipments.HolySword"
  }

  
}

module.exports = HolySword