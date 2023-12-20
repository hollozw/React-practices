import React, { useState } from "react";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Observer, useLocalStore, useObserver } from "mobx-react";
import { RootStore } from "../mobxState";

export type TProps<T> = {
  [key in string]: any;
} & {
  dataScorce?: Array<T>;
  columns?: ColumnsType<T>;
};

const TableCom = (props: TProps<any>) => {
  const { dataScorce, columns } = props;
  const localStore = useLocalStore(() => RootStore);
  const { store } = localStore;

  return (
    <>
      <Observer>
        {() => (
          <>
            count:{store.count}
            <br></br>
            <Button
              onClick={() => {
                // store.total(10)
                store.add();
              }}
            >
              按钮
            </Button>
            {/* <Table columns={columns} dataSource={dataScorce} {...props}></Table> */}
          </>
        )}
      </Observer>
    </>
  );
};

export default TableCom;
