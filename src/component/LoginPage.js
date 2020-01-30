import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userdata: '',
            userlogin: '',
            email: '',
            password: '',
            err: ''
        }
        //   this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.props.dispatch({ type: "USERLOGIN", userlogin: loginData });
    }
    LoginUser(event) {
       // event.preventDefault();
        //alert('lkadsa1')
        // const { email, password } = this.state;
        let user = document.getElementById('email').value;
        console.log(user, 'user', loginData[0].username)
        let pwd = document.getElementById('pwd').value;
        if (user != '' || pwd != '') {
            if (user == loginData[0].username && user != null) {
                if (pwd == loginData[0].password) {
                    this.props.history.push("/UserData");
                }
                else {
                    this.setState({
                        err: 'Invalid Password'
                    })
                }

            }
            else {
                this.setState({
                    err: 'Invalid Username'
                })
            }
        }
        else {
            this.setState({
                err: 'Invalid Username and Password '
            })
        }



    }
    render() {
        return (
            <div style={{ marginTop: 150, }}>
                <form onSubmit={e => (e.preventDefault())}>
                    <div>
                        <TextField type='email' id='email' label="email" variant="outlined" placeholder='Enter email' style={{ width: 250 }} />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <TextField type='password' id='pwd' label="password" variant="outlined" placeholder='Enter Password' style={{ width: 250 }} />
                    </div>
                    <div>
                        <Button onClick={() => this.LoginUser()} type='submit' variant="contained" color="primary" style={{ width: 250, marginTop: 20 }}> Login </Button>

                    </div>
                    <text style={{color : 'red',fontSize : 12}}>{this.state.err}</text>
                </form>
            </div>
        )
    }
}
const loginData = [
    {
        username: "hruday@gmail.com",
        password: 'hruday123'
    }

]

const mapStateToProps = state => {
    return {
        // userdata: state.userdata,
        // userlogin: state.userlogin,

    }
}

export default connect(mapStateToProps)(LoginPage);