const HandEquipment = require("./hand_equipment")
const Projectiles = require("../../projectiles/index")

const Protocol = require('../../../../common/util/protocol')
const Constants = require("../../../../common/constants.json")


class SlimyScepter extends HandEquipment {

  onEquipmentConstructed() {
    this.MAX_BURST_COUNT = 7
    this.burstCount = 0
  }

  resetBurstCount() {
    this.burstCount = 0
  }

  use(user, targetEntity) {
    if (this.isProcessing) return false
    

    super.use(user, targetEntity)

    this.targetUser = user
    this.resetBurstCount()
    this.addProcessor()

    return true
  }

  

 

  getConstantsTable() {
    return "Equipments.SlimyScepter"
  }

  

  getType() {
    return Protocol.definition().BuildingType.SlimyScepter
  }

  executeTurn() {
    if (this.burstCount >= this.MAX_BURST_COUNT) {
      this.removeProcessor()
      return
    }

    

    this.burstCount += 1

    let user = this.targetUser

    let angleInRad = user.getRadAngle()
    let angleRandomizer = 2 - Math.floor(Math.random() * 5)
    angleInRad = angleInRad + (angleRandomizer * Math.PI / 180)

    new Projectiles.SlimyBubble({
      weapon:        this,
      source:      { x: user.getX(),         y: user.getY() },
      destination: user.getShootTarget(this, angleInRad)
    })
  }

  addProcessor() {
    this.targetUser.getSector().addProcessor(this)
    this.setIsProcessing(true)
  }

  removeProcessor() {
    this.targetUser.getSector().removeProcessor(this)
    this.setIsProcessing(false)
  }

  setIsProcessing(isProcessing) {
    if (this.isProcessing !== isProcessing) {
      this.isProcessing = isProcessing
      this.onIsProcessingChanged()
    }
  }

  onIsProcessingChanged() {
  }
}

module.exports = SlimyScepter
