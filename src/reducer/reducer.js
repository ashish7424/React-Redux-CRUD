import { ADD_DATA, DELETE_DATA, EDIT_DATA } from "../action/actionConstant";

const initialState = {
    adddata: [],
}

const listinformation = (state = initialState, action) => {

    switch (action.type) {
        case ADD_DATA:
            console.log(action.payload)

            return { ...state, adddata: [...state.adddata, action.payload] }

        case EDIT_DATA:
            const arr = state.adddata
            for (let i = 0; i < arr.length; i++) {
                if (i === action.payload.index) {
                    arr[i] = action.payload.data
                    return {
                        adddata: [...state.adddata]
                    }
                }
                console.log(arr)
            }
            break;
        case DELETE_DATA:
            // const row=state.adddata
            state.adddata.splice(action.payload.index, 1)
            return {
                adddata: [...state.adddata]
            }
       
        default: return state;
    }
}

export default listinformation;