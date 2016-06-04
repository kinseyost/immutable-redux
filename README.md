## immutable-redux-boilerplate
A dev environment for your next cross-platform, enterprise web-application using [react](https://facebook.github.io/react/), [redux](http://redux.js.org/) and [immutable](https://facebook.github.io/immutable-js/).
There are so many libraries to choose from these days. A few of them come running to the forefront when it comes to developing your next website or application.
This project is set up to get your project into motion with the latest and greatest simply by adding to this setup.  

What you get:
* [react](https://facebook.github.io/react/)
* [redux](http://redux.js.org/) - State Management
* [react-redux](https://github.com/reactjs/react-redux) - `@connect` state to components.
* [immutable](https://facebook.github.io/immutable-js/) - Immutable data structures
* [redux-immutable](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiz2PX70YPNAhVI92MKHSfNACgQFggdMAA&url=https%3A%2F%2Fgithub.com%2Fgajus%2Fredux-immutable&usg=AFQjCNF59FoUzr3OTGQL0mOP_k3ow8Ccyg) - a simplified combineReducers function for immutable data
* [react-router](https://github.com/reactjs/react-router) - Routing
* [babel](https://babeljs.io/) - ES6/ES7 and [jsx](https://facebook.github.io/react/docs/jsx-in-depth.html) syntax
* [css-modules](https://github.com/css-modules/css-modules) - Hashed classNames to prevent className collisions
* [postcss](https://github.com/postcss/postcss) - Toolbelt for all your future css needs.
* [eslint](http://eslint.org/) - Static analysis of your code

Why you should use immutable data:

When passing immutable props into your component, you will gain substantial improvements to updates when rendering. When working with `react-redux`, your `@connect`ed props will utilize [shallow-render](https://github.com/reactjs/react-redux/blob/master/src/utils/shallowEqual.js), which during `shouldComponentUpdate` can utilize `===` to compare immutable props to determine whether or not the component should update.

To get going, just run:
```
npm install; npm start
```

To build production:
```
npm run build
```

Linting in atom can be enabled by entering this command into your terminal:
```
apm install linter linter-eslint
```
