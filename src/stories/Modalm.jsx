import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';
import { Modal } from './Modal';
import styled from 'styled-components';

export const Modalm =({text,contenido_modal, titulo_modal, titulo_contenido,tamano_hori,tamano_vert})=>{
    const [estadoModal1, setEstadoModal1] = React.useState(false);
    return (
        <div>
            <ContenedorBotones>
            <Boton onClick={()=>setEstadoModal1(!estadoModal1)}>{text}</Boton>
            </ContenedorBotones>
            <Modal
                estado={estadoModal1}
                setEstado={setEstadoModal1}
                titulo={titulo_modal}
                mostrarEncabezado={true}
                tamhh={tamano_hori}
                tamvv={tamano_vert}
                >
                <Contenido>
                <h1>{titulo_contenido}</h1>
                <p>{contenido_modal}</p>
                <Boton onClick={()=>setEstadoModal1(!estadoModal1)}>
                    Aceptar
                </Boton>
                </Contenido>
                
            </Modal>
    </div>
    )
};
Modalm.PropTypes = {
    
    text:PropTypes.string.isRequired,
    contenido_modal:PropTypes.string.isRequired,
    titulo_modal:PropTypes.string.isRequired,
    tamano_hor:PropTypes.number.isRequired,
    tamano_vert:PropTypes.number.isRequired

}

Modalm.defaultProps ={
    
    text:'',
    titulo_modal:'Titulo por defecto',
    titulo_contenido:'TITULO CONTENIDO',
    contenido_modal:'Este es el contenido del modal por defecto',
    tamano_hori:600,
    tamano_vert:300
    

};

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;