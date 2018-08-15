"use strict";

console.log("App.js is running!");

var app = {
  title: 'Get the dog',
  subtitle: "The dog is located at moms",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
    console.log(app.options);
  }
};

var reset = function reset() {
  app.options = [];
  renderApp();
};

var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var renderApp = function renderApp() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "reset"
    ),
    numbers.map(function (number) {
      return React.createElement(
        "p",
        null,
        "Number: ",
        number
      );
    }),
    React.createElement(
      "ol",
      null,
      app.options.map(function (x) {
        return React.createElement(
          "li",
          null,
          "Option: ",
          x
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
