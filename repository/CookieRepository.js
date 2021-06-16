const cookieTable = require('../database/tables/CookieTable');
const { save, update } = require('../service/CookieService');

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
        return await cookieTable.create(obj);
    },
    async update(id, body)
    {
        return await cookieTable.update(
            {
                name: body.name,
                flavor: body.flavor,
                price: body.price,
                expiration_date: body.expiration_date,
                weight: body.weight,

            },
            {
                where: {
                    id: id
                }
            }
        )
    },
    async delete(id)
    {
        return await cookieTable.destroy(
            {
                where: {
                    id: id
                }
            }
        )
    }
}

