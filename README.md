iMusics Project
===

## Requirements
- [Node.js](https://nodejs.org/en/download/)

### Recommended
We also recommend you to install the following:
- [EsLint](https://eslint.org/) used for linting our JS and JSX files.
- [Prettier](http://prettier.io/) used for linting and formatting our JS and JSX files.

For text editing we recommend [VS Code](https://code.visualstudio.com/), and installing the aforementioned extensions. Links for the extensions for VS Code are listed below.
- [EsLint - VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

These extensions are also available in some other text editors, and their use are not mandatory, but they are highly recommended, since they detect and fix some problems with styling and some of the project's standards.

For enabling formatting on save, in VS Code, just follow these steps:
1. Press ```CMD``` + ```SHIFT``` + ```P``` on OsX or  ```CTRL``` + ```SHIFT``` + ```P``` on Windows;
2. Type ```>Preferences: Open Settings (JSON)```;
3. Append the following properties to your Settings:
  ```
  "[javascript]": {
      "editor.formatOnSave": true
  },
  "[css]": {
      "editor.formatOnSave": true
  }
  ```

## Instalation
To install the dependencies, open the terminal in the project's folder, enter the following line then press `enter`:

```
$ npm install
```

This will create a `node_modules` folder in the root which contains all your dependencies.

## Run the application
To start the application, open the terminal in the project's folder, enter the following line then press `enter`:

```
$ npm start
```

## Run the application tests
To launches the test runner in the interactive watch mode, enter the following line then press `enter`:

```
$ npm test
```

## Loading environment variables
Create a file called “.env” in the root of your repository.
Set up your variables with the format key=value, delimited by line breaks:
```
REACT_APP_API_KEY="yourAPIKeyHere"
REACT_APP_API_URI="http://localhost:3000/"
```
