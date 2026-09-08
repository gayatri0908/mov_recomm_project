/* ===================================
   MOVIE DATA
=================================== */

const movies = [

    /* ===== HINDI MOVIES ===== */

    {
        title: "3 Idiots",
        language: "Hindi",
        year: 2009,
        genre: "Comedy, Drama",
        rating: 8.4,
        recommended: true,
        poster: "https://m.media-amazon.com/images/I/61NSZeiNF3L._AC_UF894,1000_QL80_.jpg",
        description: "A story about friendship, education and following your dreams.",
        review: "An entertaining and emotional movie with an inspiring message."
    },

    {
        title: "Dangal",
        language: "Hindi",
        year: 2016,
        genre: "Sports, Drama",
        rating: 8.3,
        recommended: true,
        poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        description: "A father trains his daughters to become successful wrestlers.",
        review: "Powerful performances and an inspiring sports story."
    },

    {
        title: "Sholay",
        language: "Hindi",
        year: 1975,
        genre: "Action, Drama",
        rating: 8.2,
        recommended: true,
        poster: "https://cdn.posteritati.com/posters/000/000/021/279/sholay-md-web.jpg",
        description: "A classic story of friendship and revenge.",
        review: "One of the most famous movies in Indian cinema."
    },

    {
        title: "PK",
        language: "Hindi",
        year: 2014,
        genre: "Comedy, Drama",
        rating: 8.1,
        recommended: true,
        poster: "https://m.media-amazon.com/images/I/71MMrouZF0L._AC_UF894,1000_QL80_.jpg",
        description: "An alien explores human beliefs and traditions.",
        review: "Funny, emotional and thought-provoking."
    },

    {
        title: "Chhichhore",
        language: "Hindi",
        year: 2019,
        genre: "Comedy, Drama",
        rating: 8.3,
        recommended: false,
        poster: "https://m.media-amazon.com/images/M/MV5BODgwYWE2MGEtYTMwYi00NTg5LWEzOWYtNTFiZDc4NWMzODcyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "A story about college friendship and never giving up.",
        review: "A heartwarming movie with an important message."
    },

    {
        title: "War",
        language: "Hindi",
        year: 2019,
        genre: "Action, Thriller",
        rating: 7.5,
        recommended: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8wLdrSWDPNgU8PLelXHCxFj3stk4TZ4unZI9lQVLawIF7o_Rt4sRkocq&s=10",
        description: "An action-packed story about spies and secrets.",
        review: "Great action scenes and entertainment."
    },

    {
        title: "Pathaan",
        language: "Hindi",
        year: 2023,
        genre: "Action, Thriller",
        rating: 7.4,
        recommended: true,
        poster: "https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        description: "A spy returns to protect the country from danger.",
        review: "High-energy action and exciting moments."
    },

    {
        title: "Jawan",
        language: "Hindi",
        year: 2023,
        genre: "Action, Drama",
        rating: 7.6,
        recommended: true,
        poster: "https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        description: "An action story about justice and social responsibility.",
        review: "Mass entertainment with strong action scenes."
    },

    {
        title: "Gully Boy",
        language: "Hindi",
        year: 2019,
        genre: "Music, Drama",
        rating: 8.0,
        recommended: false,
        poster: "https://m.media-amazon.com/images/M/MV5BOWFkY2M3NDctZGEzMS00M2VmLTgzMTAtZWFiNjVmZDc5NWFjXkEyXkFqcGc@._V1_.jpg",
        description: "A young man follows his dream of becoming a rapper.",
        review: "Inspiring music and excellent performances."
    },

    {
        title: "Bajrangi Bhaijaan",
        language: "Hindi",
        year: 2015,
        genre: "Drama, Adventure",
        rating: 8.1,
        recommended: true,
        poster: "https://m.media-amazon.com/images/M/MV5BYzVjMjZiNGUtZjZiNy00Yzg4LWEzYzYtMmI1NDg5NWNiNjUwXkEyXkFqcGc@._V1_.jpg",
        description: "A man helps a lost child return home.",
        review: "Emotional and heartwarming family entertainment."
    },


    /* ===== MARATHI MOVIES ===== */

    {
        title: "Sairat",
        language: "Marathi",
        year: 2016,
        genre: "Romance, Drama",
        rating: 8.3,
        recommended: true,
        poster: "https://m.media-amazon.com/images/M/MV5BNTJmZWM3NWItMWE0MS00NjI1LWI3YjAtM2EzNmY5YmNiYzNjXkEyXkFqcGc@._V1_.jpg",
        description: "A powerful love story that faces social challenges.",
        review: "A beautiful and emotional Marathi classic."
    },

    {
        title: "Natsamrat",
        language: "Marathi",
        year: 2016,
        genre: "Drama",
        rating: 8.8,
        recommended: true,
        poster: "https://www.impawards.com/intl/india/2016/posters/natsamrat_ver21.jpg",
        description: "The emotional journey of a retired theatre actor.",
        review: "Outstanding acting and powerful storytelling."
    },

    {
        title: "Katyar Kaljat Ghusali",
        language: "Marathi",
        year: 2015,
        genre: "Musical, Drama",
        rating: 8.5,
        recommended: true,
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Katyar_Kaljat_Ghusali_%28film%29.jpg/250px-Katyar_Kaljat_Ghusali_%28film%29.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        description: "A musical journey filled with talent and rivalry.",
        review: "Beautiful music and memorable performances."
    },

    {
        title: "Timepass",
        language: "Marathi",
        year: 2014,
        genre: "Romance, Comedy",
        rating: 7.5,
        recommended: false,
        poster: "https://upload.wikimedia.org/wikipedia/en/9/92/Timepass_%28film%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        description: "A fun and emotional teenage love story.",
        review: "Simple, entertaining and popular."
    },

    {
        title: "Fandry",
        language: "Marathi",
        year: 2013,
        genre: "Drama",
        rating: 8.3,
        recommended: true,
        poster: "https://m.media-amazon.com/images/M/MV5BMjM5MDYwNDIzNF5BMl5BanBnXkFtZTgwMjc3MjQ2NDE@._V1_.jpg",
        description: "A young boy struggles with love and social inequality.",
        review: "Realistic and emotionally powerful."
    },

    {
        title: "Court",
        language: "Marathi",
        year: 2014,
        genre: "Drama",
        rating: 7.8,
        recommended: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6aBOBa8S4SU2fncN2c2A3fPPzLxi5s_xMWy_gO17A-7IajH9wq8lOrw&s=10",
        description: "A courtroom story exploring society and justice.",
        review: "Realistic storytelling with strong social themes."
    },

    {
        title: "Ventilator",
        language: "Marathi",
        year: 2016,
        genre: "Family, Drama",
        rating: 7.9,
        recommended: true,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHteU5eYyboQHrrY09KCEqbvrR9tYCh7p2CgJW6yNKFoLbqB7DVADNESE&s=10",
        description: "A family comes together during a difficult time.",
        review: "Emotional and meaningful family drama."
    },

    {
        title: "Mulshi Pattern",
        language: "Marathi",
        year: 2018,
        genre: "Crime, Drama",
        rating: 8.0,
        recommended: false,
        poster: "https://www.cinematerial.com/p/297x/ahceqj2i/mulshi-pattern-indian-movie-poster-md.jpg?v=1585214484",
        description: "A story about social change and crime.",
        review: "Powerful and intense storytelling."
    },

    {
        title: "Mumbai Pune Mumbai",
        language: "Marathi",
        year: 2010,
        genre: "Romance, Comedy",
        rating: 7.7,
        recommended: false,
        poster: "https://m.media-amazon.com/images/M/MV5BNjljOGQ2M2UtNGEwMy00MmUxLWI3NjItZDBjMWUxYmU2ZTM0XkEyXkFqcGc@._V1_.jpg",
        description: "A charming romantic story between two strangers.",
        review: "Fun, simple and enjoyable romance."
    },

    {
        title: "Deool",
        language: "Marathi",
        year: 2011,
        genre: "Comedy, Drama",
        rating: 8.0,
        recommended: false,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMH0W_ukxJjo4431t2kJixp5J6zy9_dFqkGLxpf9DqkA&s=10",
        description: "A village experiences unexpected changes.",
        review: "A smart and entertaining social drama."
    },


    /* ===== ENGLISH MOVIES ===== */

    {
        title: "Inception",
        language: "English",
        year: 2010,
        genre: "Sci-Fi, Action",
        rating: 8.8,
        recommended: true,
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScrCn5UB01cDzHX77JWsD6GETIpd1Aw81i7TPV8AKC2g&s=10",
        description: "A thief enters dreams to steal secrets.",
        review: "Mind-blowing concept and amazing visuals."
    },

    {
        title: "Interstellar",
        language: "English",
        year: 2014,
        genre: "Sci-Fi, Drama",
        rating: 8.7,
        recommended: true,
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        description: "Explorers travel through space to save humanity.",
        review: "Beautiful visuals and emotional storytelling."
    },

    {
        title: "Avatar",
        language: "English",
        year: 2009,
        genre: "Sci-Fi, Adventure",
        rating: 7.9,
        recommended: true,
        poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
        description: "A soldier enters the world of Pandora.",
        review: "Amazing visuals and a beautiful fantasy world."
    },

    {
        title: "Titanic",
        language: "English",
        year: 1997,
        genre: "Romance, Drama",
        rating: 7.9,
        recommended: true,
        poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        description: "A romantic story set aboard the Titanic.",
        review: "A timeless and emotional love story."
    },

    {
        title: "The Dark Knight",
        language: "English",
        year: 2008,
        genre: "Action, Crime",
        rating: 9.0,
        recommended: true,
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description: "Batman faces one of his greatest enemies.",
        review: "One of the best superhero movies ever made."
    },

    {
        title: "Avengers: Endgame",
        language: "English",
        year: 2019,
        genre: "Action, Superhero",
        rating: 8.4,
        recommended: true,
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        description: "Heroes unite for an epic final battle.",
        review: "Emotional, exciting and unforgettable."
    },

    {
        title: "Joker",
        language: "English",
        year: 2019,
        genre: "Drama, Thriller",
        rating: 8.4,
        recommended: false,
        poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        description: "The dark journey of a struggling comedian.",
        review: "A powerful performance and intense story."
    },

    {
        title: "The Matrix",
        language: "English",
        year: 1999,
        genre: "Sci-Fi, Action",
        rating: 8.7,
        recommended: false,
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        description: "A hacker discovers the truth about reality.",
        review: "Revolutionary action and science fiction."
    },

    {
        title: "Forrest Gump",
        language: "English",
        year: 1994,
        genre: "Drama, Romance",
        rating: 8.8,
        recommended: true,
        poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        description: "The extraordinary life of a simple man.",
        review: "Heartwarming, emotional and inspiring."
    },

    {
        title: "The Lion King",
        language: "English",
        year: 1994,
        genre: "Animation, Adventure",
        rating: 8.5,
        recommended: false,
        poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
        description: "A young lion learns to become king.",
        review: "A classic story with unforgettable music."
    }

];


/* ===================================
   ADD MORE MOVIES TO MAKE TOTAL 50
=================================== */

const extraMovies = [

    "Rockstar",
    "Kabir Singh",
    "Zindagi Na Milegi Dobara",
    "Queen",
    "Barfi",

    "Harishchandrachi Factory",
    "Me Shivajiraje Bhosale Boltoy",
    "Duniyadari",
    "Elizabeth Ekadashi",
    "Naal",

    "Gladiator",
    "Fight Club",
    "The Prestige",
    "Spider-Man",
    "Iron Man",
    "Black Panther",
    "Doctor Strange",
    "Frozen",
    "Toy Story",
    "Coco"

];


extraMovies.forEach((name, index) => {

    let language;

    if (index < 5) {

        language = "Hindi";

    }

    else if (index < 10) {

        language = "Marathi";

    }

    else {

        language = "English";

    }


    movies.push({

        title: name,

        language: language,

        year: 2000 + index,

        genre: "Drama, Entertainment",

        rating: (7 + (index % 3) + 0.2),

        recommended: index % 2 === 0,

        poster:
            `https://images.unsplash.com/photo-${
                index % 2 === 0
                    ? "1489599849927-2ee91cede3ba"
                    : "1485846234645-a62644f84728"
            }?auto=format&fit=crop&w=500&q=80`,

        description:
            `Enjoy the exciting story of ${name}.`,

        review:
            "A popular and entertaining movie recommended for movie lovers."

    });

});


/* ===================================
   VARIABLES
=================================== */

let currentMovie = null;

let currentFilter = "All";


/* ===================================
   CREATE MOVIE CARD
=================================== */

function createMovieCard(movie) {

    return `

        <div
            class="movie-card"
            onclick="openMovie('${movie.title}')"
        >

            <img
                src="${movie.poster}"
                alt="${movie.title}"
                onerror="this.src='https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80'"
            >


            <div class="movie-info">

                <h3>
                    ${movie.title}
                </h3>


                <div class="movie-meta">

                    <span>
                        ${movie.year}
                    </span>


                    <span class="movie-rating">

                        ⭐ ${movie.rating}

                    </span>

                </div>


                <span class="language">

                    ${movie.language}

                </span>

            </div>

        </div>

    `;

}


/* ===================================
   RENDER ALL MOVIES
=================================== */

function renderMovies(movieList = movies) {

    const container =
        document.getElementById("moviesContainer");


    container.innerHTML =
        movieList
            .map(createMovieCard)
            .join("");

}


/* ===================================
   HOME POPULAR MOVIES
=================================== */

function renderPopularMovies() {

    const popular =
        movies
            .sort(
                (a, b) =>
                    b.rating - a.rating
            )
            .slice(0, 8);


    document.getElementById(
        "popularMovies"
    ).innerHTML =

        popular
            .map(createMovieCard)
            .join("");

}


/* ===================================
   RECOMMENDATIONS
=================================== */

function renderRecommendations() {

    const recommendedMovies =

        movies.filter(
            movie =>
                movie.recommended === true
        );


    document.getElementById(
        "recommendationContainer"
    ).innerHTML =

        recommendedMovies
            .map(createMovieCard)
            .join("");

}


/* ===================================
   FILTER MOVIES
=================================== */

function filterMovies(language, button) {

    currentFilter = language;


    document
        .querySelectorAll(".filter-btn")
        .forEach(btn =>

            btn.classList.remove(
                "active-filter"
            )

        );


    button.classList.add(
        "active-filter"
    );


    if (language === "All") {

        renderMovies(movies);

    }

    else {

        const filtered =

            movies.filter(

                movie =>
                    movie.language === language

            );


        renderMovies(filtered);

    }

}


/* ===================================
   SEARCH MOVIES
=================================== */

function searchMovies() {

    const searchValue =

        document
            .getElementById(
                "searchInput"
            )
            .value
            .toLowerCase();


    let filteredMovies =

        movies.filter(movie =>

            movie.title
                .toLowerCase()
                .includes(searchValue)

        );


    if (currentFilter !== "All") {

        filteredMovies =

            filteredMovies.filter(

                movie =>
                    movie.language ===
                    currentFilter

            );

    }


    renderMovies(filteredMovies);


    if (

        !document
            .getElementById("movies")
            .classList
            .contains("active-page")

    ) {

        showPage("movies");

    }

}


/* ===================================
   SHOW PAGE
=================================== */

function showPage(pageName) {

    document
        .querySelectorAll(".page")
        .forEach(page =>

            page.classList.remove(
                "active-page"
            )

        );


    document
        .getElementById(pageName)
        .classList.add(
            "active-page"
        );


    document
        .querySelectorAll(".nav-btn")
        .forEach(button =>

            button.classList.remove(
                "active-nav"
            )

        );


    const buttons =

        document.querySelectorAll(
            ".nav-btn"
        );


    if (pageName === "home") {

        buttons[0].classList.add(
            "active-nav"
        );

    }

    else if (pageName === "movies") {

        buttons[1].classList.add(
            "active-nav"
        );

    }

    else {

        buttons[2].classList.add(
            "active-nav"
        );

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* ===================================
   OPEN MOVIE DETAILS
=================================== */

function openMovie(title) {

    currentMovie =

        movies.find(

            movie =>
                movie.title === title

        );


    if (!currentMovie) return;


    document
        .getElementById("modalPoster")
        .src = currentMovie.poster;


    document
        .getElementById("modalTitle")
        .innerText = currentMovie.title;


    document
        .getElementById("modalLanguage")
        .innerText = currentMovie.language;


    document
        .getElementById("modalRating")
        .innerText =

            currentMovie.rating
            + " / 10";


    document
        .getElementById("modalYear")
        .innerText = currentMovie.year;


    document
        .getElementById("modalGenre")
        .innerText = currentMovie.genre;


    document
        .getElementById("modalDescription")
        .innerText =
            currentMovie.description;


    document
        .getElementById("modalReview")
        .innerText =
            currentMovie.review;


    document
        .getElementById("movieModal")
        .classList.add("show");

}


/* ===================================
   CLOSE MODAL
=================================== */

function closeModal() {

    document
        .getElementById("movieModal")
        .classList.remove("show");

}


/* ===================================
   FAVORITE
=================================== */

function addFavorite() {

    if (!currentMovie) return;


    alert(

        currentMovie.title +

        " ❤️ Added to your favorites!"

    );

}


/* ===================================
   CLOSE MODAL OUTSIDE CLICK
=================================== */

window.onclick = function(event) {

    const modal =

        document.getElementById(
            "movieModal"
        );


    if (event.target === modal) {

        closeModal();

    }

};


/* ===================================
   INITIALIZE WEBSITE
=================================== */

renderMovies();

renderPopularMovies();

renderRecommendations();


document
    .getElementById("movieCount")
    .innerText = movies.length;