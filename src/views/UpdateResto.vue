<template>
<div class="col-md-5 my-5">
    <AlertView :alertType="resdata.alertType" :alertMsg="resdata.alertMsg" />
    <form @submit.prevent="udateResto">
        <div class="mb-3">
            <label for="HotelName" class="form-label">Restorant Name </label>
            <input type="text" class="form-control" id="HotelName" v-model="resdata.name">
        </div>
        <div class="mb-3">
            <label for="restoaddress" class="form-label"> Address </label>
            <textarea type="text" class="form-control" rows="3" cols="5" id="restoaddress" v-model="resdata.addressdata"></textarea>
        </div>
        <div class="mb-3">
            <label for="restosity" class="form-label"> City </label>
            <input type="text" class="form-control" id="restosity" v-model="resdata.city" />
        </div>
        <div class="mb-3">
            <label for="bookingDAte" class="form-label">Booking Date </label>
            <input type="date" class="form-control" id="bookingDAte" v-model="resdata.bookDate">
        </div>
        <div class="mb-3">
            <label for="bookingDAte" class="form-label">Booking Time </label>
            <input type="time" class="form-control" id="bookingDAte" v-model="resdata.time">
        </div>

        <button type="submit" class="btn btn-primary">Update Restaurant</button>
    </form>

</div>
</template>

<script>
import {
    onMounted,
    reactive
} from '@vue/runtime-core'
import axios from 'axios'
import {
    useRoute,
    useRouter
    
} from 'vue-router'
import AlertView from "../components/AlertView.vue"
export default {
    components: {
        AlertView
    },
    setup() {
        const route = useRoute()
        const router = useRouter()
        const resdata = reactive({
            id: route.params.id,
            name: "",
            addressdata: "",
            city: "",
            bookDate: "",
            alertType: "",
            alertMsg: "",
            time:""
        })

        onMounted(async () => {
            const res = await axios.get(`http://localhost:3000/restarant/${resdata.id}`)
            resdata.name = res.data.name
            resdata.addressdata = res.data.address.address
            resdata.city = res.data.address.city
            resdata.bookDate = res.data.bookDate
            resdata.time = res.data.time

        })

        const showAlert = (alertType, alertMsg) => {
            resdata.alertType = alertType
            resdata.alertMsg = alertMsg
        }

        const udateResto = async () => {
            try {
                await axios.put(`http://localhost:3000/restarant/${resdata.id}`, {
                    name: resdata.name,
                    address: {
                        address: resdata.addressdata,
                        city: resdata.city
                    },
                    bookDate: resdata.bookDate,
                    time : resdata.time
                })
                showAlert("success", "Restaurant has Updated Sccessfully...!")
               router.push("/")
            } catch (error) {
                console.log(error)
            }
        }
        return {
            resdata,
            udateResto,
            showAlert
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
