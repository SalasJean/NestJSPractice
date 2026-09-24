import { ConflictException, Injectable, NotFoundException, HttpException, HttpStatus} from '@nestjs/common';
import { CreateTaskDto } from '../tasks/dto/create-task.dto';
import { ObjectUnsubscribedError } from 'rxjs';

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

    getUsers(){//recuerda que en la mayoria del tiempo este metodo sera usado como endpoint
        return this.users;
    }
    //aqui creamos un metodo que recibe el dto ya validado y eso quien lo garantiza d emanera global? pues el validatio pipe recuerdal0 si?
    createUser(createTaskDto: CreateTaskDto){
        //aqui vamos a agregar otra logica de negocio para decirle que si hay un telefono existente que no nos permita guardar asi
        const phoneExist = this.users.some(u => u.phone === createTaskDto.phone);
        //ahora validamos
        if(phoneExist){
            throw new ConflictException('ya existe un usuario con este numero de telefono')
        }
        const newUser = {
            id: this.users.length + 1,
            ...createTaskDto
        };
        this.users.push(newUser);
        return newUser;
    }
    //ahora una vez creado em dto vamos a proceder a usarlo dentro del controller
    //aqui vamos a aprender a como usar logica de negoio real dentro del servicio el cual se maneja en base a metodos el cual es muy inportante asi
    findOne(id: number){
        //creamos una variable que nos permita se usado luego pero dentro de el recuerda asi
        const user = this.users.find(u => u.id == id);
        if(!user){
            //aqui esta la aplicacion de la regla de negocio mira aqui le decimos si cumple o no cumple con las reglas si? porfavor no lo olvides nunca porfavor
            throw new NotFoundException(`el usuario con el ${id} no se encuentra`);
        }
        return user;
    }
    //ahora este metodo por si solo no sirve de nada 
    //ahora recuerda que el metodo patch es solo para actualizar de forma parcial para ello vamos con el desarrollo de la logica asi
    update(id: number, updateUserDto: Partial<CreateTaskDto>){
        //usamos una variable con un scoope loca o se metodo asi
        const user = this.findOne(id);
        //aqui aplicamos una regla de negoio nueva por ejemplo su viene un nuemro nuevo que no choque con los demas que ya esta creado asi
        if(updateUserDto.phone){
            const phoneUserByOther = this.users.some(u => u.phone === updateUserDto.phone && u.id !== id);
            if(phoneUserByOther){
                throw new ConflictException('ese telefono ya lo usa otro usuario')
            }
        }
        Object.assign(user, updateUserDto)//recuerda que este objeto se esta asignado si? no lo olvides
        return user;
        //aqui despues de la creacion de esta logica de negocio vamos maniana a implementar los endpoints para lugo probarlos si? no lo olvides porfavor, vamos
        //recuerda que este si ira esta vez al patch siempre si? no lo olvides porfavor
    }
    //ahora que hemos definido el metodo para el endpoint patch ahora vamos a crear otra logica de negodcio pero para delete ya tembien para luego ser implementado dentro del controoller si? no lo olvides porfavor, vamos
    //aqui pensemos cuando vamos a remover algo 
    remove(id: number){
        //cuando eliminamos algo este tiene que ser siempre con su id para ser totalmente presisos siempre nunca lo olvides si? porfavor, vamos 
        const user = this.findOne(id);
        //aqui con est estamos diciendole que si no existe pues que lanze error 404 
        //recuerdalo siempre si?
        //aqui va la logica
        this.users = this.users.filter( u => u.id !== id);
        //ahora que ya hemos verificado si realmente existe ese id o no para proceder a borrarlo pues retornamos la logica que nos pide borrarlo recuerda si?
        return {message: `User ${id} eliminado de manera correcta`};
        //ahora que ya hemos implementado la logica de negocio procederemos a implementarlo en el endpoint recuerda
    }

    
}
//al crearnos este user service osea para la logica de negocio tmabien se creo su spec osea su modulo de testing, esto nos ayuda en primera mano testear la logica de negocio recuerdalo si?
//todo viene heredado de next/common recuerda estos http status error recuerdalo siempre porfavor
/**
 * las exceptions mas usadas son las siguientes
 * badRewquestException = 400
 * UnauthorizeException = 401
 * ForbidenException = 403
 * NotFoundException = 404
 * ConflictExeption = 409
 * UnProcesableEntutyException = 422
 * y el ultimo pero no menos importante
 * InternalServerErrorExeption = 500
 * 
 * porfavor no olvides estos son los errores mas comunes y mas usados que tiene nestjs
 * ademas de por ser que vienen de nestjs todas de usan de igual manera y mas simple manera asi
 * throw new, recuerda la palabra clave de uso es esta throw new asi recuerda throw  new
 * AHORA VAMOS A APRENDER OTRA DIFERENCIA SUPER CLAVE ESTAS EXISTEN DESDE EL 2XX AL 5XX 
 * PERO EN ESTA OCACION VAMOS A LISTAR LOS MAS IMPORTANTES SI PARA QUE ENTIENDAS DE UNA BUENA VEZ SIEMPRE ASI
 * AQUI VAMOS ENTENDER LA DIFERENCIA CLAVE, EL RANGO, LO QUE SIGNIFICA, Y DE QUIEN ES LA CULPA.
 * recuerda que cuando el error em[pieza en 4xxx este generalmente esta asociado al cliente, pero cuando el error empieza con 5xx este error esta asociado al servidor recuerdalo si?
 * 
 */