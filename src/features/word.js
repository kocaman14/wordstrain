import { createSlice } from "@reduxjs/toolkit";

const initialState={
name:"",
nameArray:[],
endIndex:1,
nameLength:0,
check:false,
}


const wordSlice = createSlice({
name:"wordsTrain",
initialState,
reducers:{
enterName:(state,action)=>{
state.name =action.payload
state.endIndex = 1
console.log(state.name)
state.nameLength=state.name.length
state.check=false
},
afterShowName:(state,action)=>{

if (state.name.length > 0) {
const words = state.name.split(" ");
state.check=true
console.log(words)
const totalWords = words.slice(0, state.endIndex).join(" ")
console.log(totalWords)
state.nameArray=[totalWords]
if (state.endIndex < words.length) {
 state.endIndex += 1;
  }
  state.check = true;
console.log(state.nameArray)
console.log(state.endIndex)
}else{
state.nameArray=[]
state.endIndex=1
state.check = false
}
}


}


})





export const {enterName,afterShowName} =wordSlice.actions
export default wordSlice.reducer