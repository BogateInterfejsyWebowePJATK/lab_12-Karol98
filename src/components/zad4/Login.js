import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {Component} from 'react';
import Data from './data/Data.json'
import './css/Login.css'
import LoginAlert from "./LoginAlert";
import {Link} from "react-router-dom"

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: Data,
            button: true
        }
        this.EmailRef = React.createRef();
        this.passwordRef = React.createRef();
        this.LoginAlert = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        if (this.validate()) {
            this.setState({button: false});
        } else
            this.setState({button: true});
    }

    handleSubmit = event => {
        event.preventDefault();
        let check = false;
        if (this.validate()) {
            this.state.data.map(data => {
                if (data.email === this.EmailRef.current.value && data.password === this.passwordRef.current.value)
                    check = true;
            })
        }
        if (check) {
            this.showRegistrationAlert("success", "Udało się!", "Email i hasło są poprawne");
        } else {
            this.showRegistrationAlert("danger", "Błąd!", "Zły email lub hasło");
        }

    }

    validate() {
        let isValid = true;
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(this.EmailRef.current.value)) {
            isValid = false;
        }

        return isValid;
    }


    showRegistrationAlert(variant, heading, message) {
        this.LoginAlert.current.setVariant(variant);
        this.LoginAlert.current.setHeading(heading);
        this.LoginAlert.current.setMessage(message);
        this.LoginAlert.current.setVisible(true);
    }


    render() {
        return (
            <>
                <div className="Login">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="email" size="lg">
                            <Form.Label>Email</Form.Label>
                            <Form.Control autoFocus name="email" ref={this.EmailRef} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="password" size="lg">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" ref={this.passwordRef}/>
                        </Form.Group>
                        <Button block size="lg" type="submit" disabled={this.state.button}>Zaloguj!</Button>
                    </Form>
                    <p className="d-flex justify-content-center p-5 ">Nie masz jeszcze konta? <Link to='/signup'
                                                                                                    className="pl-2">Zarejestruj
                        się!</Link></p>
                </div>

                <LoginAlert ref={this.LoginAlert}/>
            </>
        )
    }
}

export default Login;
