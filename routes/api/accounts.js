const router = require('express').Router()
const pool = require('../../config/db')
const getIcon = require('./getIcon')

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
            const imageURL = await getIcon(website);
            await client.query(`
                INSERT INTO accounts (user_id, url, username, password, image) 
                VALUES('${user}', '${website}', '${username}', '${password}', '${imageURL}')
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

router.put("/:id", async (req, res) => {
    const acct_id = req.params.id;
    const { url, email, password } = req.body;

    (async () =>{
        const client = await pool.connect();
        try {
            await client.query(`
                UPDATE accounts SET url = '${url}', username = '${email}' ${password ? `, password = '${password}'`: ''}
                WHERE id = '${acct_id}'
            `);
            res.json({success: true, message: "Successfully Updated Account"});
        } catch (error) {
            res.json({success: false, message: "Failed to Update Account Details"});
            throw error;
        } finally{
            client.release();
        }
    })().catch(e=>console.error(e.stack))
})

router.delete("/:id", async (req, res) =>{
    const acct_id = req.params.id;

    (async () =>{
        const client = await pool.connect();
        try {
            await client.query(`
                DELETE FROM accounts WHERE id = '${acct_id}'
            `)

            res.json({success: true, message: "Successfully Removed Account"})
        } catch (error) {
            res.json({success: false, message: "Failed to Remove Account"});
            throw error;
        } finally {
            client.release();
        }
    })().catch(e=>console.error(e.stack));
})
module.exports = router