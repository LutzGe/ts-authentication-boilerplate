import { Request, Response } from 'express'
import { getRepository, ILike } from 'typeorm'

import User from '../models/User'

class UserController {

    async index(req: Request, res: Response) {
        const repository = getRepository(User)

        const {
            id,
            email
        } = req.body

        if (!id && !email) {
            return res.send({
                error: "No information given"
            })
        }

        const users = await repository.find({ 
            where: [
                { email: ILike('%' + email + '%') },
                { id: id }
            ]
        })

        return res.send(users)
    }

    async create( req: Request, res: Response ) {
        const repository = getRepository(User)
    
        const { email, password } = req.body

        const userExists = await repository.findOne({ where: { email }})

        // Já existe um usuário com ele email
        if (userExists) {
            return res.sendStatus(409)
        }

        const user = repository.create({ email, password })
        await repository.save(user)

        return res.json(user)
    }

    async delete( req: Request, res: Response ){
        const repository = getRepository(User)

        const { id, email } = req.body

        if (!id && !email) {
            return res.send({
                error: "No information given"
            })
        }        

        const deleted = await repository.createQueryBuilder()
            .delete()
            .from(User)
            .where('id = :id', { id })
            .orWhere('email = :email', { email })
            .execute()

        if (!deleted){
            return res.sendStatus(400)
        }

        return res.sendStatus(204)
        
    }

    async update( req: Request, res: Response ){
        const repository = getRepository(User)

        const newUser = req.body

        if (!newUser.id) {
            return res.send({
                error: "ID needed for update"
            })
        }

        const user = await repository.findOne({ id: newUser.id })

        try {
            const updated = await repository.save(Object.assign(user, newUser))

            if (!updated) {
                return res.sendStatus(400)
            }

            return res.sendStatus(204)
    
        } catch (e) {
            console.error(e);
            
            return res.sendStatus(409)
        }
        
    }
}

export default new UserController()