// Import stylesheets
import "./style.css";
import "./license.js";

// Spread.Sheets関連モジュールのインポート
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css";
import "@grapecity/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css";
import "@grapecity/spread-sheets-designer-resources-ja";
import * as GC from "@grapecity/spread-sheets-designer";

// コンポーネント初期化
GC.Spread.Common.CultureManager.culture("ja-jp");

var elemRibbon = document.getElementById("ribbonHost");
var elemSpread = document.getElementById("spreadHost");
var elemOnButton = document.getElementById("ribboncontaineron");
var elemOffButton = document.getElementById("ribboncontaineroff");

// リボンコンテナの有無
var ribbonFlag = true;
// リボンコンテナ
var designer = new GC.Spread.Sheets.Designer.Designer(elemRibbon);
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
