import React, { useState } from "react";
import Modal from "react-modal";

export default function PortFolio() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <h1 className="head">Portfolio</h1>
      <div className="head" >React</div>
      <div className="head" >React Native</div>
      <div className="head" >Dapps</div>
      <div className="box">OTR Firms</div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <button onClick={()=>{setModal(true)}} >Click Me</button>
     <Modal isOpen={modal} onRequestClose={()=>{setModal(false)}} ><div>This is modal</div></Modal>
    </div>
  );
}
