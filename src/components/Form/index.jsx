
const RuleField = ({ onChange }) => (
  <div>
    <input type="text" placeholder="condition"  onChange={(event) => {onChange({type:'condition',payload:event.target.value})}} />
    <input type="text" placeholder="consequence" onChange={(event) => {onChange({type:'consequence',payload:event.target.value})}} />
    <input type="text" placeholder="alternative" onChange={(event) => {onChange({type:'alternative',payload:event.target.value})}}/>
  </div>
);


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