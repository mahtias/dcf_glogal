import apiGuest from './urls/urlGuest'
import router from '../../../routes/index'



export function login({commit}, user){
    if(user.email && user.password){
       // this.loader = true;
       commit('SET_LOADER_TRUE')
    //  this.error = false
        commit('SET_ERROR_FALSE')
            //   this.loginError = false;
               apiGuest.post('/login', {
                   email: user.email,
                   password: user.password
               }).then(response => {
              
                    commit('LOGIN_USER', response.data.user)
                    localStorage.setItem('token', response.data.access_token)
                   // localStorage.setItem('user', response.data.user)
                   commit('SET_LOADER_FALSE')

                     router.push({ name: 'Titre' })                   
                   
               }).catch((error) => {
                  // this.loginError = true
                   if (error.response.status === 401 || error.response.status === 403) {
                   commit('SET_ERROR_MESSAGE', error.response.data.message)
                     commit('SET_LOADER_FALSE')
                  //   //  this.error = false
                     commit('SET_ERROR_TRUE')
                    //this.$router.push({name: 'login'})
                }
               });
      }else if(!user.email){
        commit('SET_CHAMP_VIDE_TRUE')
      }else if(!user.password){
        commit('SET_CHAMP_VIDE_TRUE')
      }
}

    export function logoutUser({commit}){
      localStorage.removeItem('token')
     // localStorage.removeItem('user')
      commit('LOGOUT_USER')
      router.push({ name: 'Login' })                   


    }


