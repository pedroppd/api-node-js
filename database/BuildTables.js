const cookieTable = require('./tables/CookieTable');

cookieTable.sync().then(() => {
    console.log('table created success')
})
.catch(console.log);