// Importing default export (without curly braces) and named export (with curly braces)
import greet from "./15_modules_export.js";
import { userInfo } from "./15_modules_export.js";

// Executing both imports
console.log(greet(userInfo.name));
console.log(`Title: ${userInfo.title} | Academy: ${userInfo.academy}`);