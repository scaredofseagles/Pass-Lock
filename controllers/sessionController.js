const db = require("../config/db");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment-timezone");

exports.checkSession = async (req, res) => {
  const { userid } = req.params;
  const { token } = req.cookies;

  console.log({ userid, token });

  try {
    let sessionQuery = await db.query(
      `SELECT * FROM sessions WHERE user_id = '${userid}' AND token = '${token}'`
    );

    if (sessionQuery.rows.length) {
      res.json({ success: true, message: "Session Exists for this User." });
    } else res.json({ success: false, message: "No Sessions for this User." });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

exports.getCurrentSession = async (req, res) => {
  const { token } = req.cookies;

  const sessionToken = token;

  console.log({ sessionToken });
  try {
    if (!sessionToken) throw new Error("No Sessions for this User.");

    let sessionQuery = await db.query(
      `SELECT * FROM sessions INNER JOIN users ON user_id = users.id WHERE token = '${sessionToken}'`
    );

    if (sessionQuery.rows.length) {
      res.json({
        success: true,
        message: "Session Exists for this User.",
        response: sessionQuery.rows[0]
      });
    } else res.json({ success: false, message: "No Sessions for this User." });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

exports.addSession = async (req, res) => {
  const { userid } = req.body;

  try {
    const uuid = uuidv4();
    // TODO: change to UPSERT/ON CONFLICT
    let sessionExists = await db.query(
      `SELECT * FROM sessions WHERE user_id = '${userid}'`
    );

    if (sessionExists.rows.length) {
      let sessionQuery = await db.query(
        `UPDATE sessions SET token = '${uuid}', last_access = to_timestamp(${moment().valueOf() /
          1000}) WHERE user_id = '${userid}'`
      );
    } else {
      let sessionQuery = await db.query(
        `INSERT INTO sessions (token, user_id, created_at, last_access) VALUES ('${uuid}', '${userid}', to_timestamp(${moment().valueOf() /
          1000}), to_timestamp(${moment().valueOf() / 1000}))`
      );
    }

    res.cookie("token", uuid, { httpOnly: true });

    res.json({ success: true, message: "Successfully Added Session." });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

exports.editSession = async (req, res) => {
  const { userid } = req.params;

  try {
    const uuid = uuidv4();

    let sessionQuery = await db.query(
      `UPDATE sessions SET token = '${uuid}', last_access = to_timestamp(${moment().valueOf() /
        1000}) WHERE user_id = '${userid}'`
    );

    res.cookie("token", uuid, { httpOnly: true });

    res.json({ success: true, message: "Successfully Edited Session." });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

exports.removeSession = async (req, res) => {
  const { userid } = req.params;

  try {
    let sessionQuery = await db.query(
      `DELETE FROM sessions WHERE user_id = '${userid}'`
    );

    res.clearCookie("token");

    res.json({ success: true, message: "Successfully Removed Session." });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};
