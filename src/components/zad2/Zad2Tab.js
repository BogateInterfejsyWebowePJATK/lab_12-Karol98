import React from 'react';
import Table from 'react-bootstrap/Table'

const Zad2Tab = (props) => {
    return (
        <div className="d-flex m-3 justify-content-center ">
            <Table striped bordered hover variant="dark"
                   className="w-25  text-center ">
                <tr>
                    <td>Imie</td>
                    <td>{props.text1}</td>
                </tr>
                <tbody>
                <tr>
                    <td>Nazwisko</td>
                    <td>{props.text2}</td>

                </tr>
                <tr>
                    <td>Zaznacz</td>
                    <td>{props.radio}</td>

                </tr>
                <tr>
                    <td>Lista numer</td>
                    <td>{props.select}</td>
                </tr>
                <tr>
                    <td>Mam Komputer</td>
                    <td>{props.check1}</td>
                </tr>
                <tr>
                    <td>Mam laptopa</td>
                    <td>{props.check2}</td>
                </tr>
                </tbody>
            </Table>
        </div>
    )

}

export default Zad2Tab;
