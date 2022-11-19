

console.log("loading");
const App = {
    data() {
        return {
            name: "Shubham",
            heading:"Japan",
            subHeading: "A beautiful country to live in!",
            btnTxt: "Explore Japan",
            imgSrc:"./japan.jpeg",
            btnLink:"https://web.learncodeonline.in"
        }
    }
}

Vue.createApp(App).mount("#app")