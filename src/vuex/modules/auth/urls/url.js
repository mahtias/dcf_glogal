import axios from 'axios'

 axios.create({
  //  baseURL: 'http://localhost:8088/api'
    baseURL: 'http://gestion-utilisateurs.kognishare.com/api'

})

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')


export default axios