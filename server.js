const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

// Domovská stránka
app.get("/", (req, res) => {

    const title = "Moje první Node.js stránka";
    const message = "Vítej na mém webu!";

    res.render("index", {
        title: title,
        message: message
    });
});

// O nás
app.get("/o-nas", (req, res) => {

    res.render("about", {
        title: "O nás"
    });
});

// Kontakt - zobrazení formuláře
app.get("/kontakt", (req, res) => {

    res.render("contact", {
        title: "Kontakt"
    });
});

// Kontakt - zpracování formuláře
app.post("/kontakt", (req, res) => {

    console.log("Jméno:", req.body.name);
    console.log("E-mail:", req.body.email);
    console.log("Zpráva:", req.body.message);

    res.send("Formulář byl úspěšně odeslán.");
});

app.listen(PORT, () => {
    console.log(`🚀 Server běží na http://localhost:${PORT}`);
});