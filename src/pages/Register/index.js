import React from 'react';

//Importa os estados para armazenar os inputs
import {useState} from 'react';

import './style.css';
import {Link} from 'react-router-dom';

//Direcionar o usuário para página anterior
import {useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';


import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Register(){

    const history = useHistory();

    //Variavés para receber os inputs. [nome, função de alteração]
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    //Função resposável por fazer o cadastro do Usuario
    async function handleRegister(e){
        //Evitar a página se recarregar
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try{
        //Faz uma solicitação POST no 'http://localhost:3333' + ongs
        // No Backend, o POst está configurado para executar o Create
        const response = await api.post('ongs', data);
        alert('Seu ID de acesso:   ' + response.data.id );

        //Reenvia para rota raiz
        history.push('/');
        }
        catch(err){
            alert("Erro no cadastro");
        }
        

    }



    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"></img>

                    <h1>Cadastro</h1>
                    <p>
                        Faça seu cadastro, entre na plataforma e ajude
                        pessoas a encontrarem os casos da sua ONG.
                    </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041"></FiArrowLeft>
                        Já possuo Cadastro
                    </Link>

                </section>

                <form onSubmit={handleRegister}>
                    <input 
                    placeholder="Nome da ONG"
                    value={name}
                    //e= paramentro recebido do evento de atualização
                    //setName função de alteração do nome
                    //e.tagert.value valor do campo
                    onChange={e => setName(e.target.value)}/>
                        
                   
                    <input 
                    type="email" placeholder="E-Mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>

                    
                    <input 
                    placeholder="WhatsApp"
                    value={whatsapp}
                    onChange={e=>setWhatsapp(e.target.value)}/>

                   
                    <div className="input-group">
                        <input 
                        placeholder="Cidade"
                        value={city}
                        onChange= {e=>setCity(e.target.value)}/>

                       
                        <input 
                        placeholder="UF" style={{width:80}}
                        value={uf}
                        onChange={e=>setUf(e.target.value)}/>

                        
                    </div>

                    <button className="button" type="submit">Cadastrar</button>


                </form>

            </div>
        </div>



    );
}


