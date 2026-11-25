import { template } from "lodash";

const render = template("hello <%= name %>");
console.log(render({ name: "world" }));
