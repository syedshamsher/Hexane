import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "./index.css";
import { Modal, Button } from "antd";
import { BsCardImage } from "react-icons/bs";
import { AiOutlineFileGif } from "react-icons/ai";
import { FaPollH } from "react-icons/fa";
import { BiSmile } from "react-icons/bi";
import { BiCalendarCheck } from "react-icons/bi";
import { AiOutlineLoading } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
class TweetButton extends React.Component {
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
      width: "100%",
      padding: "6px 12px",
      border: "none",
      borderRadius: "25px",
      fontWeight: "700",
      height: "40px",
    };

    const inputBox = {
      marginTop: "0px",
      width: "100%",
      padding: "6px 12px",
      border: "none",
      height: "40px",
      //   focus: "none",
    };

    const tweet = {
      backgroundColor: "#1da1f2",
      color: "white",
      width: "25%",
      //   padding: "6px 12px",
      border: "none",
      borderRadius: "25px",
      fontWeight: "700",
      height: "40px",
    };

    return (
      <>
        <Button style={btn} type="primary" onClick={this.showModal}>
          Tweet
        </Button>
        <Modal
          style={{ borderRadius: "10px" }}
          title="Tweet"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <div>
              <div style={{ float: "left" }}>
                <BsCardImage
                  style={{
                    marginLeft: "50px",
                    marginTop: "10px",
                    color: "#1DA1F2",
                    fontSize: "1.5rem",
                  }}
                />
                <AiOutlineFileGif
                  style={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    color: "#1DA1F2",
                    fontSize: "1.5rem",
                  }}
                />
                <FaPollH
                  style={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    color: "#1DA1F2",
                    fontSize: "1.5rem",
                  }}
                />
                <BiSmile
                  style={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    color: "#1DA1F2",
                    fontSize: "1.5rem",
                  }}
                />
                <BiCalendarCheck
                  style={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    color: "#1DA1F2",
                    fontSize: "1.5rem",
                  }}
                />
              </div>
              <div style={{ marginLeft: "70px" }}>
                <button style={tweet}>Tweet</button>
              </div>
            </div>,
          ]}
        >
          <input placeholder="What's happening?" style={inputBox} />
          <div>
            <button
              style={{
                border: "none",
                marginLeft: "50px",
                marginTop: "100px",
                borderRadius: "10px",
              }}
            >
              🌎 Everyone can reply
            </button>
          </div>
        </Modal>
      </>
    );
  }
}

export { TweetButton };
