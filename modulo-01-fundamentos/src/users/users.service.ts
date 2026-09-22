import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    //aqui creamos toda la logica de negocio si?
    private users = [
        {
            id: 1,
            name: "jean",
            phone:"944012554"
        },
        {
            id: 2,
            name: "carlos",
            phone:"944012554"
        }
    ]

    getUsers(){
        return this.users;
    }
    
}
//al crearnos este user service osea para la logica de negocio tmabien se creo su spec osea su modulo de testing, esto nos ayuda en primera mano testear la logica de negocio recuerdalo si?
