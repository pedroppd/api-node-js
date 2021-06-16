const cookieService = require('../service/CookieService')

module.exports = app => {

    app.get('/api/cookie/list', async (req, res) => {
        const cookieList = await cookieService.findAll();
        res.status(200).send(JSON.stringify(cookieList));
    });

    app.post('/api/cookie', async (req, res) => {
        const obj = req.body;
        console.log(obj)
        const cookie = await cookieService.save(obj);
        res.status(201).send(JSON.stringify(cookie))
    })

    app.get('/api/cookie/:id', async (req, res) => 
    {
       const id =  req.params.id;
       const cookie = await cookieService.findById(parseInt(id));
       res.status(200).send(JSON.stringify(cookie))
    })

    app.put('/api/cookie/:id', async (req, res) => {
        
        const id = parseInt(req.params.id);
        const body = req.body;
        const cookie = await cookieService.update(parseInt(id), body);
        res.status(200).send(JSON.stringify(cookie))
    })

    app.delete('/api/cookie/:id', async (req, res) => {
        const id = parseInt(req.params.id)
        const cookie = await cookieService.delete(id);
        res.status(200).send(JSON.stringify(cookie))
    })
}