import React from 'react';
import './Content.css';

const Content = (props) =>{
    return(
        <div className="content-wrapper">
            <div className="card">
            <div className="img-thumb">
                <img src="BackgroundZoom.jpg" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title} </p>
            <p className="desc">{props.contentCreator}</p>
            <p className="desc">{props.viewer}x ditonton . {props.uploadDate}</p>
            </div>
        </div>
    )
}
Content.defaultProps = {
    time:"00.00",
    contentCreator: "ANONYMUS",
    title:"Untitled",
    viewer:0
}
export default Content;