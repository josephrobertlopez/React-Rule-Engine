## Rule
A rule is as an arithmetic inequality. The encoding of a rule is as follows:
**condition**: 
- arithmetic inequality awaiting inputs variable

**consequence**:
- output statement as a string awaiting inputs variable
- returned when condition is false

**alternative**:
- output statement as a string awaiting inputs variable
- returned when condition is false

## Sample
```Javascript
let rule = {
    condition: "inputs.x + inputs.y > 10",
    consequence: "`inputs.x + inputs.y` is greater than 10.",
    alternative: "`inputs.x + inputs.y` is less than 10."
};
let inputs = {
    x:5.5,
    y: 4,
};
```