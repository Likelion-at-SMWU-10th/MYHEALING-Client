import React from 'react';
import styled from 'styled-components';
import "./OurLogin.css";
import Inform from '../map/Inform';
import Avatar from 'react-avatar';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import instance from './instance';

const Register = ({apiUrl}) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
    const fileInput = useRef(null)
    const [values, setValues] = useState({ 
        user_id: "",
        password: "",
        email: "",
        nickname: "",
        introduce: "",
        profile_photo: {selectedFile},
        header_photo:""
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

    const profileHandler = (e) => {
        e.preventDefault();

        if(values.profile_photo){
            const imageFile = e.target.files[0];
            const imageUrl = URL.createObjectURL(imageFile);

            console.log(imageUrl);
            setSelectedFile(imageFile); // formdata에 선택된 이미지 파일을 넣기 위해 저장
            setImage(imageUrl);// 프로필 미리보기를 출력하기 위해 이미지 url 저장
        }
    };
    
    const submitSignUp = () =>
    {
        let formData = new FormData()
        const config = {
            header: { 'content-Type': 'multipart/form-data' }          
        }
        if(selectedFile) {
            formData.append("profile_photo",selectedFile)
        }
        formData.append("user_id",values.user_id)
        formData.append("password",values.password)
        formData.append("email",values.email)
        formData.append("nickname",values.nickname)
        formData.append("introduce",values.introduce)
        
        for (let value of formData.values()) {
            console.log(value);
          }

        instance.post(`${apiUrl}signup/`, formData, config /*{
            user_id: user_id,
            password: values.password,
            email: values.email,
            nickname: values.nickname,
            introduce: values.introduce,
            profile_photo: selectedFile
        }*/ ).then(function (response) {
            console.log('response : '+response);
            if(response.data.code == 0){
                setPopup({
                    open: true,
                    title: "Confirm",
                    message: "Join Success!"
                });
            } else {
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
            alert('회원가입에 실패했습니다.');
            console.log(error);
        });
    }

        
    return (
        <>
            <TitleWrap>
                <Inform text="Register"></Inform>
            </TitleWrap>
            <Wrapper>
                <Avatar 
                        src={Image} 
                        style={{margin:'20px'}} 
                        size={200} 
                        onClick={()=>{fileInput.current.click()}}/>
                <input 
                    type='file' 
                        style={{display:'none'}}
                        accept='image/jpg,impge/png,image/jpeg' 
                        name='profile_img'
                        onChange={profileHandler}
                        ref={fileInput}/>
                <div className="mb-3">
                    <label className="form-label">ID</label>
                    <input 
                        type="id" 
                        name="user_id"
                        className="form-control" 
                        id="idFormControlInput1"
                        maxLength={15}
                        
                        value={values.user_id}
                        onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">PASSWORD</label>
                    <input 
                        type="password" 
                        name="password"
                        className="form-control" 
                        id="passwordInputPassword1"
                        
                        value={values.password}
                        onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input 
                        type="email" 
                        name="email"
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="name@example.com"
                        maxLength={255}
                        
                        value={values.email}
                        onChange={handleChange}>
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label">닉네임</label>
                    <input
                        type="nickname"
                        name="nickname"
                        className="form-control"
                        id="nicknameFormControlInput1"
                        maxLength={15}
                        
                        value={values.nickname}
                        onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">소개</label>
                    <textarea
                        className="form-control"
                        id="textIntro"
                        name="introduce"
                        rows="3"
                        maxLength={50}  
                        
                        value={values.introduce}
                        onChange={handleChange}>
                        </textarea>
                </div>
                <div className="col-12">
                    <button type="submit" 
                            className="btn btn-outline-success"
                            onClick={() => submitSignUp()}>
                        Register
                    </button>
                </div>
            </Wrapper>
        </>
        
    );
};


const TitleWrap = styled.div` 
    text-align: center;
`;

const Wrapper = styled.div`
    width: 50%;
    height: 900px;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;

    border: 1px solid;
    padding: 3rem;
    text-align: left;
    box-shadow: 0.3rem 0.3rem 0.3rem 0 #bdbdbd;
`;

export default Register;