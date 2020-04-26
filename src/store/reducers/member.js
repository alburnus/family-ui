import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    members: [],
    loading: false
};

const addMemberStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
};

const addMemberSuccess = (state, action) => {
    const newMember = updateObject(action.memberData, {
        id: action.memberId
    });
    return updateObject(state, {
        loading: false,
        members: state.members.concat(newMember),
    });
};

const addMemberFail = (state, action) => {
    return updateObject(state, {
        loading: false,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_MEMBER_START:
            return addMemberStart(state, action);
        case actionTypes.ADD_MEMBER_SUCCESS:
            return addMemberSuccess(state, action);
        case actionTypes.ADD_MEMBER_FAIL:
            return addMemberFail(state, action);
        default:
            return state;
    }
};

export default reducer;