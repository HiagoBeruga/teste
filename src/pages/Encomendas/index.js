import React from 'react';
import Headers from '../../Headers';
import encomendas from '../../encomendas';
import { Jumbotron, Table } from 'reactstrap';

const Encomendas = (props) => {
    return (

        //NESTE CASO, O JSON QUE ALIMENTARIA A TABELA NÃO VIRIA DO IMPORT DO ARQUIVO ENCOMENDAS, E SIM DE UMA CONEXÃO COM UMA API

        <div>
            <Headers />
            <Jumbotron>
                <h1 align="center">Lista de Encomendas</h1>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Cliente</th>
                            <th>Data Limite</th>
                            <th>Encomenda</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                    {encomendas.map(encomenda => (
                        <tr>
                            <th scope="row">{encomenda.id}</th>
                            <td>{encomenda.cliente}</td>
                            <td>{encomenda.data}</td>
                            <td>{encomenda.encomenda}</td>
                            <td>{encomenda.valor}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Jumbotron>
        </div>
    );
}

export default Encomendas;