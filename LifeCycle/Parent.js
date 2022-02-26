import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {
    constructor(props){
    super(props);
    console.log('constructor');
    }

    static getDedrivedStateFromProps(newProps, currentState){
    console.log('getDedrivedStateFromProps');
    return null;
    }

    render() {
    console.log('render');
        return (
            <div className='container'>
                <Child/>
                
            </div>
        )
    }

    componentDidMount(){
        console.log('componentDidMount');
    }
}

