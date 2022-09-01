import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// import styled from "styled-components";

// const FormControl = styled.div`
//     margin: 0.5rem 0;

//     & label {
//         font-weight: bold;
//         display: block;
//         margin-bottom: 0.5rem;
//         color: ${({ invalid }) => (invalid ? "red" : "blue")};
//     }

//     & input {
//         display: block;
//         width: 100%;
//         border: 1px solid ${({ invalid }) => (invalid ? "red" : "blue")};
//         font: inherit;
//         line-height: 1.5rem;
//         padding: 0 0.25rem;
//     }

//     & input:focus {
//         outline: none;
//         background: #fad0ec;
//         border-color: #8b005d;
//     }
// `;

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setValid] = useState(true);

    const goalInputChangeHandler = (event) => {
        if (event.target.value.trim()) setValid(true);
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (!enteredValue.trim()) {
            setValid(false);
            return;
        }

        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            {/* styled components and dynamic props */}
            {/* <FormControl invalid={!isValid}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </FormControl> */}

            {/* css module and dynamic props */}
            {/* do this if you use - in css */}
            <div
                className={`${styles["form-control"]} ${
                    !isValid && styles.invalid
                }`}
            >
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
