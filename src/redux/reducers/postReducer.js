import {FETCH_REQUEST, NEW_POSTS, FETCH_POSTS} from '../actions/types'

const initialState = {
    items :[],
    // item : {}
}

export default function (state = initialState, action){
    switch (action.type) {
        case FETCH_REQUEST:
          return {...state, isFetching:true}
        case FETCH_POSTS :
        console.log("got")
          return{
            ...state,
            items: action.payload,
            isFetching: false
          }
          default : 
          return state;
    }
}