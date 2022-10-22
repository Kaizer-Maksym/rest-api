const { Schema, model } = require("mongoose");
const { handleSaveErrors } = require("../../utilities");

const phoneRegexp = /^\(\d{3}\)\s\d{3}-\d{4}$/;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      match: [phoneRegexp, "Phone format (000) 000-0000"],
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleSaveErrors);

const Contact = model("contact", contactSchema);

module.exports = Contact;
