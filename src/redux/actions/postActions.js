import {FETCH_POSTS, NEW_POSTS} from './types'


export const fetchPosts = () => dispatch =>{
    console.log("got")
    fetch("https://www.reddit.com/r/php/search.json?q=oop&limit=8")
    .then(res => res.json())
    .then(posts => 
        dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
    )
}