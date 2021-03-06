const cookieService = require('../service/CookieService')
const CookieModel = require('../models/Cookie')

module.exports = app => {

    app.get('/api/cookie/list', async (req, res) => {
        const cookieList = await cookieService.findAll();
        res.status(200).send(JSON.stringify(cookieList));
    });

    app.post('/api/cookie', async (req, res) => {

        const modelCookie = new CookieModel(req.body);
        const cookie = await cookieService.save(modelCookie);
        res.status(201).send(JSON.stringify(cookie))
    })

    app.get('/api/cookie/:id', async (req, res) => 
    {
        
            const id =  req.params.id;
            const cookie = await cookieService.findById(parseInt(id));
            if(cookie) 
            {
                res.status(200).send(JSON.stringify(cookie))
            }
            else
            {
                res.status(400).send(JSON.stringify({
                    mensagem: 'cookie not exist in database =('
                }))
            }    
    })

    app.put('/api/cookie/:id', async (req, res) => {
        
        const id = parseInt(req.params.id);
        const body = new CookieModel(req.body);
        const cookie = await cookieService.update(parseInt(id), body);
        res.status(204).send();
    })

    app.delete('/api/cookie/:id', async (req, res) => {
        const id = parseInt(req.params.id)
        const cookie = await cookieService.delete(id);
        res.status(200).send(JSON.stringify(cookie))
    })
}