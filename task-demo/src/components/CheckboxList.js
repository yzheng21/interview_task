import React, { Component } from 'react';

function CheckboxCreate(Comp) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {};
        }

        handleChange = (e) => {
            const {item} = this.props;
            // console.log(e.target.name);
            // const {name, completed} = e.target;
            // this.setState({[name]: completed});
            // console.log(this.state);
            console.log(this.props);
            console.log(e.target.checked);
            this.setState({[item.id]: e.target.checked})
        }

        render() {
            return <Comp {...this.props} onChange={this.handleChange} />
        }
    }
}

function CheckboxList(props) {
    const {onChange} = props;
    return (
        <div className="checkbox-item">
            <input key={props.item.key} type="checkbox" defaultChecked={props.item.completed} onChange={onChange} />
            {props.item.details}
        </div>
    );
}

export default CheckboxCreate(CheckboxList);