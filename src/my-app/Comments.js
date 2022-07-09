import React from "react";
import myCSS from './myCSS.css'

const URL = 'http://jsonplaceholder.typicode.com/comments';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            error: null,
            comments: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        fetch(URL)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw Error('Error fetching Comments');
                }
            })
            .then(comments => {
                let listComments = comments.filter(index => index.postId === this.props.id);
                this.setState({comments: listComments, isLoading: false});
            })
            .catch(error => {
                this.setState({error});
            })
    }

    render() {
        if (this.state.error) {
            return <p style={{color: "red"}}>{this.state.error.message}</p>
        }
        if (this.state.isLoading) {
            return <p>Comments is loading ...</p>
        }
        return (
            <>
                <div className='components'>Comments
                    {
                        this.state.comments.map(comment =>
                            <ul className='usersClass'>
                                <li>
                                    Post Id: {comment.postId}
                                </li>
                                <li>
                                    Id: {comment.id}
                                </li>
                                <li>
                                    Name: {comment.name}
                                </li>
                                <li>
                                    Email:
                                    <a href={comment.email}>
                                        {comment.email}
                                    </a>
                                </li>
                                <li>
                                    Body: {comment.body}
                                </li>
                            </ul>
                        )
                    }
                </div>
            </>
        )
    }
}

export default Comments;