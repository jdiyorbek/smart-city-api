const { Router } = require("express")
const router = Router()
const Article = require("../models/article")

router.get("/news", async(req, res) => {
    const posts = await Article.find()
    res.status(200).send({ data: { posts } })
})

module.exports = router