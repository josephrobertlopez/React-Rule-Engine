# React-Rule-Engine

Simple Rule Engine written in the React framework. The app leverages the [Vite](https://vitejs.dev/guide/#trying-vite-online) build tool. 

## Requirements
- node
- npm

## Installation
```Bash
# Install dependencies and dev dependencies
npm install
# Install vitest and save as dev dependency
npm install vitest --save-dev
# Install jsdom and save as dev dependency
npm install jsdom --save-dev
# Install react-testing-library and save as dev dependency
npm install @testing-library/react @testing-library/jest-dom --save-dev
```

## Usage
```Bash
npm run dev
```
## Testing
For testing, the app leverages the vitest framework. jsdom is leveraged to render the HTML in a headless browser environment. 

```Bash
npm run test
```
## License

[MIT](https://choosealicense.com/licenses/mit/)