import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    members: [],
    name: null
};

const addFamilyMember = (state, action) => {
    return {
        ...state,
        ...state.members,
        name: action.name,
        members: state.members.concat(action.name)
    }
};

const familyMember = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_FAMILY_MEMBER:
            return addFamilyMember(state, action);
        default:
            return state;
    }
};

export default familyMember;