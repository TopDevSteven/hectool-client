import React from "react";
import { ReactComponent as LogIcon} from "../assets/icons/header/logger.svg";
import { ReactComponent as HecIcon} from "../assets/icons/header/Vector.svg";
import { ReactComponent as DownIcon} from "../assets/icons/header/menu-icon.svg";

const Headbar = () => {
    return (
        <div className="head-container">
            <div className="head-log-wrapper">
                <span  className="head-icon">
                    <LogIcon />
                </span>
                <span className="head-content">
                    <HecIcon />
                    <p>
                        Assistant
                    </p>
                </span>
            </div>
            <div className="head-close-wrapper">
                <p>
                    Close
                </p>
                <span>
                    <DownIcon />
                </span>
            </div>
        </div>
    );
};

export default Headbar;