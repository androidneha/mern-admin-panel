import React, { Component } from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";
import {faList} from "@fortawesome/free-solid-svg-icons/faList";

class Navbar extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { user } = this.props.auth;
        return (
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg navbar-light border-bottom shadow-sm">
                    <button className="btn btn-link" id="menu-toggle"><FontAwesomeIcon icon={faList}/></button>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-primary" href="#" id="settings"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Settings
                                </a>
                                <div className="dropdown-menu" aria-labelledby="settings">
                                    <a className="dropdown-item text-primary" href="#" onClick={this.onLogoutClick}>Logout</a>
                                </div>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link text-primary" href="#" onClick={this.onLogoutClick}>Logout ({user.name}) <FontAwesomeIcon icon={faSignOutAlt} /> </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Navbar);
