import React from "react";
import TableCom from "./components/TableCom";
import { Space, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { RootStore } from "./mobxState";
import { Provider as MobxProvider } from "mobx-react";

export type TDataType = {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
};

const Moxs = () => {
  const dataScorce: TDataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const columns: ColumnsType<TDataType> = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "地址",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "标签",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "行为",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <MobxProvider {...RootStore}>
        <TableCom dataScorce={dataScorce} columns={columns}></TableCom>
      </MobxProvider>
    </>
  );
};

export default Moxs;
