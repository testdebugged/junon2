const CollidableProjectile = require("./collidable_projectile")
const Protocol = require('../../../common/util/protocol')
const Constants = require("../../../common/constants.json")

class SlimyBubble extends CollidableProjectile {

  getType() {
    return Protocol.definition().ProjectileType.SlimyBubble
  }

  getConstantsTable() {
    return "Projectiles.SlimyBubble"
  }


}

module.exports = SlimyBubble
