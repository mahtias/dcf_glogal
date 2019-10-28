import * as mutations from './Mutations'
import defaultstate from './DefaultState'
import * as getters from './Getters'
import * as actions from './Actions'



export default {
    namespaced: true,
    state: defaultstate,
    mutations,
    getters,
    actions
}