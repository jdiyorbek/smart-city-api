const { Router } = require("express")
const router = Router()
const Article = require("../models/article")

router.get("/:id", async(req, res) => {
    await Article.findById(req.params.id).then((result) => {
        res.status(200).send(result)
    }).catch((err) => {
        res.send(err)
    })
})

module.exports = router