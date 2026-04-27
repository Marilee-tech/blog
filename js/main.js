//         // =========================
//         // 🏠 PAGE ACCUEIL (cards)
//         // =========================


async function chargerArticles() {
    try {
        const response = await fetch("./data/articles.json")
        if (!response.ok) {
            throw new Error("Error: " + response.status)
        }

        const articles = await response.json()
        const container = document.getElementById("articles-container")

        articles.forEach((article) => {
            const card = document.createElement("div")
            card.classList.add("article")

            const titre = document.createElement("h3")
            titre.textContent = article.title

            const resume = document.createElement("p")
            resume.textContent = article.summary

            const auteur = document.createElement("p")
            auteur.textContent = "Auteur : " + article.author

            const tempsDeLecture = document.createElement("p")
            tempsDeLecture.textContent = "Temps de lecture : " + article.readingTime

            const dateDeCreation = document.createElement("p")
            dateDeCreation.textContent = "Date de création : " + article.createdAt

            const categorie = document.createElement("p")
            categorie.textContent = "Catégorie : " + article.category

            const bouton = document.createElement("button")
            bouton.textContent = "Lire l'article"
            bouton.onclick = function () {
                console.log(article.slug)


                window.location.href = "./blog-etudiant/articles.html?slug=" + article.slug

            }




            card.appendChild(titre)
            card.appendChild(resume)
            card.appendChild(auteur)
            card.appendChild(tempsDeLecture)
            card.appendChild(dateDeCreation)
            card.appendChild(categorie)
            card.appendChild(bouton)

            container.appendChild(card)

        })

    } catch (error) {
        console.log("Erreur: ", error)
    }
}




//         // =========================
//         // 📄 PAGE ARTICLE (détail)
//         // =========================

async function chargerArticle() {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get("slug");


    console.log("Slug récupéré : ", slug)

    try {
        const response = await fetch("../data/articles.json")

        if (!response.ok) {
            throw new Error("Erreur : " + response.status)
        }

        const articles = await response.json()
        console.log("Articles chargés : ", articles)
        const article = articles.find(a => a.slug === slug)
        console.log("Article trouvé : ", article)

        const container = document.getElementById("article-container")

        // Création des éléments 
        let card = document.createElement("div")
        card.classList.add("article")


        let titre = document.createElement("h1")
        titre.textContent = article.title

        let content = document.createElement("p")
        content.textContent = article.content

        let categorie = document.createElement("p")
        categorie.textContent = "Catégorie : " + article.category

        let dateDeCreation = document.createElement("p")
        dateDeCreation.textContent = "Date : " + article.createdAt

        let tempsDeLecture = document.createElement("p")
        tempsDeLecture.textContent = "Temps de lecture : " + article.readingTime

        let author = document.createElement("p")
        author.textContent = "Auteur : " + article.author

        let boutonRetour = document.createElement("button")
        boutonRetour.textContent = "← Retour à l'accueil"

        boutonRetour.addEventListener("click", () => {
            window.location.href = "../index.html"
        })






        // Ajout des éléments à la carte
        card.appendChild(titre)
        card.appendChild(content)
        card.appendChild(categorie)
        card.appendChild(dateDeCreation)
        card.appendChild(tempsDeLecture)
        card.appendChild(author)
        card.appendChild(boutonRetour)

        // Ajout de la carte au conteneur
        container.appendChild(card)

    } catch (error) {
        console.error("Erreur lors du chargement de l'article :", error)
    }
}


if (document.getElementById("articles-container")) {
    chargerArticles();
}

if (document.getElementById("article-container")) {
    chargerArticle();
}

const burgerMenu = document.getElementById("burger-menu");
const navCacher = document.getElementById("nav-cacher");

burgerMenu.addEventListener("click", () => {
    navCacher.classList.toggle("active");
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 785) {
        navCacher.classList.remove("active");
    }
});