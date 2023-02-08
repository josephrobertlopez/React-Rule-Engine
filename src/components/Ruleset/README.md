## Ruleset
A ruleset is a list of Rule objects, along with an inputs object.

## Sample
```Javascript
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
```