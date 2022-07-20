let userState = {
    currentUser:{isLoaded:false},
    usersList:{
        isLoaded:false,
        data:[]
    }
}

export default function (state = userState, action) {

    if (action.type === 'UPDATE_USER' || action.type === 'GET_USERS' ) {
        const data = action.payload;
        state= {
            ...state,
            currentUser:{
                isLoaded:true,
                ...data
            }
        }
    }
    return state;
}
