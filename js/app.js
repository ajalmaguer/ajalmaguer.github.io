(function () {
  angular
    .module('portfolio', [])
    .controller('MainController', MainController)

  function MainController() {
    var vm = this
    vm.projects = [
      {
        imageUrl: "img/iwannaroomie.png",
        name: "I Wanna Roommate",
        description: "This airbnb clone was created to be a portal for students to find roommates within their cohort. It was built using the MEAN (MongoDB, Express, Angular, and Node) Stack. This project uses Angular 1.5's newest Componenents and Component Router features. It also uses Socket.io to power real-time chat between users.",
        keywords: [
          {keyword: "Angular", icon: "devicon-angularjs-plain colored"},
          {keyword: "MongoDB", icon: "devicon-mongodb-plain colored"},
          {keyword: "Express", icon: ""},
          {keyword: "Node", icon: "devicon-nodejs-plain colored"},
          {keyword: "Web Sockets", icon: "fa fa-bolt"},
          {keyword: "Javascript", icon: "devicon-javascript-plain"},
          {keyword: "Materialize", icon: ""}
        ],
        liveUrl: "http://iwannaroomie.herokuapp.com/",
        repoUrl: "https://github.com/ajalmaguer/student-portal"
      },
      {
        imageUrl: "img/snapthis.png",
        name: "Snap This",
        description: "A mobile-first multiplayer scavenger hunt game built on the MEN (Mongo, Express, Node) Stack and with Web Sockets (Socket.io). Thanks to Brigette, Marcos and Victor, who worked on this project with me.",
        keywords: [
          {keyword: "MongoDB", icon: "devicon-mongodb-plain colored"},
          {keyword: "Express", icon: ""},
          {keyword: "Node", icon: "devicon-nodejs-plain colored"},
          {keyword: "Web Sockets", icon: "fa fa-bolt"},
          {keyword: "Javascript", icon: "devicon-javascript-plain"},
          {keyword: "Materialize", icon: ""}
        ],
        liveUrl: "https://snap-this.herokuapp.com/",
        repoUrl: "https://github.com/bmorando/Project-3"
      },
      {
        imageUrl: "img/foodtours.png",
        name: "Food Tours",
        description: "This is my first Ruby on Rails project. I made it for the 2nd project of the Web Development Immersive class that I took from General Assembly. I'm part of the Downtown LA 9 cohort. \n The goal of Food Tours was to answer the question, 'What should I eat when I travel to ____?' I've been asked this question many times from friends who travel to Chicago or the Bay Area, both places I've lived before. While yelp is great at giving all the information you need, there's still a need for a curated list of restuaruants AND what to order at those restaurants. Users upload 'food landmarks' which are supposed to be specific dishes at a certain restaurant. Users can then organize landmarks into their own 'tours,' which display a list of the landmarks on that tour as well as a google map of where the landmarks are located. Special thanks to Pinterest for inspiring the user experience design and my friends for inspiring my love of good food. :)",
        keywords: [
          {keyword: "Ruby on Rails", icon: "devicon-rails-plain colored"},
          {keyword: "PostgreSQL", icon: "devicon-postgresql-plain colored"},
          {keyword: "Google Maps API", icon: "fa fa-map-marker"},
          {keyword: "Javascript", icon: "devicon-javascript-plain"},
          {keyword: "JQuery", icon: "devicon-jquery-plain colored"},
          {keyword: "Bootstrap", icon: "devicon-bootstrap-plain colored"}
        ],
        liveUrl: "https://foodtours.herokuapp.com/",
        repoUrl: "https://github.com/ajalmaguer/foodtours/"
      },
      {
        imageUrl: "img/wheel.png",
        name: "Wheel of Fortune",
        description: "2 Player Wheel of Fortune Game with 3 rounds.",
        keywords: [
          {keyword: "Javascript", icon: "devicon-javascript-plain"},
          {keyword: "JQuery", icon: "devicon-jquery-plain colored"},
          {keyword: "HTML5", icon: "devicon-html5-plain colored"},
          {keyword: "CSS3", icon: "devicon-css3-plain colored"}
        ],
        liveUrl: "http://ajalmaguer.github.io/wheel-of-fortune",
        repoUrl: "https://github.com/ajalmaguer/wheel-of-fortune"

      },
      {
        imageUrl: "img/purple_rain.png",
        name: "Purple Rain Game",
        description: "Mobile game made during a 8-hour hackathon at General Assembly, Downtown LA. Move the bucket by tilting your phone to catch as many raindrops as you can. This project was the winner of the hackathon.",
        keywords: [
          {keyword: "Javascript", icon: "devicon-javascript-plain"},
          {keyword: "HTML5", icon: "devicon-html5-plain colored"},
          {keyword: "CSS3", icon: "devicon-css3-plain colored"}
        ],
        liveUrl: "http://ajalmaguer.github.io/wheel-of-fortune",
        repoUrl: "https://github.com/ajalmaguer/aj-hackathon"

      }
    ]
  }














})()
