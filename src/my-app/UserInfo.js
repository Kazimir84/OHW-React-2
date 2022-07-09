import React from "react";
import Users from "./Users";
import myCSS from "./myCSS.css";

const URL = 'http://jsonplaceholder.typicode.com/users';

class UserInfo extends React.Component {
    state = {
        company: []
    }
    componentDidMount() {
        fetch(URL)
            .then(response => response.json())
            .then(company => {
                    this.setState({company})
            })
    }
    render() {
        return (
            <>
            <div className='userInfo'>
                {this.state.company.map((value, index) =>
                <ul style={this.props.class} className='hidden'>
                    <li key={value.address}>

                        DDDDYYYYYYYYY{value.address.street} {index+1}
                    </li>
                </ul>
                )}
            </div>
            </>
        )
    }
}

export default UserInfo;