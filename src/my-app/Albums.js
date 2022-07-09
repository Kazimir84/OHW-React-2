import React from "react";
import myCSS from './myCSS.css'

const URL = 'http://jsonplaceholder.typicode.com/albums';

class Albums extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            error: null,
            isLoading: false
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        fetch(URL)
            .then(response => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw Error('Error fetching Albums')
                }
            })
            .then(albums => {
                let listAlbums = albums.filter(index => {
                    return index.userId === this.props.id
                })
                this.setState({albums: listAlbums, isLoading: false});
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
            return <p>Albums is loading ...</p>
        }
        return(
            <>
            <div className='albums'>Albums
                {
                    this.state.albums.map(album =>
                    <ul className='usersClass'>
                        <li>
                            User Id: {album.userId}
                        </li>
                        <li>
                            Id: {album.id}
                        </li>
                        <li>
                            Title: {album.title}
                        </li>
                    </ul>
                    )
                }

            </div>
            </>
        )
    }
}

export default Albums;