import React from 'react';
import CounterApp from '../CounterApp';

import {render,fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
test("Heading text to be Tested",()=>{
    const Component=render(<CounterApp/>);
    const heading =Component.getByText('Counter App');
    expect(heading.textContent).toBe("Counter App");
})

test("Initial Counter to be Tested",()=>{
    const Component=render(<CounterApp/>);
    const initialCounter=Component.getByText('0');
    expect(initialCounter.textContent).toBe("0");
})

test("+ button text to be tested",()=>{
    const {getByText}=render(<CounterApp/>);
    const plusButton=getByText('+');
    expect(plusButton.textContent).toBe("+");
})
test("- button text to be tested",()=>{
    const {getByText}=render(<CounterApp/>);
    const plusButton=getByText('-');
    expect(plusButton.textContent).toBe("-");
})
test("onClick + button Counter to be 1 tested",()=>{
    const {getByText}=render(<CounterApp/>);
    const buttonElement=getByText('+');
    const counterElement=getByText('0');
    fireEvent.click(buttonElement);
    expect(counterElement.textContent).toBe("1");
})