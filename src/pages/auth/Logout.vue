<template>
    <div></div>
</template>

<script>
import {mapActions} from 'vuex'
    export default {
        
        mounted () {
            // localStorage.removeItem('token')
            // this.$store.commit('LOGOUT_USER')
            // this.$router.push({ name: 'Login' })
            this.logoutUser();
        },

        methods: {
            ...mapActions('Utilisateurs', ['logoutUser'])
        }


    }
</script>