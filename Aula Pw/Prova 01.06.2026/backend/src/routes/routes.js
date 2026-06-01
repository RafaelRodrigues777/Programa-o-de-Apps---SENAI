import express from 'express'
import funcionarios from './funcionarios.js'

export default function initRoutes(app){

    app.use(express.json())
    app.use('/funcionarios', funcionarios)

}