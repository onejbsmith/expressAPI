// Load the express module
const express = require('express');

/// Creates an Express application. 
/// The express() function is a top-level function 
/// exported by the express module.
const route = express.Router();


const courses = [
    {id:1, name:'course 1'},
    {id:2, name:'course 2'},
    {id:3, name:'Course 3'},
];

//#region EndPoints
// Test a simple get
function appRoot(req, res)
{
    res.send("<h1>Hello Courses Route World!</h1>")
}

function appCourses(req, res)
{
    res.send(courses);
}

route.get("/",appRoot);
route.get("/example",appCourses);

module.exports = route;

// app.get("/api/courses/:id",appCourseById);
// app.post("/api/courses",appPostCourse);
// app.put("/api/courses/:id",appPutCourse);
// app.delete("/api/courses/:id",appDeleteC


// var appCourseById = (req, res) =>
// {
//     var msg = [req.params, req.query];
//     if (req.params.id >= courses.length || req.params.id<0)
//         res.status(404).send(`Course with id of ${req.params.id} was not found.`)
//     else
//         res.send(courses[req.params.id]);
// }

// function appValidateData(req)
// {
//     const schema = {
//         name: Joi.string().min(3).required()
//     }

//     const valid = Joi.validate(req.body, schema);

//     return valid;

// }

// function appPostCourse(req,res)
// {
//     const valid = appValidateData(req);

//    // res.send(valid);

//     if(valid.error)
//         res.status(400).send(valid);    
//     else
//     {
//         const course = {id:courses.length+1, name:req.body.name};
//         courses.push(course);
//         res.send(course);
//     }
// }

// function appPutCourse(req,res)
// {
//     var id = req.params.id;
//     var course = courses.find(c => c.id === parseInt(id));
//     if(course)
//     {

//         // We use object destructor to only return the error part of the valid object;
//         //const valid =  appValidateData(req);
//         const {error} = appValidateData(req);

//         // res.send(valid);
     
//          if(error)
//              res.status(400).send(error);  
//          else
//              {
//                 course.name = req.body.name;
//                 res.send(course);
//              }
//     }
//     else
//         res.status(404).send(`No course with id of ${req.params.id} was found.`)

//     //res.send(req.body.name);
// }

// function appDeleteCourse(req,res)
// {
//     var id = req.params.id;
//     var course = courses.find(c => c.id === parseInt(id));
//     if(course)
//     {
//         const i = courses.indexOf(course);
//         courses.splice(i,1);
//         res.send(course);
//     }
//     else
//         res.status(404).send(`No course with id of ${req.params.id} was found.`)

//     //res.send(req.body.name);
// }

// //#endregion

// // app.get("/",appRoot);
// // app.get("/api/courses",appCourses);
// // app.get("/api/courses/:id",appCourseById);
// // app.post("/api/courses",appPostCourse);
// // app.put("/api/courses/:id",appPutCourse);
// // app.delete("/api/courses/:id",appDeleteCourse);

// var port = process.env.PORT || 3000;

// app.listen(port,()=>console.log(`listening on port ${port}`));