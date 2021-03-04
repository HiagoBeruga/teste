import React, { useState } from 'react';
import Headers from '../../Headers';
import { desenhos1, desenhos2 } from '../../desenhos';
import { Jumbotron, Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Portfolio = (props) => {

    const { buttonLabel, fullscreen } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Headers />
            <Jumbotron>
                <CardGroup>
                    {desenhos1.map(desenho1 => (
                        <Card style={{ width: "24%", height: "10%" }}>
                            <CardImg top src={desenho1.src} alt="Card image cap" />
                            <CardBody align="center">
                                <CardTitle tag="h5">{desenho1.title}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{desenho1.subtitle}</CardSubtitle>
                                <CardText>{desenho1.text}</CardText>
                                <a target="_blank" href={desenho1.srca}><Button color="info" >Visualizar Imagem Completa</Button></a>
                            </CardBody>
                        </Card>
                    ))}
                </CardGroup>
                <CardGroup>
                    {desenhos2.map(desenho2 => (
                        <Card style={{ width: "24%", height: "10%" }}>
                            <CardImg top src={desenho2.src} alt="Card image cap" />
                            <CardBody align="center">
                                <CardTitle tag="h5">{desenho2.title}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{desenho2.subtitle}</CardSubtitle>
                                <CardText>{desenho2.text}</CardText>
                                <a target="_blank" href={desenho2.srca}><Button color="info" >Visualizar Imagem Completa</Button></a>
                            </CardBody>
                        </Card>
                    ))}
                </CardGroup>
            </Jumbotron>
        </div>
    );
}

export default Portfolio;