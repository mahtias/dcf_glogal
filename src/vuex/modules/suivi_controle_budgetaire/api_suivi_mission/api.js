import axios from 'axios';

export default axios.create({

     baseURL: 'http://localhost:9000/api'
   //baseURL: 'http://dcf-suivi-mission.kognishare.com/api'
})