//recuerda que esta es una clase
import { Module } from "@nestjs/common";
import { TasksController } from "./tasks.controller";
import { TasksService } from "./tasks.service";
//recuerda que este es un decorador que nos especifica como se comportara esta clase - recuerda que este es un pegamento si?
@Module({
    controllers:[TasksController],
    //ya que es un inyectable esto deve ser un provider
    providers:[TasksService],
})
export class TasksModule {
    //recuerda que un modulo es un pegamento por eso este se ve asi si?

}
//hacer este proceso para cada modulo es un problema terrible
//para ello se usa la cli de nestjs asi evitamos escribir codigo boilerplate indefinidamente
/**
 * este es el comando que se usa para hacer scaffolding
 * nest generate module + nombre del modulo
 * ahora esto se puede simplificar tambien no lo olvides porfavor si?
 * ya que nestjs no esta instalado de manera global aqui usaremos el famoso pnpm exec ya que  nestjs cli solo vive ahora dentro de neustro directorio para ello siempre con el prefijo de pnpm exec mas nest g mo + nombre del modulo
 */