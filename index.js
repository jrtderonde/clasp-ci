function _getActiveSheet() {
  try {
    return SpreadsheetApp.getActiveSpreadsheet();
  } catch (error) {
    return undefined;
  }
}

function toast(...args) {
  const sheet = _getActiveSheet();

  if (!sheet) {
    throw new Error("No active sheet was found");
  }

  return sheet.toast(...args);
}

function helloWorld() {
  return console.log("Hello world");
}
