import { Button } from "antd";
import React, { useRef } from "react";

const Test = (props: any, intZiRef: any) => {
  const intRefs = useRef(null);

  return (
    <>
      <input type="text" placeholder="子组件" ref={intRefs}></input>
      <Button
        onClick={() => {
          console.log("点击子元素");
        }}
      >
        按钮子
      </Button>
      <div>123</div>
    </>
  );
};

export default Test;
