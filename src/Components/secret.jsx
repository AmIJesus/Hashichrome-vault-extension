/*global chrome*/
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

import { faKey, faChevronRight, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Emitter from '../Utils/Emitter';

const secret = (props) => {

    const [isFolder, setIsFolder] = useState(false);

    useEffect(() => {
        if (props.secretName.endsWith('/')) {
            setIsFolder(true);
        }
    }, [])

    const onSecretClick = () => {
        if (isFolder) {
            // TODO: Render secret list again, but now add folder path to request
        } else {
            // TODO: Render KV data of this secret
        }
    }

    const determineIcon = () => {
        if (isFolder) {
            return <div className="float-left"> <FontAwesomeIcon icon={faFolder} /> </div>
        } else {
            return <div className="float-left"> <FontAwesomeIcon icon={faKey} /> </div>
        }
    }

    return (
        <a style={{ cursor: 'pointer' }}>
            <Card >
                <Card.Body onClick={onSecretClick}>
                    {determineIcon}
                    <div className="float-left pl-4"> {props.secretName} </div>
                    <div className="float-right"> <FontAwesomeIcon icon={faChevronRight} /> </div>
                </Card.Body>
            </Card>
        </a>
    );
}

export default secret;