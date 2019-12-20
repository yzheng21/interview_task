import React from 'react';
import { Component } from 'react';

function KFormCreate(Comp) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {};
        }

        handleChange = (e) => {
            console.log(e.target.name);
            console.log(e.target.checked);
            // const {name, checked} = e.target;
            // this.setState({[name]: checked});
        }

        // create Input wrapper
        getFieldDec = (field) => {
            return InputComp => (
                <div>
                    {React.cloneElement(InputComp, {
                        name: field.id,
                        value: field.details,
                        checked: field.completed,
                        onChange: this.handleChange
                    })}
                </div>
            );
        }

        render() {
            return <Comp {...this.props} getFieldDec={this.getFieldDec} />
        }
    }
}

export default KFormCreate;