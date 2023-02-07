import { describe, it, expect } from 'vitest';
import {
render,
} from '@testing-library/react';
import { Rule } from '../../../src/components/Rule';
describe('Rule',() =>{
    it('Rule is invalid', () => {
        let rule = {
            condition: "inputs > 10",
            consequence: "`inputs.x + inputs.y` is greater than 10.",
            alternative: "`inputs.x + inputs.y` is less than 10."
        };
        let inputs = {
            x:5.5,
            y: 4,
        };    
        expect(() => render(<Rule rule={rule} inputs={inputs} />).toThrow("Error: Error evaluating expression: inputs is not defined"));
        rule.condition = "`apple`";
        expect(() => render(<Rule rule={rule} inputs={inputs} />).toThrow("Error: Error evaluating expression: Invalid Expression"));        
    });
    it('Rule produced consequence', () =>{
        let rule = {
            condition: "inputs.x + inputs.y > 10",
            consequence: "`inputs.x + inputs.y` is greater than 10.",
            alternative: "`inputs.x + inputs.y` is less than 10."
        };
        let inputs = {
            x:5.5,
            y: 5,
        };
        const output = Rule({rule,inputs}).props.children;
        expect(output).toStrictEqual("`5.5 + 5` is greater than 10.");
    });
    it('Rule produces alternative', () => {
        let rule = {
            condition: "inputs.x + inputs.y > 10",
            consequence: "`inputs.x + inputs.y` is greater than 10.",
            alternative: "`inputs.x + inputs.y` is less than 10."
        };
        let inputs = {
            x:5.5,
            y: 4,
        };
        const output = Rule({rule,inputs}).props.children;
        expect(output).toStrictEqual("`5.5 + 4` is less than 10.");
    });
});