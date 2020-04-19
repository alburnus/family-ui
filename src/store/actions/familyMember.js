import * as actionTypes from './actionTypes';

export const addFamilyMember = (name) => {
    return {
        type: actionTypes.ADD_FAMILY_MEMBER,
        name: name
    };
};