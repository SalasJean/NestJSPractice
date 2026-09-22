import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
//recuerda que este es el controlador y todo esto viene de nest/common recuerdalo si?


@Controller()
export class UsersController {
    //aqui falta la instancia el por eso no se lee
    //ahora si esto lee todo de manera super correcta
    //ahora hay otra manera mas simplificada de que esto se pueda hacer de manera mas directa asi
    /**
     * usersService: UsersService;
    constructor(usersService: UsersService){
        this.usersService = usersService;
    }luego siempre pensar esto de donde viene? pues de este
     */
    constructor(private usersService: UsersService){

    }
    //recuerda que para usar todos las clases del mismo modulo usaremos el modelo de ioc osea inyeccion de dependencias, para lo cual deces instanciarlo en un objeto.
    @Get('/users')
    getUsers(){
        //llamamos al metodo desde el uso de un objeto desde donde? pues siempre pensar si?
        return this.usersService.getUsers();
    }
}

//recuerda que el uso de private es muy importante cuando
//recuerda tambien que mediantwe el uso del cli de nest podemos generar un module un controller un service todo para cada modulo desde la cli ya que esto nos evita escribir un codigo boilerplate y asi ser mas eficientes a la hora de desarrollar codigo si? porfavor
//ahora si nosotros no queremos que nos cree el archivo de testing pues podemos decir al cli de nestjs que no lo pueda crear es asi de simple no es necesario que este sea creado recuerdalo si? porfavor
//este es el comando
//nest generate service auth --no-spec
//esta es la forma correcta de declarar si? no lo olvides porfavor, gracias
//AHORA VAMOS A APRENDER ALGO SUPER IMPORTANTE QUE ES LOS METODOS HTTP