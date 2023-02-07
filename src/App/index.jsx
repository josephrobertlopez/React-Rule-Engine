import * as React from 'react';

const App = () => {
  return (
    <>
    </>
  )
};
const Rule = ({rule: {condition, consequence, alternative}, inputs}) => {
  try {
    condition = parseExpression(condition,inputs);
  } catch(error){
    console.log(error);
  }
  try{
    consequence = parseExpression(consequence,inputs);
  }catch(error){
    console.log(error);
  }
  try{
    alternative = parseExpression(alternative,inputs);
  }catch(error){
    console.log(error);
  }
  //Evaluate condition then select consequence or alternative
  let output = "";
  try{
    output = evaluateExpression(condition) ? consequence : alternative;
  }catch(error){
    console.log(error);
  }
  return <>{output}</>
};

const parseExpression = (expression, inputs) => {
  // Replace input references with actual values
  for (const key in inputs) {
    expression = expression.replace(`inputs.${key}`, inputs[key]);
  }
  return expression;
};

const evaluateExpression = (expression) => {
  // Only allow arithmetic inequalites 
  const allowedChars = ['.',' ','0','1','2','3','4','5','6','7','8','9','+','-','*','/','<','=','>'];
  try {
    for (let i = 0; i < expression.length; i++) {
      if (!allowedChars.includes(expression[i])) {
        console.log(expression);
        throw new Error("Invalid Expression");
      }
    }

    const evaluate = new Function(`return ${expression}`);
    const result = evaluate();
    return result > 0;
  } catch (error) {
    throw new Error(`Error evaluating expression: ${error.message}`);
  }
};

export default App;
export {Rule};
