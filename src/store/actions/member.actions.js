import * as actionTypes from './actionTypes';
import axios from '../../axios-family';

export const addMemberSuccess = (member) => {
    return {
        type: actionTypes.ADD_MEMBER_SUCCESS,
        member: member
    };
};

export const addMemberFail = (error) => {
    return {
        type: actionTypes.ADD_MEMBER_FAIL,
        error: error
    };
};

export const addMemberStart = () => {
    return {
        type: actionTypes.ADD_MEMBER_START
    };
};

export const fetchMembersStart = () => {
    return {
        type: actionTypes.FETCH_MEMBERS_START
    };
};

export const fetchMembersSuccess = (members) => {
    return {
        type: actionTypes.FETCH_MEMBERS_SUCCESS,
        members: members
    };
};

export const fetchMembersFail= (error) => {
    return {
        type: actionTypes.FETCH_MEMBERS_FAIL,
        error: error
    };
};

export const fetchMembers = () => {
    return dispatch => {
        dispatch(fetchMembersStart());
        axios.get('/v1/patients')
            .then(response => {
                dispatch(fetchMembersSuccess(response.data));
            })
            .catch(error => dispatch(fetchMembersFail(error)));
    }
};

export const addMember = (memberData) => {
    return dispatch => {
        dispatch(addMemberStart());
        axios.post('/v1/patients', memberData)
            .then(response => {
                dispatch(addMemberSuccess(response.data, memberData));
            })
            .catch(error => {
                console.log(error);
                dispatch(addMemberFail(error));
            });
    };
};