

console.log("loading");
const App = {
    data() {
        return {

            courses: [{
                id: "lco1",
                heading: "Django",
                subHeading: "A python web dev framework",
                btnTxt: "Explore Django",
                imgSrc: "./django.png",
                btnLink: "https://www.google.com/django"
            },
            {
                id: "lco2",
                heading: "interview",
                subHeading: "Interview Preparation kit",
                btnTxt: "Explore Course",
                imgSrc: "./interview.png",
                btnLink: "https://www.google.com/interview"
            },
            {
                id: "lco3",
                heading: "React Native",
                subHeading: "Js tool to develop web apps",
                btnTxt: "Explore React Native",
                imgSrc: "./rn.png",
                btnLink: "https://www.google.com/react+native"
            }
            ]
        }
    }
}

Vue.createApp(App).mount("#app")