const { db } = require("../../database/firebase");

// call database function from this controller and return the data
const getAllFirebaseDocuments = async (req, res) => {
  try {
    const snapshot = await db.collection("your_collection").get();
    const documents = snapshot.docs.map((doc) => doc.data());

    // return the res to the client
    res.status(200).json({ status: "OK", data: documents });
  } catch (error) {
    res.status(error?.status || 500).json({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

module.exports = {
  getAllFirebaseDocuments
}