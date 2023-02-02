const db = require("../dbConnection");

const add_VersionUpdate = async (req, res) => {
  try {
    db.query(
      "INSERT INTO UPDATE(Update_Version,Update_Description,Update_Type,Update_Technology) values(?,?,?)",
      [
        req.body.update_Version,
        req.body.Description,
        req.body.Update_Type,
        req.body.Update_Technology,
      ],
      (err, result) => {
        !req.body.update_Version ||
        !req.body.Description ||
        !req.body.Update_Type ||
        !req.body.Update_Technology
          ? res
              .status(404)
              .send(
                "err:Please Enter 1)Update Version 2)Update_Description 3)Update_Type 4)Update_Technology Properly in order to execute this API"
              )
          : null;

        err
          ? res.status(400).send({ success: false, err: err })
          : result
          ? res
              .status(200)
              .send({ success: true, results: "Update Inserted Successfully" })
          : null;
      }
    );
  } catch (err) {
    res.status(400).send({
      success: false,
      err: err,
    });
  }
};

const display_VersionUpdates = async (req, res) => {
  try {
    db.query("SELECT * FROM UPDATES", (err, result) => {
      err
        ? res.status(200).send({ success: false, err: err.message })
        : result
        ? res.status(200).send({ success: true, results: result })
        : null;
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      err: err,
    });
  }
};

module.exports = { display_VersionUpdates, add_VersionUpdate };
