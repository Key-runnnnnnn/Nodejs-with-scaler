const express = require('express')
const myMiddleware = require('./middlewares/middleware')
const morgan = require('morgan')    // third party middleware

const app = express()
// get , post , put , delete

// Home
app.get('/', (req, res) => {
    res.send('Hello World')
})

// About
app.get('/about', (req, res) => {
    res.send('About Page')
})

// Contact
app.get('/contact', (req, res) => {
    res.send('Contact Page')
})


// middleware
app.use(express.json())

// custom middleware
app.use(myMiddleware)

// third party middleware
app.use(morgan())

app.use((req, res, next) => {
    console.log('Authenticating...')
    next()
})

// Courses
let courses = [
    { id: 1, name: 'Python' },
    { id: 2, name: 'Java' },
    { id: 3, name: 'C++' }
]

// Route Parameters
// app.get('/user/:id', (req, res) => {
//     res.send(req.params.name)
//     console.log(req.params)
// }) 


// Post request  -> add course 
app.post('/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})


// Put request -> update course
app.put('/courses/:name', (req, res) => {
    const course = courses.find(c => c.name === req.params.name)
    if (!course) return res.status(404).send('The course with the given ID was not found')
    course.name = req.body.name
    res.send(course)
})


// search all courses
app.get('/courses', (req, res) => {
    res.send(courses)
})

// search course by id
app.get('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('The course with the given ID was not found')
    res.send(course)
})

// search course by name
app.get('/courses/:name', (req, res) => {
    const course = courses.find(c => c.name === req.params.name)
    if (!course) return res.status(404).send('The course with the given name was not found')
    res.send(course)
})

// Delete request -> delete course
// app.delete('/courses/:name',(req,res)=>{
//     let updatedCourses = courses.filter(c => c.name !== req.params.name)
//     courses = updatedCourses
//     res.send(courses)
// })
// we can't use two delete request with same route

// delete request -> delete course by id
app.delete('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('The course with the given ID was not found')
    const index = courses.indexOf(course)
    courses.splice(index, 1)
    res.send(course)
})

// port environment
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Example app listening at ${port}`)
})