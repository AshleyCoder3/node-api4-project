const db = require('../../data/data')




function get() {
    return db.map(people => {
        return { companion: people.companion }
    })
}

module.exports = { get }
