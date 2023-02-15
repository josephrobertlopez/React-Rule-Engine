import * as React from 'react';
import {Form} from "../components/Form";
const App = () => {

  const initialRuleState = {condition:'',consequence:'',alternative:''};  

  const ruleReducer = (state,action) => {
    switch(action.type){
      case 'condition':{
        return {...state, condition:action.payload};
      }
      case 'consequence':{
        return {...state, consequence:action.payload};
      }
      case 'alternative':{
        return {...state,alternative:action.payload};
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
      onRuleChange={dispatchRule}
      onFormSubmit={setFormData}
    />
  )
 
}
export default App;