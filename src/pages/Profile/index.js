import React, { useState } from 'react';

//erve para disparar uma função em algum momento
import {useEffect} from 'react';
import './style.css';

import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';


import api from '../../services/api';



export default function Profile(){
    //Array para salvar os incidents buscado dessa Ong
    const [incidents, setIncidents] = useState([]);
    //Navegar entra paginas
    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    /*useEffect recebe duas funções
    1- Qual função será  executada
    2- Quando a função será  executada - Array[] de dependencias
        Se deixasse [ongName], sempre o que  valor mudace, iria executar
        Se deixar vaxio [], será executado uma unica vez
    */
    useEffect(()=> {
        api.get('profile', //Caminho get/profile que é o select no DB
        {
            headers: //Será passado a headers
            {
                Authorization: ongId //o valor do Atributo Authorization da headers
            }
        }).then(response=>{//pega a resposta e salva no array incidents 
            setIncidents(response.data);
        }) 
    },[ongId] );

    //Função para deletar um item
    async function handleDeleteIncident(id){
        try{
            await api.delete('incidents/'+id, { 
                headers: {
                    Authorization: ongId
                }            
            });           

            //Retira do array incidents o que foi deletado, atualizando em tempo real
           setIncidents(incidents.filter(incident => incident.id !== id));
        }
        catch(err){
            alert("Erro ao deletar");
        }
    }

    function handleLogout(){
        //limpa todos os cookies
        localStorage.clear();
        history.push('/');

    }

    return (

        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vindo, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso </Link>
            
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"/>
                    
                </button>
            </header>

            <h1>Casos Cadastrados</h1>
            <ul>
                {/*incidents.map percorre por todos os elementos de incidents
                   Para cada um dos incidents  será armazenado na variavel incident
                   e será escrito na tela o html de cada um.
                   Map fucniona como um foreach*/}
                {incidents.map(incident =>( 
                    <li key={incident.id}> {/*Tem que ser passado um valor unico por elemento*/}
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat( //Formatar para ser R$0,00
                            'pt-BR', //Linguagem brasileira
                            {
                                style: 'currency', //tipo moeda
                                currency: 'BRL' //Real 
                            }).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                        </button> 
                    </li>
                ))}

          


              
            </ul>

        </div>

    );
}