import React, {Component} from 'react';
import classes from './Login.css'

class Login extends Component{
	render(){
		return(
			<div className={`${classes.logindiv}`}>
				<div>
					<img src="" alt="image"/>
				</div>
				<div  width="50%">
					<div className="pa4 black-80">
						<label htmlFor="username">username</label>
						<input type="text"/>
					</div>
					<div>
						<label htmlFor="password">password</label>
						<input type="password"/>
					</div>
					<button>Login</button>
					<a href="">Register</a>
				</div>
			</div>
		)
	}
}

export default Login;