import {Injectable, NotFoundException} from '@nestjs/common';
import { IsString } from 'class-validator';
//recuerda que un servicio en nest es IoC osea son metodos inyectables si? es muy importante porfavor
//ahora si noostros queremos usar un objeto en nestjs pues devemos usar como tal un contrato asi
//luego definimos que es lo que va a tener ese contrato siempre recuerda asi
//ahora para que esta interface puesa ser leido de manera global esta deve ser exportado no lo olvides si? porfavor asi con export
export interface User {
    name:string,
    age:number
}
//este es un nombre de interfaz normar recuerda no tiene caso alguno en especial osea no pertenecea otra clase

@Injectable({})
export class TasksService{
    //esto nos ayudara a inyectar codigo en otras partes de la aplicacion recuerdalo porfavor es muy importante si?
    //por principio de desacoplamiento por ejemplo aqui podrian ir ahora di funciones que puedan hacer una peticion a la base de datos por ejemplo, aqui deveria de estar el cerebro de la app siempre si? no olvidar
    private tasks = [];
    
    getTasks(){
        return this.tasks;
    }
    
    //aqui creamos el metodo para que se pueda ser usado dentro del controller recuerdalos si?
    getTask(id: number){
        const taskFound = this.tasks.find((task) => task.id == id);
        if(!taskFound){
        return new NotFoundException(`Task with ${id} not found`);
        }
    }
    getTasksById(id: string){
        return `Buscaando la tarea con el id ${id}`;
    }
    createTasks(task: any){
        console.log(task)
        //aqui vamos a meter todas las tareas creadas dentro del array y ademas lo usaremos como identificador al id para su busqueda rapida asi
        this.tasks.push({
            ...task,
            id: this.tasks.length +1,
        });
        //recuerda estudiar a full el porque de esta operacion y que tan frecuente es? porfavor si?.
        return task;
    }
    //todo esto es modiular recuerda asi que todas las cosas iran aquis iempre si? por ejemplo definno un metodo para llamarlo
    
    updateTasks(){
        return 'actualizando tareas';
    }
    deleteTasks(){
        return 'Eliminando tareas';
    }
    updateTasksStatus(){
        return 'actualizando el estado de una sola tarea';
    }
}
//ahora vamos a aprender a usar la libreria class validator que nos permite ser mas estrictos con el uso de dtos en nestjs
