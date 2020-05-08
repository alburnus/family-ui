import React, {Component} from 'react';
import {connect} from 'react-redux';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import axios from '../axios-family';
import * as actions from '../store/actions/index';
import _ from 'lodash';

class FamilyMemberForm extends Component {

    componentDidMount() {
        this.props.onFetchMembers();
    }

    render() {
        let data = null;
        if (!_.isEmpty(this.props.members)) {
            data = this.props.members.map(member =>
                <li key={member.id}>
                    {member.nickname}
                </li>
            )
        }

        return (
            <React.Fragment>
                {data}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        members: state.member.members
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchMembers: () => dispatch(actions.fetchMembers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(FamilyMemberForm, axios));