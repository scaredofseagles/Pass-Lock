const db = require("../config/db");
const { hashPassword, authenticatePass } = require("../utils/auth");
const { v4: uuidv4 } = require("uuid");

exports.getUser = async (req, res) => {
  const { email } = req.params;

  try {
    let userQuery = await db.query(
      `SELECT * FROM users WHERE email = '${email}'`
    );

    res.json({ success: true, response: userQuery.rows[0] });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

exports.authorizeUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // check if the user exists

    let userQuery = await db.query(
      `SELECT * FROM users WHERE email = '${email}'`
    );

    // check if password provided matches the db password

    if (userQuery.rows.length) {
      let isMatch = await authenticatePass(
        userQuery.rows[0].password,
        password
      );
      if (isMatch) res.json({ success: true, response: userQuery.rows[0] });
    }

    throw new Error("Email or Password is Incorrect");
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

exports.addUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  let hashedPass = await hashPassword(password);

  const uuid = uuidv4();

  try {
    let userQuery = await db.query(
      `INSERT INTO users (id, first_name, last_name, email, password) VALUES ('${uuid}', '${firstName}', '${lastName}', '${email}', '${hashedPass}') RETURNING *`
    );

    res.json({
      success: true,
      message: "Successfully Created User.",
      response: userQuery.rows[0]
    });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

exports.editUser = async (req, res) => {
  const { id } = req.params;
};

exports.removeUser = async (req, res) => {
  //
};
