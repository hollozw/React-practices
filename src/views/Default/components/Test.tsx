import { Button } from "antd";
import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Test = forwardRef((props: any, intZiRef: any) => {
  const intRefs = useRef(null);
  useImperativeHandle(intZiRef, () => {
    {
      fn: () => {
        const { current }: any = intRefs || {};
        current?.focus();
      },
    }
  });
  return (
    <>
      <input type="text" placeholder="子组件" ref={intRefs}></input>
      <Button onClick={fn}>按钮子</Button>
      <div>123</div>
    </>
  );
};

export default Test;
