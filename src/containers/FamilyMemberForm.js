import React, {Component} from 'react';
import {connect} from 'react-redux';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import axios from '../axios-family';
import Button from '../components/UI/Button/Button';
import Input from '../components/UI/Input/Input';
import * as actions from '../store/actions/index';

class FamilyMemberForm extends Component {
    state = {
        memberForm: {
            nickname: {
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
            },
            // dateOfBirth: {
            //     elementType: 'input',
            //     elementConfig: {
            //         type: 'text',
            //         placeholder: 'Date of birth'
            //     },
            //     value: '',
            //     validation: {
            //         required: true
            //     },
            //     valid: false,
            //     touched: false
            // }
        },
        formIsValid: false
    }

    newMemberHandler = (event) => {
        event.preventDefault(); // Thanks to that the page won't be reloaded.
        const formData = {};
        for (let formElementIdentifier in this.state.memberForm) {
            formData[formElementIdentifier] = this.state.memberForm[formElementIdentifier].value;

        }
        this.props.onAddMember(formData);
        this.props.history.replace('/family-members');
    }

    checkValidity(value, rules) {
        let isValid = true;
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

    inputChangedHandler = (event, inputIdentifier) => {
        // Only first line won't clone deeply object.
        // I need deeply clone to not mutate main object.
        // That's why element is cloning.
        const updatedMemberForm = {
            ...this.state.memberForm
        };
        const updatedFormElement = {
            ...updatedMemberForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedMemberForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedMemberForm) {
            formIsValid = updatedMemberForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({memberForm: updatedMemberForm, formIsValid: formIsValid});
    }

    cancelledHandler = () => {
        this.props.history.replace('/family-members');
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
            <form onSubmit={this.newMemberHandler}>
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
                <Button btnType="Success" disabled={!this.state.formIsValid}>Add</Button>
                <Button btnType="Danger" clicked={this.cancelledHandler}>Go back</Button>
            </form>
        );
        if (this.props.loading) {
            form = <div>Loading...</div>;
        }
        return (
            <div>
                <h4>Enter your Data</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.member.loading
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onAddMember: (memberData) => dispatch(actions.addMember(memberData))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(FamilyMemberForm, axios));