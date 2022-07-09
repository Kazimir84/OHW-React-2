import React from "react";
import Comments from "./Comments";
import Albums from "./Albums";

class ButtonShowAlbums extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            albums: ''
        }
        this.getAlbums = this.getAlbums.bind(this);
    }
    getAlbums(e) {
        let id = Number(e.nativeEvent.path[8].children[0].childNodes[0].textContent);
        let btnText = e.nativeEvent.path[0];
        this.setState({id: id});
        let toggleAlbums = document.querySelectorAll('.toggleAlbums');
        toggleAlbums[toggleAlbums.length-1].classList.toggle('hidden');
        if (this.state.id === null || this.state.id === undefined) {
            this.setState({albums: <p>No Albums</p>});
            btnText.textContent = 'Click Again'

        } else {
            this.setState({albums: <p><Albums id={this.state.id}/></p>});
            if(toggleAlbums[toggleAlbums.length-1].classList.contains('hidden')) {
                btnText.textContent = 'Show Albums'
            } else {
                btnText.textContent = 'Hide Albums'
            }
        }
    }

    render() {
        return(
            <>
                <div>
                    <button onClick={this.getAlbums} className='buttonInfo albums'>Show Albums</button>
                    <div className='toggleAlbums'>
                        <h4>
                            {this.state.albums}
                        </h4>
                    </div>
                </div>
            </>
        )
    }
}

export default ButtonShowAlbums;