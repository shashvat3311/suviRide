//Random OTP generation
const { request, response } = require("express");
const path = require("path");
const db = require("../dbConnection");
const twilio = require("twilio");
const jwt = require("jsonwebtoken");
let x;
const generateOtp = () => {
  var min = 100000;
  var max = 999999;
  return Math.floor("" + Math.random() * (max - min + 1) + min);
};

const UserRegisteration = async (req, res) => {
  // try{
  await db.query(
    `UPDATE customer SET FullName=${req.body.FullName},Email=${req.body.Email} where Mobile_No=${req.body.Mobile_No}`,
    (err, result) => {
      !req.body.FullName || !req.body.Email || !req.body.Mobile_No
        ? res
            .status(404) //update customer set FullNAme=? ,Email=? where mobile_no=?
            .send({ err_Message: "Please Enter FullName,Emaila and Mobile_No" })
        : err
        ? res.status(400).send({
            success: false,
            err: err.message,
          })
        : result
        ? res.status(200).send({
            success: true,
            results: "User Registered successfully!",
          })
        : null;
    }
  );
};

const MobileValidation = async (req, res) => {
  await db.query(
    `INSERT INTO Customer('Mobile_No') values=${req.body.Mobile_No})`,
    (err, result) => {
      err
        ? res.status(400).send({ success: false, err: err })
        : result
        ? res
            .status(200)
            .send({ success: true, results: "User Created Successfully!" })
        : null;
    }
  );
};

// const GenerateOtp = async (req, response) => {
//   const client = new ("AC8a38f34f1e2e69e78bafd3775a5e7910",
//   "4e7b38e3ac3c575a35a54c6d9ea8d6f3")();
//   response.status(200).send({});
// };

const check_VersionUpdate = async (req, res) => {
  try{
  await db.query(
    "Select update_Version as Latest_varsion,update_type  from Updates order by update_version,update_id",
    (err, result) => {
      if (err) {
        res.status(400).send({
          success: false,
          err: err.message,
        });
      } else if (result) {
        if (
          result[0].update_type == "Force" &&
          Latest_version < req.body.currentVersion
        ) {
          res.status(304).send({
            forceUpdate: true,
            flexibleUpdate: false,
          });
        }
       else if (
          result[0].update_type < req.body.currentVersion &&
          result[0].update_type == "Flexible"
        ) {
          res.status(200).send({
            forceUpdate: false,
            flexibleUpdate: true,
          });
        }
        else{
          res.status(200).send({
             success:true,
             message:"Appliction is up to Date"
          })
        }
      }
    }
  )
}


catch(err){
  res.status(400).send({
    success:false,
    err:err
  })
}
}

module.exports = { UserRegisteration, MobileValidation ,};
