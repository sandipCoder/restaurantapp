<template>
<div class="col-md-5 my-5">
     <AlertView  :alertType="resto.alertType" :alertMsg="resto.alertMsg" />
    <form @submit.prevent="bookRestorant">
        <div class="mb-3">
            <label for="HotelName" class="form-label">Restorant Name </label>
            <input type="text" class="form-control" id="HotelName" v-model="resto.name">
        </div>
        <div class="mb-3">
            <label for="restoaddress" class="form-label"> Address </label>
            <textarea type="text" class="form-control" rows="3" cols="5" id="restoaddress" v-model="resto.address"></textarea>
        </div>
        <div class="mb-3">
            <label for="restosity" class="form-label"> City </label>
            <input type="text" class="form-control" id="restosity" v-model="resto.city" />
        </div>
        <div class="mb-3">
            <label for="bookingDAte" class="form-label">Booking Date </label>
            <input type="date" class="form-control" id="bookingDAte" v-model="resto.bookDate">
        </div>
        <div class="mb-3">
            <label for="bookingDAte" class="form-label">Booking Time </label>
            <input type="time" class="form-control" id="bookingDAte" v-model="resto.time">
        </div>

        <button type="submit" class="btn btn-primary">Add Restaurant</button>
    </form>

</div>
</template>

<script>
import {
    reactive
} from '@vue/reactivity'
import axios from "axios"
import AlertView from '@/components/AlertView.vue';
export default {
    components:{AlertView},
    setup() {
        const resto = reactive({
            name: "",
            address: "",
            city: "",
            bookDate: "",
            alertType:"",
            alertMsg:"",
            time:""
        })

         const showalert=(alertType,message)=>{
            resto.alertType = alertType
            resto.alertMsg = message

         }

        const bookRestorant = async () => {
            try{
                await axios.post("http://localhost:3000/restarant/", {
                id: (Math.random().toString(36)).slice(2),
                name: resto.name,
                address: {
                    address: resto.address,
                    city: resto.city
                },
                bookDate: resto.bookDate,
                time:resto.time
            })
            showalert("success","Restaurant has added Successfully...!")
            }catch(error){console.log(error)}


        }

        return {
            resto,
            bookRestorant,
            AlertView
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
