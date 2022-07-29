const BaseProjectile = require("./base_projectile")
const Constants = require("../../../../common/constants.json")
const Protocol = require("../../../../common/util/protocol")

class Bubble extends BaseProjectile {

  onProjectileConstructed() {
    this.game.playSound("bubble")
  }

  getSpritePath() {
    return 'slimy_bubble.png'
  }

  getType() {
    return Protocol.definition().ProjectileType.SlimyBubble
  }

  getConstantsTable() {
    return "Projectiles.SlimyBubble"
  }

}

module.exports = Bubble
