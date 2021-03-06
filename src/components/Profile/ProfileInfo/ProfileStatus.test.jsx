import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatus component", ()=>{
    test ("status from props should be in the state", ()=>{
        const component = create(<ProfileStatus status="Hello World"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Hello World");
    })
    test ("after creation span should be displayed with status", ()=>{
        const component = create(<ProfileStatus status="Hello World"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    })
    test ("after creation input shouldn't be displayed with status", ()=>{
        const component = create(<ProfileStatus status="Hello World"/>);
        const root = component.root;
        expect(()=>{
            let input = root.findByType("input");
        }).toThrow();
    })
    test ("after creation span should contain correct status", ()=>{
        const component = create(<ProfileStatus status="Hello World"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Hello World");
    })
    test ("after creation span should contain correct status", ()=>{
        const component = create(<ProfileStatus status="Hello World"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Hello World");
    })
})