import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
    return (
        // don't forget to rename file .module.css and see how to import
        // css module and dynamic props
        <button
            type={props.type}
            className={styles.button}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;
