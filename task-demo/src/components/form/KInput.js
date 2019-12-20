import React, { Component } from 'react';

class KInput extends Component {
    render() {
        const {name, onChange, value, type, prefix, checked} = this.props;
        return (
            <div className="input-item">
                {prefix}
                <input name={name} type={type} onChange={onChange} defaultChecked={checked} />
                {value}
            </div>
        );
    }
}

export default KInput;