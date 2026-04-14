import { getTaptapRate } from "./src/services/taptap.js";

const taptapRate = await getTaptapRate();
console.log(taptapRate);
