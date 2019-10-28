import * as actions from './Actions'
import * as getters from './Getters'
import * as mutations from './Mutations'
import defaultState from './DefaultState'


export default  {
    namespaced: true,
    state: defaultState,
    actions,
    mutations,
    getters


}