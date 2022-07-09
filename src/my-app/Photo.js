import React from "react";
import myCSS from './myCSS.css'

const URL = 'http://jsonplaceholder.typicode.com/photos';

class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            isLoading: false,
            error: null
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        fetch(URL)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw Error('Error fetching Photos')
                }
            })
            .then(photos => {
                let listPhotos = photos.filter(index => {
                    return index.albumId === this.props.id
                })
                this.setState({photos: listPhotos, isLoading: false});
            })
    }

    render() {
        if (this.state.error) {
            return <p style={{color: "red"}}>{this.state.error.message}</p>
        }
        if (this.state.isLoading) {
            return <p>Photos is loading ...</p>
        }
        return (
            <>
                <div className='photos'>Photos
                    {
                        this.state.photos.map(index =>
                        <ul className='usersClass'>
                            <li>
                                Album ID: {index.albumId}
                            </li>
                            <li>
                                Id: {index.id}
                            </li>
                            <li>
                                Title: {index.title}
                            </li>
                            <li>
                                URL: <a href={index.url} target="_blank">{index.url}</a>
                            </li>
                            <li>
                                Thumbnail URL: <a href={index.thumbnailUrl} target="_blank">{index.thumbnailUrl}</a>
                            </li>
                        </ul>
                        )
                    }
                </div>
            </>
        )
}
}

export default Photo;