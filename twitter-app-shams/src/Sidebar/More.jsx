import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "./index.css";
import { Modal, Button } from "antd";
import { BsChatDots } from "react-icons/bs";
import { BsLightning } from "react-icons/bs";
import { CgArrowTopRightR } from "react-icons/cg";
import { SiGoogleanalytics } from "react-icons/si";
import { FiSettings } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { ImDisplay } from "react-icons/im";
import { BiUserCircle } from "react-icons/bi";

const More = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        style={{
          border: "none",
          textAlign: "left",
          marginLeft: "30px",
          fontWeight: "bolder",
        }}
        type="primary"
        onClick={() => setVisible(true)}
      >
        More
      </div>
      <Modal
        // title="Modal 1000px width"
        // centered

        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={200}
        style={{ right: "40%" }}
        footer={[
          <div style={{ textAlign: "left" }}>
            <p>
              <FiSettings fontSize="1.2rem" />
              <a style={{ color: "black", marginLeft: "10px" }} href="#">
                Settings & arivacy
              </a>
            </p>
            <p>
              <FiHelpCircle fontSize="1.2rem" />
              <a style={{ color: "black", marginLeft: "10px" }} href="#">
                Help Canter
              </a>
            </p>
            <p>
              <ImDisplay fontSize="1.2rem" />
              <a style={{ color: "black", marginLeft: "10px" }} href="#">
                Display
              </a>
            </p>
            <p>
              <BiUserCircle fontSize="1.2rem" />
              <a style={{ color: "black", marginLeft: "10px" }} href="#">
                Keyboard Shortcuts
              </a>
            </p>
          </div>,
        ]}
      >
        <div style={{ textAlign: "left" }}>
          <p>
            <BsChatDots fontSize="1.2rem" />
            <a style={{ color: "black", marginLeft: "10px" }} href="#">
              Topics
            </a>
          </p>
          <p>
            <BsLightning fontSize="1.2rem" />
            <a style={{ color: "black", marginLeft: "10px" }} href="#">
              Moments
            </a>
          </p>
          <p>
            <CgArrowTopRightR fontSize="1.2rem" />
            <a style={{ color: "black", marginLeft: "10px" }} href="#">
              Twitter Ads
            </a>
          </p>
          <div>
            <SiGoogleanalytics fontSize="1.2rem" />
            <a style={{ color: "black", marginLeft: "10px" }} href="#">
              Analytics
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
};

export { More };
