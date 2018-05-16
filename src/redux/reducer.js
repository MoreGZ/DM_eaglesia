import * as actionType from './action_type'

const defaultState = {
    language: "chi"
}

const reducer = (state = defaultState, action = {}) => {
    switch(action.type){
        case actionType.CHANGELAN: 
            return {
                ...state,
                language:action.language
            }
        default:
            return state
    }
}

export default reducer