const express = require("express");
const exphbs  = require('express-handlebars');
const ServicesDB = require("./model/services")


const app = express();

//Tells Express to set handlebars as its template enginge
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get("/",(req,res)=>{


    res.render("home",{
        title : "Home Page"

    })
});

app.get("/services",(req,res)=>{

    ///FAKEDB LOGIC
  //  const services = ["Website Development","Mobile Development", "Database Admin"];

    const fakeDB = new ServicesDB();

    res.render("services",{
        
        services:fakeDB.getServices(),
        title:"Services"
    });
})

app.get("/about",(req,res)=>{

    res.render("about",
    {
        title:"About Us"
    })
})


//Web Server creation
const PORT=3000;
app.listen(PORT,()=>{
    console.log("Web Server is up and running");
})