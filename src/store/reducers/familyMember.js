import * as actionTypes from '../actions/actionTypes';

const initialState = {
    members: []
};

const addFamilyMember = (state, action) => {
    return {
        ...state,
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