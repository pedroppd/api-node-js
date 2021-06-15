const cookieRepository = require('../repository/CookieRepository')

module.exports = app => {

    app.get('/list', async (req, res) => {
            await res.send(cookieRepository.findAll());
    });
}