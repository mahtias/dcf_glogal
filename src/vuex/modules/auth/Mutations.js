
export const LOGIN_USER = (state, user) => {
    state.isLoggedIn = true
    state.user = user;
};

export const LOGOUT_USER = (state) => {
    state.isLoggedIn = false
   // state.user = user;
};

export const SET_ERROR_MESSAGE = (state, message) => {
    state.errorMessage = message
}


export const SET_CHAMP_VIDE_TRUE = state => state.champVide = true

export const SET_CHAMP_VIDE_FALSE = state => state.champVide = false

export const SET_LOADER_FALSE = state => state.loader = false

export const SET_LOADER_TRUE = state => state.loader = true

export const SET_ERROR_FALSE = state => state.error = false

export const SET_ERROR_TRUE = state => state.error = true




//export const LOGIN_SUBMIT = state => state