class Movies {
  constructor(name, category, about, imgUrl) {
    this.name = name;
    this.category = category;
    this.about = about;
    this.imgUrl = imgUrl;
  }

  renderAll() {
    return `
        <div class="movie">
            <img src="${this.imgUrl}" alt="matrix">
            <h3 class="name">${this.name}</h3>
            
            <div class="details">
                <p class="category">${this.category}</p>
                <p>${this.about}</p>
            </div>
        </div>
    `;
  }
}

class movieLister {
  constructor() {
    this.movieArr = [];
    console.log(this.movieArr);
  }

  addMovie(movie) {
    this.movieArr.push(movie);
  }
}

const m1 = new Movies(
  "Matrix Reloaded",
  "Science-Fiction",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, officiis.",
  "images/matrix.jpg"
);
const m2 = new Movies(
  "Ayla",
  "Drama",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, officiis.",
  "images/ayla.jpg"
);
const m3 = new Movies(
  "Shutter Island",
  "Mystery",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, officiis.",
  "images/shutter-island.jpg"
);
const m4 = new Movies(
  "Fury",
  "Action",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, officiis.",
  "images/fury.jpg"
);

const moviesContainer = document.getElementById("moviesContainer");
const btnContainer = document.getElementById("buttonsContainer");
const lister = new movieLister();

lister.addMovie(m1);
lister.addMovie(m2);
lister.addMovie(m3);
lister.addMovie(m4);

const getcategories = () => {
  const categories = [
    "All",
    ...new Set(lister.movieArr.map((item) => item.category)),
  ];
  return categories;
};

const createButtons = () => {
  const categories = getcategories();

  const buttons = categories
    .map((category) => {
      return `<button class="btn-item"  data-category="${category}">${category}</button>`;
    })
    .join("");
  btnContainer.innerHTML = buttons;

  document.querySelectorAll(".btn-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;
      if (category == "All") {
        moviesContainer.innerHTML = "";
        lister.movieArr.map((movie) => {
          moviesContainer.innerHTML += movie.renderAll();
        });
      } else {
        moviesContainer.innerHTML = "";
        const filteredMovies = lister.movieArr.filter(
          (movie) => movie.category === category
        );
        filteredMovies.map((movie) => {
          moviesContainer.innerHTML += movie.renderAll();
        });
      }
    });
  });
};

window.addEventListener("DOMContentLoaded", () => {
  lister.movieArr.map((movie) => {
    moviesContainer.innerHTML += movie.renderAll();
  });

  createButtons();
});
