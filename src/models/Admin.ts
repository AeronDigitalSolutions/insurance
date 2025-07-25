import mongoose, { Schema, models, model, Document } from "mongoose";
import bcrypt from "bcryptjs";

// Interface for type safety (optional but good practice)
export interface IAdmin extends Document {
  userName: string;
  email: string;
  password: string;
  role: "admin" | "superadmin";
}

const AdminSchema = new Schema<IAdmin>(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "superadmin"],
      default: "admin",
      required: true,
    },
  },
  { timestamps: true }
);

// Password hashing before save
AdminSchema.pre("save", async function (next) {
  const admin = this as IAdmin;

  if (!admin.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(admin.password, salt);
    next();
  } catch (err) {
    return next(err as Error);
  }
});

const Admin = models.Admin || model<IAdmin>("Admin", AdminSchema);
export default Admin;
