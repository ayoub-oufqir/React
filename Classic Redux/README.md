

# Classic Redux
This repository contains the code of a simple app that uses Classic Redux (don't mind the design of the lame app lol)
## Store Configuration
In the `store.js` file  
- we import reducers 
- combine them into one root reducer using `combineReducers` function 
- create our store using `createStore` function 
- add Redux Thunk using `applyMiddleware` function
- add Redux DevTools using `composeWithDevTools` function  
here is the entire store.js code  
![store.js code](https://github.com/ayoub-oufqir/React/assets/76181917/b749603a-46da-4870-942e-cae8de070e74)  
We need to provide the store to our app using the Provider component:  
![Providing the store to our app](https://github.com/ayoub-oufqir/React/assets/76181917/0ae91dc3-688c-4efc-855b-9795fbbb7c40)
## Slices
In slices files (`accountSlice.js` & `customerSlice.js`) we:
1. First create the initialState object 
2. Create the reducer function and export it
3. Create action creators functions

## hooks
- **useSelector**: used to read data from our store  
![image](https://github.com/ayoub-oufqir/React/assets/76181917/fc4517fe-659c-44dd-ac12-2f178216894b)
- **useDispatch**: returns the dispatch function  
![image](https://github.com/ayoub-oufqir/React/assets/76181917/a6928479-ee2c-4bb9-a7b8-f63ad42ba774)

## Redux Thunk
Is a middlware used to do asyn operations like data fetching after dispatching an action and before the reatches the store

We just return a function instead of an object (Action) and React is gonna know how to deal with it  
![redux thunk code](https://github.com/ayoub-oufqir/React/assets/76181917/50513a9f-991f-432f-8816-3b8706ff3c7f)