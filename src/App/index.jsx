import * as React from 'react';
import { Ruleset } from "../components/Ruleset";
import {Rule} from "../components/Rule";

const RuleField = ({ onChange, condition, consequence, alternative }) => (
  <div>
    <input type="text" placeholder="condition" value={condition} onChange={event => onChange('condition', event.target.value)} />
    <input type="text" placeholder="consequence" value={consequence} onChange={event => onChange('consequence', event.target.value)} />
    <input type="text" placeholder="alternative" value={alternative} onChange={event => onChange('alternative', event.target.value)} />
  </div>
);

const InputField = ({ onChange, inputVariable, inputValue }) => (
  <div>
    <input type="text" placeholder="input variable" value = {inputVariable} onChange={event => onChange('inputVariable',event.target.value)} />
    <input type="text" placeholder="input value" value = {inputValue} onChange={event => onChange('inputValue',event.target.value)}/>
  </div>
);
const App = () => {
  const [rule,setRule] = React.useState({condition:'',consequence:'',alternative:''});
  const [input,setInput] = React.useState({inputVariable:'',inputValue:''});
  return(
    <div>
      <RuleField
        onChange={setRule}
        condition={rule.condition}
        consequence={rule.consequence}
        alternative={rule.alternative}
      />

      <InputField
        onChange={setInput}
        inputVariable={rule.inputVariable}
        inputValue={rule.inputValue}
      />
    </div>
  )
}


// const Form = ({ rules, inputs, onRuleChange, onInputChange, onSubmit }) => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit(rules, inputs);
//   };  
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <h3>Rules</h3>
//         {rules.map((rule,index) => (
//           <RuleField
//             key={index}
//             index={index}
//             condition={rule.condition}
//             consequence={rule.consequence}
//             alternative={rule.alternative}
//             onChange={onRuleChange}
//           />
//         ))}
//         <button type="button" onClick={() => onRuleChange([...rules, { condition: '', consequence: '', alternative: '' }])}>
//           +
//         </button>
//       </div>
//       <div>
//         <h3>Inputs</h3>
//         {
//         inputs.map((input,index) => (
//           <InputField
//             key={index}
//             index={index}
//             inputVariable={input.inputVariable}
//             inputValue={input.inputValue}
//             onChange={onInputChange}
//           />
//         ))}
//         <button type="button" onClick={() => onInputChange([...inputs, { inputVariable:'',inputValue: '' }])}>
//           +
//         </button>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// const App = () => {
//   const [rules,setRules] = React.useState([ {condition: '', consequence: '', alternative: '' }]);
//   var [inputs,setInputs] = React.useState([{inputVariable:'',inputValue: ''}]);


//   const handleSubmit = (event) => {
//     console.log(event);
//     onSubmit(rules, inputs);
//   };
//   return (
//     <div>
//       <Form 
//         rules={rules} 
//         inputs={inputs} 
//         onRuleChange={setRules} 
//         onInputChange={setInputs} 
//         onSubmit={handleSubmit}
//       />
//     </div>
//   );
// };

export default App;