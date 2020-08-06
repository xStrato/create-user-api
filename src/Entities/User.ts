import { Entity } from './Entity'

export class User extends Entity
{
    public name: string
    public email: string
    public password: string

    constructor(props: Omit<User, 'id'>)
    {
        super()
        Object.assign(this, props)
    }
}
