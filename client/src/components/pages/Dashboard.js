import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { user } = this.props.auth;
        return (
            <div>
                <div className="wrapper">
                    <nav className="blue" role="navigation">
                        <div className="nav-wrapper container">
                            <a href="#!" className="brand-logo">Point of Sale</a>
                            <ul className="right hide-on-med-and-down">
                                <li><a className="dropdown-button" href="#" data-activates="dropdown1">Profile<i className="material-icons right">arrow_drop_down</i></a></li>
                                <li><a onClick={this.onLogoutClick}>Logout <i className="material-icons right">logout</i></a></li>
                            </ul>
                        </div>
                    </nav>
                    <ul id='dropdown1' className='dropdown-content'>
                        <li><a href="#!">one</a></li>
                        <li><a href="#!">two</a></li>
                        <li className="divider" tabIndex="-1"></li>
                        <li><a href="#!">three</a></li>
                        <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
                        <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
                    </ul>
                    <div className="center-align">
                        <h4>
                            <b>Hey there,</b> {user.name.split(" ")[0]}
                            <p className="flow-text grey-text text-darken-1">
                                You are logged into a full-stack{" "}
                                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
                            </p>
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);
