import React, { Component } from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import jwt_decode from "jwt-decode";

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            user: {},
        };
        const userInfo = jwt_decode(localStorage.getItem("jwtToken"));
        if (userInfo !== undefined) {
            this.state.isAuthenticated = true;
            this.state.user = userInfo;
        }
    }

    componentDidMount() {
        if (!this.state.isAuthenticated) {
            this.props.history.push("/login");
        }
    };

    render() {
        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h1>
                            Welcome {this.state.user.name}
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard

// Dashboard.propTypes = {
//     auth: PropTypes.object.isRequired,
// };
//
// const mapStateToProps = state => ({
//     auth: state.auth,
//     user: state.user
// });
//
// export default connect(
//     mapStateToProps
// )(Dashboard);
