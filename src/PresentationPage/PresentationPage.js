import React, { Component} from "react";
import PresentationImage from "./assets/PresentationPage.png"

export class PresentationPage extends Component {
    render() {
        return(
            <div 
            className="presentation-page"
            style={{width : '100%', height:'100%'}}>
                <img src={PresentationImage}
                style={{width : '100%', height:'100%'}}/>
            </div>
        )   
    }
}