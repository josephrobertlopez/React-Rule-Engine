import { describe, it, expect } from 'vitest';
import {
render,
screen,
} from '@testing-library/react';
import { Rule, Ruleset } from '../../../src/components/Ruleset';
describe('Ruleset', () => {
    it('Ruleset is invalid', () => {
        let rules = [
            {
                condition: "input  > 10",
                consequence: "`inputs.x + inputs.y` is greater than 10.",
                alternative: "`inputs.x + inputs.y` is less or equal to 10."
            },
            {
                condition: "inputs.x + inputs.y == 10",
                consequence: "`inputs.x + inputs.y` is equal to 10.",
                alternative: "`inputs.x + inputs.y` is not equal to 10."
            }
        ]
        let inputs = {
            x: 5,
            y: 5
        
        }
        // Error Boundary must be fixed
        expect(() => render(<Ruleset rules={rules} inputs={inputs}/>).toThrow("Error: react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop"));
    });
    it('Ruleset is valid', () => {
        let rules = [
            {
                condition: "inputs.x + inputs.y > 10",
                consequence: "`inputs.x + inputs.y` is greater than 10.",
                alternative: "`inputs.x + inputs.y` is less or equal to 10."
            },
            {
                condition: "inputs.x + inputs.y == 10",
                consequence: "`inputs.x + inputs.y` is equal to 10.",
                alternative: "`inputs.x + inputs.y` is not equal to 10."
            }
        ]
        let inputs = {
            x: 5,
            y: 5
        }
        let correctOutcomes = [
            "`5 + 5` is less or equal to 10.",
            "`5 + 5` is equal to 10."
        ]
        let {container} = render(<Ruleset rules={rules} inputs={inputs}/>);
        const renderedRules = container.querySelectorAll('.rule');
        renderedRules.forEach((rule, index) => {
            expect(rule.textContent).toEqual(correctOutcomes[index]);
        });    
    });
});