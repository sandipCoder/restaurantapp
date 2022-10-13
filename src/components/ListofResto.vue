<template>
<div>
    <AlertView :alertType=" restaurantData.alertType" :alertMsg=" restaurantData.alertMsg" />
    <h3>Visiter Name : {{user}} </h3>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">#ID</th>
                <th scope="col">Restaurant Name</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">Booking Date</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(res,index) in restaurantData.bookRest" :key="res.id">
                <th scope="row">{{index+1}}</th>
                <td>{{res.name}}</td>
                <td>{{res.address.address}}</td>
                <td>{{res.address.city}}</td>
                <td>{{ new Date(res.bookDate).toDateString() + " : " + res.time}}</td>
                <td><button class="btn btn-sm btn-danger" @click="deleteResto(res.id)">Delete</button>
                    <router-link :to="`/updateresto/${res.id}`" class="btn btn-sm btn-success mx-2">Update</router-link>
                </td>
            </tr>

        </tbody>
    </table>
</div>
</template>

<script>
import {
    onMounted,
    reactive
} from '@vue/runtime-core'
import axios from 'axios'
import AlertView from './AlertView.vue'
export default {
    components: {
        AlertView
    },
    props: ["user"],
    setup() {
        const restaurantData = reactive({
            bookRest: [],
            alertType: "",
            alertMsg: ""
        });

        onMounted(async () => {
            const res = await axios.get("http://localhost:3000/restarant");
            const result = await res.data;
            restaurantData.bookRest = result;
        });
        const showalert = (alertType, message) => {
            restaurantData.alertType = alertType
            restaurantData.alertMsg = message

        }

        const deleteResto = async (id) => {
            try {
                const res = await axios.delete(`http://localhost:3000/restarant/${id}`);
                restaurantData.bookRest = res.data;
                showalert("danger", "Restaurant Delete Successfully...!")
            } catch (e) {
                console.log(e)
            }

        }
        return {
            restaurantData,
            deleteResto,
            showalert,

        }
    }
}
</script>

<style lang="scss" scoped>

</style>
