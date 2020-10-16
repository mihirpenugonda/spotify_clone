export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    
    //Remove after done developing
    token: "BQCXrH_yBEiwh_BAyo_f_EaoT_6WBNguFwrjoUdCgPRxuDi82_SJ-IDaha_0l1AVbfnYKQxImC4pmTBc-ih_32AHVDm8c9AVKO6LDEeLPdAxAXy1-thvJNLC9VLRJVM4HD9H4azowsl_PD4Tgnr7auVFzSp1EvxD_19Vrs9MYBGe8ssL2SEFtKjr"

    // token: null,
}

const reducer = (state, action) => {
    // console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
}

export default reducer;