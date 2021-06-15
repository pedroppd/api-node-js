const cookieTable = require('../database/tables/CookieTable')

class CookieRepository{

    findAll()
    {
        return cookieTable.findAll();
    }
}

module.exports = new CookieRepository;