import React, { Component } from "react";
import data from "./db.json";
import Card from "./Card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }
  render() {
    const { data } = this.state;
    console.log(data.users);
    return (
      <div
        style={{
          width: "600px",
          // height: "800px",
          border: "1px solid black"
        }}
      >
        {data.users.map((item) => (
          <Card user={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export { Home };
