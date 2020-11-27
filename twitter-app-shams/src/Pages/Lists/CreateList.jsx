import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "./index.css";
import { Modal, Button } from "antd";

class CreateList extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const btn = {
      backgroundColor: "#1da1f2",
      color: "white",
      width: "24%",
      padding: "6px 12px",
      border: "none",
      borderRadius: "25px",
      fontWeight: "700",
      height: "40px",
    };

    const inputBox = {
      marginTop: "5px",
      backgroundColor: "#F8F8F8",
      width: "100%",
      padding: "6px 12px",
      border: "none",
      borderBottom: "2px solid grey",
      height: "70px",
      //   focus: "none",
    };

    return (
      <>
        <Button style={btn} type="primary" onClick={this.showModal}>
          Create a List
        </Button>
        <Modal
          style={{ width: "100%", height: "500px" }}
          title="Create a new List"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>
            <input type="file" width="100%" />
          </div>
          <div>
            <input placeholder="Name" style={inputBox} />
          </div>
          <div>
            <input placeholder="Description" style={inputBox} />
          </div>
          <div style={{ marginTop: "30px" }}>
            <p>Make Private</p>
            <p style={{ color: "grey" }}>
              When you make a List private, only you can see it.
            </p>
          </div>
        </Modal>
      </>
    );
  }
}

export { CreateList };
