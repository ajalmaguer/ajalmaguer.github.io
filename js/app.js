(function () {
  angular
    .module('portfolio', [])
    .controller('MainController', MainController)

  function MainController() {
    var vm = this
    vm.projects = [
      {
        imageUrl: "img/tbd.png",
        name: "Snap Clock",
        description: "A mobile-first multiplayer scavenger hunt game built on the MEN (Mongo, Express, Node) Stack and with Web Sockets (Socket.io).",
        keywords: [
          {keyword: "MongoDB", icon: "devicon-mongodb-plain colored"},
          {keyword: "Express", icon: ""},
          {keyword: "Node", icon: "devicon-nodejs-plain colored"},
          {keyword: "Web Sockets", icon: "fa fa-bolt"},
          {keyword: "Javascript", icon: "devicon-javascript-plain"},
          {keyword: "Materialize", icon: ""}
        ],
        liveUrl: "https://foodtours.herokuapp.com/",
        repoUrl: "https://github.com/ajalmaguer/foodtours/"
      },
      {
        imageUrl: "img/foodtours.png",
        name: "Food Tours",
        description: "Blah blah blah.",
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
