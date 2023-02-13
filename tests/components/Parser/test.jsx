import { describe, it, expect } from 'vitest';
import {
render,
screen,
} from '@testing-library/react';



import { IsValidRuleSyntax } from '../../../src/components/Parser';
describe("Rule Parser", () => {
    it('Valid Rule Syntax', () =>{
        let validConditions = ["1 < 1", "1 + 1 > 1", "inputs.x == inputs.x" ,"inputs.x + inputs.y <= inputs.z", "inputs.x1 >= 0", "1 + 1 + 1 == 3"];
        for(var i = 0; i<validConditions.length; ++i){
            render(<IsValidRuleSyntax condition={validConditions[i]}/>);
            expect(screen.queryAllByText(true));
            screen.debug();

        }
    });
    it('Invalid Rule Syntax', () => {
        // ["x","1","inputs.x",
        let invalidConditions = ["inputs == inputs", "inputs.x +=1", "inputs.x != inputs.x", "1 + 1", " 2 > 3 > 4"];
        let errorMsgs = ["Error: Condition does not contain a comparison sign","Error: Condition does not contain a comparison sign","Error: Condition does not contain a comparison sign"]
        for(var i = 0; i<invalidConditions.length; ++i){
            render(<IsValidRuleSyntax condition={invalidConditions[i]}/>);
            expect(screen.queryAllByText(false));
        }
    });
});