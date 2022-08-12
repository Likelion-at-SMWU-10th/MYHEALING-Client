import React from 'react';
import styled from 'styled-components';
import "./OurLogin.css";
import Inform from '../map/Inform';
import Avatar from 'react-avatar';
import { useState, useRef } from 'react';

const Register = () => {
    const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
    const fileInput = useRef(null)


    const onChange = (e) => {
        if(e.target.files[0]){
                setFile(e.target.files[0])
            }else{ //업로드 취소할 시
                setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
                return
            }
        //화면에 프로필 사진 표시
            const reader = new FileReader();
            reader.onload = () => {
                if(reader.readyState === 2){
                    setImage(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])
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
                        onChange={onChange}
                        ref={fileInput}/>
                <div className="mb-3">
                    <label className="form-label">ID</label>
                    <input type="id" className="form-control" id="idFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label className="form-label">PASSWORD</label>
                    <input type="password" className="form-control" id="passwordInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">닉네임</label>
                    <input type="nickname" className="form-control" id="nicknameFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label className="form-label">소개</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
    height: 700px;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;

    border: 1px solid;
    padding: 3rem;
    text-align: left;
    box-shadow: 0.3rem 0.3rem 0.3rem 0 #bdbdbd;
`;

export default Register;