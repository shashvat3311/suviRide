/*This File encompasses
1)Add Version
2)Display Version Updates 
3)Add Language
4)Screen Label
*/
const db = require("../dbConnection");

const add_Version = async (req, res) => {

}

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
//Add Language

const addLanguage = async (req, res) => {
  try {
    await (`INSERT INTO LANGUAGES(Language,Language_code) VALUES(${req.body.Language},${req.body.Language_code} )`, (err, result) => {
      !req.body.Language || !req.body.Language_code ? res.status(404).send({ success: false, message: "Please Enter 1)Language and 2)Language_code properly In order to Execute this API" }) : err ? res.status(400).send({ success: false, err: err }) : result ? res.status(200).send({ success: true, message: `New Language:${req.body.Language} & Language_code:${req.body.Language_code} Inserted Successfully` }) : null
    })
  }
  catch (err) {
    res.status(400).send({
      success: false,
      err: err
    })
  }
}

const screenLabel = async (req, res) => {
  try {

    db.query(`INSERT INTO SCREENLABEL(screen_id,language_code,label_code,error_text,help_text) values( ${req.body.screen_id} ${req.body.language_code} ${req.body.label_code}  ${req.body.error_text}  ${req.body.help_text})`, (err, result) => {
      !req.body.screen_id || !req.body.language_code || !req.body.label_code || !req.body.error_text || !req.body.help_text ? res.status(404).send({ success: false, message: "Please Enter 1)screen_id,2)language_code,3)label_code,4)error_text,5)help_text Properly in order to execute this API" }) : err ? res.status(400).send({ success: false, err: err }) : result ? res.status(200).send({ success: true, message: `New Screen Label with screen_id:${req.body.screen_id},language_code:${req.body.language_code},label_code:${req.body.label_code},error_text:${req.body.error_text},help_text:${req.body.help_text} Inserted Successfully ` }) : null
    })
  }
  catch (err) {
      res.status(400).send({
        success:false,
        err:err.message
      })
  }
}
module.exports = { display_VersionUpdates, add_VersionUpdate, addLanguage, addLanguage ,screenLabel};