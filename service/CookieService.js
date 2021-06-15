const CookieRepository = require("../repository/CookieRepository")

module.exports = {

    async findAll()
    {
        return await CookieRepository.findAll();
    },
    async findById(id)
    {
        if(id)
        {
            return await CookieRepository.findById(id);
        }        
    },
   async save(cookie)
    {
        if(cookie)
        {
          return await  CookieRepository.save(cookie);
        }
    }

}