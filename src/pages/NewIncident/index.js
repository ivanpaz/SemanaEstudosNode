import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import './style.css'
import api from '../../services/api';

export default function NewIncident(){

    const history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');



    async function handleNewIncident(e){

        e.preventDefault();

        const data ={
            title,
            description,
            value
        };

        try{
            await api.post('incidents', data, {
                headers:{
                    Authorization: ongId
                }
            });
            

            history.push('/profile');

        }
        catch(err){
            alert("Erro ao cadastrar incident");
        }



    }


    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"></img>

                    <h1>Cadastro novo Caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encontrar como resolver
                    </p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041"></FiArrowLeft>
                        Voltar para home    
                    </Link>

                </section>

                <form onSubmit={handleNewIncident}>
                    <input placeholder="Titulo do caso"
                    valeu={title}
                    onChange={e => setTitle(e.target.value)}/>

                    <textarea placeholder="Descrição"
                    value={description}
                    onChange={e=>setDescription(e.target.value)}/>

                    <input placeholder="Valor em Reais"
                    value={value}
                    onChange={e=>setValue(e.target.value)}/>
                    

                    <button  className="button" type="submit">Cadastrar</button>


                </form>

            </div>
        </div>
    );
}