class ServiceDB 
{

    services = [];

    
    constructor()
    {
        this.services.push({title :"Web Development",price:300});
        this.services.push({title:"Mobile Development",price:500});
        this.services.push({title:"Database Administration",price:500});
    }

    getServices()
    {
        return this.services;
    }

}

module.exports = ServiceDB;

//export default = ServiceDB // ES6 Modules syntax