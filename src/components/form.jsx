import React, { Component } from 'react'

import Button from '../commom/widget/button'
import Input from '../commom/widget/input'



export default class Form extends Component {
    
    render() {

        return (
            <form className="form mx-auto" onSubmit={ this.props.onSubmit }>
                <div className="row">
                    <div className="col">
                        <div className="form-group">                    
                            <Input 
                                className="mx-auto form-control"
                                type='text' 
                                placeholder='Pokemon..' 
                                value={this.props.value} 
                                onChange={this.props.onChange} />                    
                        </div>                
                    </div>                    

                    <div className="col">
                        <Button type='submit' color='primary' text='Pesquisar' className="form-control" />
                    </div>
                </div>                
            </form>
        )
    }
}