import React from "react";
import Excel, { Xlsx } from "exceljs";

import { saveAs } from "file-saver";

const ExcelScreen = () => {
  const handleDownload = async (name) => {
    const wb = new Excel.Workbook();
    const wsh = wb.addWorksheet("Services");
    for(let i=0; i < 1800; i++){
      wsh.addRow([1, 2, 3,'test',new Date(),20.66, "PLN","080-845845", 23,0.23,44, 'handlingStandard']);

    }

    const blob = await wb.xlsx.writeBuffer();
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const bb = new Blob([blob], { type: fileType });
    saveAs(bb, `pliczek_${name}.xlsx`);
  };

  const downloadMultiple = async () => {
    [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].forEach((item) =>
      handleDownload(item)
    );
  };

  //
  return (
    <div>
      Pobiesz XLS
      <button onClick={downloadMultiple}>Popiesz</button>
    </div>
  );
};

export default ExcelScreen;
