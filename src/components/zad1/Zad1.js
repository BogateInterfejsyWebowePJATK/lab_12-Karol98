import React, {useRef, useState} from 'react';
import {Card, Form, Button} from 'react-bootstrap'

export default function Zad1() {

    const [number, setNumber] = useState(0);
    const [amount, setAmount] = useState(0);
    const [iteration, setIteration] = useState(0);
    const numberRef = useRef();

    const submit = event => {
        event.preventDefault();
        setIteration(iteration + 1);
        setNumber(parseInt(numberRef.current.value) + number);
        setAmount(number / iteration);
    }

    return (
        <Card className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
            <Card.Body className="justify-content-center">
                <h2 className="text-center mb-4">Podaj liczbę</h2>
                <Form>
                    <Form.Group id="number">
                        <Form.Label>Liczba</Form.Label>
                        <Form.Control type="text" ref={numberRef} required/>
                    </Form.Group>
                    <Button className="w-100" type="submit" onClick={submit}>Dodaj</Button>
                </Form>
                <h1 className="text-center pt-4">Suma: </h1>
                <h1 className="text-center m-0">{number}</h1>
                <h1 className="text-center m-0">Średnia:</h1>
                <h1 className="text-center m-0">{amount}</h1>
            </Card.Body>
        </Card>
    );
}