import React from "react";
import Posts from "./Posts";

class ButtonShowPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: undefined,
            elem: ''
        }
        this.getPost = this.getPost.bind(this)
    }

    getPost(e) {
        this.setState({id: this.props.id})
        let btn = document.querySelectorAll('.change');
        let btnText = e.nativeEvent.path[0];
        let id = Number(e.nativeEvent.path[2].children[0].textContent);
        this.setState({id: id});
        let togglePost = document.querySelectorAll('.post');
            togglePost[id-1].classList.toggle('hidden');
        if (this.state.id === undefined) {
            this.setState({elem: <p>No Post</p>});
                btn[id-1].textContent = 'Click Again';
        } else {
            this.setState({elem: <p><Posts id={this.state.id}/></p>});
            if(togglePost[togglePost.length-1].classList.contains('hidden')) {
                btnText.textContent = 'Show Posts'
            } else {
                btnText.textContent = 'Hide Posts'
            }
        }
    }
    render() {
        return (
            <>
            <button onClick={this.getPost} className='buttonInfo change'>Get Post Id</button>
                <div className='post'>
                    <h4>{this.state.elem}</h4>
                </div>
            </>
        )
    }
}

export default ButtonShowPost;