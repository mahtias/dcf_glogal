const defaultstate = {
    isLoggedIn: !!localStorage.getItem('token'),
  // isLoggedIn: true,
     user: localStorage.getItem('user'),
   // user: localStorage.getItem('user'),
    champVide: false,
    loader: false,
    error: false,
    errorMessage: undefined


};

 export default defaultstate