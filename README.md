# immutable-redux
The *perfect* framework for your next cross-platform, enterprise web-application using [react](https://facebook.github.io/react/), [redux](http://redux.js.org/) and [immutable](https://facebook.github.io/immutable-js/).
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
* [heroku](https://devcenter.heroku.com/) - Automated deployment using `git push heroku`
* [mongodb](https://docs.mongodb.com/) - Document based database
* [mongoose](http://mongoosejs.com/index.html) - javascript ODM for mongodb
* [chrome-react-perf](https://github.com/crysislinux/chrome-react-perf) - react performance tools via chrome dev-tools

Why you should use immutable data:

When passing immutable props into your component, you will gain substantial improvements to updates when rendering. When working with `react-redux`, your `@connect`ed props will utilize [shallow-render](https://github.com/reactjs/react-redux/blob/master/src/utils/shallowEqual.js), which during `shouldComponentUpdate` can utilize `===` to compare immutable props to determine whether or not the component should update.

To get going, just run:
```
npm install; npm start
```
You will also need to have [mongo daemon](https://docs.mongodb.com/manual/installation/) running.
And start the server:
```
npm run startServer
```
## Production:
Depending on how you want to go about deploying your web-app, this project is equipped to automatically deploy a web-server to serve static-content of your app on Heroku. However, you can easily build the app and deploy manually wherever you want.

### Heroku
* Follow [these instructions](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up) to get heroku toolbelt on your machine
* Commit all your code using git
* Deploy your web-app using [these instructions](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app)
  - TODO working on a docker image which can be deployed to heroku with one easy step
After that, you can push up all of your changes to heroku and heroku will run all of the necessary scripts added to **Procfile** in the root of this project
```
git push heroku master
```
### Build Production ready bundle
This will issue a command for webpack to bundle all of your js and css and insert their hashed names into /public/index.html.
```
npm run build
```

Linting in atom can be enabled by entering this command into your terminal:
```
apm install linter linter-eslint
```

Special thanks to [facebook](https://github.com/facebook), [Evil Martians](https://evilmartians.com/?utm_source=postcss), and some github heroes [@gaearon](https://github.com/gaearon), [@erikras](https://github.com/erikras), [@leebyron](https://github.com/leebyron), [@acdlite](https://github.com/acdlite), [@christianalfoni](https://github.com/christianalfoni), and many more.

This framework is only the beginning. There are hundreds of other resources out there.  All you gotta do is look for them. You can start [here](https://github.com/reactjs).

When I mentioned cross-platform, I have tested this project on Windows, Mac, and Linux([Chromebook running Ubuntu](https://github.com/kinseyost/chromebook-dev)). Please let me know if you experience any issues in installation with any of these platforms, or if you're using any other platforms.
