const db = require('../../data/data')




function get() {
    return db.map(people => {
        return { companion: people.companion }
    })
}
const insert = people => {
    return {
        message: 'you did it! you added a new companion',
        companion: `${people.companion}`,
    }
}

module.exports = { get, insert }
