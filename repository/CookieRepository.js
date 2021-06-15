const cookieTable = require('../database/tables/CookieTable')

module.exports = {

    findAll()
    {
        return cookieTable.findAll();
    }
}

