import React from 'react'
import moment from "moment";

const Experience = () => {
    const years = moment().diff('2017-09-13', 'years',false);
    return(
        <div className="wpo-exprience-area">
            <div className="exprience-wrap">
                <div className="exprience-b">
                    <h2>{years}</h2>
                    <div className="exprience-s">
                        <span>Years</span>
                        <span>Experience</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;