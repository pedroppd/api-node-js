const modelTable = require('./tables/CookieTable');

modelTable.sync().then(() => {
    console.log('table created success')
})
.catch(console.log);