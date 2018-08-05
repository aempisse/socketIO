module.exports = class ClientManager {
    // mapping of all connected clients
    constructor() {
        this.clients = new Map()
    }

    addClient(client) {
        this.clients.set(client.id, { client })
    }

    registerClient(client, user) {
        this.clients.set(client.id, { client, user })
    }

    removeClient(client) {
        this.clients.delete(client.id)
    }

    getUserByClientId(clientId) {
        return (this.clients.get(clientId) || {}).user
    }
}
