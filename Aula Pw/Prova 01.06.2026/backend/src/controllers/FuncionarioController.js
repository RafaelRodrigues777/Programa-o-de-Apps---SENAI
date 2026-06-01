import { connection } from '../database/db.js'

export const getfuncionarios = (req, res) => {
    connection.query(
        'SELECT * FROM funcionarios',
        (err, result) => {
            if (err) {
                return res.status(500).send({
                    response: 'Erro ao buscar funcionários'
                })
            }

            return res.status(200).send(result)
        }
    )
}

export const getFuncionariosBySetor = (req, res) => {
    const { setor } = req.params
    connection.query(
        'SELECT * FROM funcionarios WHERE setor = ?',
        [setor],
        (err, result) => {
            if (err) {
                return res.status(500).send({
                    response: 'Erro ao buscar funcionários por setor'
                })
            }
            return res.status(200).send(result)
        }
    )
}

export const createFuncionario = (req, res) => {

    const {
        nome,sobrenome,setor,funcao} = req.body

    connection.query(
        `
        INSERT INTO funcionarios (nome, sobrenome, setor, funcao) VALUES (?, ?, ?, ?)
        `,
        [nome,sobrenome,setor,funcao],

        (err, result) => {

            if (err) {
                return res.status(500).send({
                    response: 'Erro ao cadastrar funcionário'
                })
            }

            return res.status(201).send({
                response: 'Funcionário cadastrado com sucesso'
            })
        }
    )
}
export const updateFuncionario = (req, res) => {

    const { id } = req.params
    const { nome, sobrenome, setor, funcao } = req.body 

    connection.query(
        'UPDATE funcionarios SET nome = ?, sobrenome = ?, setor = ?, funcao = ? WHERE id = ?',
        [nome, sobrenome, setor, funcao, id],
        (err, result) => {
            if (err) {
                return res.status(500).send({
                    response: 'Erro ao atualizar funcionário'
                })
            } 
            return res.status(200).send({
                response: 'Funcionário atualizado com sucesso'
            })
        }
    )
}

export const deleteFuncionario = (req, res) => {

    const { id } = req.params

    connection.query(
        'DELETE FROM funcionarios WHERE id = ?',
        [id],
        (err, result) => {

            if (err) {
                return res.status(500).send({
                    response: 'Erro ao excluir funcionário'
                })
            }

            return res.status(200).send({
                response: 'Funcionário excluído com sucesso'
            })
        }
    )
}