import * as React from 'react';

const RuleInput = ({ onChange, index }) => (
  <div>
    <input type="text" placeholder="condition" onChange={e => onChange(e, 'condition', index)} />
    <input type="text" placeholder="consequence" onChange={e => onChange(e, 'consequence', index)} />
    <input type="text" placeholder="alternative" onChange={e => onChange(e, 'alternative', index)} />
  </div>
);

const Input = ({ onChange, index }) => (
  <div>
    <input type="text" placeholder="input" onChange={e => onChange(e, 'input', index)} />
  </div>
);

const Form = ({ rules, inputs, onRuleChange, onInputChange, onSubmit }) => {
  const [ruleInputs, setRuleInputs] = React.useState(rules);
  const [inputValues, setInputValues] = React.useState(inputs);

  const handleRuleChange = (e, field, index) => {
    const newRuleInputs = [...ruleInputs];
    newRuleInputs[index][field] = e.target.value;
    setRuleInputs(newRuleInputs);
    onRuleChange(newRuleInputs);
  };

  const handleInputChange = (e, field, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index][field] = e.target.value;
    setInputValues(newInputValues);
    onInputChange(newInputValues);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(ruleInputs, inputValues);
  };

  const addRuleInput = () => {
    setRuleInputs([...ruleInputs, { condition: '', consequence: '', alternative: '' }]);
  };

  const addInput = () => {
    setInputValues([...inputValues, { input: '' }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Rules</h3>
        {ruleInputs.map((ruleInput, index) => (
          <RuleInput key={index} index={index} onChange={handleRuleChange} />
        ))}
        <button type="button" onClick={addRuleInput}>
          +
        </button>
      </div>
      <div>
        <h3>Inputs</h3>
        {inputValues.map((input, index) => (
          <Input key={index} index={index} onChange={handleInputChange} />
        ))}
        <button type="button" onClick={addInput}>
          +
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const Results = ({ results }) => (
  <div>
    <h3>Results</h3>
    <pre>{JSON.stringify(results, null, 2)}</pre>
  </div>
);

export { Form, Results };