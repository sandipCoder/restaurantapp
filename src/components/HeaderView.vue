<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand fw-bold text-danger" href="#"> Resto </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" v-if="Auser.user">
                    <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                </li>
                <li class="nav-item" v-if="Auser.user">
                    <router-link class="nav-link" to="/addresto">addresto</router-link>
                </li>
            </ul>
            <div class="d-flex">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-if="Auser.user">
                    <li class="nav-item">
                        <a class="nav-link" @click="logOutUSer">LogOut</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
import {
    useRouter
} from 'vue-router';
import { reactive,onMounted } from 'vue';
export default {
    setup() {
        const router = useRouter()
        const Auser = reactive({
            user:""
        })

        const logOutUSer = () => {
            console.log("remove user")
            localStorage.removeItem("ActUser")
            router.push("/login")
            window.location.reload()
        }
         
         onMounted(()=>{
            if(localStorage.ActUser){
                let actuser = localStorage.ActUser
                 actuser = JSON.parse(actuser)
                 Auser.user = actuser
            }
         })


        return {
            logOutUSer,
            Auser
        };
    },
};
</script>

<style>
nav {
    padding: 30px;
}

nav a {
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #ffffff !important;
}
</style>
