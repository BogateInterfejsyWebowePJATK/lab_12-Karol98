import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {Component} from 'react';
import Data from './data/Data.json'
import './css/Login.css'
import {Link} from "react-router-dom";
import Tab from "./Tab";

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: Data,
            button: true,
            email: "XD",
            password: "XD2",
            name: "XD3",
            surname: "",
            date: "",
            tab: true
        }
        this.EmailRef = React.createRef();
        this.passwordRef = React.createRef();
        this.nameRef = React.createRef();
        this.surnameRef = React.createRef();
        this.dateRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        if (this.validate()) {
            this.setState({button: false});
        } else
            this.setState({button: true});
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: this.EmailRef.current.value,
            password: this.passwordRef.current.value,
            name: this.nameRef.current.value,
            surname: this.surnameRef.current.value,
            date: this.dateRef.current.value,
            tab: false
        })
    }

    validate() {
        let isValid = false;
        let emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        let passwordPattern = new RegExp("^(?=.*)(?=.*[a-z])(?=.*[A-Z]).{8,32}$");
        console.log(passwordPattern.test(this.passwordRef.current.value));
        if (emailPattern.test(this.EmailRef.current.value) && passwordPattern.test(this.passwordRef.current.value)) {
            isValid = true;
        }
        return isValid;
    }

    render() {
        if (this.state.tab) {
            return (
                <>
                    <div className="Login">
                        <h1 className="d-flex justify-content-center pb-5">Zarejestruj się!</h1>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="name" size="lg">
                                <Form.Label>Imie</Form.Label>
                                <Form.Control autoFocus name="name" ref={this.nameRef} required/>
                            </Form.Group>

                            <Form.Group controlId="surname" size="lg">
                                <Form.Label>Nazwisko</Form.Label>
                                <Form.Control name="Surname" ref={this.surnameRef} required/>
                            </Form.Group>

                            <Form.Group controlId="email" size="lg">
                                <Form.Label>Adres e-mail</Form.Label>
                                <Form.Control name="email" ref={this.EmailRef} onChange={this.handleChange} required/>
                            </Form.Group>

                            <Form.Group controlId="password" size="lg">
                                <Form.Label>Hasło: (min 8 znaków i 1 duża litera)</Form.Label>
                                <Form.Control type="password" name="password" ref={this.passwordRef}
                                              onChange={this.handleChange} required/>
                            </Form.Group>

                            <Form.Group controlId="date" size="lg">
                                <Form.Label>Data urodzenia: </Form.Label>
                                <Form.Control type="date" name="date" ref={this.dateRef} required/>
                            </Form.Group>

                            <Form.Group controlId="photo" size="lg">
                                <Form.Label>Zdjęcie:</Form.Label>
                                <Form.Control type="file" name="photo" accept="image/*"/>
                            </Form.Group>

                            <Form.Group controlId="checkbox" size="lg">
                                <Form.Label>Akceptuje warunki: </Form.Label>
                                <Form.Control type="checkbox" name="photo" required/>
                            </Form.Group>

                            <Button block size="lg" type="submit" disabled={this.state.button}>Zarejestruj się!</Button>
                        </Form>
                        <p className="d-flex justify-content-center p-5 ">Masz już konto?<Link to='/' className="pl-2">Zaloguj
                            się!</Link></p>
                    </div>
                </>
            )
        } else {
            return (
                <div>
                    <Tab {...this.state}/>
                </div>
            )
        }
    }
}

export default Registration;
