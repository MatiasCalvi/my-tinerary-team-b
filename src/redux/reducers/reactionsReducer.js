import { createReducer } from "@reduxjs/toolkit";
import reactionsActions from "../actions/reactionsActions"

const {newReactionCreation,getReactionItinerary,getReactionItinerary2,feedbackReaction,getUserReactions,deleteReaction}= reactionsActions

const initialState={
    reactionsAdmin:[],
    reactionsItinerary:[],
    reactionsItineray2:[],
    feedback: [
        {
            name: "like",
            feedbacked: false
        },
        {
            name: "love",
            feedbacked: false
        },
        {
            name: "not-like",
            feedbacked: false
        },
        {
            name: "surprise",
            feedbacked: false
        }
    ],
    reactionsProfile:[],
    reactionsProfileId:'',
    message:''
}

const reactionsReducer = createReducer(initialState,
    (builder)=>{
        builder

        .addCase(newReactionCreation.fulfilled,(state,action)=>{
                 if(action.payload.success){
                        state.reactionsAdmin.push(action.payload.response)
                } 
        })
        .addCase(getReactionItinerary.fulfilled,(state,action)=>{
             return {
                ...state,
                reactionsItinerary: action.payload.reactions
            } 
        })
        .addCase(getReactionItinerary2.fulfilled,(state,action)=>{
           
            return {
                ...state,
                reactionsItineray2: action.payload.reactions2
            } 
        })
        .addCase(feedbackReaction.fulfilled, (state,action)=>{
            state.feedback.forEach(reaction =>{
                if (reaction.name === action.payload.name){
                    reaction.feedbacked = !reaction.feedbacked
                }
            })
        })
        .addCase(getUserReactions.fulfilled,(state,action)=>{
          console.log(action)
            if(action.payload.length>0){
               return{
                    ...state,
                    reactionsProfile: action.payload
                }
            }
            if(!action.payload.success){
                return {
                
                    message: action.payload.message

                    } 
                }
             
        })
        .addCase(deleteReaction.fulfilled,(state,action)=>{
          
            return{
                ...state,
                reactionsProfileId: action.payload
            }
        })  

})

export default reactionsReducer;