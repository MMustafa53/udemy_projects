import React, {Component} from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
class User extends Component {
    render() {
        // Destructing
        // const {prospun, icindeki, degerler} = this.props;
        const {isim} = this.props;
        return (
            <div className="container-lg">
                <h4>İsim : {isim}asdasdas
                    {<FontAwesomeIcon icon={faTrashAlt} size="10x"/>}ssss
                </h4>
                <FontAwesomeIcon icon='accessible-icon'/>
            </div>
        );
    }
}

User.propTypes = {
    isim: PropTypes.string.isRequired
};
User.defaultProps = {
    isim: "İsimsiz"
};
export default User;