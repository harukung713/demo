const pool = require('../config/db')

async function withtx(work) {
    let conn
    try{
    conn = await pool.getConnection()
    await conn.beginTransaction()
    const result = await work(conn)
    await conn.commit()
    return result
    }catch(e){
        console.log(e)
    }finally {conn.release()}
}

module.exports = {withtx,pool}