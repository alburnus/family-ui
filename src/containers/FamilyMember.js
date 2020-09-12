import React, {Component} from 'react';
import Button from "../components/UI/Button/Button";
import FamilyMemberTable from "./FamilyMemberTable";

class FamilyMember extends Component {

    newMemberFormHandler = () => {
        this.props.history.push(this.props.match.path + '/new');
    };

    memberDetailsHandler = (id) => {
        this.props.history.push(this.props.match.path + '/' + id + '/details' );
    };

    render() {
        return (
            <div style={{margin: '20px'}}>
                <Button btnType="Success" clicked={this.newMemberFormHandler}>New Member</Button>
                <FamilyMemberTable memberDetails={(id) => this.memberDetailsHandler(id)}/>
            </div>
        )
    }

}

export default FamilyMember;