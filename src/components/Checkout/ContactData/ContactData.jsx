import React, { Component } from 'react';
import Button from '../../UI/Button/Button'

class ContactData extends Component {
    
    state = {
        name: '',
        email: '',
        address: {
            phone: '',
            postalCode: '',
            street: '',
        }
    }
    
    render() {
        return (
            <div>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input type='text' name='name' placeholder='Your Name' />
                    <input type='email' name='email' placeholder='Your Email' />
                    <input type='text' name='phone' placeholder='Your Phone' />
                    <input type='text' name='street' placeholder='Your Street' />
                    <input type='text' name='postalCode' placeholder='Your PostalCode' />
                    <Button 
                        btnType='Success'
                        clicked>CONTINUE
                    </Button> 
                </form>
            </div>
        );
    }
}

export default ContactData;