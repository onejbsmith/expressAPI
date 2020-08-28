// Load the express module
const express = require('express');

/// Creates an Express application. 
/// The express() function is a top-level function 
/// exported by the express module.
const route = express.Router();


const bourses = [
    {id:1, name:'bourse 1'},
    {id:2, name:'bourse 2'},
    {id:3, name:'Bourse 3'},
];

//#region EndPoints
// Test a simple get
function appRoot(req, res)
{
    res.send("<h1>Hello Bourse Route World!</h1>")
}

function appBourses(req, res)
{
    res.send(bourses);
}

route.get("/",appRoot);
route.get("/bexample",appBourses);

module.exports = route;

// app.get("/api/bourses/:id",appBourseById);
// app.post("/api/bourses",appPostBourse);
// app.put("/api/bourses/:id",appPutBourse);
// app.delete("/api/bourses/:id",appDeleteC


// var appBourseById = (req, res) =>
// {
//     var msg = [req.params, req.query];
//     if (req.params.id >= bourses.length || req.params.id<0)
//         res.status(404).send(`Bourse with id of ${req.params.id} was not found.`)
//     else
//         res.send(bourses[req.params.id]);
// }

// function appValidateData(req)
// {
//     const schema = {
//         name: Joi.string().min(3).required()
//     }

//     const valid = Joi.validate(req.body, schema);

//     return valid;

// }

// function appPostBourse(req,res)
// {
//     const valid = appValidateData(req);

//    // res.send(valid);

//     if(valid.error)
//         res.status(400).send(valid);    
//     else
//     {
//         const bourse = {id:bourses.length+1, name:req.body.name};
//         bourses.push(bourse);
//         res.send(bourse);
//     }
// }

// function appPutBourse(req,res)
// {
//     var id = req.params.id;
//     var bourse = bourses.find(c => c.id === parseInt(id));
//     if(bourse)
//     {

//         // We use object destructor to only return the error part of the valid object;
//         //const valid =  appValidateData(req);
//         const {error} = appValidateData(req);

//         // res.send(valid);
     
//          if(error)
//              res.status(400).send(error);  
//          else
//              {
//                 bourse.name = req.body.name;
//                 res.send(bourse);
//              }
//     }
//     else
//         res.status(404).send(`No bourse with id of ${req.params.id} was found.`)

//     //res.send(req.body.name);
// }

// function appDeleteBourse(req,res)
// {
//     var id = req.params.id;
//     var bourse = bourses.find(c => c.id === parseInt(id));
//     if(bourse)
//     {
//         const i = bourses.indexOf(bourse);
//         bourses.splice(i,1);
//         res.send(bourse);
//     }
//     else
//         res.status(404).send(`No bourse with id of ${req.params.id} was found.`)

//     //res.send(req.body.name);
// }

// //#endregion

// // app.get("/",appRoot);
// // app.get("/api/bourses",appBourses);
// // app.get("/api/bourses/:id",appBourseById);
// // app.post("/api/bourses",appPostBourse);
// // app.put("/api/bourses/:id",appPutBourse);
// // app.delete("/api/bourses/:id",appDeleteBourse);

// var port = process.env.PORT || 3000;

// app.listen(port,()=>console.log(`listening on port ${port}`));