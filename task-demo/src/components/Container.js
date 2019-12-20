import React, { Component } from 'react';
import data from "../mock/data"; 
import CheckboxList from './CheckboxList';

class Container extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const itemList = data;
        return (
            <div className="container">
                <form className="form">
                    <div className="list-group col-xs-6">
                        {
                            itemList.map(value => <CheckboxList item={value} key={value.id} /> )
                        }                       
                    </div>
                </form>
            </div>
        );
    }
}

export default Container;