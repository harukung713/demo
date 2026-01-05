const jwt = require('jsonwebtoken')
const form = require('../model/form_model')
const jsign = require('../middleware/upload')
const dotenv = require('dotenv')

exports.insertep = async (req,res) => {
    const {id} = req.params
    const {ep,weight}= req.body
    try{
        const row = await form.insertep(ep,weight,id)
        if(!row) return res.status(400).json({message: "error insert"})
        res.status(200).json({message: "insert success"})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "ERROR"})
    }
}

exports.insertindicator = async (req,res) => {
    const {id} = req.params
    const {indicator,ep_id}= req.body
    try{
        const row = await form.insertindicator(indicator,ep_id,id)
        if(!row) return res.status(400).json({message: "error insert"})
        res.status(200).json({message: "insert success"})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "ERROR"})
    }
}

exports.insertform = async (req,res) => {
    const {id} = req.params
    const {detail,in_id} = req.body
    try{
        const row = await form.insertform(detail,in_id,id)
        if(!row) return res.status(400).json({message: "error insert"})
        res.status(200).json({message: "insert success"})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "ERROR"})
    }
}

exports.deleteep = async (req,res) => {
    const {id} = req.params
    console.log(req.params)
    try{
        const row = await form.deleteep(id)
        if(!row) return res.status(400).json({message: "delete failed"})
        res.status(200).json({message: "delete success"})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "ERROR"})
    }
}

exports.deleteindicator = async (req,res) => {
    const {id} = req.params
    try{
        const row = await form.deleteindicator(id)
        if(!row) return res.status(400).json({message: "delete failed"})
        res.status(200).json({message: "delete success"})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "ERROR"})
    }
}

exports.deleteform = async (req,res) => {
    const {id} = req.params
    try{
        const row = await form.deleteform(id)
        if(!row) return res.status(400).json({message: "delete failed"})
        res.status(200).json({message: "delete success"})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "ERROR"})
    }
}

exports.getformdata = async (req,res) => {
    try{
        const row = await form.getformdata()
        if(!row) return res.status(400).json({message: "error getformdata"})
        res.status(200).json({data: row})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "ERROR"})
    }
}

exports.checktime = async (req,res) => {
    try{
        const row = await form.checktime()
        if(!row) return res.status(400).json({message: "error checktime"})
        res.status(200).json({data: row})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "ERROR"})
    }
}