const Constants = require('../../../common/constants.json')
const Protocol = require('../../../common/util/protocol')
const BaseBuilding = require("./base_building")

class Terminal extends BaseBuilding {

  hasCustomColors() {
    return true
  }

  interact(user, action, content) {
    if (action === 'chat') {
      if (user.isPlayer()) {
        let maxChatLength = 100
        let message = content
        message = message.substring(0, maxChatLength)
        message = user.replaceBadWords(message)
        message = user.sanitize(message)
        if (!message) return
        this.sector.addTerminalMessage(user, message)
      }

    }
  }

  getConstantsTable() {
    return "Buildings.Terminal"
  }

  getType() {
    return Protocol.definition().BuildingType.Terminal
  }

}

module.exports = Terminal
