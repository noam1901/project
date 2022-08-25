import React, { useState } from 'react'
import Form from './Form.js'
import {FaMailBulk, FaPaperclip, FaMarsDouble, FaPuzzlePiece} from 'react-icons/fa'

const MyDetails = () => {
    const [form, setForm] = useState(true)
    const formInputs = {
        firstName: {
            id: 1,
            name: 'firstName',
            label: 'First Name',
            placeholder: 'First Name',
            value: '',
            type: 'text',
            validations: {
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
                    pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                },
                errors: [],
                icon: FaMailBulk,
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
    function visableForm(){
        setForm(!form)
    }
  return (
    <div>
        {form?<div>
            <h1>MyDetails</h1>
            <h3>full name: Sim Cleeton<br></br>
            Country: Iran || city: Farmahiin<br></br>
            Address: 07887 Independence Junction<br></br>
            PostalCode: null<br></br>
            Phone: 548-741-0992 <br></br>
            Email: scleeton0@slideshare.net</h3>
        </div>:<Form title='Change Details' formInputs={formInputs} onSubmit='Confirm Changes'></Form>}
        <button onClick={visableForm}>Update details</button>
    </div>
  )
}

export default MyDetails