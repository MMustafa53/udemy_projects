import React, {Component} from 'react';
import PropTypes from "prop-types";
import Navbar from "./Navbar";
class User extends Component {
    static defaultProps = {
        isim: "İsimsiz"
    };

    render() {
        const {my_Arr, deleteUser} = this.props;
        let deleteUserr = (id) => {
            console.log("user e geldi");
            console.log(id);
            deleteUser(id);
        };
        // Destructing
        // const {prospun, icindeki, degerler} = this.props;
        return (
            <div className="container-lg">
                {
                    my_Arr.map(user => {
                        return (
                            <Navbar
                                key={user.id}
                                title={user.title}
                                isim={user.isim}
                                id={user.id}
                                deleteUser={id => deleteUserr(id)}
                            />
                        )
                    })
                }

            </div>
        );
    }
}

User.propTypes = {
    isim: PropTypes.string.isRequired
};
// User.defaultProps = {
//     isim: "İsimsiz"
// };
export default User;