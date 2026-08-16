# Kappa-Alpha-Wellness-Store

## Project Introduction
**Kappa Alpha Wellness store** is a webapp built for the common "mwananchi". Healthcare is a crucial aspect not only in a country's econoy but as well as human wellbeing. This webapp was built to bridge the lack of healthcare service especially in purchasing medical drugs at affordable prices. The application was built with React and Vite and uses JSON server as the database

## Project SetUp
To set up the project:
1. Run ```npm install```. To install all the required dependencies
2. Run ```npm run dev```. This runs the web application and runs on a port. Click it and open it on any browser of your choice
3. Run ```npm run server```. This utilizes the JSON server and serves as the database for this project

## React Hooks breakdown
React hooks played a key role in state management and information flow for this project. Some of the hooks used include **useState**, **useContext**, **useMemo** and some custome hooks such as **useCart**.

Below is a breakdown of how and why it was used

| Hook | Why |
| :---     | :---:   
| **useState** | This was used throughout the application. This was used for accessing memory and storing data which was used.
| **useContext**  | Some information was required by different components which some of them are deeply nested. Context was used to define some functionalities such as fetching data and performing CRUD functionalities. It was wrapped at the top to give access to any component that used it 
| **useMemo**  | This was used since calculations was used in the application. It provided the caching for calculation results. Considering that the calculation in this regard was calculating the total price, useMemo was used since the calculation is dynamic. If a user adds a product or removes a product the total should respond quickly
| **useCart**  | This is a custom hook that was created to encapsulate the shopping functionality. This e-commerce web app is driven by active shopping users hence a smooth shopping experience is required. It utilizes various functions as well as hooks to control logic. This includes calculating the total price, quantity of products selected, list of the shopped prodcuts, the toggling of the shopping cart. This improved modularity and implemented the key aspect of programming, separation of concerns

## Component Tree Structure
The image represents the components and how they were structured. Each node rep a component. It provides a quick overview of the components used.

<img src="./src/assets/Component-Tree.png" alt="Project Screenshot" width="500">
