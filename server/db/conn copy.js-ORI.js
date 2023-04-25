console.log("calling conn.js file...");

const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var _db;

module.exports = {
  connectToServer: function (callback) {
    console.log("Db = " + Db);
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (err) console.log(`err = ${err}`);

      if (db) {
        //console.log("xx = " + db);
        _db = db.db("employees");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
