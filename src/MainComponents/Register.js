import { useState } from "react";
import { Button } from "react-bootstrap";
import Input from "../ToolsComponents/Input";
import Form from "../ToolsComponents/Form";

// Add gender.

function Register(){
    const formInputs= {
        email: {
            id: 1,
            name: 'email',
            label: 'Email',
            placeholder: 'Please enter your email',
            value: '',
            type: 'text',
            validations: {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            },
            errors: [],
        },
        password: {
            id: 2,
            name: 'password',
            label: 'Password',
            placeholder: "Please enter your password",
            value: '',
            type: 'password',
            validations: {
                required: true
            },
            errors: [],
        },
        confirm_password: {
            id: 3,
            name: 'confirm_password',
            label: 'Confirm Password',
            placeholder: "Please enter your password again",
            value: '',
            type: 'password',
            validations: {
                required: true,
                confirm_password: true
            },
            errors: [],
        },
        gender: {
          id: 4,
          name: 'gender',
          label: 'Gender',
          value: '',
          values: [{value: '', name: 'Choose your gender'},{value: 'male', name: 'male'}, {value: 'female', name: 'female'}, {value: 'other', name: 'other'}],
          type: 'select',
          validations: {
            required: true
          },
          errors: [],
        }
        
    }
    return(
        <form className="login-form">
        <Form formInputs={formInputs} title='sign up' onSubmit='Register'></Form>
        <div>
          <br></br>
          <span>Already have a user?</span><br></br>
          <Button>Sign in here</Button>
        </div>
        </form>
    )
}
export default Register