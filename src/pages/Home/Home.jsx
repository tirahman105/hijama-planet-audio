import React from "react";
import Audio from "./Audio";
import WhatsApp from "../../shared/WhatsApp";

const Home = () => {
  return (
    <div className="bg-blue-50">
      {/* <h1>This is home</h1> */}
      <Audio></Audio>
      <WhatsApp></WhatsApp>
    </div>
  );
};

export default Home;
