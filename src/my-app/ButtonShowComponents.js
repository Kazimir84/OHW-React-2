import React from "react";
import Comments from "./Comments";


class ButtonShowComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            comments: ''
        }
        this.getComponents = this.getComponents.bind(this);
    }

    getComponents(e) {
        let id = Number(e.nativeEvent.path[8].children[0].childNodes[0].textContent);
        let btnText = e.nativeEvent.path[0];
        this.setState({id: id});
        let toggleComments = document.querySelectorAll('.toggleComponents');
        toggleComments[toggleComments.length-1].classList.toggle('hidden');
        if (this.state.id === null || this.state.id === undefined) {
            this.setState({comments: <p>No Post</p>});
            btnText.textContent = 'Click Again'

        } else {
            this.setState({comments: <p><Comments id={this.state.id}/></p>});
            if(toggleComments[toggleComments.length-1].classList.contains('hidden')) {
                btnText.textContent = 'Show Components'
            } else {
                btnText.textContent = 'Hide Components'
            }
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.getComponents} className='buttonInfo components'>Show Components</button>
                <div className='toggleComponents'>
                    <h4>
                        {this.state.comments}
                    </h4>
                </div>
            </div>
        )
    }
}

export default ButtonShowComponents;