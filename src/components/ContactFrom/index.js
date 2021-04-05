import React, { Component } from 'react'
import axios from "axios";

class ContactForm extends Component {
    state = {
        firstName: '',
        email: '',
        subject: '',
        lastName: '',
        message: '',
        error: {}
    }

    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    submitHandler = async (e) => {
        e.preventDefault();

        const {
            firstName,
            email,
            subject,
            lastName,
            message,
            error
        } = this.state;

        if (firstName === '') {
            error.firstName = "Please enter your first name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (subject === '') {
            error.subject = "Please enter your subject";
        }
        if (lastName === '') {
            error.lastName = "Please enter your last name";
        }
        if (message === '') {
            error.lastName = "Please enter your message";
        }

        if (error) {
            this.setState({
                error
            })
        }

        if (error.firstName === '' && error.email === '' && error.email === '' && error.lastName === '' && error.subject === '' && error.message === '') {
            axios.post('http://localhost:3000/mail', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                subject: subject,
                message: message,
            })
                .then(function (response) {
                    alert('Email sent.')
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: '',
                error: {}
            });
        }
    };

    render() {
        const { firstName,
            email,
            subject,
            lastName,
            message,
            error } = this.state;

        return(
            <form onSubmit={this.submitHandler} className="form">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input value={firstName} onChange={this.changeHandler} type="text" name="firstName" placeholder="First name"/>
                            <p>{error.firstName ? error.firstName : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input value={lastName} onChange={this.changeHandler} type="text" name="lastName" placeholder="Last name"/>
                            <p>{error.lastName ? error.lastName : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Email"/>
                            <p>{error.email ? error.email : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={subject} type="text" name="subject" placeholder="Subject"/>
                            <p>{error.subject ? error.subject : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <textarea value={message} onChange={this.changeHandler} name="message" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-submit">
                            <button type="submit" className="theme-btn">Send Message</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

}

export default ContactForm;