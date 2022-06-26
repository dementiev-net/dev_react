export default function (state, action) {

    const payload = action.payload
    let newData

    switch (action.type) {
        case 'LOAD_DATA':
            newData = payload.data
            return {
                ...state,
                data: newData,
                status: payload.status,
                ready: true
            }
        default:
            return state
    }
}