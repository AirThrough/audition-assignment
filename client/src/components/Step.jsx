import React, {useState} from 'react';
import Points from "./Points";

const Step = (props) => {

    const [completedStep, setCompletedStep] = useState(props.step.completed)

    function check(id) {
        props.check(props.index + 1, id)
        setCompletedStep(props.step.completed)
    }

    return (
        <div className="progress-step">

            <div className={"progress-step-head " + (props.step.completed ? "checked" : "")}>
                <div className="progress-step-number">{props.index + 1}</div>
                <div className="progress-step-title">{props.step.title}</div>
            </div>

            <Points points={props.step.points} check={check} />

        </div>
    );
};

export default Step;