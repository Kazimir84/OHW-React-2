import React from "react";
import ButtonShowToDos from "./ButtonShowToDos";
import ButtonShowComponents from "./ButtonShowComponents";
import ButtonShowAlbums from "./ButtonShowAlbums";
import ButtonShowPhoto from "./ButtonShowPhoto";


const URL = 'http://jsonplaceholder.typicode.com/posts';
const usersClass = {
    listStyle: 'none',
    padding: '30px 0px'
}

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: false,
            post: []
        }
    }

    componentDidMount() {
        let id = this.props.id
        fetch(`${URL}/${id}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw Error("Error fetching Posts");
                }
            })
            .then(post => {
                this.setState({post, isLoading: false});
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
            return <p>Posts is loading ...</p>
        }
        return (
            <>
                <div className='posts'>
                    {
                        <ul style={usersClass}> Post
                            <li>
                                Id: {this.state.post.id}
                            </li>
                            <li>
                                User Id: {this.state.post.userId}
                            </li>
                            <li>
                                Body: {this.state.post.body}
                            </li>
                            <li>
                                Title: {this.state.post.title}
                            </li>
                        </ul>
                    }
                    <div className='buttons'>
                        <ButtonShowToDos/>
                        <ButtonShowComponents/>
                        <ButtonShowAlbums/>
                        <ButtonShowPhoto/>
                    </div>
                </div>
            </>
        )
    }
}

export default Posts