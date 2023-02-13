import * as React from 'react';
import {IsValidRuleSyntax} from '../Parser';
const RuleField = ({ onChange }) => (
  <div>
    <input type="text" placeholder="condition"  onChange={(event) => {onChange({type:'condition',payload:event.target.value})}} />
    <input type="text" placeholder="consequence" onChange={(event) => {onChange({type:'consequence',payload:event.target.value})}} />
    <input type="text" placeholder="alternative" onChange={(event) => {onChange({type:'alternative',payload:event.target.value})}}/>
  </div>
);

const Form = ({rule, onRuleChange, onFormSubmit}) => {
  const isValid = IsValidRuleSyntax({condition: rule.condition});

  const handleSubmit = async (event) => {
    if (isValid.props.children == "false") {
      console.log("INVALID ATTEMPT");
      return;
    }
    localStorage.setItem("value",JSON.stringify(isValid.props.children))
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
        <h5>Rule is Valid: 
          <IsValidRuleSyntax
            condition={rule.condition}
          /> 
        </h5>
        
      <button type="submit">Submit</button>

      </div>
    </form>
     
  )
};

export {Form};