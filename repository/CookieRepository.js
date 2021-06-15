const cookieTable = require('../database/tables/CookieTable');
const { save } = require('../service/CookieService');

module.exports = {

    async findAll()
    {
        return await cookieTable.findAll();
    },
    async findById(id){
        return await cookieTable.findOne({
            where: {
                id: id
            }
        })
    },
    async save(obj)
    {
        await cookieTable.create(obj);
    }
}

