import { useRequest } from "ahooks";
import { useState } from "react";

export async function asyncFunction(): Promise<any> {
  const promise = new Promise((res, rejects) => {
    setTimeout(() => {
      res("异步的数据");
    }, 1000);
  });
  return promise;
}
