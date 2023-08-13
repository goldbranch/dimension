// https://bscscan.com/address/0x4325788c380f8bdfd382c3349cdbcc58640c2539
// https://vscode.blockscan.com/bsc/0x4325788c380f8bdfd382c3349cdbcc58640c2539

import { parseUnits } from "viem";
import { formatTable } from "./utils.mjs";

const DECIMALS_USD = 18;
const DECIMALS_FUND = 18;
const PRICE_USD = 17000000000000n;
const MAX_SAFE_UINT32 = 4294967295n;

const AMOUNT_USD = "1"; // 1USD

const amountUsdWei = parseUnits(AMOUNT_USD, DECIMALS_USD);
const amountFundWei = (amountUsdWei * BigInt(10 ** DECIMALS_FUND)) / PRICE_USD;

const rows = [
  ["Max uint", MAX_SAFE_UINT32.toString()],
  ["Price USD WEI", PRICE_USD.toString()],
  ["Amount USD", AMOUNT_USD.toString()],
  ["Amount USD WEI", amountUsdWei.toString()],
  ["Amount FUND WEI", amountFundWei.toString()],
];

console.log(formatTable(rows));

if (amountFundWei > MAX_SAFE_UINT32) {
  console.log(`\nПри покупке ${AMOUNT_USD}USD происходит переполнение uint.`);
}
