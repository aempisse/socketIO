const Game = require('./Game')

module.exports = class GameManager {
	// mapping of all available chatrooms
	
	constructor() {
		this.games = new Map()
	}

	// removeClient(client) {
	// 	this.games.forEach(c => c.removePlayer(client.name))
	// }

	getGame(gameName) {
		return this.games.get(gameName)
	}

	addGame(gameName) {
		if (this.getGame(gameName) !== undefined )
			return false
		game = new Game(gameName)
		this.games.push(game)
	}

	serializeGames() {
		return Array.from(this.games.values()).map(c => c.serialize())
	}
}
