import { describe, it, } from 'vitest';
import {
render,
screen,
} from '@testing-library/react';
import App from "../../src/App";
describe('App',() => {
    it('Render App', () => {
        render(<App />);
        screen.debug();
    });
});
