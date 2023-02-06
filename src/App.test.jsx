import { describe, it, expect } from 'vitest';
import {
render,
screen,
fireEvent,
waitFor,
} from '@testing-library/react';
import App, {Rule} from "./App";
describe('Rule',() =>{
    const rule = {
        condition: "inputs.x + inputs.y > 10",
        consequence: "`inputs.x + inputs.y` is greater than 10.",
        alternative: "`inputs.x + inputs.y` is not greater than 10."
    };
    const inputs = {
        x:5,
        y: 6,
    };
    it('renders all properties', () => {
        render(<Rule rule = {rule} inputs={inputs}/>);
        screen.debug();
    });
});
