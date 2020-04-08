import React, { Component } from 'react'

import Form from './form'

import Row from '../commom/layout/row'
import Col from '../commom/layout/grid'

export default class CardName extends Component {
    
    render(){
        return(

            <div className="card mx-auto">
                <Form onSubmit={this.props.onSubmit} onChange={this.props.onChange} value={this.props.value} />                

                <Row>
                    <Col cols="6">
                        <div className="text-center">
                            <img src={this.props.src} />                    
                        </div>

                        <div className="text-center">                                                        
                            {this.props.type}                            
                        </div>                                                
                    </Col>

                    <Col cols="6">                    
                        <div className="text-center">                            
                            <div className="d-flex">                                            
                                <h3>Nome: </h3>                            
                                <p className="m-auto">{this.props.name}</p>                                                    
                            </div>                                        

                            <div className="d-flex">                                
                                <h3>peso:</h3>                    
                                <p className="m-auto">{this.props.weight}</p>                    
                            </div>
                        </div>
                    </Col>

                </Row>
            </div>

        )
    }

}