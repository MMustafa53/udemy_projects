import React, {Component} from 'react';
import PropTypes from "prop-types";
import Navbar from "./Navbar";
class User extends Component {
    static defaultProps = {
        isim: "İsimsiz"
    };
    render() {
        // Destructing
        // const {prospun, icindeki, degerler} = this.props;
        const {isim} = this.props;
        return (
            <div className="container-lg">
                {
                    isim.map(user => {
                        return (
                            <Navbar title={user.title} isim={user.isim} id={user.id}/>
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