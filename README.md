## immutable-redux-boilerplate
A dev environment for your next cross-platform, enterprise web-app using [react](https://facebook.github.io/react/), [redux](http://redux.js.org/) and [immutable](https://facebook.github.io/immutable-js/).
There are so many libraries to choose from these days, a few of them come running to the forefront when it comes to development.
This project is set up to get your project into motion simply by adding to this setup.  

What you get:
* [react](https://facebook.github.io/react/)
* [redux](http://redux.js.org/) - State Management
* [immutable](https://facebook.github.io/immutable-js/) - Immutable data structures
* [redux-immutable](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiz2PX70YPNAhVI92MKHSfNACgQFggdMAA&url=https%3A%2F%2Fgithub.com%2Fgajus%2Fredux-immutable&usg=AFQjCNF59FoUzr3OTGQL0mOP_k3ow8Ccyg) - a simplified combineReducers function for immutable data.
* [react-router](https://github.com/reactjs/react-router) - Routing
* ES6(ES2015)/ES7 and [jsx](https://facebook.github.io/react/docs/jsx-in-depth.html) syntax using [babel](https://babeljs.io/)
* [eslint](http://eslint.org/) - Static analysis of your code.

Why you should use immutable data:

When passing immutable data into your component, you will gain great benefits with rendering due to the fact that on `shouldComponentUpdate`, you can use `===` comparison of the data. 

To get going, just run:
```
npm install; npm start
```

To build production:
```
npm run build
```

Linting in atom can be enabled by entering this command into your :
```
apm install linter linter-eslint
```
