import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import FamilyMember from './containers/FamilyMember';
import Layout from './hoc/Layout/Layout';
import FamilyMemberForm from "./containers/FamilyMemberForm";
import MemberDetails from "./components/FamilyMember/MemberDetails";

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/family-members/details/:id" component={MemberDetails}/>
                        <Route path="/family-members/new" component={FamilyMemberForm}/>
                        <Route path="/family-members" component={FamilyMember}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
