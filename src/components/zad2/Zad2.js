import React, {useRef, useState} from 'react';
import {Card, Form, Button} from 'react-bootstrap'
import Zad2Tab from "./Zad2Tab";
export default function Zad2() {

    const [text1,Settext1] = useState();
    const [text2,Settext2] = useState();
    const [radio,Setradio] = useState(false);
    const [select,SetSelect] = useState();
    const [check1,Setcheck1] = useState(false);
    const [check2,Setcheck2] = useState(false);
    const [tab,SetTab] = useState(false);

    const text1Ref = useRef();
    const text2Ref = useRef();
    const radioRef = useRef();
    const selectRef = useRef();
    const checkboxRef1 = useRef();
    const checkboxRef2 = useRef();

    const submit = event => {
        event.preventDefault();
        Settext1(text1Ref.current.value);
        Settext2(text2Ref.current.value);
        Setradio(radioRef.current.checked);
        SetSelect(selectRef.current.value);
        Setcheck1(checkboxRef1.current.checked);
        Setcheck2(checkboxRef2.current.checked);
        SetTab(!tab);
    }

    if(!tab) {
        return (
            <Card className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <Card.Body className="justify-content-center">
                    <h2 className="text-center mb-4">Wypełnij Formularz</h2>
                    <Form>
                        <Form.Group id="text1">
                            <Form.Label>Podaj imie: </Form.Label>
                            <Form.Control type="text" ref={text1Ref} required/>
                        </Form.Group>
                        <Form.Group id="text2">
                            <Form.Label>Podaj nazwisko: </Form.Label>
                            <Form.Control type="text" ref={text2Ref} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                                type="radio"
                                label="Zaznacz"
                                ref={radioRef}
                                value="Zaznacz"
                                name="Radio"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Wybierz</Form.Label>
                            <Form.Control as="select" ref={selectRef}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" ref={checkboxRef1} label="Mam Komputer" value="Mam Komputer"/>
                            <Form.Check type="checkbox" ref={checkboxRef2} label="Mam Laptopa" value="Mam Laptopa"/>
                        </Form.Group>
                        <Button className="w-50" type="submit" onClick={submit}>Pokaż w tabeli</Button>
                        <Button className="w-50" type="reset">Reset</Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    } else
        return (
          <div>
              <Zad2Tab text1={text1} text2={text2} radio={radio.toString()} check1 = {check1.toString()} check2 = {check2.toString()} select={select}/>
          </div>
        );
}