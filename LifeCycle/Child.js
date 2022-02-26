import React, { Component } from 'react'

export default class Child extends Component {

    constructor(props){
        super(props);
        console.log('constructor child');
    }

    static getDedrivedStateFromProps(newProps, currentState){
        console.log('getDedrivedStateFromPropschild');

        return null;
        }
    render() {
        console.log('render child');
        return (
            <div>
                
            </div>
        )
    }
    componentDidMount(){
        console.log('componentDidMountchild');
    }
}
