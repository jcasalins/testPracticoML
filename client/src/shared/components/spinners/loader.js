import React from "react";
import { PacmanLoader } from "react-spinners";

import "./loader.scss";

function LoaderPAC(props) {
    return (
        <div className="loading">
            <PacmanLoader 
                color={'#ffe600'}
            />
        </div>
    )
}

export default LoaderPAC;