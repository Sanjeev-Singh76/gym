const express = require("express")
const hbs = require("hbs")

const app = express()
const path = require("path")

app.use(express.static(path.join(__dirname,"views/public")))
app.set('view engine','hbs')
hbs.registerPartials(path.join(__dirname,"views/partials"))
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/contact", (req, res) => {
    res.render("contact",{show:false})
})

app.get("/skills", (req, res) => {
    res.render("skills")
})
app.listen(8000, console.log("Server is Running at http://localhost:8000"))