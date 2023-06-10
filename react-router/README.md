## React Router > React Templates
> Last updated on 10 June 2023.

<br>

### Dependencies.
This template requires that `react-router-dom` be installed. To install this project's dependencies, in the terminal type the following:
```bash
$ npm install react-router-dom
```

### Resolving an error.
For some reason, this template propogates the following error:
> babel-preset-react-app, is importing the `@babel/plugin-proposal-private-property-in-object` package without declaring it in its dependencies

To resolve this, make sure you have exited `npm start` by pressing `cmd` + `c` if on Mac or `ctrl` + `c` if on Windows. Enter the following command in the terminal:
```bash
npm install --save-dev @babel/plugin-proposal-private-property-in-object --legacy-peer-deps
```