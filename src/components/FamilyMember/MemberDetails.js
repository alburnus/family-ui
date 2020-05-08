import React from 'react';

export const MemberDetails = (props) => {
    return (
        <React.Fragment>
            MemberDetails View
            {props.nickname}
        </React.Fragment>
    )
};

export default MemberDetails;