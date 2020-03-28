import React from 'react';
import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'; //Usado para não recarregar o 
                                       //React quando muda de pagina


import api from '../../services/api';

//Para baixar npm install react-icons
//Para ver quais do Fi - https://feathericons.com/
import {FiLogIn} from 'react-icons/fi'; 

import './styles.css';
import '../../global.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon(){
    const[id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('session', {id});
            console.log(response.data.name);

            //Armazena esses dados em "cookies"
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');

        }
        catch(err){
            alert("Falha no Login");
        }

    }


    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041"></FiLogIn>
                        Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>

    )
}