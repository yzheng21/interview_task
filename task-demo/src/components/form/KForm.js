import React, { Component } from 'react';
import FormItem from './FormItem';
import KInput from './KInput';
import Icon from '../shared/Icon';
import KFormCreate from './KFormCreate';
import data from '../../mock/data';

class KForm extends Component {
    render() {
        const inputList = data;
        const {getFieldDec} = this.props;
        return (
            <div className="KForm-container">
                {
                    inputList.map(item => 
                        <FormItem key={item.id}>
                            {getFieldDec(item)(<KInput type="checkbox" prefix={<Icon type={item.id}></Icon>} />)}
                        </FormItem>
                    )
                }
            </div>
        );
    }
}

export default KFormCreate(KForm);