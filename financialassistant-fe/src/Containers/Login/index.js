import Login from '../../Login';
import { connect } from 'react-redux'; 
import { signIn } from '../../api/login';
import {get as _get} from 'lodash';
import { createNamespacer } from '../../commons/js/utils/reducer';


const mapStateToProps = (state) => {
    return {
        username: state.login.username,
        password: state.login.password,
        isLoggedIn : state.login.isLoggedIn,
        // error: state.login.error,
        // showForgotPassword: state.forgotPassword.showForgotPassword,
    }
}

// const validate = (getState) => {
//     const state = getState().login;

//     let errors = {}

//     if(!state.username.value){
//         errors.username = "Username or Email is required."
//     } else {
//         errors.username = ''
//     }

//     if(!state.password.value){
//         errors.password = "Password is required."
//     } else {
//         errors.password = ''
//     }

//     return errors;
// }

// const namespacer = createNamespacer('LOGIN')

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: (value) => {
            dispatch({
                type: "SET_USERNAME",
                payload: {
                    value,
                }
            })
        },
        setPassword: (value) => {
            dispatch({
                type: "SET_PASSWORD",
                payload: {
                    value,
                }
            })
        },
        setshowForgotPassword: (value) => {
            dispatch({
                type: "SHOW_FORGOT_PASSWORD",
                payload: {
                    value,
                }
            })
        },
        submit: (data) => {
            const handleError = (value) => {
                dispatch({
                    type: "SET_ERROR",
                    payload: {
                        value
                    },
                })
            }
            // dispatch((dispatch, getState)=>{
            //     let errors = validate(getState)

            //     dispatch({
            //         type: namespacer('SET_FIELD_ERRORS'),
            //         payload: {
            //             value: errors
            //         }
            //     })

            //     if(!Object.values(errors).filter(Boolean).length){
                    (async () => {
                        let response;
                        try {
                            response = await signIn(data);
                            let role = response.data.role;
                            localStorage.setItem("role", role);

                            dispatch({
                                type: "SET_LOGGED_IN",
                                payload: {
                                    value: true,
                                    role,
                                }
                            });
                        } catch (e) {
                            if(_get(e, 'response.data.errors')){
                                handleError(e.response.data.errors)
                            } else {
                                handleError("Oops! Something went wrong. Please try again.")
                            }
                            return;
                        }
    
                        
                    })()
                }  

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)