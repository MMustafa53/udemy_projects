import React from 'react';
import PropTypes from "prop-types";

function Navbar(props) {
    return (
        <div>
            <h2> Navbar : title : {props.title}</h2>
        </div>
    );
}

//prop içinde gelmesi gerekenler

Navbar.propTypes = {
    title: PropTypes.string.isRequired //string ve gerekli
};
Navbar.defaultProps = {
    title: "Bulunamadı"
};
export default Navbar;