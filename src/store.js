import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({ 
  name : 'user',
  initialState : { name : 'kim', age : 20 },
  reducers : {
    changeName(state){
      state.age++;
      return state;
    }
  }
})

export let { changeCount, changeName } = user.actions

let cart = createSlice({ 
  name : 'cart',
  initialState : 
  [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    changeCount(state){
      console.log(state);
      return state;
    }
  }
})

export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
  }
}) 

//state 만들고 등록까지 완료.