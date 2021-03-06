import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../redux/actions/postActions';

class Posts extends Component {
    constructor(props){
        super(props)
       
    }
    componentWillMount(){
        this.props.fetchPosts()
    }
    shouldComponentUpdate(newProps, newState) {
        if(newProps.postdata !==""){
            return true;
        }
       else{
           return false
       }
     }
    render (){
        // console.log(this.props.postdata)
        if(this.props.postdata !==[]){
            console.log("founddataneee")
        }
        else{
            console.log("no data found")
        }
                // const {postdata = []} = this.props

                // if (postdata>0){
                //     console.log("posteddata", postdata)
                // }
                // else{
                //     console.log("no data")
                // }
           
        
       
        return(
            <div>
                    {this.props.isFething?"..Loading":null}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        postdata : state.posts.items,
        isFething: state.posts.isFetching
    }
  
    // console.log(state)
 }
 export default connect(mapStateToProps, {fetchPosts})(Posts);