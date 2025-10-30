import { GetInTouch } from "../../models/getInTouch.modal.js";

export const addContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const addedContact = await GetInTouch.create({
      name,
      email,
      subject,
      message,
    });

    if (addedContact) {
      return res.status(200).json({
        success: true,
        data: addedContact,
        message: "Message sent successfully — we’ll connect with you soon!",
      });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: `server error ${e.message}`,
    });
  }
};
