const mongoose = require("mongoose");

const mongooseURl =
  "mongodb+srv://yogendra:Mongodb012@cluster0.wwi6tkm.mongodb.net/cloud_kitchen?retryWrites=true&w=majority";

const mongoDB = async () => {
  await mongoose.connect(
    mongooseURl,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("-----", err);
      else {
        console.log("connected successfully!!");
        const fetchedData = await mongoose.connection.db.collection(
          "food_items"
        );
        fetchedData.find({}).toArray(function (err, data) {
          if (err) console.log(err);
          //else console.log(data);
        });
      }
    }
  );
};

module.exports = mongoDB;
