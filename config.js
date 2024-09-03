//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "veranmaina685@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Veran737/Queen_Teni_claire/tree/main";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaiNH4KGpLHHUF2ex903";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaiNH4KGpLHHUF2ex903";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/00c4ac1671013c3d19810.mp4";
global.devs = "https://wa.link/ybhee3";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEdYTkx6SGRvUTJQL3dYbVNSdkdxUDhwaTc5WnBsTzJYalFpVmJFNTJXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWsvM3grOG1oYk4ycDhQMlJpeUEvYWlyT2NuZlFCWlA5UXVwK3pPcUgwTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTnNKdS9wQUlFZTNkYnBpVkh3S2dacUwzUzhVQXV6YktRTHpjV1QxUW5nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWVmozWCtDMTRuekVBdVd4ckhUb1FtL0tveWVJcXY2NWxpV21yMHhEUW5vPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFQRGZ6cUlJdUxiNlFYVWR4QUFJSklPOVNQcXJWemg0Z1VyQTM4dmVzVVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpzK1k3eVl4UDRPaGxsNFVUNGM0cmhvRU9xK3BFMFc5aUJlbWRtL21HVUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUdLWnFrMWpGQUNZai8zY1NBVm1xKzZzRGdHcVBjREUyOE9ySFBEVzFGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianFaVWxvZmJUMEQ4RFJNaWFtNDJzVUdvdk9kS1JVanFuekl2b1llTE9rOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlE4a1pWWXVaYUNUNzd2SWs3UndzY1pERHNKei9yZVJacmM5cStaQ2NGa05rVVVUMFN4VXFWbHhVcDQxWVpld3NvVFZhYnYxcXR4S1NYQVdyR1J0eGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiJpNUJhWlNDd1dQNjY2aFZpVVNzRlZWQXVHbmZpb2hzc3lEWU85b0d4RG1BPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0aGFGMTB5bVIyV2c2bnFBMjVjS0lRIiwicGhvbmVJZCI6ImVlNGUyODU0LTlmZjUtNGY3Yy1hYWIwLWE1OWY2ZjMxY2Y0NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4WEhEWGVrRWtFb05OS2dZWVFTL1BtaDNIQVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVZHWC9rWnpzS1pGaVZjSGgzK3JmaDRGTEJBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5RRThUSkNIIiwibWUiOnsiaWQiOiIyMzQ4MDg2ODQzODcxOjY1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOZm51cU1DRUxQNjJiWUdHQndnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJEb0d2Vjh4VmxFU0Q4YVZpa1VXOTExUXg1QTJyeXE0bmphT2dRUy9uSUYwPSIsImFjY291bnRTaWduYXR1cmUiOiJUa25Tb3ZBV21ta2NGd1pzaGphNWJ6Um1nRkh4KzZtbXdMR3F0WHcyVGo1azIwTVlxNkNFdzVTYzFBbGt6N090RjlTTm5oZnlubTJ3T3RkSEMvdnBCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOEg2R1BEa1MrYkp4TGRuc0x3a3NEN2VGTHYya2U5bmQ0anFydkRCZTRxZmgxWndCajBkSCsrT0orVHYxQndZbzQyNEZxMkhFQlpYd2M1S243YkM1aFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDg2ODQzODcxOjY1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlE2QnIxZk1WWlJFZy9HbFlwRkZ2ZGRVTWVRTnE4cXVKNDJqb0VFdjV5QmQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjUzMzI4MDB9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_TENI_CLAIRE™`",
  author: process.env.PACK_AUTHER || "QUEEN_TENI_CLAIRE",
  packname: process.env.PACK_NAME || "T E N I",
  botname: process.env.BOT_NAME || "QUEEN_TENI_CLAIRE",
  ownername: process.env.OWNER_NAME || "Veran maina",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "T E N I").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
