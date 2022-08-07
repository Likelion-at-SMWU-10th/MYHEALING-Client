import React from "react";
import './FaceBottom.css';

const FaceBottom = ({text}) => {
    return (
        <>

            <div className="container_bottom">
                <div className="row">
                    <div className="col">
                        <div className="row row-cols-1">
                            <div className="col">
                                <b>Thanks to</b>
                            </div>
                            <div>
                                .
                            </div>
                            <div className="col">
                                Team. HEALING
                            </div>
                            <div className="col">
                                Likelion 10th
                            </div>
                            <div className="col">
                                SMU
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row row-cols-1">
                            <div className="col">
                                <b>Community</b>
                            </div>
                            <div>
                                .
                            </div>
                            <div className="col">
                                insta
                            </div>
                            <div className="col">
                                Notion
                            </div>
                            <div className="col">
                                gmail
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row row-cols-1">
                            <div className="col">
                                <b>Company</b>
                            </div>
                            <div>
                                .
                            </div>
                            <div className="col">
                                About us
                            </div>
                            <div className="col">
                                Contact us
                            </div>
                            <div className="col">
                                History
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <div className="topDiv">
                <div className="bottomimage">
                    <span className="followus">Follow us : </span>
                    <img
                        className="circleimage"
                        src="img/sm.png"
                        alt="First slide"
                    />
                    <img
                        className="circleimage"
                        src="img/eb.png"
                        alt="First slide"
                    />
                    <img
                        className="circleimage"
                        src="img/jw.png"
                        alt="First slide"
                    />
                    <img
                        className="circleimage"
                        src="img/es.png"
                        alt="First slide"
                    />
                    <img
                        className="circleimage"
                        src="img/yj.png"
                        alt="First slide"
                    />
                    <p className="companyinfo">© MY_HEALING ! Join US ♡</p>
                </div>
            </div>
        </>
    );
};

export default FaceBottom;

/*
<div className="bar"></div>
            <div className="bottomText"> © MY_HEALING ! Join US ♡ </div>
            
*/