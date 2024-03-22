import { DataGrid } from "devextreme-react";
import { Column, Paging } from "devextreme-react/data-grid";
import React from "react";
import { useState } from "react";
import { testData } from "./data";

const genData = () => {
  return Array(40000)
    .fill(0)
    .map((_, i) => ({
      id: i,
      name: `name${i}`,
      value: i,
      value2: `jednowska bilansowa nr${i}`,
    }));
};
const GWM = () => {
  const [data, setData] = useState(testData);

  const linkCell = (data) => {
    return (
      <a href={`https://www.google.com/search?q=${data.value2}`}>
        To jest Link{data.value2}
      </a>
    );
  };
  const statusCell = (data) => {
    return (
      <div style={{ color: data.value % 2 === 0 ? "green" : "red" }}>
        {data.value}
      </div>
    );
  };
  return (
    <DataGrid dataSource={data}>
      <Paging enabled={true} defaultPageSize={50} />
      
      <Column
        dataField="id"
        // caption={getLocaleString(props.lang, "Id")}
        dataType="number"
        alignment="right"
        sortOrder="desc"
      />
      <Column
        dataField="type"
        // caption={getLocaleString(props.lang, "Type")}
        dataType="string"
      />
      <Column
        dataField="tradeDate"
        // caption={getLocaleString(props.lang, "Trade_Date")}
        dataType="date"
        // format={dateFormat}
        alignment="center"
      />
      <Column
        dataField="jmsData.msgId"
        // caption={getLocaleString(props.lang, "msgId")}
        dataType="string"
      />
      <Column
        dataField="jmsData.object"
        dataType="string"
        // caption={getLocaleString(props.lang, "Object_Code")}
        // cellRender={linkCell}
      />
      <Column
        dataField="ownerCode"
        dataType="string"
        // caption={getLocaleString(props.lang, "Participant")}
        // cellRender={e => (
        //     <LinkCell
        //         url={`#/marketparticipant/${getFieldValue(e, "data.ownerId")}`}
        //         displayValue={getFieldValue(e, "data.ownerCode")}
        //     />
        // )}
      />
      <Column
        dataField="userName"
        dataType="string"
        // caption={getLocaleString(props.lang, "User")}
        // cellRender={e => (
        //     <LinkCell
        //         url={`#/user/${getFieldValue(e, "data.userId")}`}
        //         displayValue={`${getFieldValue(e, "data.userName")}`}
        //     />
        // )}
        // visible={false}
      />
      <Column
        dataField="source"
        dataType="string"
        // caption={getLocaleString(props.lang, "Source")}
        cellRender={statusCell}
        // visible={false}
      />
      <Column
        dataField="modificationDate"
        dataType="datetime"
        // caption={getLocaleString(props.lang, "Last_Modification_Date")}
        // format={datetimeFormat}
        alignment="center"
        // visible={false}
      />
      <Column
        dataField="createDate"
        dataType="datetime"
        // caption={getLocaleString(props.lang, "Create_Date")}
        // format={datetimeFormat}
        alignment="center"
        // visible={false}
      />
      <Column
        dataField="statusText"
        dataType="string"
        cellRender={statusCell}
        // caption={getLocaleString(props.lang, "Document_Status")}
      />
      <Column
        dataField="createDate"
        // caption={getLocaleString(props.lang, "Receive_Date")}
        dataType="datetime"
        // format={datetimeFormat}
      />
      <Column
        dataField="statusDate"
        // caption={getLocaleString(props.lang, "Status_Date")}
        dataType="datetime"
        // format={datetimeFormat}
      />
      <Column dataField={"value"} cellRender={statusCell} />
      <Column dataField={"name"} cellRender={linkCell} />
    </DataGrid>
  );
};

export default GWM;
