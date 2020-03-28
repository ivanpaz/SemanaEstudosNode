import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import './style.css'

export default function NewIncident(){
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

                <form>
                    <input placeholder="Titulo do caso"></input>
                    <textarea placeholder="Descrição"></textarea>
                    <input placeholder="Valor em Reais"></input>
                    

                    <button className="button" type="submit">Cadastrar</button>


                </form>

            </div>
        </div>
    );
}