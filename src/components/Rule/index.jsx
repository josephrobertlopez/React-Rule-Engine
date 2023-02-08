import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const Rule = ({ rule: { condition, consequence, alternative }, inputs }) => (
  <ErrorBoundary fallback={FallbackComponent}>
    {parseAndEvaluateRule(condition, consequence, alternative, inputs)}
  </ErrorBoundary>
);

const FallbackComponent = ({ error }) => (
  <div>Error in rendering rule: {error.message}</div>
);

const parseAndEvaluateRule = (condition, consequence, alternative, inputs) => {
  try {
    const parsedCondition = parseExpression(condition, inputs);
    const parsedConsequence = parseExpression(consequence, inputs);
    const parsedAlternative = parseExpression(alternative, inputs);
    const evaluatedCondition = evaluateExpression(parsedCondition, inputs);

    return evaluatedCondition ? parsedConsequence : parsedAlternative;
  } catch (error) {
    throw new Error(`Error rendering Rule: ${error.message}`);
  }
};

const parseExpression = (expression, inputs) => {
  // Replace input references with actual values
  for (const key in inputs) {
    expression = expression.replace(new RegExp(`inputs.${key}`, 'g'), inputs[key]);
  }
  return expression;
};

const evaluateExpression = (expression, inputs) => {
  try {
    const evaluate = new Function(...Object.keys(inputs), `return ${expression}`);
    return evaluate(...Object.values(inputs));
  } catch (error) {
    throw new Error(`Error evaluating expression: ${error.message}`);
  }
};

export { Rule };