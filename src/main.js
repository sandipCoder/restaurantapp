import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//default user
if (localStorage.Userdata === undefined) {
    let user = [{
        name : "Admin",
        email: "admin@gmail.com",
        password: "admin"
    }]
    localStorage.setItem('Userdata', JSON.stringify(user))
}


createApp(App).use(store).use(router).mount("#app");
