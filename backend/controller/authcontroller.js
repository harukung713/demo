const jwt = require('jsonwebtoken')
const User = require('../model/auth_model')
const jsign = require('../middleware/jsign')
const dotenv = require('dotenv')

exports.getregisdata = async (req,res) => {
    try{
        const row = await User.getregisdata()
        if(!row) return res.status(400).json({message: "failed"})
        res.status(200).json({message: "success" ,data: row})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "ERROR"})
    }
}

exports.register = async (req,res) => {
    const {username,password,czid,date,department,position,level,email,phone,salary,start} = req.body
    try{
        const check = await User.checkuser(username)
        if(check) return res.status(400).json({message: "already exsist"})
        const regis = await User.regis(username,password,czid,date,department,position,level,email,phone,salary,start)
        if(!regis) return res.status(400).json({message: "register failed"})
        res.status(201).json({message: "register success"})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "ERROR"})
    }
}

exports.login = async (req,res) => {
    const {gmail,password} = req.body
    try{
        const check = await User.checkuser(gmail)
        if(!check) return res.status(400).json({message: "gmail not exsist"})
        const result = await User.login(gmail,password)
        if(!result) return res.status(400).json({message: "login failed"})
        const token = await jsign.tokensign(result.user_id,result.username,result.role)
        res.status(200).json({message: "login success", token: token})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "ERROR"})
    }
}