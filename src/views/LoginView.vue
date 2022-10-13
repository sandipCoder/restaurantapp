<template>
<div class="col-md-4 mt-5">
    <form @submit.prevent="loginUSer">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" v-model="luser.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" v-model="luser.password" class="form-control" id="exampleInputPassword1" />
        </div>
        <p>If You don't have an account please <router-link to="/register"> Register User </router-link></p>
        <button type="submit" class="btn btn-primary">LoginUser</button>
    </form>
</div>
</template>

<script>
import {
    reactive
} from "@vue/reactivity";
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter()
        const luser = reactive({
            email: "",
            password: "",
            currentUser: "",
        });

        const loginUSer = () => {
            let user = {
                email: luser.email,
                password: luser.password,
            };
            //console.log(user)
            if (luser.email === "" || luser.password === "") {
                alert("User must be Valid")
            } else {

                let ltuser = localStorage.Userdata;
                ltuser = JSON.parse(ltuser);
                console.log(ltuser)

                let userindex = ltuser.findIndex((item) => {
                    return item.email === user.email;
                });
                console.log(userindex)
                if (userindex > -1) {
                    let passwordIndex = ltuser.findIndex((item) => {
                        if (ltuser[userindex].password === user.password) {
                            return item.password === user.password;
                        }                      
                    });
                    console.log("pass",passwordIndex)

                    if (passwordIndex > -1) {
                        let activeUSer = ltuser.find((currentuser) => {
                            return currentuser.email === user.email;
                        });

                        localStorage.setItem("ActUser", JSON.stringify(activeUSer));
                        luser.email = "",
                        luser.password = ""
                        router.push("/")
                        window.location.reload();
                    }
                }
            }
        };
        return {
            luser,
            loginUSer,
        };
    },
};
</script>

<style lang="scss" scoped>
</style>
