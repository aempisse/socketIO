module.exports = class Game {

    constructor(name) {
        this.players = new Map()
        this.name = name
    }

  addPlayer(playerName, id) {
    if (!playerName || !id)
      return undefined
    if (!this.containPlayer(playerName) && !this.containId(id)) {
      const player = new Player(playerName, id)
      this.players.push(player)

    //   PacketSender.sendPlayerJoin(player, this)

      return player;
    }
  }

  removePlayer(playerName) {
    const player = this.players.find(e => e.playerName === playerName)
    if (player) {
      this.players.delete(player)

    //   PacketSender.sendPlayerQuit(player, this)

      return player
    }
  }

  getPlayer(id) {
    return this.players.find(e => e.id === id);
  }

  containId(id) {
    return this.players.find(e => e.id === id) !== undefined;
  }

  containPlayer(playerName) {
    return this.players.find(e => e.playerName === playerName) !== undefined;
  }

  gameHasEnd() {
    
  }
}


// module.exports = function({name, image}) {
//     const members = new Map()
//     let chatHistory = []

//     function broadcastMessage(message) {
//         members.forEach(m => m.emit('message', message))
//     }

//     function addEntry(entry) {
//         chatHistory = chatHistory.concat(entry)
//     }

//     function getChatHistory() {
//         return chatHistory.slice()
//     }

//     function addUser(client) {
//         members.set(client.id, client)
//     }

//     function removeUser(client) {
//         members.delete(client.id)
//     }

//     function serialize() {
//         return {
//             name,
//             image,
//             numMembers: members.size
//         }
//     }

//     return {
//         broadcastMessage,
//         addEntry,
//         getChatHistory,
//         addUser,
//         removeUser,
//         serialize
//     }
// }