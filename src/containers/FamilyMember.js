import React, {Component} from 'react';
import {connect} from 'react-redux';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import Auxiliary from '../hoc/Auxiliary/Auxiliary';
import Modal from '../components/UI/Modal/Modal';
import Button from '../components/UI/Button/Button';
import Input from '../components/UI/Input/Input';
import * as actions from '../store/actions/index';

class FamilyMember extends Component {
    state = {
        memberForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        showModal: false
    }

    checkValidity(value, rules) {
        let isValid = true;
        console.log('check rules:' + rules);
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }
    // FIXME solve issue with cloning
    inputChangedHandler = (event, inputIdentifier) => {
        // Only first line won't clone deeply object.
        // I need deeply clone to not mutate main object.
        // That's why element is cloning.
        const updatedMemberForm = {
            ...this.state.memberForm
        };
        console.log(updatedMemberForm);
        const updatedFormElement = {
            ...updatedMemberForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        console.log(updatedFormElement);
        updatedMemberForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedMemberForm) {
            formIsValid = updatedMemberForm[inputIdentifier].valid && formIsValid;
        }
        console.log(formIsValid);
        this.setState({memberForm: updatedMemberForm, formIsValid: formIsValid});
    }

    newMemberHandler = () => {
        this.setState({showModal: true});
    }

    newMemberCancelHandler = () => {
        this.setState({showModal: false});
    }

    saveMemberHandler = (event) => {
        event.preventDefault(); // Thanks to that the page won't be reloaded.
        const formData = {};
        for (let formElementIdentifier in this.state.memberForm) {
            formData[formElementIdentifier] = this.state.memberForm[formElementIdentifier].value;
        }

        // At the moment I only set a family member name.
        this.props.onAddFamilyMember(formData.name);

        console.log(this.state.memberForm.name.validation.required);
        this.setState({
            showModal: false,
            memberForm: {
                name: {
                    value: ''
                }
            }
        });
        console.log(this.state.memberForm.name.validation.required);

    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.memberForm) {
            formElementsArray.push({
                id: key,
                config: this.state.memberForm[key]
            })
        }

        let form = (
            <form onSubmit={this.saveMemberHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>Order</Button>
            </form>
        );
        return (
            <Auxiliary>
                <Button btnType="Success" clicked={this.newMemberHandler}>Add family member</Button>
                <Modal show={this.state.showModal} modalClosed={this.newMemberCancelHandler}>
                    {form}
                </Modal>
                {this.props.members}
            </Auxiliary>
        )
    }
}

const mapStateToProps = state => {
    return {
        members: state.familyMember.members
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onAddFamilyMember: (name) => dispatch(actions.addFamilyMember(name))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(FamilyMember));