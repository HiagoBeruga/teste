import React from 'react';
import Headers from '../../Headers';
import { Jumbotron, UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        src: './imagens/1.jpg',
        altText: 'Bike Girl',
        caption: 'oct 3, 2020',
        header: '"Bike Girl"',
        key: '1'
    },
    {
        src: './imagens/2.jpg',
        altText: 'Boobiez',
        caption: 'oct 1, 2020',
        header: '"Boobiez"',
        key: '2'
    },
    {
        src: './imagens/3.jpg',
        altText: 'Coraline ',
        caption: 'nov 30, 2020',
        header: '"Coraline"',
        key: '3'
    }
];

function Main() {
    return (
        <div>
            <Headers />
            <Jumbotron>
                <h4 align="center" className="display-3">Bem-vindo(a)!</h4>
                <p align="center" className="lead">Este site é um simples exercício de aprendizado meu, compreendendo as funcionalidades do React.</p>
                <hr className="my-2" />
                <p className="lead">
                </p>
                <UncontrolledCarousel items={items} />
            </Jumbotron>
        </div>
    );
}

export default Main;