import React from "react";

import Excel from "exceljs";

const ReadXlsx = () => {
  const onRead = (e) => {
    console.log(e);
    const file = e.target.files[0];
    const wb = new Excel.Workbook();
    const reader = new FileReader();

    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      const buffer = reader.result;
      wb.xlsx.load(buffer).then((wb) => {
        console.log(wb);
        wb.eachSheet((sch, id) => {
          console.log(sch);
        });
      });
    };
  };
  return (
    <div>
      <input onChange={onRead} type="file" />
    </div>
  );
};


export default ReadXlsx;
