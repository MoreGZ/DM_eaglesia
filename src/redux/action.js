import * as actionType from './action_type';

export const changeLan = (language) => {
    return {
        type: actionType.CHANGELAN,
        language
    }
}

export default {}