import React, { useState, useEffect, Component } from 'react';
import Card from 'react-bootstrap/Card';

const engine = (props) => {

    return (
        <Card>
            <Card.Body>{props.engineName}</Card.Body>
            {/* <Card.Body>michael bilosovich</Card.Body> */}
        </Card>
    );
}

export default engine;