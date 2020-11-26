import React from 'react'
import "./Feed.css"
import "./Tweetbox.css"
import { Avatar, Button } from "@material-ui/core"
import { Tweetbox } from "../Tweetbox"
import { DataContext } from "../Context/DataContextProvider";

  

class Feeds extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
           user: [],
           allUser: [],
           newTweet: [],
           message: "",
           tweeted: false,
        }
        this.handleChange = this.handleChange.bind( this)
        this.handleSubmit = this.handleSubmit.bind( this)

      }

      componentDidMount() {
        const { users, activeUser } = this.context;
        this.setState({
          user: activeUser,
          allUser: users,
        });
      }

      handleChange(e) {
        const { name, value } = e.target;
        this.setState({
          [name]: value,
          tweeted: false
        });
      }
    
      handleSubmit = ( e ) => {
        e.preventDefault();
        const { newTweet, ...payload } = this.state;
        this.setState({
            newTweet: [ ...newTweet, payload ],
            tweeted: true
        })
    }
   
    
   render() {
     const{ user, allUser, message, newTweet, tweeted } = this.state
     console.log( user, allUser, newTweet, tweeted )
    return (
      <div className="feed">
          {/* header */}
          <div className="feed__header">
               <h2>HOME</h2>
          </div>
          {/* tweetbox */}
          <div className="tweetBox">
                <form onSubmit = { this.handleSubmit } >
                    <div className="tweetBox__input">
                        <Avatar src="" />
                        <input type="text" name="message" value={message} onChange= {this.handleChange}   placeholder="What's happening?" />
                    </div>
                    <input type="submit" name="submit" value="Tweet" className="tweetBox__tweetButton" />
                </form>
            </div>



          <div style={{margin: "10px"}}>
              
               {
                 tweeted ? 

                 <div>
                       <div style={{display: "flex"}}>
                                  <h3> {user.name} </h3>
                                  <h4> {user.username} </h4>
                        </div>
                                <div>
                                  {
                                    newTweet.map((item => {
                                      return(
                                        <p> {item.message} </p>
                                      )
                                    }))
                                  }
                                </div>
                    </div>

                    :
                  
                  <div> New Feeds </div>
              

               } 

               {
                 
                allUser.map( (item) =>  {
                  return(
                    <div>
                        {
                          item.tweets.map(( tweets ) => {
                            return(
                              <>
                                <div style={{display: "flex"}}>
                                  <h3> {item.name} </h3>
                                  <h4> {item.username} </h4>
                                </div>
                                <div>
                                  <p> {tweets} </p>
                                </div>
                              </>
                            )
                          })
                        }
                    </div>
                  )
                } )
               }
                    
                
         
          </div>
          
      </div>
  )
   }
}

Feeds.contextType = DataContext
export { Feeds }
