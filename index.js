const express = require("express")
const app = express()
const articleRoutes = require("./routes/article")
const mongoose = require("mongoose")
const Article = require("./models/article")
const cors = require("cors")


mongoose.connect("mongodb+srv://smartbase:4VE5ZfTRPyaQHJux@smartbase.yvauzfh.mongodb.net/smartbase")


mongoose.connection.on("connected", () => {
    console.log("Mongodb ")
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get("/news", async(req, res) => {
    const posts = await Article.find()
    // res.status(200)
	res.end(JSON.stringify(posts))
})

app.get("/article/:id", async(req, res) => {
    await Article.findById(req.params.id).then((result) => {
        res.status(200).send(result)
    }).catch((err) => {
        res.send(err)
    })
})

app.get("/article/:id", async(req, res) => {
    await Post.findById(req.params.id).then((result) => {
        res.status(200).send(result)
    }).catch((err) => {
        res.send(err)
    })
})

app.listen(5001, () => {
    console.log("Server has been started on 5001 port")
})