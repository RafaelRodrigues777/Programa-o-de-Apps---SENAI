import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

export const connection = mysql.createConnection({
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || 'root',
    database: process.env.DATABASE || 'cadastro_funcionarios',
    port: process.env.PORT || 3306
})