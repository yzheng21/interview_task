import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({data: state.form});

class DisplayTable extends Component {

    render() {
        return (
            <div className="Display-Table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Details</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data ? this.props.data.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.details}</td>
                                        <td>{item.completed ? 'True' : 'False'}</td>
                                    </tr>
                                )
                            }) : <tr><td colSpan="3">Not Found</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(mapStateToProps)(DisplayTable);