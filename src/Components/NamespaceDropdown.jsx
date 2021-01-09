/*global chrome*/
import React, { useState, useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'

export default function NamespaceDropdown() {

        const storageNamespace = null;
        chrome.storage.local.get("currentNamespace", (res) => {
                if (typeof res.currentNamespace !== 'undefined')
                        this.storageNamespace = res.currentNamespace
                else {
                        this.storageNamespace = "/root"
                }
                chrome.extension.getBackgroundPage().console.log("initial " + this.storageNamespace);
        });

        const [currentNamespace, setCurrentNamespace] = useState(storageNamespace);

        useEffect(() => {
                if (currentNamespace !== null) {
                        chrome.storage.local.set({ 'currentNamespace': currentNamespace }, () => {

                                chrome.extension.getBackgroundPage().console.log("storage set to " + currentNamespace);
                        });
                }
        })

        const addToRoute = (event) => {
                setCurrentNamespace(currentNamespace + "/" + event.currentTarget.textContent);
        }

        return (
                <NavDropdown title={currentNamespace} id="collasible-nav-dropdown" fixed="top">
                        <Dropdown.ItemText>{currentNamespace}</Dropdown.ItemText>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={addToRoute}>namespace1</Dropdown.Item>
                        <Dropdown.Item onClick={addToRoute}>namespace2</Dropdown.Item>
                        <Dropdown.Item onClick={addToRoute}>namespace3</Dropdown.Item>
                </NavDropdown>
        )
}