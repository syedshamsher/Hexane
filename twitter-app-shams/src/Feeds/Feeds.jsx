import React from 'react'
import "./Feed.css"
import "./Tweetbox.css"
import { Avatar, Button } from "@material-ui/core"
import { DataContext } from "../Context/DataContextProvider";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';


class Feeds extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
           user: [],
           allUser: [],
           newTweet: [],
           message: "",
           tweeted: false,
           red: false
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

    changeColor(){
      this.setState({red: !this.state.red})
   }
   
    
   render() {
     const{ user, allUser, message, newTweet, tweeted, flag, col } = this.state
     console.log( user, allUser, newTweet, tweeted, col, flag )
     let btn_class = this.state.red ? "redButton" : "whiteButton";
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
                        <Avatar src={user.imageURL} style={{ margin: "10px"}} />
                        <input type="text" name="message" value={message} onChange= {this.handleChange}   placeholder="What's happening?" />
                    </div>
                    <input type="submit" name="submit" value="Tweet" className="tweetBox__tweetButton" />
                </form>
            </div>



          <div style={{margin: "10px"}}>
              
               {
                 tweeted ? 

                 <div>
                                <div>
                                  {
                                    newTweet.map((item => {
                                      return(
                                        <div className = "tweet_wrapper">
                                            <div style={{display: "flex"}}>
                                                <div style={{ margin: 10}}>
                                                <Avatar src={user.imageURL} />
                                                </div>
                                                <h4 className="name"> {user.name} </h4>
                                                <p className="username"> {user.username} </p>
                                            </div>
                                            <div>
                                              <p className = "tweets"> {item.message} </p>
                                            </div>
                                            
                                            <div className="icons">
                                              <ChatBubbleIcon style={{color: "grey" }}/>
                                              <SendIcon style={{color: "grey" }}/>
                                              <FavoriteIcon className={btn_class} onClick={this.changeColor.bind(this)}/>
                                              <ShareIcon style={{color: "grey" }}/>
                                            </div>
                                        </div>
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
                          item.tweets.map(( tweet ) => {
                            return(
                              <div className = "tweet_wrapper">
                                <div style={{display: "flex"}}>
                                <div style={{ margin: 10}}>
                                  <Avatar src={item.imageURL} />
                                </div>
                                  <h4 className="name"> {item.name} </h4>
                                  <p className="username"> {item.username} </p>
                                </div>
                                <div>
                                  <p className = "tweets"> {tweet.title} </p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center"}}>
                                  <img className="posted_img" src={tweet.img} alt="posted-img"/>
                                </div>
                                
                                <div className="icons">
                                  <ChatBubbleIcon style={{color: "grey" }}/>
                                  <SendIcon style={{color: "grey" }}/>
                                  <FavoriteIcon className={btn_class} onClick={this.changeColor.bind(this)}/>
                                  <ShareIcon style={{color: "grey" }}/>
                                </div>
                              </div>
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
