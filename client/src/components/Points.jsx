import React from 'react';
import PointItem from "./PointItem";

const Points = (props) => {

    function check(id) {
        props.check(id)
    }

    return (
            <ul className="progress-step-list">
                {props.points.map(
                    point =>
                        <PointItem point={point} check={check} key={point.id}/>
                )}
            </ul>
    );
};

export default Points;