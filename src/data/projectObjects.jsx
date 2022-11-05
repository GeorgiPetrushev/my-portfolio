import { nanoid } from "nanoid";
import imgNote from "../pictures/take-notes.jpg";
import imgForm from "../pictures/form.jpg";
import imgBudgetTracker from "../pictures/budget-tracker.jpg";
import imgLogin from "../pictures/login.jpg";
import imgMovieWatchlist from "../pictures/movie-watchlist.jpg";
import imgOldPortfolio from "../pictures/old-portfolio.jpg";
import imgFirebaseStore from "../pictures/firebaseStore.jpg";
import imgGoogleFirebase from "../pictures/google-firebase.jpg";
import imgWeatherApp from "../pictures/weather-app.jpg";
import imgGameCatalog from "../pictures/game-catalog.jpg";
import imtTweeter from "../pictures/tweeter.jpg";

export const projectsArr = [
  {
    tittle: "Game World",
    key: nanoid(),
    description:
      "Gaming Catalog. You can search for any kind of game using 'rawg.io' API.When you start the website waiting the get the data from the API and then load  it on the page. Technology using to bill this project : React, Redux 8+, React Router v6 , Axios, React icons, Styled Component,Framer Motion ",
    img: imgGameCatalog,
    technology: ["javascript", "html", "sass"],
    buttonGitHub: "https://github.com/GeorgiPetrushev/game-catalog-redux",
    buttonPage: "https://GeorgiPetrushev.github.io/game-catalog-redux",
  },

  {
    tittle: "Mini Tweeter",
    key: nanoid(),
    description:
      "After Log in with you google account you can add and like tweets.Technology using to bill this project : React, TypeScript, Redux 8+, React Router v6 , Styled Component ",
    img: imtTweeter,
    technology: ["javascript", "html", "sass"],
    buttonGitHub:
      "https://github.com/GeorgiPetrushev/typescript-firebase-user-login-app",
    buttonPage: "https://GeorgiPetrushev.github.io/typescript-firebase-user-login-app",
  },

  {
    tittle: "Create Your Movie WatchList",
    key: nanoid(),
    description:
      "This website give you a option to create your own movie list and keep a tracking of the movie you watched or trying to watch. Take data from API and save it in your local store. have a option to add search add ot delete movie form watchlist section or watched section.Mobile friendly",
    img: imgMovieWatchlist,
    technology: ["javascript", "html", "sass"],
    buttonGitHub: "https://github.com/GeorgiPetrushev/watchlist-movie-tracher",
    buttonPage: "https://GeorgiPetrushev.github.io/watchlist-movie-tracher",
  },

  {
    tittle: " Sing in with Google or register manual ",
    key: nanoid(),
    description:
      "Web side with option to Sing in with google or manual registration.Store all data on firebase.Checking for errors if something is incorrect.Not allow  access to dashboard if you are not sing in.",
    img: imgGoogleFirebase,
    technology: ["javascript", "html", "sass"],
    buttonGitHub: "https://github.com/GeorgiPetrushev/firebase-login-google",
    buttonPage: "https://GeorgiPetrushev.github.io/firebase-login-google",
  },

  {
    tittle: "Budget Tracker",
    key: nanoid(),
    description:
      "Tracker helping you to follow your expenses. Have option to set the budget , add or remove expenses ,search for exist expense ,sum the total of your expenses and showing the remaining budget. If you cross the limit of the budget the remaining indicator will go red. Mobile friendly.",
    img: imgBudgetTracker,
    technology: ["javascript", "html", "sass", "react"],
    buttonGitHub: "https://github.com/GeorgiPetrushev/budget-tracker",
    buttonPage: "https://GeorgiPetrushev.github.io/budget-tracker",
  },

  {
    tittle: "Take Notes",
    key: nanoid(),
    description:
      "Website for taking notes. Be abel to add, delete or search for a note. Automatically generate date time base of your local time.Option for dark mode.Save the change you make in your local sore .Mobile friendly ",
    img: imgNote,
    alt: "Note Webpage",
    technology: ["javascript", "html", "sass", "react"],
    buttonGitHub: "https://github.com/GeorgiPetrushev/take-notes-app",
    buttonPage: "https://georgipetrushev.github.io/take-notes-app/",
  },

  {
    tittle: "Using firebase to store data",
    key: nanoid(),
    description: "Storing data with firebase",
    img: imgFirebaseStore,
    technology: ["javascript", "html", "sass"],
    buttonGitHub:
      "https://github.com/GeorgiPetrushev/firebase-project-save-data",
    buttonPage: "https://GeorgiPetrushev.github.io/firebase-project-save-data",
  },

  {
    tittle: "Form",
    key: nanoid(),
    description:
      "Basic From using react logic.On submit making sure all the requirement forms are fill up.",
    img: imgForm,
    technology: ["javascript", "html", "sass"],
    buttonGitHub: "https://github.com/GeorgiPetrushev/react-basic-forms",
    buttonPage: "https://georgipetrushev.github.io/react-basic-forms/",
  },
  {
    tittle: "Login",
    key: nanoid(),
    description:
      "Basic Login from. To be able to login successfully you need to use email: admin@gmail.com with password: admin. After successful login you get a Welcome massage whit option to log out. ",
    img: imgLogin,
    technology: ["javascript", "html", "sass", "react"],
    buttonGitHub: "https://github.com/GeorgiPetrushev/log-in",
    buttonPage: "https://georgipetrushev.github.io/log-in",
  },
  {
    tittle: "Old portfolio",
    key: nanoid(),
    description:
      "You can see some of my beginning projects using HTML ,CSS, JavaScript, Bootstrap,Fetch API , Jquery , Jquery plugins and Chart.js. Mobile friendly.",
    img: imgOldPortfolio,
    technology: ["javascript", "html", "sass"],
    buttonGitHub: "https://github.com/GeorgiPetrushev/portfolio-master",
    buttonPage: "https://georgipetrushev.github.io/portfolio-master/",
  },

  {
    tittle: "Weather app",
    key: nanoid(),
    description:
      "Fetch api with axios. Using weather api. Searching fot weather by City location.",
    img: imgWeatherApp,
    technology: ["javascript", "html", "sass"],
    buttonGitHub: "https://github.com/GeorgiPetrushev/weather-check",
    buttonPage: "https://georgipetrushev.github.io/weather-check/",
  },
];
