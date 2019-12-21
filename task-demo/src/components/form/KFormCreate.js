import React, { Component } from 'react';

function KFormCreate(Comp) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {};
        }

        // create Input wrapper
        getFieldDec = (field, index) => {
            let property;
            typeof field === "object" ? property = {
                name: index,
                value: field.details,
                checked: field.completed
            } : property = {
                name: index,
                value: ''
            }
            return InputComp => (
                <div>
                    {React.cloneElement(InputComp, property)}
                </div>
            );
        }

        render() {
            return <Comp {...this.props} getFieldDec={this.getFieldDec} />
        }
    }
}

export default KFormCreate;