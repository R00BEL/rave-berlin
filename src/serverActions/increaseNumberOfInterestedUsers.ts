"use server";

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export async function increaseNumberOfInterestedUsers() {
  const cellAddress = "A1";
  const jwt = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const doc = new GoogleSpreadsheet(process.env.GOOGLE_DB_ID!, jwt);

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  await sheet.loadCells(cellAddress);

  const cell = sheet.getCellByA1(cellAddress);
  let value = typeof cell.value === "number" ? cell.value : 0;
  value += 1;
  cell.value = value;
  await sheet.saveUpdatedCells();
}
