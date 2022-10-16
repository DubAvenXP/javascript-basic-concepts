// https://caniuse.com/?search=top%20level%20await
// top level is valid in modules, but not in scripts

import { data } from "./01-top-level-await.mjs";

console.log(data);
