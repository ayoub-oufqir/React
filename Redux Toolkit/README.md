

# Classic Redux
This repository contains the code of a simple app that uses Redux Toolkit
## Store Configuration
in the `store.js` file 
- Import configureStore from @reduxjs/toolkit
- Import reducers
- Create store using configureStore function which takes an object that contains our reducers
- Export the store and provide it to our app using Provider component 

here is the entire store.js code:

![store.js code](https://github.com/ayoub-oufqir/React/assets/76181917/98501833-ef34-425c-b92e-690a25edaccc)

We need to provide the store to our app using the Provider component:

![Providing the store to our app](https://github.com/ayoub-oufqir/React/assets/76181917/0ae91dc3-688c-4efc-855b-9795fbbb7c40)

## Slices
In slices files (`accountSlice.js` & `customerSlice.js`) we:
- Import createSlice function
- Create initial State
- Create the slice using createSlice function which takes 3 args: name, initialState and reducers object
- Create action creators inside reducers object, you can mutate state inside, you need to prepare the payload if the action creator takes 2 or more args
- Export action creators
- Export the reducer

here is the entire code of `customeSlice.js`  
- As we can see we needed to pass two arguments to createCustomer function so we first prepared the payload then created the reducer function

![customeSlice.js code](https://github.com/ayoub-oufqir/React/assets/76181917/989c770f-0ea9-47b5-8d3d-22fc2e22010c)


## hooks
- **useSelector**: used to read data from our store  
![useSelector](https://github.com/ayoub-oufqir/React/assets/76181917/fc4517fe-659c-44dd-ac12-2f178216894b)
- **useDispatch**: returns the dispatch function  
![useDispatch](https://github.com/ayoub-oufqir/React/assets/76181917/a6928479-ee2c-4bb9-a7b8-f63ad42ba774)

## Redux Thunk
**Redux Thunk**: Is a middlware used to do asyn operations like data fetching after dispatching an action and before the reaches the store

We just return a function instead of an object (Action) and React is gonna know how to deal with it

we used the same function that we used in classic Redux cos using createAsyncThunk is gonna require more code (we are gonna use it later on in another project tho)

![Redux Thunk](https://github.com/ayoub-oufqir/React/assets/76181917/1f7ebcd2-5d6e-490d-8723-da18b1209cc1)