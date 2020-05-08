import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    members: [],
    loading: false,
    error: null
};

const fetchMembersStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
};

const fetchMembersSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        members: action.members
    });
};

const fetchMembersFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    });
};

const addMemberStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
};

const addMemberSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        members: state.members.concat(action.member)
    });
};

const addMemberFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
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
        case actionTypes.FETCH_MEMBERS_START:
            return fetchMembersStart(state, action);
        case actionTypes.FETCH_MEMBERS_SUCCESS:
            return fetchMembersSuccess(state, action);
        case actionTypes.FETCH_MEMBERS_FAIL:
            return fetchMembersFail(state, action);
        default:
            return state;
    }
};

export default reducer;