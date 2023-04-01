const { Router } = require("express");
const pool = require("../db")


const router = Router();

router.get('/user',async (req , res)=> {
const result = await pool.query('SELECT NOW()')
console.log(result)
res.json('exito')
})

router.post('/user', (req , res)=> {
    res.send('post')
    })
    

module.exports = router