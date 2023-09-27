import { Table, Tag, Space, Button } from "antd";
import React, { useEffect } from "react";
import type { ColumnsType } from "antd/es/table";
import * as xlsx from "xlsx";
import type { WorkBook } from "xlsx";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export default function XlsxProject(prop: unknown) {
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
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
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data: DataType[] = [
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
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  function pushExcel() {
    const colounsName = columns.map((item, index) => {
      return item.title;
    });
    const jsonWorkSheet = xlsx.utils.json_to_sheet(colounsName);
    const workBook: WorkBook = {
      SheetNames: ["example.xlsx"],
      Sheets: {
        ["example.xlsx"]: jsonWorkSheet,
      },
    };
    return xlsx.writeFile(workBook, "example.xlsx");
  }

  useEffect(() => {}, []);

  return (
    <>
      <Button type="primary" onClick={pushExcel}>
        导出
      </Button>
      <Table columns={columns} dataSource={data}></Table>
    </>
  );
}
