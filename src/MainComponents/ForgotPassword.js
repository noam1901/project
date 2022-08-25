import React from 'react'
import Form from '../SeconderyComponents/Form'
import {FaMailBulk} from 'react-icons/fa'


export const ForgotPassword = () => {
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
        }}
  return (
    <div className='login-form'>
      <Form title='Forgot my password' formInputs={formInputs} onSubmit='Send'></Form>
        <p>A reset link will be sent to your email</p>
    </div>
  )
}
