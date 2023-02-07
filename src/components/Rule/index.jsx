import * as React from 'react';

const Rule = ({rule: {condition, consequence, alternative}, inputs}) => {
  try{  
    condition = parseExpression(condition,inputs);
    consequence = parseExpression(consequence,inputs);
    alternative = parseExpression(alternative,inputs);
    return <>{evaluateExpression(condition) ? consequence : alternative}</>;
  }catch(error){
    throw new Error(`Error rendering Rule: ${error.message}`);
  }
};

const parseExpression = (expression, inputs) => {
  // Replace input references with actual values
  for (const key in inputs) {
    expression = expression.replace(`inputs.${key}`, inputs[key]);
  }
  return expression;
};

const evaluateExpression = (expression) => {
  try{
  // Only allow arithmetic inequalites 
  const allowedChars = ['.',' ','0','1','2','3','4','5','6','7','8','9','+','-','*','/','<','=','>'];
    for (let i = 0; i < expression.length; i++) {
      if (!allowedChars.includes(expression[i])) {
        console.log(expression);
        throw new Error("Invalid Expression");
      }
  
    const evaluate = new Function(`return ${expression}`);
    const result = evaluate();
    return result > 0;
  }}catch(error){
    throw new Error(`Error evaluating expression: ${error.message}`);
  }
};
export {Rule}