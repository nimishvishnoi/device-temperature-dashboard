Library Used: 

1. axios
2. echarts
3. lodash
4. bootstrap

Data Dashboard

Data is the new oil. But like oil, it needs to be refined through process and filters to get the actionable resource. Zenatix’s IOT stack captures thousands of data points via sensors. Conversion of these raw data points to meaningful insights requires a step-by-step process to finally create a visualization that can be understood easily. 

Problem statement :

Create a dashboard with the following features 
Create filter/aggregation configuration over the sample data to create different datasets
Create widgets/charts with the configured datasets
Rearrange the layout of the widgets in the dashboard screen
Poll data from the sample data at 100 rows every 10 seconds

Bonus
Provide alerting threshold configuration.The widget/dashboard throws an alert if a given threshold is crossed.

The configuration for these datasets and charts should be editable by the user. 

Base dashboard widgets :
Hourly average temperature of the area
Temperature average per device_display_name
Pseudo live stream of temperature for each device_display_name ( use the data polling feature here )
Table representing all devices with device_type

Tech specification:
Develop this application using ReactJS.
Charting libraries can be echarts,bizcharts, plotly,etc.
You can use lodash, lambdaJS, antd/dataset to wrangle/filter/aggregate data.
Bonus 
Brownie points if you can make this system generic for any sample data
Or
Host your application on Heroku or any other hosting platform

Assignment requirements : working app with decent aesthetics , source code with references to libraries used

Time Limit - 1 Week (7 days)



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
