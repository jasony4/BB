import React from 'react';

import classes from './BuildControl.module.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.label}>
            {props.label}
            <button 
            className={classes.Less} 
            onClick={props.removed}disabled={props.disabled}>less</button>
            <button 
            className={classes.More} 
            onClick={props.added}>more</button>
        </div>
    </div>
);

export default buildControl;