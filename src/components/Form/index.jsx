import * as React from 'react';
const RuleField = ({ onChange }) => (
  <div>
    <input type="text" placeholder="condition"  onChange={(event) => {onChange({type:'condition',payload:event.target.value})}} />
    <input type="text" placeholder="consequence" onChange={(event) => {onChange({type:'consequence',payload:event.target.value})}} />
    <input type="text" placeholder="alternative" onChange={(event) => {onChange({type:'alternative',payload:event.target.value})}}/>
  </div>
);
const isValidRuleSyntax = (condition) => {
  var comparisonSign = ['<=','>=','==','<','>'];
  // Check if the string contains a comparison sign
  var containsComparisonSign = false;

  var alphabetRegex = /[a-zA-Z]/g
  var allowableVariablesRegex = /inputs\.[a-zA-Z][a-zA-Z0-9]*/;
  var invalidSpecialCharsRegex= /[!@#$%^&_\=\[\]{};':"\\|,<>?]+/;

  let i = 0;
  // Find first instance of a comparison sign
  for(i; i<comparisonSign.length; ++i){
    if (condition.indexOf(comparisonSign[i]) !== -1){
      containsComparisonSign = true;
      break;
    }
  }
  
  if(!containsComparisonSign){
    console.log("Condition does not contain a comparison sign");
    return false;
  }

  // Split the string into left-hand side and right-hand side based on the comparison sign
  const parts = condition.split(comparisonSign[i]);
  if (parts.length !== 2) {
    console.log("Condition does not contain only one comparison sign");
    return false;
  }
  i = 0;
  // loop thru logic for LHS & RHS
  for(i; i<2; ++i){
    if(alphabetRegex.test(parts[i]) && !allowableVariablesRegex.test(parts[i])){
      console.log(`Side ${1+i} is invalid`);
      return false;
    }
    if(invalidSpecialCharsRegex.test(parts[i])){
      console.log(`Side ${1+i} contains invalid special characters`);
      return false;
    }
  }
  return true;
};


const Form = ({rule, onRuleChange, onFormSubmit}) => {
  const handleSubmit = async (event) => {
    if(!isValidRule(rule.condition)){
      console.log("INVALID ATTEMPT");
    };
    const tmpFormData = {condition:rule.condition,consequence:rule.consequence,alternative:rule.alternative};
    event.preventDefault(tmpFormData);
    onFormSubmit(tmpFormData);
    localStorage.setItem('rule',JSON.stringify(tmpFormData));
  
    await fetch('http://localhost:3000/rule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tmpFormData),
    }); 
  };
   return(
    <form onSubmit={handleSubmit}>
       <div>
        <h3>Rules</h3>
        <RuleField
          onChange={onRuleChange}
          condition={rule.condition}
          consequence={rule.consequence}
          alternative={rule.alternative}
        />
      <button type="submit">Submit</button>
      </div>
    </form>
     
  )
};
export {Form};