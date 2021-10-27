const db = require("../config/db");
const getIcon = require("./getIcon");

exports.getAccounts = async (req, res) => {
  const { userid } = req.params;

  try {
    const accountQuery = await db.query(`
        SELECT * FROM accounts WHERE user_id = '${userid}'
    `);

    res.json({ success: true, response: accountQuery.rows });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

exports.addAccount = async (req, res) => {
  const { user, website, username, password } = req.body;

  try {
    const imageURL = await getIcon(website);
    await db.query(`
              INSERT INTO accounts (user_id, url, username, password, image)
              VALUES('${user}', '${website}', '${username}', '${password}', '${imageURL}')
          `);

    res.json({ success: true, message: "Successfully Added Account." });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

exports.editAccount = async (req, res) => {
  const { id } = req.params;
  const { url, email, password } = req.body;

  try {
    await db.query(`
              UPDATE accounts SET url = '${url}', username = '${email}' ${
      password ? `, password = '${password}'` : ""
    }
              WHERE id = '${id}'
          `);
    res.json({ success: true, message: "Successfully Updated Account." });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

exports.removeAccount = async (req, res) => {
  const { id } = req.params;

  try {
    await db.query(`
              DELETE FROM accounts WHERE id = '${id}'
          `);

    res.json({ success: true, message: "Successfully Removed Account." });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
