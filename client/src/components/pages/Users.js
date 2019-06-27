import React, { Component } from "react";
import Navbar from "../partials/Navbar";
import Sidebar from "../partials/Sidebar";

class User extends Component {

    render() {
        return (
            <div>
                <div className="d-flex" id="wrapper">
                    <Sidebar/>
                    <div id="page-content-wrapper">
                        <Navbar/>
                        <div className="container-fluid">
                            <h1 className="mt-2">Users List</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
