const jwt = require('jsonwebtoken')
require('dotenv').config()

async function tokensign(id,username,role) {
    try{
        const token = await jwt.sign(
            {
            id: id,
            username: username,
            role: role
            },
            process.env.SECRET,
            {expiresIn: "2h"}
        )
        return token
    }catch(e){
        return "jwt sign error"
    }
}

module.exports = {tokensign};