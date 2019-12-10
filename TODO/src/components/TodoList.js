import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../actions';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };

        this.renderList = this.renderList.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    renderList() {
        return this.props.list.map((item, index) => {
            return (
                <div key={index}>
                    {item.title}
                </div>
            );
        });
    }
    addItem() {
        const newList = [...this.props.list, { title: this.state.text }];
        this.props.createTodo(newList);
    }

    render() {
        return (
            <div>
                <textarea value={this.state.text} onChange={(event) => this.setState({ text: event.target.value })}></textarea>
                <button onClick={() => this.addItem()}>Add </button>
                <button>Delete</button>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.todo.items
    };
}

export default connect(mapStateToProps, {
    createTodo
})(TodoList);