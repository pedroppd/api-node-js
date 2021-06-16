class Cookie {
    constructor(obj)
    {
        this.name = obj.name;
        this.flavor = obj.flavor;
        this.price = obj.price;
        this.expiration_date = obj.expiration_date;
        this.weight = obj.weight;
    }
}

module.exports = Cookie;