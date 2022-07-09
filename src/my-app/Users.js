import React from "react";
import ButtonGetMoreInfoUser from "./ButtonGetMoreInfoUser";
import myCSS from "./myCSS.css";
import ButtonShowPost from "./ButtonShowPost";


const URL = 'http://jsonplaceholder.typicode.com/users';

const usersClass = {
    listStyle: 'none',
    padding: '30px 0px'
}

class Users extends React.Component {
        state = {
            isLoading: false,
            error: null,
            users: [],
        }

    componentDidMount() {
            this.setState({isLoading: true});
        fetch(URL)
            .then(response => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw Error("Error fetching Users")
                }
            })
            .then(users => {
                this.setState({users, isLoading: false})
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
            return <p>Users is loading ...</p>
        }
        return(
            <>
                <div className='users'>
                    {this.state.users.map((user) =>
                        <ul style={usersClass}>
                            <li className='hidden'>
                                {user.id}
                            </li>
                            <li key={user.id}>
                                Id: {user.id};
                            </li>
                            <li>
                                Name: {user.name}
                            </li>
                            <li>
                                User Name: {user.username}
                            </li>
                            <li>
                                email: {user.email}
                            </li>
                            <li>
                                Phone: {user.phone}
                            </li>
                            <li>Website -->
                                <a
                                    href={user.website}
                                    target="_blank"
                                >
                                    {user.website}
                                </a>
                            </li>
                            <ButtonGetMoreInfoUser />
                            <div className='hidden active'>
                                <ul className='company' style={usersClass}>Company
                                    <li>
                                        Company Name: {user.company.name}
                                    </li>
                                    <li>
                                        Bs: {user.company.bs}
                                    </li>
                                    <li>
                                        Catch Phrase: {user.company.catchPhrase}
                                    </li>
                                </ul>
                                <ul className='address' style={usersClass}> Address
                                    <li>
                                        Street: {user.address.street}
                                    </li>
                                    <li>
                                        Suite: {user.address.suite}
                                    </li>
                                    <li>
                                        City: {user.address.city}
                                    </li>
                                    <li>
                                        Zip Code: {user.address.zipcode}
                                    </li>
                                    <ul className='geo' style={usersClass}> GEO
                                        <li>
                                            Lat: {user.address.geo.lat}
                                        </li>
                                        <li>
                                            Lng: {user.address.geo.lng}
                                        </li>
                                    </ul>
                                </ul>
                                <ButtonShowPost />
                            </div>
                        </ul>
                    )}
                </div>
            </>
        )
    }
}
export default Users;