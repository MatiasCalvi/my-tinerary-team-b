import { createReducer } from "@reduxjs/toolkit";
import commentAction from "../actions/commentActions"; 
    
    const { getComments,addComments,deleteComment,editComment }= commentAction
    

    const initialState={
      comments:[],
        
    }
    const commentReducer = createReducer(initialState,(builder)=>{
            builder
            .addCase(getComments.fulfilled,(state,action)=>{
                console.log(action.payload);
                
                return{
                    ...state,
                  comments: action.payload.reverse()
                }
            })
            .addCase(addComments.fulfilled,(state,action) =>{
                if(action.payload.success){
                    console.log(action.payload.success)
                    state.comments.push(action.payload.response)
                }
            })
            .addCase(deleteComment.fulfilled,(state,action)=>{
                return{
                    ...state,
                    id:action.payload.id
                }
            })
            .addCase(editComment.fulfilled,(state,action)=>{
                return{
                    ...state,
                    id:action.payload.id
                }
            })
        })

        export default commentReducer