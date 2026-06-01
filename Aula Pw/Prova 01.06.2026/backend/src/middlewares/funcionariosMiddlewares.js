export function validateCreateFuncionario(req, res, next) {

        const {
            nome,
            sobrenome,
            setor,
            funcao
        } = req.body

        if (!nome || nome.trim().length < 3) {
            return res.status(400).send({
                response: 'Nome obrigatório'
            })
        }

        if (!sobrenome || sobrenome.trim().length < 3) {
            return res.status(400).send({
                response: 'Sobrenome obrigatório'
            })
        }

        if (!setor || setor.trim().length < 3) {
            return res.status(400).send({
                response: 'Setor obrigatório'
            })
        }

        if (!funcao || funcao.trim().length < 3) {
            return res.status(400).send({
                response: 'Função obrigatória'
            })
        }

        next()
    }

export function validateGetFuncionariosBySetor(req, res, next) {
    const { setor } = req.params
    if (!setor || setor.trim().length < 3) {
        return res.status(400).send({
            response: 'Setor inválido'
        })
    }
    next()
}

export function validateUpdateFuncionario(req, res, next) {

    const { id } = req.params
    const { nome, sobrenome, setor, funcao } = req.body
    if (!id || isNaN(Number(id)) || Number(id) <= 0) {
        return res.status(400).send({
            response: 'ID inválido'
        })
    }
    if (!nome || nome.trim().length < 3) {
        return res.status(400).send({
            response: 'Nome obrigatório'
        })
    }
    if (!sobrenome || sobrenome.trim().length < 3) {
        return res.status(400).send({
            response: 'Sobrenome obrigatório'
        })
    }
    if (!setor || setor.trim().length < 3) {
        return res.status(400).send({
            response: 'Setor obrigatório'
        })
    }
    if (!funcao || funcao.trim().length < 3) {
        return res.status(400).send({
            response: 'Função obrigatória'
        })
    }
    next()
}

export function validateDeleteFuncionario(req, res, next) {

    const { id } = req.params 
    if (!id || isNaN(Number(id)) || Number(id) <= 0) {
        return res.status(400).send({
            response: 'ID inválido'
        })
    }
    next()
}
