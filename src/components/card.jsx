import React, { Component } from 'react'
import axios from 'axios'

import Form from './form'


import Row from '../commom/layout/row'
import Col from '../commom/layout/grid'
import CardName from './cardName'
import CardMoves from './cardMoves'

export default class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {            
            pokemonType: [],
            pokemonImagem: '',
            pokemonName: '',
            pokemonWeight: '',
            pokemonMoves: [],
            pokemonStatus: [],

            listShow: false,
            value: ''
        }                     
        
        this.handleChange = this.handleChange.bind(this);
        this.callPokemon = this.callPokemon.bind(this);
    }     

    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }    

    showList = () => {
        this.setState({ listShow: true })
    }

    hideList = () => {
        this.setState({ listShow: false })
    }

    callPokemon(event, pokemon){        
        
        var that = this;      
        pokemon = this.state.value  
        
        const BASE_URL = `https://pokeapi.co/api/v2/pokemon`;

        axios.get(`${BASE_URL}/${pokemon}`).then(function (res){                    
            that.setState({ 
                pokemonType: res.data.types,
                pokemonImagem: res.data.sprites.front_default,            
                pokemonName: res.data.name,
                pokemonWeight: res.data.weight,
                pokemonMoves: res.data.moves.slice(0, 4),
                pokemonStatus: res.data.stats                                                                    
                })
        });                                                      
        
        /* alert('Um nome foi enviado: ' + this.state.value) */
        event.preventDefault();
    }    
            
    render() {
        return (    
            <Row>
                <Col cols={'6'}>
                    <CardName
                        onSubmit={this.callPokemon}
                        onChange={this.handleChange}
                        value={this.state.value}
                        src={this.state.pokemonImagem}
                        name={this.state.pokemonName}
                        type={
                            this.state.pokemonType.map((item, index) => ( 
                                <span className="m-auto px-3" key={index}>{item.type.name}</span>
                            ))
                        }
                        weight={this.state.pokemonWeight}
                    />
                </Col>
                    
                <Col cols={'6'}>
                    <CardMoves
                        moves={
                            this.state.pokemonMoves.map((item, index) => (
                                <li className="list-group-item" key={index}>{item.move.name}</li>
                            ))
                        }     
                        status={
                            this.state.pokemonStatus.map((item, index) => (
                                <li className="list-group-item" key={index}>{item.stat.name}: {item.base_stat}</li>
                            ))
                        }
                    />
                </Col>            
            </Row>                                           
        )
    }
}