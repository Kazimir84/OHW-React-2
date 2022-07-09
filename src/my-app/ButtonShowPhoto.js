import React from "react";
import Albums from "./Albums";
import Photo from "./Photo";

class ButtonShowPhoto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            photos: '',
        }
        this.getPhotos = this.getPhotos.bind(this);
    }

    getPhotos(e) {
        console.log('eeee',e)
        let id = Number(e.nativeEvent.path[8].children[0].childNodes[0].textContent);
        let btnText = e.nativeEvent.path[0];
        this.setState({id: id});
        let togglePhotos = document.querySelectorAll('.togglePhotos');
        togglePhotos[togglePhotos.length-1].classList.toggle('hidden');
        if (this.state.id === null || this.state.id === undefined) {
            this.setState({photos: <p>No Photos</p>});
            btnText.textContent = 'Click Again'

        } else {
            this.setState({photos: <p><Photo id={this.state.id}/></p>});
            if(togglePhotos[togglePhotos.length-1].classList.contains('hidden')) {
                btnText.textContent = 'Show Photos';
            } else {
                btnText.textContent = 'Hide Photos'
            }
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>
                    <p>Photos is loading ...</p>
                </div>
            )
        }
        return (
            <>
                <div>
                    <button onClick={this.getPhotos} className='buttonInfo photos'>Show Photos</button>
                    <div className='togglePhotos'>
                        <h4>
                            {this.state.photos}
                        </h4>
                    </div>
                </div>
            </>
        )
    }
}

export default ButtonShowPhoto;