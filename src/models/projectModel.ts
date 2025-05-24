import  { Schema, model, models } from "mongoose";

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: [ String ], required: true },
    image: { type: String },
    github: { type: String },
    deploy: { type: String },
    category:{ type: String },
  },
  { timestamps: true }
);

// 💡 fix model recompilation issue
const Project = models.Project || model("Project", projectSchema);

export default Project;
