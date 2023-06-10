# React Templates
> Last updated on 10 June 2023.

<br>

### Getting started.

The contents of this repository are templates for creating different kinds of **React.js** web projects.

* `create-react-app` is primarily for singular page applications and sites.
* `react-router` is for simulating "multi-page" applications and sites within React's single page setup.
* `react-router-typescript` integrates Typescript functionality within the `react-router` template.

<br>


### Download and install.

1. Download this repository as a .zip file by clicking the green `Code` button at the top and selecting "Download ZIP". 
2. On your local machine, extract the contents of the .zip file.
3. Open the system's terminal (or command prompt) application and navigate to the directory containing the extracted folders.
4. Choose which of the three templates you'd like to use and navigate into that specific folder.
5. Enter the following command into the terminal which should automatically install dependancies and create the `node_modules` folder:
```bash
$ npm install
```

<br>

### Running the templates.
* To create a local server and view live changes, enter the following into the terminal:
```bash
$ npm start
```
* To kill the server, press `cmd` + `c` in the terminal if on MacOS, or `ctrl` + `c` in the command prompt if on Windows.

<p align="right">(<a href="#react-templates">back to top</a>)</p>

### Deploying to GitHub Pages :octocat:.
This section is broken into two parts. The first part is ensuring that the React app is setup for GitHub Pages. The second part is ensuring that your GitHub repository is setup for GitHub Pages.

#### Setting up the React app.
1. Log into GitHub and create a new repository.
* Enter any name.
* Set privacy to public (or private if you have GitHub Pro subscription).
2. On your local machine, within the directory of an already created React app, install the `gh-pages` package dependency by entering the following in the terminal:
```bash
$ npm install gh-pages --save-dev
```
3. Open the `package.json` file and add a **homepage** property below the version property like so. The homepage property should be set to the URL of the GitHub repository which will contain the React app:
```text
{
  "name": "your-react-app-name",
  "version": "0.1.0",
  "homepage": "https://gitname.github.io/your-react-app-repo",
  "private": true,
```
4. Within the same `package.json` file, add a **predeploy** and **deploy** property within the scripts section:
```text
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```
5. Depending on how you decide to set up your coding environment, make sure your React app and your GitHub repository are connected.
6. Push the React app to GitHub by running the following command in the terminal (or command prompt). Make sure to include a commit message:
```bash
$ npm run deploy -- -m "Deploying React app to GitHub Pages"
```

#### Setting up the GitHub repository.
1. In your browser, navigate to the GitHub repository and click "settings".
2. On the right side under the "Code and automation" section, click on "Pages"
3. Set source to `Deploy from a branch`.
4. Select `gh-pages` as the branch and `/ (root)` as the folder. 
5. Press save.

It will take GitHub a short time to properly set up the Pages site, but the link should appear in green on the same page when it is finished 🎉!

