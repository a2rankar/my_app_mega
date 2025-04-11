import React, {useState} from "react";
import './Comment.module.scss';
import Ellipse from '../../assets/Ellipse 1.svg'
function Comment () {
    return (
        <div className="container1">
             <img src={Ellipse}/>
                <div className="blog">
                    <p>John</p>
                    <div className="otzyv">
                        <p>5</p>
                        <p>32y</p>
                        <p>3 years of exp</p>
                    </div>
                    <div className="com_blog">
                        <p>bvdkfjbjdfbdjfbjfdbnkfjdbjkdfbnkbdb232</p>
                    </div>
                </div>
        </div>
    )
}
export default Comment;
