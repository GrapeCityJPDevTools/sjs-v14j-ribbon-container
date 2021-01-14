// Import stylesheets
import "./style.css";
import "./license.js";

// Spread.Sheets関連モジュールのインポート
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css";
import "@grapecity/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css";
import "@grapecity/spread-sheets-designer-resources-ja";
import * as GC from "@grapecity/spread-sheets-designer";

import { ribbonConfig } from "./ribbonconfig.js";

// コンポーネント初期化
GC.Spread.Common.CultureManager.culture("ja-jp");

var elemRibbon = document.getElementById("ribbonHost");
var elemSpread = document.getElementById("spreadHost");
var elemOnButton = document.getElementById("ribboncontaineron");
var elemOffButton = document.getElementById("ribboncontaineroff");

// リボンコンテナの有無
var ribbonFlag = 1;

ribbonConfig.commandMap = {
  cmdSaveData: {
    title: "Save data to server",
    text: "保存",
    iconClass: "cmdSaveData",
    bigButton: "true",
    commandName: "cmdSaveData",
    execute: async (context, propertyName, fontItalicChecked) => {
      // customize operator
      alert("データの保存に成功しました");
    }
  }
};

// リボンコンテナ
var designer = new GC.Spread.Sheets.Designer.Designer(elemRibbon, ribbonConfig);

// SpreadJS
var spreadspread = new GC.Spread.Sheets.Workbook(elemSpread);

function setSpread(flag) {
  if (flag == true) {
    elemRibbon.style.visibility = "visible";
    elemRibbon.style.display = "";

    elemSpread.style.display = "none";
    elemSpread.style.visibility = "hidden";
  } else {
    elemRibbon.style.visibility = "hidden";
    elemRibbon.style.display = "none";

    elemSpread.style.display = "";
    elemSpread.style.visibility = "visible";
  }
}

setSpread(true);

elemOnButton.addEventListener("click", function() {
  ribbonFlag = true;
  setSpread(ribbonFlag);
});

elemOffButton.addEventListener("click", function() {
  ribbonFlag = false;
  setSpread(ribbonFlag);
});
