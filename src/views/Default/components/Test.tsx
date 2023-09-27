import type { UploadProps } from "antd";
import { Button, Upload } from "antd";
import React from "react";

const Test = () => {
  const props: UploadProps = {
    onChange({ file, fileList }) {
      if (file.status !== "uploading") {
        console.log(file, fileList);
      }
    },
    defaultFileList: [
      {
        uid: "1",
        name: "xxx.png",
        status: "done",
      },
    ],
  };

  return (
    <>
      <Upload {...props}>
        <Button>上传文件中。。。</Button>
      </Upload>
    </>
  );
};

export default Test;
