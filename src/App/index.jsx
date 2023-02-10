import * as React from 'react';
import { Ruleset } from "../components/Ruleset";
import {Rule} from "../components/Rule";
import { render } from 'react-dom';

const RuleField = ({ onChange }) => (
  <div>
    <input type="text" placeholder="condition"  onChange={(event) => {onChange({type:'condition',payload:event.target.value})}} />
    <input type="text" placeholder="consequence" onChange={(event) => {onChange({type:'consequence',payload:event.target.value})}} />
    <input type="text" placeholder="alternative" onChange={(event) => {onChange({type:'alternative',payload:event.target.value})}}/>
  </div>
);

const InputField = ({ onChange }) => (
  <div>
    <input type="text" placeholder="input variable"  onChange={(event) => {onChange({type:'inputVariable',payload:event.target.value})}} />
    <input type="text" placeholder="input value"  onChange={(event) => {onChange({type:'inputValue',payload:event.target.value})}}/>
  </div>
);
const Form = ({rule,input,onRuleChange, onInputChange}) => {
   const [formData,setFormData] = React.useState(null);
   const handleSubmit = (event) => {
    event.preventDefault();
    let tmpInput = {};
    tmpInput[input.inputVariable] = input.inputValue;
    setFormData({condition:rule.condition,consequence:rule.consequence,alternative:rule.alternative});
    localStorage.setItem('rule',JSON.stringify(formData));
  };
   return(
    <form onSubmit={handleSubmit}>
       <div>
        <RuleField
          onChange={onRuleChange}
          condition={rule.condition}
          consequence={rule.consequence}
          alternative={rule.alternative}
        />
        <InputField
          onChange={onInputChange}
          inputVariable={input.inputVariable}
          inputValue={input.inputValue}
        />
      <button type="submit">Submit</button>
      </div>
    </form>
     
  )
}
const App = () => {

  const initialRuleState = {condition:'',consequence:'',alternative:''};  
  const initialInputState = {inputVariable:'',inputValue:''}

  const ruleReducer = (rule,action) => {
    switch(action.type){
      case 'condition':{
        return {condition:action.payload,consequence:rule.consequence,alternative:rule.alternative};
      }
      case 'consequence':{
        return {condition:rule.condition,consequence:action.payload,alternative:rule.alternative};
      }
      case 'alternative':{
        return {condition:rule.condition,consequence:rule.consequence,alternative:action.payload};
      }
      default:
        throw new Error(`Error with Rule Reducer: action.type=${action.type} action.payload=${action.payload}`);
    }
  }
  const inputReducer = (input,action) => {
    switch(action.type){
      case 'inputVariable':
        return {inputVariable:action.payload,inputValue:input.inputValue};
      case 'inputValue':
        return {inputVariable:input.inputVariable,inputValue:action.payload};
      default:
        throw new Error(`Error with Input Reducer: action.type=${action.type} action.payload=${action.payload}`);
    }
  }
  const [rule,dispatchRule] = React.useReducer(ruleReducer,initialRuleState);
  const [input,dispatchInput] = React.useReducer(inputReducer,initialInputState);
  return(
    <Form
      rule={rule}
      input={input}
      onRuleChange={dispatchRule}
      onInputChange={dispatchInput}
    />
  )
 
}
export default App;