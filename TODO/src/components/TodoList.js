import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../actions';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            isloggedIn: false
        };

        this.renderList = this.renderList.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    renderList() {
        return this.props.items.map((item, index) => {
            return (
                <div key={index}>
                    {item.title}
                    <button onClick={() => this.deleteItem(index)}>Delete</button>
                </div>
            );
        });
    }

    addItem() {
        const newList = [...this.props.items, { title: this.state.text }];
        this.props.createTodo(newList);
    }

    deleteItem(index) {
        const deleteItem = this.props.items.filter((i, j) => j !== index)
        this.props.createTodo(deleteItem);
    }

    render() {
        return (
            <div>
                {!this.props.isLoggedIn ?
                    (<h1>Login To Add ToDo</h1>
                    ) : (
                        <div>
                            <div>
                                <textarea value={this.state.text} onChange={(event) => this.setState({ text: event.target.value })}></textarea>
                                <button onClick={() => this.addItem()}>Add</button>
                                <button onClick={() => this.props.createTodo([])}>Reset</button>
                                {this.renderList()}
                            </div>
                        </div>)}
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.todo.items
    };
}


export default connect(mapStateToProps, {
    createTodo
})(TodoList);
