import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateTaskDto } from '../tasks/dto/create-task.dto';
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
    //aqui falta agregar un getuserbyid recuerda que es nuy importante muchas veces
    //ahora creamos otro endpoint llamado users, pero este usara el dto para 
    //validar en tiempo real ya que ts no es de runtime sino de compilacion recuerdalo siempre si?
    //aqui vamos a crear otro endpoint pero usando la logica osea el servicio asi
    @Get('/users/:id')//aqui el id esta funcionando como variable nunca lo olvides porfavor si?
    findOne(@Param('id', ParseIntPipe) id: number){//como buscamos por id aqui tiene que ser buscado por el decorador Param asi
        //aqui hemos definido la variable del metodo el param y lo parseamos a int para evitar problemeas luego le decimos que el id es number por si acasi siempre si?
        return this.usersService.findOne(id);

    }
    @Post('/users')
    createUser(@Body() createTaskDto: CreateTaskDto){
        //aqui vamos a aprender a usar el body el param y el famoso query recuerdalo si? porfavor
        //aqui al aplicar el body aqui ya llego el validador del dto ademas lo estamos encapsulando con el body  ahora solo nos falta guarar dentro de lo que esta el dto asi recuerda si?
        return this.usersService.createUser(createTaskDto);
        //recuerda el mapa mental aqui estamos usando el userservice su metodo la clase que usa ese metodo no lo olvides si? porfavor
    }
    //aqui vamos a implementar los endpoints que falta si? no lo olvides porfavor
    //osea que aqui va las salidas de la logica de negocio desarrollada asi
    @Patch('users/:id')//aqui estamos usando una variable no lo olvides porfavor
    update(
        //como este ira en busqueda de una variable este deve ser usado si o si por el atributo param siempre si?
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: Partial<CreateTaskDto> //recuerda hacer un repaso aqui estamos haciendo uso del partial recordar para que servia este siempre si? porfavor

    ){
        //ahora la pregunta esta en que es lo que va a retornar esto? pues
        return this.usersService.update(id, updateUserDto);
    }
    //ahora implementamos en un endpoint para servirlo recuerda
    @Delete('/users/:id')
    remove(@Param('id', ParseIntPipe) id: number){//como este sera removido con un dato en especifico de entrada pues aqui si es super importante el uso de param asi
        //recuerda que asi se llama el metodo y el delete solo es el decorador que hace que este metodo se comporte como un endpoint recuerdalo porfavor
        //que vamos a devolver? pues el metodo que esta en el servicio que se encargara de aplicar la logica recuerda si?
        return this.usersService.remove(id);
    }

}

//recuerda que el uso de private es muy importante cuando
//recuerda tambien que mediantwe el uso del cli de nest podemos generar un module un controller un service todo para cada modulo desde la cli ya que esto nos evita escribir un codigo boilerplate y asi ser mas eficientes a la hora de desarrollar codigo si? porfavor
//ahora si nosotros no queremos que nos cree el archivo de testing pues podemos decir al cli de nestjs que no lo pueda crear es asi de simple no es necesario que este sea creado recuerdalo si? porfavor
//este es el comando
//nest generate service auth --no-spec
//esta es la forma correcta de declarar si? no lo olvides porfavor, gracias
//AHORA VAMOS A APRENDER ALGO SUPER IMPORTANTE QUE ES LOS METODOS HTTP

//recuerda que este es el patron que siempre deves aprender a memorizar 
/**
 * NUMERO 1 
 * el controlles solo recibe la peticion nada mas luego de recibir este delega la logica - aqui en el controller no se toda nada de logica o regla de negocio osea no se decide nada nunca
 * una vez recibida la peticio el controller pasa al service osea delega toda responsabilidad de reglas de negocio 
 * con reglas de negocio nos referimos a validaciones, reglas y toma de desciciones
 * AHORA VAMOS A HABLAR MAS ACERCA DE LAS EXCEPCIONES OSEA DE LAS HTTPS EXCEPTIONS 
 * TODAS ESTAS EXCEPTIONES VIENEN DE NESTCOMMON RECUERDALO ES MUY IMPORTANTE
 */