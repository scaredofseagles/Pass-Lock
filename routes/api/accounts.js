const router = require('express').Router()
const pool = require('../../config/db')

router.get("/:user_id", async (req, res) =>{
    const user_id = req.params.user_id;

    const accountQuery = await pool.query(`
        SELECT * FROM accounts WHERE user_id = '${user_id}'
    `)

    res.json(accountQuery.rows)
})

router.post("/", async (req, res) =>{
    const { user, website, username, password } = req.body;

    (async () => {
        const client = await pool.connect();

        try {

            await client.query(`
                INSERT INTO accounts (user_id, url, username, password) 
                VALUES('${user}', '${website}', '${username}', '${password}')
            `);

            res.json({success: true, message: 'Successfully Added Account'});
        } catch (error) {
            res.json({success: false, message: 'Failed to Add Account'});
            throw error;
        } finally {
            client.release();
        }
    })().catch(e => console.error(e.stack));
})

module.exports = router