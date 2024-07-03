const express = require('express');
const app = express();
app.use(express.json());

let courses = [
    { id: 1, name: "java"},
    { id: 2, name: "node"},
    { id: 3, name: "react"}
];

app.get('/courses', (req, res)=>{
    res.json(courses);
})

app.post('/courses',(req, res)=>{
    const course={
        id: courses.length+1,
        name: req.body.name
    }
    courses.push(course);
    console.log(courses);
    res.send(course);
})

app.put('/courses/:id', (req, res)=>{
    const id= parseInt(req.params.id);
    const course = courses.find(c => c.id === id);  
    const updateName= req.body.name;
    course.name= updateName;
    console.log(courses);
    res.send(course);
})

app.delete('/courses/:id', (req, res)=>{
    const id= parseInt(req.params.id);
    const course = courses.find(c => c.id === id);
    courses.splice(course.id-1, 1);
    console.log(courses)
    res.send(course);
})

app.listen(3000, 'localhost', ()=>{
    console.log('Server is running on port 3000');
})