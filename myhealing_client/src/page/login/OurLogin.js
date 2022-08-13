import React from 'react';
import "./OurLogin.css";
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const OurLogin = () => {
    const [values, setValues] = useState({ 
        user_id: "",
        password: ""
    });

    const navigate = useNavigate();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const setPopup = (values) => {
        alert( values.message);
        navigate('/login');
    }

    const submitSignUp = () =>
    {
        axios.post("http://127.0.0.1:8000/login/", {
            user_id: values.user_id,
            password: values.password
        }).then(function (response) {
            console.log('response : '+response);
            if(response.data.code == 0){
                setPopup({
                    open: true,
                    title: "Confirm",
                    message: "Login Success!"
                });
            } else {
                console.log(response)
                let message = response.data.message;
                if(response.data.code == 10000){
                    message = "User ID is duplicated. Please enter a different User ID. "
                }
                setPopup({
                    open: true,
                    title: "Error",
                    message: message
                });
            }
        }).catch(function (error) {
            alert('로그인에 실패했습니다.');
            console.log(error);
        });
    }

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">ID</label>
                    <input 
                        type="id" 
                        className="form-control loginId"
                        id="user_id"
                        name="user_id"
                        aria-describedby="idHelp"
                        
                        value={values.user_id}
                        onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">PASSWORD</label>
                    <input 
                        type="password" 
                        className="form-control loginId" 
                        id="password"
                        name="password"
                        
                        value={values.password}
                        onChange={handleChange}/>
                </div>
                <button 
                    type="button" 
                    className="btn btn-primary ourLoginBtn"
                    onClick={() => submitSignUp()}
                >
                    LOGIN
                </button>
            </form>
            <br/>
        </div>
    );
};


export default OurLogin;