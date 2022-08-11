import React from 'react';
import "./OurLogin.css";

const OurLogin = () => {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">ID</label>
                    <input type="id" className="form-control loginId" id="exampleInputId1" aria-describedby="idHelp"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">PASSWORD</label>
                    <input type="password" className="form-control loginId" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary ourLoginBtn">LOGIN</button>
            </form>
            <br/>
        </div>
    );
};


export default OurLogin;