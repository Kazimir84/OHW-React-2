import React from "react";

class ButtonGetMoreInfoUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: undefined
        }
        this.getTargetId = this.getTargetId.bind(this);
    }
    getTargetId(e) {
        let id = Number(e.nativeEvent.path[2].children[0].textContent);
        let toggle = e.nativeEvent.path[2].children[8];
        let border = e.nativeEvent.path[2];
        this.setState({id: id});
        toggle.classList.toggle('hidden');
        border.classList.toggle('borderInfo');
        if (e.nativeEvent.path[0].innerText === 'Get More Info about User') {
            e.nativeEvent.path[0].innerText = 'Close info about User';
        } else {
            e.nativeEvent.path[0].innerText = 'Get More Info about User';
        }
    };

    render() {
        return (
            <>
                <div>
                    <button onClick={this.getTargetId} className='buttonInfo'>Get More Info about User</button>
                </div>
            </>
        )
    }
}

export default ButtonGetMoreInfoUser;