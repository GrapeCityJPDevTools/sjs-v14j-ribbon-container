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
var elemCustomButton = document.getElementById("ribboncontainercustom");

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
  },
  customContextMenu: {
    text: "カスタムメニュー",
    commandName: "customContextmenu",
    execute: async (context, propertyName, fontItalicChecked) => {
      // customize operator
      alert("カスタムコンテキストメニューが実行されました");
    }
  }
};

// SpreadJS
var spread = new GC.Spread.Sheets.Workbook(elemSpread);

// リボンコンテナ
var designer = new GC.Spread.Sheets.Designer.Designer(elemRibbon);
//var designer = new GC.Spread.Sheets.Designer.Designer(elemRibbon, ribbonConfig);
var designerSpread = designer.getWorkbook();
var designerSheet = designerSpread.getActiveSheet();

var defaultConfig = GC.Spread.Sheets.Designer.DefaultConfig;

function setSpread(flag) {
  if (flag == 1) {
    elemRibbon.style.visibility = "visible";
    elemRibbon.style.display = "";

    elemSpread.style.display = "none";
    elemSpread.style.visibility = "hidden";

    designer.setConfig(defaultConfig);
    designerSheet.reset();
  } else if (flag == 2) {
    elemRibbon.style.visibility = "hidden";
    elemRibbon.style.display = "none";

    elemSpread.style.display = "";
    elemSpread.style.visibility = "visible";
  } else {
    designer.setConfig(ribbonConfig);

    elemRibbon.style.visibility = "visible";
    elemRibbon.style.display = "";

    elemSpread.style.display = "none";
    elemSpread.style.visibility = "hidden";

    designerSheet.setValue(
      0,
      0,
      "リボンとコンテキストメニューのカスタムが有効になっています。"
    );
    designerSheet.setValue(1, 0, "コンテキストメニューを開き、");
    designerSheet.setValue(
      2,
      0,
      "独自に実装メニュー項目「カスタムメニュー」の動作をご確認ください。"
    );
  }
}

setSpread(1);

elemOnButton.addEventListener("click", function() {
  ribbonFlag = 1;
  setSpread(ribbonFlag);
});

elemOffButton.addEventListener("click", function() {
  ribbonFlag = 2;
  setSpread(ribbonFlag);
});

elemCustomButton.addEventListener("click", function() {
  ribbonFlag = 3;
  setSpread(ribbonFlag);
});
