import React, { Component } from 'react'
import axios from 'axios'

import Row from '../commom/layout/row'
import Col from '../commom/layout/grid'
import CardName from './cardName'
import CardMoves from './cardMoves'
import Form from './form'
import pokemonColor from '../main/pokemonColor'


import '../css/style.css'

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

let pokemonTypes = []

export default class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemonType: [],
            pokemonImagem: '',
            pokemonImagemShiny: '',
            pokemonName: '',
            pokemonWeight: '',
            pokemonMoves: [],
            pokemonStatus: [],

            value: '',
            pokemonBaseColor: ''
        }        

        this.handleChange = this.handleChange.bind(this);
        this.callPokemon = this.callPokemon.bind(this);
        this.setBaseColor = this.setBaseColor.bind(this);                  
    }   
        
    componentDidMount () {                
        this.callPokemon('pikachu')        
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }

    handleSubmit = async (event, pokemon) => {
        pokemon = this.state.value

        this.callPokemon(pokemon)        
        event.preventDefault();
    }

    callPokemon = async (pokemon) => {        
        let data = await api.get(`/${pokemon}`).then(({ data }) => data)

        this.setState({
            pokemonType: data.types,
            pokemonImagem: data.sprites.front_default,
            pokemonImagemShiny: data.sprites.front_shiny,
            pokemonName: data.name,
            pokemonWeight: data.weight,
            pokemonMoves: data.moves.slice(0, 4),
            pokemonStatus: data.stats
        })

        this.setBaseColor(this.state.pokemonType[0], true)
        document.documentElement.style.setProperty('--base', this.state.pokemonBaseColor)

        pokemonTypes = document.querySelectorAll('.pokemon-type') 
                
        /* this.setBaseColor(pokemonTypes[0], false) */
                
        /* for(let i = 0; i < pokemonTypes.length; i++){
            this.setBaseColor(pokemonTypes[i], false)
        } */
    }

    setBaseColor(color, isState) {

        let typeBase = isState ? color.type.name : color.innerHTML

        console.log(typeBase)
        
        switch (typeBase) {
            case 'normal':
                this.setColorType(pokemonColor.normal, isState)                                
                break
            case 'fire':
                this.setColorType(pokemonColor.fire, isState)
                break
            case 'fighting':
                this.setColorType(pokemonColor.fighting, isState)
                break
            case 'water':
                this.setColorType(pokemonColor.water, isState)
                break
            case 'flying':
                this.setColorType(pokemonColor.flying, isState)
                break
            case 'grass':
                this.setColorType(pokemonColor.grass, isState)
                break
            case 'poison':
                this.setColorType(pokemonColor.poison, isState)
                break
            case 'electric':
                this.setColorType(pokemonColor.electric, isState)
                break
            case 'ground':
                this.setColorType(pokemonColor.ground, isState)
                break
            case 'psychic':
                this.setColorType(pokemonColor.psychic, isState)
                break
            case 'rock':
                this.setColorType(pokemonColor.rock, isState)
                break
            case 'ice':
                this.setColorType(pokemonColor.ice, isState)
                break
            case 'bug':
                this.setColorType(pokemonColor.bug, isState)
                break
            case 'dragon':
                this.setColorType(pokemonColor.dragon, isState)
                break
            case 'ghost':
                this.setColorType(pokemonColor.ghost, isState)
                break
            case 'dark':
                this.setColorType(pokemonColor.dark, isState)
                break
            case 'steel':
                this.setColorType(pokemonColor.steel, isState)
                break
            case 'fairy':
                this.setColorType(pokemonColor.fairy, isState)
                break

            default:
                this.setColorType(pokemonColor.default, isState)
                break
        }
    }

    setColorType(color, isState) {        
        isState ? this.setState({ pokemonBaseColor: color }) : pokemonTypes.style.background = color                    
    }    

    render() {
        return (            
            <div>
                <Form onSubmit={this.handleSubmit} onChange={this.handleChange} value={this.state.value} />

                <Row>
                    <Col cols={'6'}>
                        <CardName                            
                            srcNormal={this.state.pokemonImagem}
                            srcShiny={this.state.pokemonImagemShiny}
                            name={this.state.pokemonName}
                            type={
                                this.state.pokemonType.map((item, index) => (
                                    <span
                                        className="pokemon-type mx-3 type-base"                                        
                                        key={index}>{item.type.name}
                                    </span>
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
            </div>
        )
    }
}