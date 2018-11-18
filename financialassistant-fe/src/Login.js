import React, {Component} from 'react';
import classes from './Login.css'

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
	render(){
		return(
			<div>
				<div  style={divstylesleft}>
					<img src="" alt="image"/>
				</div>
				<div  style={divstylesright}>
					<center>
						<h1>Financial Assistant</h1>
						<h2>Login</h2>
						<div>
							<label htmlFor="username">username</label>
							<input type="text"/>
						</div>
						<div>
							<label htmlFor="password">password</label>
							<input type="password"/>
						</div>
						<button>Login</button>
						<a href="">Register</a>
					</center>
				</div>
			</div>
		)
	}
}

export default Login;