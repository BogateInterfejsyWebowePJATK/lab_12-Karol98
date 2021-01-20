import React from 'react';
import Table from 'react-bootstrap/Table'

export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="d-flex m-3 justify-content-center ">
                <Table striped bordered hover variant="dark"
                       className="w-25  text-center ">
                    <tr>
                        <td>Imie</td>
                        <td>{this.props.name}</td>
                    </tr>
                    <tbody>
                    <tr>
                        <td>Nazwisko</td>
                        <td>{this.props.surname}</td>

                    </tr>
                    <tr>
                        <td>Adres e-mail</td>
                        <td>{this.props.email}</td>

                    </tr>
                    <tr>
                        <td>Hasło</td>
                        <td>{this.props.password}</td>
                    </tr>
                    <tr>
                        <td>Data urodzenia</td>
                        <td>{this.props.date}</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}