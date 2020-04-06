import React, { Component } from 'react'
import axios from 'axios'

import Form from './form'

export default class Card extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            pokemonName: ''
        }

        
    }

    callPokemon(pokemon){
        const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
        const request = axios.get(`${BASE_URL}/pikachu`).then(function (res){
            console.log(res.data.forms[0].name)            
        });                                  
    }


    render() {
        return (
            <div className="card mx-auto">

                <Form />

                <img className="card-img-top" src={this.props.src} alt="Card image cap" />        

                <div className="card-body">
                    <p className="card-text">{this.props.text}</p>
                </div>                                    

            </div>
        )
    }
}