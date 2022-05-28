const { faker } = require('@faker-js/faker');
const express = require("express")
const fs = require("fs")
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express()

// Code used for generating fake data
// const arr = Array.from({ length: 10 }, () => {
//     return {
//         id: faker.random.alphaNumeric(10),
//         title: faker.lorem.sentence(),
//         content: faker.lorem.paragraphs(3),
//         author: faker.name.findName(),
//         date: faker.date.past(),
//         comments: Array.from({ length: faker.random.numeric() }, () => {
//             return {
//                 name: faker.name.findName(),
//                 content: faker.lorem.paragraphs(1),
//                 date: faker.date.past(),
//                 replies: Array.from({ length: faker.random.numeric() }, () => {
//                     return {
//                         name: faker.name.findName(),
//                         content: faker.lorem.paragraphs(1),
//                         date: faker.date.past(),
//                         id: faker.random.alphaNumeric(10),
//                         replies: Array.from({ length: faker.random.numeric() }, () => {
//                             return {
//                                 name: faker.name.findName(),
//                                 content: faker.lorem.paragraphs(1),
//                                 date: faker.date.past(),
//                                 id: faker.random.alphaNumeric(10),
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// });

const allowedOrigins = ["http://localhost:3000", "http://localhost:8080", "https://hoppscotch.io/"];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                var msg =
                    "The CORS policy for this site does not " +
                    "allow access from the specified Origin.";
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        }
    })
);
app.use(bodyParser.json());

// Get all posts
app.get("/", (req, res) => {
    const data = fs.readFileSync("./posts.json", "utf8")
    const json = JSON.parse(data)

    res.json(json)
})

// Add new post
app.post("/", (req, res) => {
    const data = fs.readFileSync("./posts.json", "utf8")
    const json = JSON.parse(data)
    console.log(req.body)
    json.unshift(req.body)

    fs.writeFileSync("./posts.json", JSON.stringify(json, null, 4))

    res.json(req.body)
})

// Add new comment
app.post("/:id", (req, res) => {
    const data = fs.readFileSync("./posts.json", "utf8")
    const json = JSON.parse(data)

    const post = json.find(post => post.id === req.params.id)

    post.comments.unshift(req.body)

    fs.writeFileSync("./posts.json", JSON.stringify(json, null, 4))

    res.json(post)
})

app.listen(2903)