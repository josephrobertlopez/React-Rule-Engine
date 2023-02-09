import * as React from 'react';
import { Ruleset } from "../components/Ruleset";
import {Rule} from "../components/Rule";

const RuleInputField = ({ onChange, index, condition, consequence, alternative }) => (
  <div>
    <input type="text" placeholder="condition" onChange={event => onChange(event, 'condition', condition='')} />
    <input type="text" placeholder="consequence" onChange={event => onChange(event, 'consequence', consequence='')} />
    <input type="text" placeholder="alternative" onChange={event => onChange(event, 'alternative', alternative='')} />
  </div>
);

const InputField = ({ onChange, index, inputVariable, inputValue }) => (
  <div>
    <input type="text" placeholder="input variable" onChange={event => onChange(event, 'inputVariable', index, inputVariable='')} />
    <input type="text" placeholder="input value" onChange={event => onChange(event,'inputValue', index, inputValue='')}/>
  </div>
);

const Form = ({ rules, inputs, onRuleChange, onInputChange, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(rules, inputs);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Rules</h3>
        {rules.map((rule,index) => (
          <RuleInputField
            key={index}
            index={index}
            condition={rule.condition}
            consequence={rule.consequence}
            alternative={rule.alternative}
            onChange={onRuleChange}
          />
        ))}
        <button type="button" onClick={() => onRuleChange([...rules, { condition: '', consequence: '', alternative: '' }])}>
          +
        </button>
      </div>
      <div>
        <h3>Inputs</h3>
        {
        inputs.map((input,index) => (
          <InputField
            key={index}
            index={index}
            inputVariable={input.inputVariable}
            inputValue={input.inputValue}
            onChange={onInputChange}
          />
        ))}
        <button type="button" onClick={() => onInputChange([...inputs, { '': '' }])}>
          +
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const App = () => {
  const [rules,setRules] = React.useState([ {condition: '', consequence: '', alternative: '' }]);
  var [inputs,setInputs] = React.useState([{inputVariable:'',inputValue: ''}]);

  const handleRuleChange = (newRules) => {
    setRules(newRules);
  };

  const handleInputChange = (newInputs) => {
    setInputs(newInputs);
  };


  const handleSubmit = (event) => {
    console.log(event);
    onSubmit(rules, inputs);
  };
  return (
    <div>
      <Form 
        rules={rules} 
        inputs={inputs} 
        onRuleChange={handleRuleChange} 
        onInputChange={handleInputChange} 
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;