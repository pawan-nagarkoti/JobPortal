import express from "express";

const app = express();
const PORT = 3000;

console.log("hi");
console.log("by");
console.log("hi by");

app.listen(PORT, () => {
  console.log(`server is now running on port ${PORT}`);
});
