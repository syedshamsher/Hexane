import React, { Component } from 'react';
import "./Widgets.css";
import {TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed,} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

class Widgets extends Component {
    constructor(props){
        super(props)
        this.state={
        }

    }
    render() {

        return (
            <div className="widgets">
                <div className="stick">
                    <div className="widgets__input">
                        <SearchIcon className="widgets__searchIcon" />
                        <input placeholder="Search Twitter" type="text" />
                    </div>
                </div>

        
              <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
        
                <TwitterTweetEmbed tweetId={"858551177767687"} />

                <div className="twitter_tweet">
                 <blockquote class="twitter-tweet"><p lang="en" dir="ltr">2 hours flew by &amp; he talked about how he had been at a hospital in Paris &amp; he asked about our daughter.Before he got off he signed our champagne bottle box &amp; wished us a happy anniversary~Roxanne King when she &amp; her husband met <a href="https://twitter.com/hashtag/JohnnyDepp?src=hash&amp;ref_src=twsrc%5Etfw">#JohnnyDepp</a> on the way back from Paris-Eurostar 2019 <a href="https://t.co/ZdlKFp2pnT">pic.twitter.com/ZdlKFp2pnT</a></p>&mdash; Savvy? 🏴‍☠️ (@Savvy_CapJackie) <a href="https://twitter.com/Savvy_CapJackie/status/1331251994334523393?ref_src=twsrc%5Etfw">November 24, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>
        
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="syedshamsher12"
                  options={{ height: 400 }}
                />
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="dan_abramov"
                  options={{ height: 400 }}
                />
              </div>
            </div>
          );
    }
}

export {Widgets}
