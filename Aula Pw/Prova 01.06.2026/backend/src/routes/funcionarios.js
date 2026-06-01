import { Router } from 'express'
import { validateCreateFuncionario, validateGetFuncionariosBySetor, validateUpdateFuncionario, validateDeleteFuncionario } from '../middlewares/funcionariosMiddlewares.js'
import {
    getfuncionarios,
    getFuncionariosBySetor,
    createFuncionario,
    updateFuncionario,
    deleteFuncionario,
} from '../controllers/FuncionarioController.js'

const router = Router()

router.get('/', getfuncionarios)
router.get('/setor/:setor',validateGetFuncionariosBySetor, getFuncionariosBySetor)
router.post('/',validateCreateFuncionario, createFuncionario)
router.put('/:id', validateUpdateFuncionario, updateFuncionario)
router.delete('/delete/:id', validateDeleteFuncionario, deleteFuncionario)


export default router

