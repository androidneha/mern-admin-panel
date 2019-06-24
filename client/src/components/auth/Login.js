import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="teal" style={{ height: "100vh" }}>
                <div className="valign-wrapper content-wrapper-100vh">
                    <div className="card white z-depth-5" style={{ margin: "150px auto"}}>
                        <div className="row" style={{ width: "380px" }}>
                            <div className="col s12" style={{ marginTop: "0.6rem" }}>
                                <div className="col s12">
                                    <h4 className="center teal-text">
                                        <b>Login</b>
                                    </h4>
                                </div>
                                <form noValidate onSubmit={this.onSubmit} className="white">
                                    <div className="input-field col s12">
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.email}
                                            error={errors.email}
                                            id="email"
                                            type="email"
                                            className={classnames("", {
                                                invalid: errors.email
                                            })}
                                        />
                                        <label htmlFor="email">Email</label>
                                        <span className="red-text">{errors.email}</span>
                                    </div>
                                    <div className="input-field col s12">
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            error={errors.password}
                                            id="password"
                                            type="password"
                                            className={classnames("", {
                                                invalid: errors.password
                                            })}
                                        />
                                        <label htmlFor="password">Password</label>
                                        <span className="red-text">{errors.password}</span>
                                    </div>
                                    <div className="col s12 center" style={{ paddingLeft: "11.250px" }}>
                                        <button
                                            style={{
                                                width: "150px",
                                                borderRadius: "3px",
                                                letterSpacing: "1.5px",
                                            }}
                                            type="submit"
                                            className="btn btn-large waves-effect waves-light hoverable teal z-depth-3">
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);