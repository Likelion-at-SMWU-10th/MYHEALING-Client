import React from "react";
import './FaceBottom.css';

const FaceBottom = ({text}) => {
    return (
        <>
            <div class="bottomimage">
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
            </div>
        </>
    );
};

export default FaceBottom;