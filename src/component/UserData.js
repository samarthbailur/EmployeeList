import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { flexbox } from '@material-ui/system';

class UserData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userdata: '',
            userlogin: '',
            email: '',
            password: '',
            data: []
        }
    }
    componentDidMount() {
        this.props.dispatch({ type: "USERDATA", userlogin: loginDatauser[0].user });
        this.setState({
            data: loginDatauser[0].user
        })

    }
    LogOutUser = () => {
        //  this.props.history.goBack();
        this.props.history.push("");
    }
    render() {
        var tableStyle = {
            "border": "1px solid #ddd",
            "border-collapse": "collapse",
            "tr":{
                "borderTop": "1px solid #ddd",
            }
        };
        return (
            <div>
                <Button onClick={() => this.LogOutUser()} variant="contained" color="primary" style={{ marginTop: 20, marginBottom: 20, }}> Logout </Button>


                <div style={{ display: 'flex', justifyContent: 'center', }}>

                    <div>
                        <table cellPadding='8' cellSpacing='0' style={tableStyle} >
                            <thead>
                                <tr>
                                    <td >S.No</td>
                                    <td> Name </td>
                                    <td>Age</td>
                                    <td>Gender</td>
                                    <td>Email</td>
                                    <td>Phone No</td>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    this.state.data.map((item, index) =>

                                        <tr key={index} style={tableStyle.tr} >
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.age}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phoneNo}</td>
                                        </tr>

                                    )}
                            </tbody>
                        </table>
                    </div>
                </div >
            </div>
        )
    }
}


const loginDatauser = [
    {
        user: [{
            "id": 1,
            "name": "test1",
            "age": "11",
            "gender": "male",
            "email": "test1@gmail.com",
            "phoneNo": "9415346313"
        },
        {
            "id": 2,
            "name": "test2",
            "age": "12",
            "gender": "male",
            "email": "test2@gmail.com",
            "phoneNo": "9415346314"
        },
        {
            "id": 3,
            "name": "test3",

            "age": "13",
            "gender": "male",
            "email": "test3@gmail.com",
            "phoneNo": "9415346315"
        },
        {
            "id": 4,
            "name": "test4",
            "age": "14",
            "gender": "male",
            "email": "test4@gmail.com",
            "phoneNo": "9415346316"
        },
        {
            "id": 5,
            "name": "test5",
            "age": "15",
            "gender": "male",
            "email": "test5@gmail.com",
            "phoneNo": "9415346317"
        },
        {
            "id": 6,
            "name": "test6",
            "age": "16",
            "gender": "male",
            "email": "test6@gmail.com",
            "phoneNo": "9415346318"
        }
        ]
    }
]
const mapStateToProps = state => {
    return {
        // userdata: state.userdata,
        // userlogin: state.userlogin,

    }
}
export default connect(mapStateToProps)(UserData);








