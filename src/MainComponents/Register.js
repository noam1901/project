import { Button } from "react-bootstrap";
import Form from "../SeconderyComponents/Form";
import {FaMailBulk, FaPaperclip, FaMarsDouble, FaPuzzlePiece} from 'react-icons/fa'

function Register(){
    const formInputs= {firstName: {
        id: 1,
        name: 'firstName',
        label: 'First Name',
        placeholder: 'First Name',
        value: '',
        type: 'text',
        validations: {
            required: true
        },
        errors: [],
        icon: FaPuzzlePiece
    },
    lastName: {
        id: 2,
        name: 'lastName',
        label: 'Last Name',
        placeholder: 'Last Name',
        value: '',
        type: 'text',
        validations: {
            required: true
        },
        errors: [],
        icon: FaPuzzlePiece
    }
        ,email: {
            id: 3,
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
            icon: FaMailBulk,
        },
        password: {
            id: 4,
            name: 'password',
            label: 'Password',
            placeholder: "Please enter your password",
            value: '',
            type: 'password',
            validations: {
                required: true
            },
            errors: [],
            icon: FaPaperclip,
        },
        confirm_password: {
            id: 5,
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
            icon: FaPaperclip
        },
        gender: {
          id: 6,
          name: 'gender',
          label: 'Gender',
          value: '',
          values: [{value: '', name: 'Choose your gender'},{value: 'male', name: 'male'}, {value: 'female', name: 'female'}, {value: 'other', name: 'other'}],
          type: 'select',
          validations: {
            required: true
          },
          errors: [],
          icon: FaMarsDouble,
        }
        
    }
    return(
        <div className="login-form">
        <Form formInputs={formInputs} title='sign up' onSubmit='Register'></Form>
        <div>
          <br></br>
          <span>Already have a user?</span><br></br>
          <Button>Sign in here</Button>
        </div>
        </div>
    )
}
export default Register