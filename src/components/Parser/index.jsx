import * as React from 'react';

const IsValidRuleSyntax = ({condition}) => {
    var comparisonSign = ['<=','>=','==','<','>'];
    // Check if the string contains a comparison sign
    var containsComparisonSign = false;
  
    var alphabetRegex = /[a-zA-Z]/g
    var allowableVariablesRegex = /inputs\.[a-zA-Z][a-zA-Z0-9]*/;
    var invalidSpecialCharsRegex= /[!@#$%^&_\=\[\]{};':"\\|,<>?]+/;
    var toReturn = <>true</>;
    let i = 0;
    // Find first instance of a comparison sign
    for(i; i<comparisonSign.length; ++i){
      if (condition.indexOf(comparisonSign[i]) !== -1){
        containsComparisonSign = true;
        break;
      }
    }
    
    if(!containsComparisonSign){
      console.log("Condition does not contain a comparison sign");
      toReturn = <>false</>;
    }
  
    // Split the string into left-hand side and right-hand side based on the comparison sign
    const parts = condition.split(comparisonSign[i]);
    if (parts.length !== 2) {
      console.log("Condition does not contain only one comparison sign");
      toReturn = <>false</>;
    }
    i = 0;
    // loop thru logic for LHS & RHS
    for(i; i<2; ++i){
      if(alphabetRegex.test(parts[i]) && !allowableVariablesRegex.test(parts[i])){
        console.log(`Side ${1+i} is invalid`);
        toReturn = <>false</>;
      }
      if(invalidSpecialCharsRegex.test(parts[i])){
        console.log(`Side ${1+i} contains invalid special characters`);
        toReturn = <>false</>;
      }
    }
    return toReturn;
  };
export {IsValidRuleSyntax}