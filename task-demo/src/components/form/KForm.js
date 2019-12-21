import React, { Component } from 'react';
import FormItem from './FormItem';
import CheckboxInput from './KInput';
import Icon from '../shared/Icon';
import KFormCreate from './KFormCreate';
import data from '../../mock/data';
import { connect } from 'react-redux';
import { load, update } from '../../store/form.redux';
import DisplayTable from '../DisplayTable';

const mapStateToProps = state => ({initialData: state.form.data});
const mapDispatcherToProps = {load, update};

class KForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.setState({data: this.props.load(data).data, offSet: 5});
    }

    showMore = () => {
        if (this.state.offSet + 3 <= this.state.data.length) {
            this.setState(state => ({ offSet: state.offSet + 3 }));
        } else {
            this.setState({ offSet: this.state.data.length })
        }
    }

    handleChange = (e) => {
        if (e.target.type === "checkbox") {
            let index = e.target.name;
            let status = e.target.checked;
            let newData = this.props.initialData;
            newData[index].completed = status;
            this.props.update(newData);
        } else {
            // other input type hanle
        }
    }
    
    render() {
        const { getFieldDec } = this.props;
        
        return (
            <div className="KForm-container">
                {
                    this.state.data ? this.state.data
                    .slice(0, this.state.offSet)
                    .map((item, i) => 
                        <FormItem key={i}>
                            {getFieldDec(item, i)(
                            <CheckboxInput type="checkbox" prefix={<Icon type={item.id}></Icon>} onChange={this.handleChange} />
                            )}
                        </FormItem>
                    ) : 'loading...'
                }
                <button onClick={this.showMore}>show more</button>
                {/* <DisplayTable /> */}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(KFormCreate(KForm));