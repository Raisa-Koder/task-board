const mangoose = require("mongoose");

const boardSchema = new mangoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  },
  { timestamps: true }
);

module.exports = mangoose.model("Board", boardSchema);
