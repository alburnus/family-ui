import * as actionTypes from './actionTypes';
import axios from '../../axios-family';

export const addMemberSuccess = (id, memberData) => {
    return {
        type: actionTypes.ADD_MEMBER_SUCCESS,
        memberId: id,
        memberData: memberData
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

// Async action
export const addMember = (memberData) => {
    return dispatch => {
        dispatch(addMemberStart());
        axios.post('/members.json', memberData)
            .then(response => {
                console.log(response.data);
                dispatch(addMemberSuccess(response.data.name, memberData));
            })
            .catch(error => {
                dispatch(addMemberFail(error));
            });
    };
};