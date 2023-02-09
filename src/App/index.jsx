import * as React from 'react';
import { Ruleset } from "../components/Ruleset";
import {Rule} from "../components/Rule";

const RuleInput = ({ onChange, index }) => (
  <div>
    <input type="text" placeholder="condition" onChange={e => onChange(e, 'condition', index)} />
    <input type="text" placeholder="consequence" onChange={e => onChange(e, 'consequence', index)} />
    <input type="text" placeholder="alternative" onChange={e => onChange(e, 'alternative', index)} />
  </div>
);

const Input = ({ onChange, index }) => (
  <div>
    <input type="text" placeholder="input" onChange={event => onChange(event, 'input', index)} />
  </div>
);

const Form = ({ rules, inputs, onRuleChange, onInputChange, onSubmit }) => {
  const [ruleInputs, setRuleInputs] = React.useState(rules);
  const [inputValues, setInputValues] = React.useState(inputs);

  const handleRuleChange = (newRuleInputs) => {
    setRuleInputs(newRuleInputs);
    onRuleChange(newRuleInputs);
  };

  const handleInputChange = (newInputValues) => {
    setInputValues(newInputValues);
    onInputChange(newInputValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(ruleInputs, inputValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Rules</h3>
        {ruleInputs.map((rule, index) => (
          <RuleInput
            key={index}
            index={index}
            onChange={handleRuleChange}
          />
        ))}
        <button type="button" onClick={() => handleRuleChange([...ruleInputs, { condition: '', consequence: '', alternative: '' }])}>
          +
        </button>
      </div>
      <div>
        <h3>Inputs</h3>
        {inputValues.map((input, index) => (
          <Input
            key={index}
            index={index}
            onChange={handleInputChange}
          />
        ))}
        <button type="button" onClick={() => handleInputChange([...inputValues, { input: '' }])}>
          +
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const App = () => {
  const [rules, setRules] = React.useState([
    { condition: '', consequence: '', alternative: '' },
  ]);

  const [inputs, setInputs] = React.useState([
    { input: '' },
  ]);

  const handleRuleChange = (newRules) => {
    setRules(newRules);
  };

  const handleInputChange = (newInputs) => {
    setInputs(newInputs);
  };

  // const handleSubmit = () => {
  //   // Submit logic goes here
  // };
  const handleSubmit = event => {
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