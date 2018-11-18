import React, {Component} from 'react';
import classes from './Login.css'
import { Button, Form } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import {  } from 'login.css';

const pagestyles = {
	display: 'flex',
	flexDirection: 'row',
	height:'100%',
};

const divstylesleft={
	height:'100%',
	width:'50%',
	position:'fixed',
	zIndex:'1',
	top:'0',
	overflowX:'hidden',
	paddingTop:'20px',
	left:'0',
	backgroundColor:'#111',
}
const divstylesright={
	height:'100%',
	width:'50%',
	position:'fixed',
	zIndex:'1',
	top:'0',
	overflowX:'hidden',
	paddingTop:'20px',
	right:'0',
	backgroundColor:'gray',
}

class Login extends Component{

	constructor(props) {
        super(props);

        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
	}
	
	handleUsernameChange(event) {
        this.props.setUsername(event.target.value)
    }

    handlePasswordChange(event) {
        this.props.setPassword(event.target.value)
    }

    // handleSubmit(event) {
    //     event.preventDefault();

    //     this.props.submit({
    //         email: this.props.username.value,
    //         password: this.props.password.value,
    //     });
	// }
	
	render(){
		return(
			<React.Fragment>
					<div className={divstylesleft}>
						<img src="" alt="image"/>
					</div>
					<Form onSubmit = {divstylesright}>
					<div>
						
						<center>
							<h1>Financial Assistant</h1>
							<h2>Login</h2>
							<div>
								<label htmlFor="username">username</label>
								<input  value = {this.props.username } onChange={this.handleUsernameChange} type="text"/>
							</div>
							<div>
								<label htmlFor="password">password</label>
								<input value = {this.props.password } onChange = {this.handlePasswordChange} type="password"/>
							</div>
							<Button type="submit">Login</Button>
							<a href="">Register</a>
						</center>
					</div>
					</Form>
			</React.Fragment>
		)
	}
}

export default Login;