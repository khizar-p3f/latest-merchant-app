let statisticsState = {
    loading: true 
}

export default function (state = statisticsState, action) {
    if (action.type === 'UPDATE_CHANNELS') {
        let data = action.payload;
        return data
    }

    return state;
}