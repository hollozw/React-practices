import React, { useRef } from "react";
import Test from "./components/Test.tsx";
import { Button } from "antd";

const Default = () => {
  const intRef = useRef(null);
  const intZiRef = useRef(null);
  return (
    <>
      <input ref={intRef} type="text"></input>
      <Button
        onClick={() => {
          console.log(intRef.current);
          console.log(intZiRef.current);
        }}
      >
        获取ref
      </Button>
      <div>default</div>
      <Test ref={intZiRef}></Test>
    </>
  );
};

export default Default;
