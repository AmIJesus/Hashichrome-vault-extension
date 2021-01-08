import React from 'react';
import { Card } from 'react-bootstrap';

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const engine = (props) => {
    return (
        <a style={{ cursor: 'pointer' }}>
            <Card>
                <Card.Body>
                    <div class="float-left"> {props.engineName} </div>
                    <div class="float-right"> <FontAwesomeIcon icon={faChevronRight} /> </div>
                </Card.Body>
            </Card>
        </a>
    );
}

export default engine;