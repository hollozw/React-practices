import { Button } from "antd";
import React, { forwardRef, useCallback, useRef, useState } from "react";

import { asyncFunction } from "./hooks";

const Test = forwardRef((props: any, intZiRef: any) => {
  const [state, setState] = useState(0);
  const fn = useCallback(() => {
    console.log(state);
  }, [state]);
  const [test, setTest] = useState(async () => {
    const res = await asyncFunction();
    return res;
  });
  console.log(test, "使用state获取异步的数据");
  return (
    <>
      <Button onClick={fn}>按钮</Button>
      <Button
        onClick={() => {
          setState(state + 1);
        }}
      >
        state加1
      </Button>
    </>
  );
});

export default Test;
