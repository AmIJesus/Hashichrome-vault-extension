/*global chrome*/
import React, { useState, useEffect } from 'react';
import { NavDropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Emitter from '../Utils/Emitter';

export default function NamespaceDropdown() {



        const [currentNamespace, setCurrentNamespace] = useState('');

        useEffect (() => {
                chrome.storage.local.get("currentNamespace", (res) => {
                        if (typeof res.currentNamespace !== 'undefined')
                                setCurrentNamespace(res.currentNamespace)
                        else {
                                setCurrentNamespace('/')
                        }
                        chrome.extension.getBackgroundPage().console.log("initial namespace load from storage: " + res.currentNamespace);
                });
        }, [])

        const addToRoute = (event) => {
                setCurrentNamespace(currentNamespace + "/" + event.currentTarget.textContent);

                chrome.storage.local.set({ 'currentNamespace': currentNamespace }, () => {
                        chrome.extension.getBackgroundPage().console.log("storage set to " + currentNamespace);
                });
        }

        const shortenedNamespacePath = () => {
                if (currentNamespace.length > 13) {
                        return ".." + currentNamespace.substr(currentNamespace.length - 13);
                } else {
                        return currentNamespace;
                }
        }

        const renderTooltip = (props) => (
                <Tooltip id="button-tooltip" {...props}>
                        {currentNamespace}
                </Tooltip>
        );
        return (
                <NavDropdown title={shortenedNamespacePath()} id="collasible-nav-dropdown" fixed="top">
                        <OverlayTrigger
                                placement="bottom"
                                overlay={renderTooltip}
                        >
                                <Dropdown.ItemText>{shortenedNamespacePath()}</Dropdown.ItemText>
                        </OverlayTrigger>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={addToRoute}>namespace1</Dropdown.Item>
                        <Dropdown.Item onClick={addToRoute}>namespace2</Dropdown.Item>
                        <Dropdown.Item onClick={addToRoute}>namespace3</Dropdown.Item>
                </NavDropdown>
        )
}