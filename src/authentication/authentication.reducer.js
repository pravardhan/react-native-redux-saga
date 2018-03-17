const initialState = {
    userInfo: null
};
const authentication = (state=initialState, action)=> {
    let newState;
    if(action.type === 'STORE_USER_INFO') {
        newState = Object.assign({}, state);
        newState.userInfo = action.data;
    }
    return newState || state;
};

export default authentication;