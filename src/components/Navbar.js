import React from 'react';
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
    let deletes = () => {
        console.log("navbar");
        console.log(props);
        console.log(props.id);
        props.deleteUser(props.id)
    };
    return (
        <div>
            <h2> Navbar : title : {props.title}</h2>
            <h2> Navbar : isim : {props.isim}</h2>
            <h2> Navbar : id : {props.id}</h2>
            <FontAwesomeIcon icon={faTrashAlt} onClick={deletes}/>
        </div>
    );
}

//prop içinde gelmesi gerekenler

Navbar.propTypes = {
    title: PropTypes.string.isRequired, //string ve gerekli
    isim: PropTypes.string.isRequired, //string ve gerekli
    id: PropTypes.number.isRequired //string ve gerekli
};
Navbar.defaultProps = {
    title: "Bulunamadı"
};
export default Navbar;