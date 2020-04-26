import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import FamilyMemberForm from "./FamilyMemberForm";
import Button from "../components/UI/Button/Button";

class FamilyMember extends Component {

    newMemberFormHandler = () => {
        this.props.history.push(this.props.match.path + '/new');
    }

    render() {
        return (
            <div>
                <Button btnType="Success" clicked={this.newMemberFormHandler}>Add</Button>
                <Route
                    path={this.props.match.path + '/new'}
                    component={FamilyMemberForm}
                />
            </div>
        )
    }

}

export default FamilyMember;