import { Button } from "react-bootstrap";
import Form from "../SeconderyComponents/Form";
import {FaMailBulk, FaPaperclip} from 'react-icons/fa'


function Login(){
    const formInputs = {
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
            icon: FaMailBulk,
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
            icon: FaPaperclip,
        }
    }
    return(
        <div className="login-form">
          <Form title='Login' formInputs={formInputs} onSubmit='Login'></Form>
        <div>
          <br></br>
          <span>New User?</span><br></br>
          <Button>Sign up here</Button>
        </div>
        </div>
    )
}
export default Login