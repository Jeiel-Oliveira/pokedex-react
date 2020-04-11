import React, { Component } from 'react'

import '../css/style.css'

export default class CardName extends Component {
    
    render(){
        return(

            <div>                                                                
            
                <div className="card pokemon-name-card">

                    <div className="text-center">
                        <img className="w-50" src={this.props.srcNormal} alt="Card image cap" />
                        <img className="w-50" src={this.props.srcShiny} alt="Card image cap" />                        
                    </div>
                                
                    <div className="card-body">                            
                        <div className="text-center">                                                        
                            {this.props.type}                            
                        </div>                                                                            
                    </div>                    
                                    
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Nome: </strong>{this.props.name}</li>
                        <li className="list-group-item"><strong>Peso: </strong>{this.props.weight}</li>                            
                    </ul>                        
                </div>                
            </div>

        )
    }

}