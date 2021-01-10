/*global chrome*/
import React from 'react';
import { Card } from 'react-bootstrap';

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Emitter from '../Utils/Emitter';

const engine = (props) => {

    const onEngineClick = () => {
        chrome.extension.getBackgroundPage().console.log(props.engineName + " Clicked!");
        Emitter.emit('ENGINE_CLICKED', props.engineName);
    }

    return (
        <a style={{ cursor: 'pointer' }}>
            <Card >
                <Card.Body onClick={onEngineClick}>
                    <div class="float-left"> {props.engineName} </div>
                    <div class="float-right"> <FontAwesomeIcon icon={faChevronRight} /> </div>
                </Card.Body>
            </Card>
        </a>
    );
}

export default engine;