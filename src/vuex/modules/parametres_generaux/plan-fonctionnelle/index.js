
import * as actions from './Actions'
import * as mutations from './Mutations'
import * as getters from './Getters'
import defaultState from './DefaultState'

export default {
    namespaced: true,
    state: defaultState,
    actions,
    mutations,
    getters
}
