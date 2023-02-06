import * as React from 'react';

const App = () => {
  return (
    <>
    </>
  )
};
const Rule = ({rule, inputs}) => {
  let condition = true;
  //Parse condition
  try {
    //Parse Expression
    condition = eval(ParseExpression(rule.condition,inputs));
  } catch(error){
    console.log(error);
  }
  //Evaluate condition then select consequence or alternative
  let output = "";
  try{
    output = eval(ParseExpression(condition ? rule.consequence : rule.alternative, inputs));
    //Parse Expression
  } catch(error){
    console.log(error);
  }
  return <>{output}</>
}

// Parse expression function
const ParseExpression = (expression, inputs) => {
  return expression;
};
export default App;
export {Rule};
