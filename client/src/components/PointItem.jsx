import React, {useState} from 'react';

const PointItem = (props) => {

    const [checkState, setCheck] = useState(props.point.checked)

    function checkboxChange() {
        props.check(props.point.id)
        setCheck(props.point.checked)
    }

    return (
        <li onClick={checkboxChange}>

            <div  className={(props.point.checked ? 'checked' : '') + " checkbox"} ></div>
            <div className="progress-point-text">
                {props.point.value}
            </div>
        </li>
    );
};

export default PointItem;