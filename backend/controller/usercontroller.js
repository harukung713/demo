const jwt = require('jsonwebtoken')
const user = require('../model/user_model')
const dotenv = require('dotenv')


exports.getformuser = async (req,res) => {
    const {id} = req.params
    try{
        const row = await user.getformuser(id)
        res.status(200).json({data: row})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "ERROR"})
    }
}

exports.getuserresult = async (req,res) => {
    const {id} = req.params
    try{
        const row = await user.getuserresult(id)
        res.status(200).json({data: row})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "ERROR"})
    }
}

exports.insertresult = async (req,res) => {
    const {id} = req.params
    try{
        const {score,sum} = req.body
        console.log(req.file)
        console.log(req.body)
        let row = null
        const row2 = await user.summary(id,sum,req.file.filename)
        console.log(row2)
        if(row2 = null) return res.status(400).json({message: "insert failed"})
        for (item of score){
            row = await user.insertresult(item.form_id,id,item.score)
        }
        if(row = null) return res.status(400).json({message: "insert failed"})
        res.status(200).json({message: "success"})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "ERROR"})
    }
}

exports.uploadtest = async (req,res) => {
    const file = req.file
    try{
        const row = await user.uploadtest(file.filename)
        if(!row) return res.status(400).json({message: "upload failed"})
        res.status(200).json({message: "upload success"})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "ERROR"})
    }
}