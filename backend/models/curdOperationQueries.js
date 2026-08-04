// CREATE - Insert one document
db.products.insertOne({ name: "iPhone 15", price: 80000, category: "electronics" });

// CREATE - Insert multiple documents
db.products.insertMany([
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
]);

// READ - Find all documents
db.products.find();

// READ - Find one document
db.products.findOne({ name: "iPhone 15" });

// READ - Find with condition
db.products.find({ price: { $gt: 1000 } });

// UPDATE - Update one document
db.products.updateOne({ name: "iPhone 15" }, { $set: { price: 75000 } });

// UPDATE - Update multiple documents
db.products.updateMany({ category: "electronics" }, { $set: { discount: 10 } });

// DELETE - Delete one document
db.products.deleteOne({ name: "Mouse" });

// DELETE - Delete multiple documents
db.products.deleteMany({ category: "electronics" });

// ========================================================================================

// **************************************************************************************

// ========================================================================================
const mongoose = require("mongoose");

// CREATE - Save a new document
const product = new Product({ name: "iPhone 15", price: 80000 });
await product.save();

// CREATE - Using create()
await Product.create({ name: "iPhone 15", price: 80000 });

// CREATE - Insert multiple
await Product.insertMany([
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
]);

// READ - Find all documents
await Product.find();

// READ - Find one document
await Product.findOne({ name: "iPhone 15" });

// READ - Find by ID
await Product.findById("productIdHere");

// READ - Find with condition
await Product.find({ price: { $gt: 1000 } });

// UPDATE - Update one document
await Product.updateOne({ name: "iPhone 15" }, { $set: { price: 75000 } });

// UPDATE - Find by ID and update
await Product.findByIdAndUpdate("productIdHere", { price: 75000 });

// UPDATE - Update multiple documents
await Product.updateMany({ category: "electronics" }, { $set: { discount: 10 } });

// DELETE - Delete one document
await Product.deleteOne({ name: "Mouse" });

// DELETE - Find by ID and delete
await Product.findByIdAndDelete("productIdHere");

// DELETE - Delete multiple documents
await Product.deleteMany({ category: "electronics" });

// ========================================================================================

// **************************************************************************************

// ========================================================================================

{
  "aggregationPipelineStages"[
    ({
      stage: "$match",
      purpose: "Filter documents (like WHERE in SQL)",
      example: { $match: { category: "electronics" } },
    },
    {
      stage: "$project",
      purpose: "Select or reshape fields (show/hide fields, add computed ones)",
      example: { $project: { name: 1, price: 1, _id: 0 } },
    },
    {
      stage: "$addFields",
      purpose: "Add new computed fields while keeping existing fields",
      example: { $addFields: { finalPrice: { $subtract: ["$price", "$discount"] } } },
    },
    {
      stage: "$group",
      purpose: "Group documents and aggregate (like GROUP BY in SQL)",
      example: { $group: { _id: "$category", totalPrice: { $sum: "$price" } } },
    },
    {
      stage: "$sort",
      purpose: "Sort documents (1 = ascending, -1 = descending)",
      example: { $sort: { price: -1 } },
    },
    {
      stage: "$limit",
      purpose: "Limit the number of output documents",
      example: { $limit: 5 },
    },
    {
      stage: "$skip",
      purpose: "Skip N documents (used for pagination)",
      example: { $skip: 10 },
    },
    {
      stage: "$unwind",
      purpose: "Flatten an array field into multiple documents (always returns a single object per array element)",
      example: { $unwind: "$tags" },
    },
    {
      stage: "$lookup",
      purpose: "Join with another collection, like SQL JOIN (always returns an array)",
      example: {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "userInfo",
        },
      },
    },
    {
      stage: "$count",
      purpose: "Count total matching documents",
      example: { $count: "totalElectronics" },
    })
  ];
}

// ========================================================================================

// **************************************************************************************

// ========================================================================================

// Transaction	-> Multiple operations succeed or fail together
//Useful when multiple documents need to be updated together and rolled back if any step fails."

// Sharding -> Sharding is MongoDB's approach to horizontal scaling
// Sharding means splitting a large database across multiple servers,
// so no single server has to store or handle all the data. It helps scale the database when data grows very large

// Replication -> Copies data across servers for backup and reliability
// Replication means keeping multiple copies of the same data on different servers. One server handles writes,
// and the others stay in sync as backups. If the main server fails, one of the backups takes over automatically.
