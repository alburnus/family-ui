import React, {Component} from 'react';
import {connect} from 'react-redux';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import Auxiliary from '../hoc/Auxiliary/Auxiliary';
import * as actions from '../store/actions/index';

class FamilyMember extends Component {

    componentDidMount() {
        this.props.onAddFamilyMember();
    }

    render() {
        return (
            <Auxiliary>
                {this.props.name}
            </Auxiliary>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.familyMember.name
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onAddFamilyMember: () => dispatch(actions.addFamilyMember('aa'))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(FamilyMember));