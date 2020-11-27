import React from 'react'
import "./More.css"
import { DataContext } from "../../Context/DataContextProvider";

  

class More extends React.Component {
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
      <div className="more">
          {/* header */}
          <div className="more__header">
               <h2>More</h2>
          </div>
          
          
          
      </div>
  )
   }
}

More.contextType = DataContext
export { More }
