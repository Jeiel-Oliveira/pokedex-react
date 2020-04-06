import React, { Component } from 'react'
import axios from 'axios'

import Form from './form'

export default class Card extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            pokemonType: [],
            pokemonImagem: '',
            pokemonName: '',
            pokemonWeight: '',
            pokemonMoves: [],
            pokemonStatus: []

        }                     
    }

    componentDidMount(){
        let that = this;

        const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

        axios.get(`${BASE_URL}/charizard`).then(function (res){
            // console.log(res.data.sprites.front_default) 
            // console.log(res.data.moves)        

            that.setState({ 
                pokemonType: res.data.types,
                pokemonImagem: res.data.sprites.front_default,            
                pokemonName: res.data.name,
                pokemonWeight: res.data.weight,
                pokemonMoves: res.data.moves.slice(0, 4),
                pokemonStatus: res.data.stats
                                                                    
             })                            
         });                  
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

                <div>
                    <img src={this.state.pokemonImagem} />                    
                </div>

                <div className="card-body">
                    <p className="card-text">{this.props.text}</p>
                </div>    

                <div className="text-center">
                    <h3>Type: </h3>
                    <ul>{this.state.pokemonType.map(item => (
                        <li key={item}>{item.type.name}</li>
                    ))}</ul>

                    <h3>Nome:</h3>
                    <p>{this.state.pokemonName}</p>                    

                    <h3>peso:</h3>                    
                    <p>{this.state.pokemonWeight}</p>                    
                </div>   

                <div>
                    <h3>Moves</h3>
                    <ul>
                        {this.state.pokemonMoves.map(item => (
                            <li key={item.move.name}>{item.move.name}</li>
                        ))}
                    </ul>
                </div>                             

                <div>
                    <h3>Status</h3>
                    <ul>
                        {this.state.pokemonStatus.map(item => (
                            <li key={item.stat}>{item.stat.name}: {item.base_stat}</li>
                        ))}
                    </ul>
                </div>                                  

            </div>
        )
    }
}