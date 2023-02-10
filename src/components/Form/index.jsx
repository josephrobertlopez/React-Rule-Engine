import * as React from 'react';
const RuleField = ({ onChange }) => (
  <div>
    <input type="text" placeholder="condition"  onChange={(event) => {onChange({type:'condition',payload:event.target.value})}} />
    <input type="text" placeholder="consequence" onChange={(event) => {onChange({type:'consequence',payload:event.target.value})}} />
    <input type="text" placeholder="alternative" onChange={(event) => {onChange({type:'alternative',payload:event.target.value})}}/>
  </div>
);

const Form = ({rule,formData, onRuleChange, onFormSubmit}) => {
   const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit({condition:rule.condition,consequence:rule.consequence,alternative:rule.alternative});
    localStorage.setItem('rule',JSON.stringify({condition:rule.condition,consequence:rule.consequence,alternative:rule.alternative}));
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