## MERN-Admin-Panel

## Features
* Login-page and Basic layout design done by using Bootstrap
* JWT and Passport for Authentication
* Datatable with Client-side & Server Side Pagination
* Multi-sort
* Filters
* Minimal design
* Fully controllable via optional props and callbacks

## Demo
[Click Here](https://raw.githubusercontent.com/androidneha/mern-admin-panel/master/demo.gif)

<a href="https://github.com/adnroidneha/mern-admin-panel">
    <img src="https://raw.githubusercontent.com/androidneha/mern-admin-panel/master/demo.gif" alt="MERN-Admin-Panel">
</a>
<br>

## Available Script
To start server and client simultaneously

`npm run dev`

To Build react application

cd client and run

`npm run build`


#### Datatable sample usage with static data

```js
import React, { Component, Fragment } from 'react';
import { render} from 'react-dom';
import ReactDatatable from '@ashvin27/react-datatable';

class App extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                key: "name",
                text: "Name",
                className: "name",
                align: "left",
                sortable: true,
            },
            {
                key: "address",
                text: "Address",
                className: "address",
                align: "left",
                sortable: true
            },
            {
                key: "postcode",
                text: "Postcode",
                className: "postcode",
                sortable: true
            },
            {
                key: "rating",
                text: "Rating",
                className: "rating",
                align: "left",
                sortable: true
            },
            {
                key: "type_of_food",
                text: "Type of Food",
                className: "type_of_food",
                sortable: true,
                align: "left"
            },
            {
                key: "action",
                text: "Action",
                className: "action",
                width: 100,
                align: "left",
                sortable: false,
                cell: record => { 
                    return (
                        <Fragment>
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={() => this.editRecord(record)}
                                style={{marginRight: '5px'}}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button 
                                className="btn btn-danger btn-sm" 
                                onClick={() => this.deleteRecord(record)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </Fragment>
                    );
                }
            }
        ];
        this.config = {
            page_size: 10,
            length_menu: [ 10, 20, 50 ],
            button: {
                excel: true,
                print: true
            }
        }
        
        this.state = {
            records: [
              {
                "id": "55f14312c7447c3da7051b26",
                "address": "228 City Road",
                "name": ".CN Chinese",
                "postcode": "3JH",
                "rating": 5,
                "type_of_food": "Chinese"
              },
              {
                "id": "55f14312c7447c3da7051b27",
                "address": "376 Rayleigh Road",
                "name": "@ Thai",
                "postcode": "5PT",
                "rating": 5.5,
                "type_of_food": "Thai"
              },
              {
                "id": "55f14312c7447c3da7051b28",
                "address": "30 Greyhound Road Hammersmith",
                "name": "@ Thai Restaurant",
                "postcode": "8NX",
                "rating": 4.5,
                "type_of_food": "Thai"
              },
              {
                "id": "55f14312c7447c3da7051b29",
                "address": "30 Greyhound Road Hammersmith",
                "name": "@ Thai Restaurant",
                "postcode": "8NX",
                "rating": 4.5,
                "type_of_food": "Thai"
              }
            ]
        }
    }

    editRecord(record) {
        console.log("Edit Record", record);
    }

    deleteRecord(record) {
        console.log("Delete Record", record);
    }

    render() {
        return (
            <div>
                <ReactDatatable
                    config={this.config}
                    records={this.state.records}
                    columns={this.columns}
                />
            </div>
        )
    }
}

render(<App />, document.getElementById("app"));
```
