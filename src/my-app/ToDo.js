import React from "react";
import myCSS from './myCSS.css'

const URL = 'http://jsonplaceholder.typicode.com/todos'


class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [],
            error: null,
            isLoading: false
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        fetch(URL)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw Error('Error fetching ToDo')
                }
            })
            .then(todo => {
                let listTodo = todo.filter(index => index.userId === this.props.id);
                this.setState({todo: listTodo, isLoading: false});
            })
            .catch(error => {
                this.setState({error})
            })
    }

    render() {
        if (this.state.error) {
            return <p style={{color: "red"}}>{this.state.error.message}</p>
        }
        if (this.state.isLoading) {
            return <p>To Dos is loading ...</p>
        }
        return (
            <>
                <div className='toDo'> To Dos
                    {this.state.todo.map(todos =>
                        <ul className='usersClass'>
                            <li>
                                <span>User ID:</span> <span className='toDosId'>{todos.userId}</span>
                            </li>
                            <li>
                                Id: {todos.id}
                            </li>
                            <li>
                                Title: {todos.title}
                            </li>
                            <li>
                                Completed: {`${todos.completed}`}
                            </li>
                        </ul>
                    )}
                </div>
            </>
        )
    }
}

export default ToDo;