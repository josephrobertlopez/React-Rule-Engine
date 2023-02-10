import * as React from 'react';
import {Rule} from "../Rule";
import {ErrorBoundary} from 'react-error-boundary';

const Ruleset = ({ rules, inputs }) => {
  const FallbackComponent = ({ error }) => (
    <div>Error in rendering rule: {error.message}</div>
  );

  let renderRulesList = () => (
    rules.map((rule, index) => (
      <ErrorBoundary key={index} fallback={FallbackComponent}>
        <Rule rule={rule} inputs={inputs} />
      </ErrorBoundary>
    ))
  );

  let rulesList = renderRulesList();
  return rulesList;
};

export { Ruleset };
