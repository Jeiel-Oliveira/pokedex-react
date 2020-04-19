import React, { Component } from 'react'
import axios from 'axios'

import Row from '../commom/layout/row'
import Col from '../commom/layout/grid'
import CardName from './cardName'
import CardMoves from './cardMoves'
import Form from './form'
import pokemonColor from '../main/pokemonColor'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faShieldAlt, faShieldVirus, faBurn, faHeartbeat, faHandRock } from '@fortawesome/free-solid-svg-icons'

import '../css/style.css'

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

let iconsStatus = [
    faTachometerAlt,
    faShieldVirus,    
    faBurn,    
    faShieldAlt,
    faHandRock,
    faHeartbeat
]

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
            AllOptions: [],            
            setDisplay: false,            
            setOptions: [],
            search: '',
            setSearch: '',            
            pokemonBaseColor: '',
            exp: '',
            statusDisplay: false,                        

            input_width: '',
            autocomplete_width: ''            
        }                   

        this.handleChange = this.handleChange.bind(this);
        this.callPokemon = this.callPokemon.bind(this);
        this.setBaseColor = this.setBaseColor.bind(this);
        
        this.myRef = React.createRef();                
    }               
    
    componentWillMount () {
        const pokemon = [];
        this.callPokemon('pikachu')   

        const promises = new Array(806)
            .fill()
            .map((v, i) => fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`))        

        Promise.all(promises).then(pokemonArr => {
            return pokemonArr.map(value =>
              value
                .json()
                .then(({ name }) =>
                  pokemon.push({ name })
                )
            );
        });                        

        this.setState({
            setOptions: pokemon
        })
        
        document.addEventListener("mousedown", this.handClickOutside)                        
    }

    componentDidUpdate () {        
        window.addEventListener("resize", this.setDisplayWidth)                
    }

    setDisplay = () => {
        this.setState({ setDisplay: true })                
        this.setDisplayWidth()
    }

    setDisplayWidth = () => {
        let input_search = document.getElementById('input_search');

        this.setState({
            autocomplete_width: input_search.offsetWidth
        })
    }

    handClickOutside = event => {        
        
        if (this.myRef && !this.myRef.current.contains(event.target)) {
            this.setState({ setDisplay: false })            
        }

    }

    setPokedex = poke => {
        this.setState({ 
            setSearch: poke,
            setDisplay: false
        })
    }   

    handleChange = (event) => {
        this.setState({ setSearch: event.target.value })
    }

    handleSubmit = async (event, pokemon) => {
        pokemon = this.state.setSearch

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
            pokemonWeight: Math.round((data.weight / 2.205)).toFixed(2),
            pokemonMoves: data.moves.slice(0, 4),
            pokemonStatus: data.stats,
            AllOptions: data,
            exp: data.base_experience
        })        

        this.setBaseColor(this.state.pokemonType[0])
        document.documentElement.style.setProperty('--base', this.state.pokemonBaseColor)

        pokemonTypes = document.querySelectorAll('.pokemon-type')                                 
                
        for(let i = 0; i < pokemonTypes.length; i++){
            switch (pokemonTypes[i].innerHTML) {
                case 'normal':
                    pokemonTypes[i].style.background = pokemonColor.normal                                
                    break
                case 'fire':
                    pokemonTypes[i].style.background = pokemonColor.fire
                    break
                case 'fighting':
                    pokemonTypes[i].style.background = pokemonColor.fighting
                    break
                case 'water':
                    pokemonTypes[i].style.background = pokemonColor.water
                    break
                case 'flying':
                    pokemonTypes[i].style.background = pokemonColor.flying
                    break
                case 'grass':
                    pokemonTypes[i].style.background = pokemonColor.grass
                    break
                case 'poison':
                    pokemonTypes[i].style.background = pokemonColor.poison
                    break
                case 'electric':
                    pokemonTypes[i].style.background = pokemonColor.electric
                    break
                case 'ground':
                    pokemonTypes[i].style.background = pokemonColor.ground
                    break
                case 'psychic':
                    pokemonTypes[i].style.background = pokemonColor.psychic
                    break
                case 'rock':
                    pokemonTypes[i].style.background = pokemonColor.rock
                    break
                case 'ice':
                    pokemonTypes[i].style.background = pokemonColor.ice
                    break
                case 'bug':
                    pokemonTypes[i].style.background = pokemonColor.bug
                    break
                case 'dragon':
                    pokemonTypes[i].style.background = pokemonColor.dragon
                    break
                case 'ghost':
                    pokemonTypes[i].style.background = pokemonColor.ghost
                    break
                case 'dark':
                    pokemonTypes[i].style.background = pokemonColor.dark
                    break
                case 'steel':
                    pokemonTypes[i].style.background = pokemonColor.steel
                    break
                case 'fairy':
                    pokemonTypes[i].style.background = pokemonColor.fairy
                    break
    
                default:
                    pokemonTypes[i].style.background = pokemonColor.default
                    break
            }
        }
    }

    setBaseColor(color) {                        
        
        switch (color.type.name) {
            case 'normal':
                this.setColorType(pokemonColor.normal)                                
                break
            case 'fire':
                this.setColorType(pokemonColor.fire)
                break
            case 'fighting':
                this.setColorType(pokemonColor.fighting)
                break
            case 'water':
                this.setColorType(pokemonColor.water)
                break
            case 'flying':
                this.setColorType(pokemonColor.flying)
                break
            case 'grass':
                this.setColorType(pokemonColor.grass)
                break
            case 'poison':
                this.setColorType(pokemonColor.poison)
                break
            case 'electric':
                this.setColorType(pokemonColor.electric)
                break
            case 'ground':
                this.setColorType(pokemonColor.ground)
                break
            case 'psychic':
                this.setColorType(pokemonColor.psychic)
                break
            case 'rock':
                this.setColorType(pokemonColor.rock)
                break
            case 'ice':
                this.setColorType(pokemonColor.ice)
                break
            case 'bug':
                this.setColorType(pokemonColor.bug)
                break
            case 'dragon':
                this.setColorType(pokemonColor.dragon)
                break
            case 'ghost':
                this.setColorType(pokemonColor.ghost)
                break
            case 'dark':
                this.setColorType(pokemonColor.dark)
                break
            case 'steel':
                this.setColorType(pokemonColor.steel)
                break
            case 'fairy':
                this.setColorType(pokemonColor.fairy)
                break

            default:
                this.setColorType(pokemonColor.default)
                break
        }
    }

    setColorType(color) {                
        this.setState({ pokemonBaseColor: color })                    
    }    

    render() {                    
        
        return (            
            <div ref={this.myRef}>
                <Form                                        
                    onSubmit={this.handleSubmit}
                    value={this.state.setSearch}
                    onChange={event => this.setState({ setSearch: event.target.value })}
                    onKeyPress={this.setDisplay}                                         
                    
                    searchBar={
                        this.state.setDisplay && (
                            <div className="auto-container" id="auto-complete" style={{ position: "absolute", width: this.state.autocomplete_width }}>
                                {this.state.setOptions.filter(({ name }) => name.indexOf(this.state.setSearch.toLowerCase()) > -1).map((v, i) => {
                                    return <div 
                                                onClick={() => this.setPokedex(v.name)} 
                                                className="option" 
                                                key={i}
                                                tabIndex={0}                                                                                                
                                                >                                                    
                                        {v.name}
                                    </div>
                                })}
                            </div>
                        )  
                    }
                     />                 
                    
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
                            weight={`${this.state.pokemonWeight} kg`}
                            exp={`${this.state.exp} xp`}
                        />
                    </Col>

                    <Col cols={'6'}>                        
                        <CardMoves 
                            onClick={() => this.setState({ statusDisplay: true })}
                        
                            moves={
                                this.state.pokemonMoves.map((item, index) => (
                                    <li className="list-group-item" key={index}>{item.move.name}</li>
                                ))
                            }
                            status={
                                this.state.pokemonStatus.map((item, index) => (                                                                        
                                    <li className="list-group-item" key={index}>
                                        <div className="row text-center">
                                            <div className="offset-2 col-2">
                                                <FontAwesomeIcon icon={iconsStatus[index]} />
                                            </div>
                                            
                                            <div className="col-6 text-right">
                                                {item.stat.name}: {item.base_stat}
                                            </div>
                                        </div>
                                    </li>                                    
                                ))
                            }
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}