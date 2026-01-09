const {pool} = require('./conn')

async function checkuser(email) {
    let conn = await pool.getConnection()
    try{
        const row = await conn.query(
            'SELECT email FROM users WHERE email = ?',
            [email]
        )
        return row[0] || null
    }catch(e){
        console.log(e)
    }finally{conn.release()}
}

async function getregisdata() {
    let conn = await pool.getConnection()
    try{
        const row1 = await conn.query(
            `SELECT * FROM position`
        )
        const row2 = await conn.query(
            `SELECT * FROM level`
        )
        const row3 = await conn.query(
            `SELECT * FROM department`
        )
        return [row1,row2,row3]
    }catch(e){
        console.log(e)
    }finally{conn.release()}
}

async function regis(username,password,czid,birthday,department,position,level,gmail,phone,salary,start) {
    let conn = await pool.getConnection()
    try{
        const row = await conn.query(
            "INSERT INTO users (username,password,czid,birthday,role,department,position,level,gmail,phone,salary,start) VALUES (?,?,?,?,3,?,?,?,?,?,?,?)",
            [username,password,czid,birthday,department,position,level,gmail,phone,salary,start]
        )
        console.log(row)
        return row.insertId
    }catch(e){
        console.log(e)
    }finally{conn.release()}
}

async function login(email,password) {
    let conn = await pool.getConnection()
    try{
        const row = await conn.query(
            'SELECT * FROM users WHERE email = ? AND password = ?',
            [email,password]
        )
        return row[0] || null
    }catch(e){
        console.log(e)
    }finally{conn.release()}
}

module.exports = {regis,login,checkuser,getregisdata}
