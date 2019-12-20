import React, { Component } from 'react';

class FormItem extends Component {
    render() {
        return (
            <div className="formItem">
                {this.props.children}
                {/* we can add validation message here */}
            </div>
        );
    }
}

export default FormItem;