

const istate = {

    fetched: null,



}



const reducer = (state = istate, action) => {

    console.log(action)

    switch (action.type) {

        case "GETTING_DATA":
            return {

                ...state,
                fetched:action.payload,

            }

        default:
            return state

    }



}



export default reducer;