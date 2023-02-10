import * as React from 'react';
import {Form} from "../components/Form";
const App = () => {

  const initialRuleState = {condition:'',consequence:'',alternative:''};  

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
  const [rule,dispatchRule] = React.useReducer(ruleReducer,initialRuleState);
  const [formData,setFormData] = React.useState(null);

  return(
    <Form
      rule={rule}
      formData={formData}
      onRuleChange={dispatchRule}
      onFormSubmit={setFormData}
    />
  )
 
}
export default App;