Vue.component('front', {
  template: `
  <div style="margin-top: 60px;" class="skills-icons">
    <i class="fab fa-html5 html"></i>
    <i class="fab fa-css3-alt css"></i>
    <i class="fab fa-js-square js"></i>
    <i class="fab fa-vuejs vue"></i>
  </div>
  `
})
Vue.component('back', {
  template: `
  <div class="skills-icons">
    <i style="font-size: 4em; color: green;" class="fab fa-node-js node"></i>
    <img src="./assets/mongodb.svg" height="80px" width="80px" alt="">
    <img class="firebase" src="./assets/firebase.svg" height="130px" width="140px" alt="">
    <img src="./assets/expressjs-ar21.svg" height="50px" width="100px" alt="">
  </div>
  `
})
Vue.component('cloud', {
  template: `
  <div class="skills-icons">
    <img src="./assets/Netlify-Logo.wine.svg" class="netlify" height="160px" width="200px" alt="">
    <img class="heroku" src="./assets/heroku.svg" height="60px" width="50px" alt="">
    <i style="font-size: 3.8em; color: orange;" class="fab fa-aws aws"></i>
    <span style="font-size: 1.5em;">ZEIT</span>
  </div>
  `
})

// Projects Cards
Vue.component('landingPage', {
  template: `
  <div class="cards">
    <div class="card landing-card">
        <p><a href="https://hacker-news-clone.saihtun.now.sh/#/news" target="_blank">🌍 Hacker News Clone</a></p>
        <p>🥋 Vue, Vuex, Vue-router,Vercel(Zeit.co)</p>
        <p>🍺Project: DONE
          #Responsive: NO
        </p>
        <p><a href="https://api.hackernews.io" target="_blank">⛳️ hacker news API </a></p>
        <p><a href="https://github.com/SaiHtun/hacker-news-clone" target="_blank"><i class="fab fa-github-square fa-lg"></i></a></p>
    </div>
    <div class="card landing-card">
        <p><a href="https://ms-landing.saihtun.now.sh" target="_blank">🌍 Microsoft Landing Page</a></p>
        <p>🥋 html, css, Vercel(Zeit.co)</p>
        <p>🍺Project: DONE
          #Responsive: NO
        </p>
        <p><a href="https://github.com/SaiHtun/ms-landingPage/tree/master" target="_blank"><i class="fab fa-github-square fa-lg"></i></a></p>       
    </div>
    <div class="card landing-card">
              
    </div>
  </div>
  `
})
Vue.component('fullStacks', {
  template: `
  <div class="cards">
    <div class="card fullstacks-card">
              
    </div>
    <div class="card fullstacks-card">
              
    </div>
    <div class="card fullstacks-card">
              
    </div>
  </div>
  `
})
Vue.component('challenges', {
  template: `
  <div class="cards">
    <div class="card challenges-card">
        <p><a href="https://sai-quizz-app.now.sh/" target="_blank">🌍 Quizz-App</a></p>
        <p>🥋 html, css, js, Vue Vercel(Zeit.co)</p>
        <p>🍺Project: DONE
        </p>
        <p><a href="https://github.com/SaiHtun/quizz-app" target="_blank"><i class="fab fa-github-square fa-lg"></i></a></p>   
    </div>
    <div class="card challenges-card">
        <p><a href="https://sai-reddit-clone.now.sh/" target="_blank">🌍 Reddit-Clone</a></p>
        <p>🥋 html, css, js, bootswatch, Vue Vercel(Zeit.co)</p>
        <p>🍺Project: DONE</p>
        <p><a href="https://www.reddit.com/r/funny/.json" target="_blank">⛳️ Reddit API </a></p>
        <p><a href="https://github.com/SaiHtun/reddit-clone" target="_blank"><i class="fab fa-github-square fa-lg"></i></a></p>    
    </div>
    <div class="card challenges-card">
        <p><a href="https://sai-basic-signin-form.now.sh/" target="_blank">🌍 Basic SignIn Form</a></p>
        <p>🥋 html, css, js, Vercel(Zeit.co)</p>
        <p>🍺Project: DONE
        </p>
        <p><a href="https://github.com/SaiHtun/signIn" target="_blank"><i class="fab fa-github-square fa-lg"></i></a></p>     
    </div>
  </div>
  `
})
// firebase
var firebaseConfig = {
  apiKey: "AIzaSyCjnmTuXORB5yKmd0T5443Qic4RxVcvD5k",
  authDomain: "myportfolio-37fcd.firebaseapp.com",
  databaseURL: "https://myportfolio-37fcd.firebaseio.com",
  projectId: "myportfolio-37fcd",
  storageBucket: "myportfolio-37fcd.appspot.com",
  messagingSenderId: "888676118807",
  appId: "1:888676118807:web:47d467099d210de7bc4752"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();



const app = new Vue({
  el: '#app',
  data: {
    selectedComponent: "front",
    selectedProjectComponent: "landingPage",
    show: false,
    openNavigator: false,
    moveCV: false,
    feedback: {
      name: '',
      rating: '',
      message: ''
    },
    feeds: [],
  },
  methods: {
    submit() {
      this.show = false;
      db.collection("feedbacks").add({
        name: this.feedback.name,
        rating: this.feedback.rating,
        message: this.feedback.message,
        created_at: new Date(),
      })
    },
    getData() {
      db.collection('feedbacks').orderBy("created_at").onSnapshot((querySnapshot) => {
        let array = [];
        querySnapshot.forEach((doc) => {
             array.push(doc.data());
        });
        this.feeds = array.reverse();
        
    })
     
    }
  },
  mounted() {
    this.getData();
  }
  
})

// slider
$('.slider').slick({
  dots: true,
  centerMode: true,
  centerPadding: '30px',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
});

const scroll = new SmoothScroll('.nav-list a[href*="#"]', {
  speed: 600
})

// about text animation
function scrollAppear() {
  
  let infoText = document.querySelector(".about-wrapper");
  let introPosition = infoText.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1;

  if (introPosition < screenPosition) {
    infoText.classList.add("about-move");
  }
}

window.addEventListener("scroll", scrollAppear);

//  kitty
const array = ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat'];

let count = 0;

setInterval(() => {
  document.querySelector('#brand').setAttribute('class', `${array[count]}`);
  if(count > array.length) {
    count = 0
  } else {
    count++
  }
 
  
}, 2000);