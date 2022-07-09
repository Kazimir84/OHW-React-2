import React from "react";
import ToDo from "./ToDo";

class ButtonShowToDos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            toDo: ''
        }
        this.getToDos = this.getToDos.bind(this)
    }
    getToDos(e) {
        let id = Number(e.nativeEvent.path[8].children[0].childNodes[0].textContent);
        let btnText = e.nativeEvent.path[0];
        this.setState({id: id});
        let toggleToDos = document.querySelectorAll('.toggleToDos');
            toggleToDos[toggleToDos.length-1].classList.toggle('hidden');
        if (this.state.id === null || this.state.id === undefined) {
            this.setState({toDo: <p>No To Dos</p>});
            btnText.textContent = 'Click Again'

        } else {
            this.setState({toDo: <p><ToDo id={this.state.id}/></p>});
            if(toggleToDos[toggleToDos.length-1].classList.contains('hidden')) {
                btnText.textContent = 'Show To Dos'
            } else {
                btnText.textContent = 'Hide To Dos'
            }
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.getToDos} className='buttonInfo toDos'>Show To Dos</button>
                <div className='toggleToDos'>
                    <h4>{this.state.toDo}</h4>
                </div>
            </div>
        )
    }
}

export default ButtonShowToDos;