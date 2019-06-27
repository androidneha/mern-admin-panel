import React, { Component } from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";
import {Link} from "react-router-dom";
import {faDashcube} from "@fortawesome/free-brands-svg-icons";

class Sidebar extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { user } = this.props.auth;
        return (
            <div className="border-right h-100 bg-primary" id="sidebar-wrapper">
                <div className="list-group list-group-flush">
                    <Link to="/" className="list-group-item list-group-item-action bg-primary text-white">
                        <h4 className="pb-0 mb-1"><b>Brand <FontAwesomeIcon icon={faDashcube} /> </b></h4>
                    </Link>
                    <Link to="/dashboard" className="list-group-item list-group-item-action bg-primary text-white">Dashboard</Link>
                    <Link to="/users" className="list-group-item list-group-item-action bg-primary text-white">Users</Link>
                    <Link to="/events" className="list-group-item list-group-item-action bg-primary text-white">Events</Link>
                    <a href="#" className="list-group-item list-group-item-action bg-primary text-white" onClick={this.onLogoutClick}>Logout <FontAwesomeIcon icon={faSignOutAlt} /></a>
                </div>
            </div>
        );
    }
}

Sidebar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Sidebar);
