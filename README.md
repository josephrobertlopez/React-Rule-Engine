# React-Rule-Engine

Simple Rule Engine written in the React framework. The app leverages the [Vite](https://vitejs.dev/guide/#trying-vite-online) build tool. 

## Requirements
- node
- npm

## Installation
```Bash
# Install dependencies and dev dependencies
npm install
```

## Usage
```Bash
# Run dev instance
npm run dev
```

## Testing
For testing, the app leverages the vitest framework. jsdom is leveraged to render the HTML in a headless browser environment. The React Testing Library is leveraged for component tests. 

```Bash
# Run tests
npm run test
```

## Rule
A rule is as an arithmetic inequality. The encoding of a rule is as follows:
- condition: 
    - arithmetic inequality awaiting input variables
- consequence:
    - output statement as a string awaiting input variables
    - returned when condition is false
- alternative:
    - output statement as a string awaiting input variables
    - returned when condition is false

## License

[MIT](https://choosealicense.com/licenses/mit/)