const cookieRepository = require('../repository/CookieRepository')

module.exports = app => {

    app.get('/list', async (req, res) => {
            await res.send(cookieRepository.findAll());
    });

    app.post('/', async () => {
        

    })

    app.get('/:id', async () => {
       
        
    })

    app.put('/:id', async () => {
    
        
    })

    app.delete('/:id', async () => {
        
        
    })
}