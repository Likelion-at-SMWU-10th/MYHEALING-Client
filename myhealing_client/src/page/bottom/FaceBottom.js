import React from "react";
import './FaceBottom.css';

const FaceBottom = ({text}) => {
    return (
        <>

            <div class="container_bottom">
                <div class="row">
                    <div class="col">
                        <div class="row row-cols-1">
                            <div class="col">
                                <b>Thanks to</b>
                            </div>
                            <div>
                                .
                            </div>
                            <div class="col">
                                Team. HEALING
                            </div>
                            <div class="col">
                                Likelion 10th
                            </div>
                            <div class="col">
                                SMU
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row row-cols-1">
                            <div class="col">
                                <b>Community</b>
                            </div>
                            <div>
                                .
                            </div>
                            <div class="col">
                                insta
                            </div>
                            <div class="col">
                                Notion
                            </div>
                            <div class="col">
                                gmail
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row row-cols-1">
                            <div class="col">
                                <b>Company</b>
                            </div>
                            <div>
                                .
                            </div>
                            <div class="col">
                                About us
                            </div>
                            <div class="col">
                                Contact us
                            </div>
                            <div class="col">
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