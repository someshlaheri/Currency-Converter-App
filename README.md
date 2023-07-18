# Currency-Converter-App
It is developed to convert INR to EUR and vice-versa through an API call as a backend. By making a call to the API function, the returned result gets stored in JSON format and it gets displayed as output.

![image](https://github.com/someshlaheri/Currency-Converter-App/assets/76648646/ee0d5687-7b8d-4603-bfd5-78fb1ec1f2d7)

Published link - https://someshlaheri.github.io/Currency-Converter-App/

The set of technologies that are stacked together to build this app are as follows:
- HTML / CSS
- JavaScript
- React
  
  API’s used in this application are as follows:
- https://exchangeratesapi.io/
- https://www.frankfurter.app/

## OBJECTIVE

From the name we can understand that the app is for converting currency and it mainly converts INR to EUR using the current rate retrieved from the API call.

It basically have an input that allows a user to enter the amount, a section to show the current exchange rate along with the functional buttons and then print the result in the output.

![image](https://github.com/someshlaheri/Currency-Converter-App/assets/76648646/2302ea4f-5308-4c61-8a59-bcc5356c6f34)

## IMPLEMENTATION
This app is developed using React which is a front-end JavaScript library and it has separate components for each division. Before diving into the main project, let us understand how it has been created from the basics.

First step is to install Node.js, a server-side JavaScript environment in the local machine, it is the most popular platform for hosting and running web servers for React apps.

Steps to create the App :
1. Open terminal and run
- ```npx create-react-app currency-converter-app```

- ```cd my-app```

- ```npm start```

npx can run and execute packages without having to install them locally or globally.


2. The app is now ready for development.
Create folders in “src” directory named as – api, assets, components.
Directory structure of the “src” also known as source folder :

  ![image](https://github.com/someshlaheri/Currency-Converter-App/assets/76648646/516d1eec-6ea0-4b21-b170-76fd91c5173e)

3. Inside the api folder, create a ApiCall.js file which have the function to call API.
4. Upload images, icons etc in the assets folder.
5. Components folder is the major part of the development of this app.
6. Create the components folder as show in the diagram :
   
   ![image](https://github.com/someshlaheri/Currency-Converter-App/assets/76648646/39feb507-1a34-46b8-a5f4-eee16805b289)

Root, MainContainer, Header, Body, InputDiv, ExchangeBtnDiv, OutputDiv are JSX type.

Corresponding to each of these, their CSS file has been created which will beautify the app.

## WORKING
When the application starts public/index.html is the first page that is loaded. This will be the only html file in the entire application since React is written using JSX. Also, this file has a line of code <div id=“root”></div>. This line is very significant since all the application components are loaded into this div.

- src/index.js: This is the javascript file corresponding to index.html. This file has the following line of code which is very significant.

```ReactDOM.render(<App />, document.getElementById(‘root’));```

The above line of code is telling that App Component has to be loaded into an html element with id root. This is nothing but the div element present in index.html.

- src/App.jsx : This is the file for App Component. App Component is the main component in React which acts as a container    for all other components.
  
- src/App.css : This is the CSS file corresponding to App Component.
  
  Now, the components directory is already implemented,

  src/App.jsx will call and return src/components/root.jsx, now root.jsx will call and return other components to App.jsx according to their hierarchy level.

### Work flow:
Whenever the app gets rendered, two functions named convertAmount(); and BaseRate(); gets called once. After that, BaseRate(); sets the exchange rate whenever the flip(); function is called, so basically BaseRate(); depends on the Base Currency. All this are done using UseEffect and UseState React Hooks.

When the convert button gets clicked, it simply makes an API call through convertAmount(); function which has Base Currency, Target Currency and the amount as parameters.

Here amount is the actual input entered by the user, if the input is null or zero, an alert pops up stating “Wrong input! Please enter number greater than 0.”.

Afterwards, ConvertAmount(); returns the converted amount as result and it get passed to OutputDiv as props which gets displayed in the output.

When the flip button gets clicked, it sets the Base Currency to Target Currency and vice-versa. As soon as any change happens in the Base Currency the BaseRate(); function gets called using UseEffect hook depends on Base Currency.
When the reset button gets clicked, the value in the input field gets replaced by 1 and the output field gets replaced by the current exchange rate.

## CHALLENGES FACED
- To implement React Hooks
