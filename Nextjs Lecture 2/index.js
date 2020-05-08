const rootElement = document.getElementById('app');

// Simple DOM manipulation with Simple Javascript
// const myElement = document.createElement('h1');
// myElement.className = 'orange';
// myElement.innerText = 'Hello from Index.js File';

// rootElement.appendChild(myElement);
// DOM Manipulation with React
// const myReactElement = React.createElement(
//   'h1',
//   { className: 'orange' },
//   'Hello from React Now'
// );

// Definition of React.createElement -------> React.CreateElement use for creating an element
// 1. It takes three argument
// a. componentName or Html tag name.
// b. properties in object.
// c. children Elements

// DOM Manipulation with React
// ReactDOM.render(myReactElement, rootElement);

// using Funtional Component in React
const Hello = function (props) {
  return React.createElement(
    'h1',
    { className: 'orange' },
    'Hello from Functional Component ' + props.time
  );
};

ReactDOM.render(
  React.createElement(Hello, { time: new Date().toLocaleDateString() }, null),
  rootElement
);
