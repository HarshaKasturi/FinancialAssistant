import React, {Component} from 'react';
import classes from './Login.css'
import { Button, Form } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import {  } from 'login.css';

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
				<div className={`${classes.logindiv}`}>
					<div>
						<img src="" alt="image"/>
					</div>
					<Form onSubmit = {this.handleSubmit}>
						<div  width="50%">
							<div className="pa4 black-80">
								<label htmlFor="username">username</label>
								<input  value = {this.props.username } onChange={this.handleUsernameChange} type="text"/>
							</div>
							<div>
								<label htmlFor="password">password</label>
								<input value = {this.props.password } onChange = {this.handlePasswordChange} type="password"/>
							</div>
							{/* <Link to >Register</Link> */}
							<Button type="submit">Login</Button>
						</div>
					</Form>
				</div>
			</React.Fragment>
		)
	}
}

export default Login;