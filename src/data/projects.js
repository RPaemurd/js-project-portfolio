import Findmytrail from "../assets/projects/findmytrailmockup.png"
import WeatherApp from "../assets/projects/weathermockup.png"
import NftProductCard from "../assets/projects/NFTmockup.png"
import Recipe from "../assets/projects/recipemockup.png"
import ProductCard from "../assets/projects/productmockup.png"
import MovieProject from "../assets/projects/moviemockup.png"
import TodoApp from "../assets/projects/todomockup.png"
import HappyThoughts from "../assets/projects/happyphone.png"

export const projects = [

      {
        id: 1,
        img: TodoApp,
        title: "Project To Do",
        desc: "This is a React todo app built with Vite as the build tool and Zustand for state management. It uses styled-components for styling and Framer Motion for animations, creating an interactive task management application. The project follows modern React practices with ESLint for code quality.",
        tags: ["HTML", "CSS"],
        netlifyUrl: "https://todotechnigo.netlify.app/",
        githubUrl: "https://github.com/RPaemurd/js-project-todo" 
    },
    {
        id: 2,
        img: Findmytrail,
        title: "Find My Trail",
        desc: "This project is a static business website for Find My Trail, an outdoor adventure service focused on hiking and trails. Here Vanilla JavaScript is used for interactive features like a hamburger menu toggle for mobile navigation. ",
        tags: ["HTML", "CSS", "Javascript"],
        netlifyUrl: "https://findmytrail.netlify.app/",
        githubUrl: "https://github.com/RPaemurd/js-project-business-site" 
    },
     {
        id: 3,
        img: HappyThoughts,
        title: "Happy Thoughts Project",
        desc: "This is a Thoughts Sharing App built with React and React Router that lets users post short messages (thoughts) and interact with them. Users can submit new thoughts through a form, view a list of all thoughts sorted with the newest first, and like individual thoughts to increase their count. The app communicates with a backend API (Happy Thoughts API) to store and manage all thought data, using hooks for state management and a clean component structure for displaying the UI.",
        tags: ["HTML", "CSS"],
        netlifyUrl: "https://todotechnigo.netlify.app/",
        githubUrl: "https://github.com/RPaemurd/js-project-happy-thoughts" 
    },

      {
        id: 4,
        img: MovieProject,
        title: "Movie Project",
        desc: "This is a React movie application built with Vite that lets users browse and view detailed information about movies. It uses React Router for navigation between a home page listing movies and individual movie detail pages, and Styled Components for styling. The app fetches movie data through an API.",
        tags: ["React"],
        netlifyUrl: "https://app.netlify.com/projects/movieproject-technigo/overview",
        githubUrl: "https://github.com/RPaemurd/js-project-movies" 
    },

    {
        id: 5,
        img: Recipe,
        title: "Recipe Library",
        desc: "This project is a web-based recipe library application that leverages the Spoonacular API to fetch and display a collection of 30 random recipes, including details like ingredients, cooking times, dietary information, and instructions.",
        tags: ["HTML", "CSS", "Javascrip"],
        netlifyUrl: "https://recipe-assignment-technigo.netlify.app/",
        githubUrl: "https://github.com/RPaemurd/js-project-recipe-library" 
    },

    {
        id: 6,
        img: WeatherApp,
        title: "Weather API",
        desc: "This project is a simple and modern weather application that fetches real-time weather data from the SMHI API to display current conditions. The app uses TypeScript for type-safe and maintainable code.",
        tags: ["HTML", "CSS", "Typescript"],
        netlifyUrl: "https://weather-app-tscript.netlify.app/",
        githubUrl: "https://github.com/RPaemurd/js-project-weather-app" 
    },

    /*   {
        id: 7,
        img: NftProductCard,
        title: "NFT Product Card",
        tags: ["HTML", "CSS"],
        netlifyUrl: "https://npf-product-card.netlify.app/",
        githubUrl: "https://github.com/RPaemurd/NFT-product-card" 
    }, */

      /* {
        id: 8,
        img: StatsCard,
        title: "Stats Card",
        tags: ["HTML", "CSS"],
        netlifyUrl: "https://stats-preview-card-frm.netlify.app/",
        githubUrl: "https://github.com/RPaemurd/Stats-Preview-Card" 
    }, */

      /* {
        id: 9,
        img: Solaris,
        title: "Solaris",
        desc: "Web app built with...",
        tags: ["HTML", "CSS", "Javascript"],
        netlifyUrl: "https://solarisproject-fu.netlify.app/",
        githubUrl: "https://github.com/RPaemurd/Javascript---Solaris" 
    }, */

      {
        id: 8,
        img: ProductCard,
        title: "Product Preview Card",
        desc: "This project uses HTML and CSS to build a responsive product preview card component.",
        tags: ["HTML", "CSS"],
        netlifyUrl: "https://sage-kleicha-45ebdd.netlify.app/",
        githubUrl: "https://github.com/RPaemurd/Product-Preview-Card-fm" 
    },
]
