## Demo
You can find a demo of this project [here](http://reactforecast.herokuapp.com/)

## About the Technology
 * React is used to do the entire project, I've used create-react-app and getstorybook to bootstarp the project.
 * I use circle-ci as CI and heroku as hosting.

## Further exapnsion
 * use redux to manage the state. this opens the possibility to save the state in the store easily
 * after this, use webmanifest to save the javascript resources. In combination with the state saved in the localstorage, it will let the app to be used offline
 * Do some style :). Use Aprhodite to optimize the styles and make them more debugable.

## Folder Structure

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
    stories/
    App.js
    App.test.js
    index.js
```


* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.
* `src/stories/` Javascript stories, you can write your component in an isolated environment. Every story will be used as a test, everytime a story render will change, tests will notify the change.


## Install it

* be sure you have node version <= 6.0 installed on your machine
* clone the project
* set this env variable:  ```REACT_APP_OWM_API_KEY=[your openweathermap api key]```
* install all the dependence with ```sh npm install ```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run storybook`

Runs the app's stories to allow component development in an isolated way.<br>
Open [http://localhost:9009](http://localhost:3009) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
Go to [getstorybook.io/](https://getstorybook.io/)

## Displaying Lint Output in the Editor

>Note: this feature is available with `react-scripts@0.2.0` and higher.

Some editors, including Sublime Text, Atom, and Visual Studio Code, provide plugins for ESLint.

They are not required for linting. You should see the linter output right in your terminal as well as the browser console. However, if you prefer the lint results to appear right in your editor, there are some extra steps you can do.

You would need to install an ESLint plugin for your editor first.

>**A note for Atom `linter-eslint` users**

>If you are using the Atom `linter-eslint` plugin, make sure that **Use global ESLint installation** option is checked:

><img src="http://i.imgur.com/yVNNHJM.png" width="300">

Then add this block to the `package.json` file of your project:

```js
{
  // ...
  "eslintConfig": {
    "extends": "react-app"
  }
}
```

Finally, you will need to install some packages *globally*:

```sh
npm install -g eslint-config-react-app@0.2.1 eslint@3.5.0 babel-eslint@6.1.2 eslint-plugin-react@6.3.0 eslint-plugin-import@1.12.0 eslint-plugin-jsx-a11y@2.2.2 eslint-plugin-flowtype@2.18.1
```

We recognize that this is suboptimal, but it is currently required due to the way we hide the ESLint dependency. The ESLint team is already [working on a solution to this](https://github.com/eslint/eslint/issues/3458) so this may become unnecessary in a couple of months.
