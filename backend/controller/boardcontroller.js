const jwt = require('jsonwebtoken')
const board = require('../model/board_model')
const dotenv = require('dotenv')

exports.getformboard = async (req,res) => {
    const {id} = req.params
    console.log(req.params

    )
    try{
        const row = await board.getformboard(id)
        res.status(200).json({data: row})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "ERROR"})
    }
}

exports.getuser = async (req,res) => {
    const {id} = req.params
    try{
        const row = await board.getuser(id)
        if(!row) return res.status(404).json({message:"not found"})
        res.status(200).json({data: row})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "ERROR"})
    }
}


exports.insertresult = async (req,res) => {
    const {id} = req.params
    console.log(req.body)
    try{
        const {score,sum,comment} = req.body
        console.log(req.body)
        let row = null
        const row2 = await board.summary(id,sum,comment,score[0].user_id)
        if(!row2) return res.status(400).json({message: "insert failed"})
        for (item of score){
            const row = await board.insertresult(id,item.score,item.form_id,item.user_id)
        }
        if(row = null) return res.status(400).json({message: "insert failed"})
        res.status(200).json({message:"success"})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "ERROR"})
    }
}