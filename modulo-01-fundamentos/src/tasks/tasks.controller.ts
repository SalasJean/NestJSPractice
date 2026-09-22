//recuerda que la mayoria viene de nestjs common asi que no olvides importarlo siempre para poder usar un crud en cada modulo no lo olvides si? esto deve funcionar asi siempre
import {Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe} from '@nestjs/common'
import { TasksService } from './tasks.service';
import { createTaskDto } from './dto/create-task.dto';
//recuerda agregar siempre su controlador si? es muy importante
//recuerda que por ahora esta yendo con un objeto vacio
@Controller('/tasks')
export class TasksController{
    tasksService: TasksService;
    //recuerda importar del common si no lo hace de manera automatica si?
    //recuerda que para inyectar es necesario llamar a su objeto con un constructor asi
    constructor(tasksService:TasksService){
        this.tasksService = tasksService;
    }
    @Get()
    getAllTasks(@Query() query: any){
        console.log(query);
        //ahora que hemos instanciado en un objeto podemos usarlo con soltura asi
        return this.tasksService.getTasks();
    }
    @Get('/:id')//esta es la forma generica de llamar a una posicion recuerdalo si?
    getTask(@Param('id') id: string){
        return this.tasksService.getTask(parseInt(id));
    }
    //aqui podemos agregar todas las rutas que consideremos necesarias asi
    @Post()
    @UsePipes(new ValidationPipe())
    createTasks(@Body() task: createTaskDto){
        //ahora que hemos instanciado en un objeto podemos usarlo con soltura asi
        return this.tasksService.createTasks(task);
        //ahora si el dto puede validar siempre y cuando aprenda a usar pipes nunca lo olvides si? porfvaor
    }
    @Put()
    updateTasks(){
        //ahora que hemos instanciado en un objeto podemos usarlo con soltura asi
        return this.tasksService.updateTasks();
    }
    @Delete()
    deleteTasks(){
        //ahora que hemos instanciado en un objeto podemos usarlo con soltura asi
        return this.tasksService.deleteTasks();
    }
    //ahora para poder actualizar de manera parcial pues no solo necesitamos el metodo update sino que tambien necesitamos el metodo patch este actualiza de manera imparcial osea no complete si? recierdalo porfavor
    @Patch()//esta es una actualizacion parcial solo lo que queremos 
    updateTaskStatus(){
        return this.tasksService.updateTasksStatus();
    }
    //recuerda que aqui estamos trabajando con arreglos 
}
//aqui en el controller se define los endpoints de la logica de negocio no lo olvides si? porfavor