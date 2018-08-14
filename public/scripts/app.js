"use strict";

console.log("App.js is running!");

var app = {
  title: 'Get the dog',
  subtitle: "The dog is located at moms",
  options: ['pick-up', "can't do it"]
};

var count = 0;

var addOne = function addOne() {
  console.log('heller');
  count++;
  renderCounterApp();
};
var minusOne = function minusOne() {
  console.log('minusOne');
  count--;
  renderCounterApp();
};
var change = function change() {
  console.log('reset');
  count = 0;
  renderCounterApp();
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count:",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  ),
  React.createElement(
    "button",
    { onClick: minusOne },
    "-1"
  ),
  React.createElement(
    "button",
    { onClick: change },
    "reset"
  )
);

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count:",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: change },
      "reset"
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
