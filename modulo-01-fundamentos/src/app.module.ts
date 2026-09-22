import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
//este como es el pegamento el cli lo importa de manera automatica ya sea el modulo tanto como sus importats para lanzarlo por el main

@Module({
  //la importancia de usar el cli de nestjs es que aqui nosotros ya no devemos hacer nada sino que el cli se encarga de importar el nuevo modulo creado por nosotros si?
  //recuerda siempre importarlo es muy importante ya que nos permite usar el modulo si?
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule],
  controllers: [HelloController],
  //recuerda que el scaffolding aplicado a nest con pnpm exec se aplica de manera directa en los contratos osea las clases pegamento
})
export class AppModule {}
//aqui va el modulo este es el modulo raiz osea el contendor principal
//aqui vive nestjs recuerda que este es el conector osea el pegamento osea el el contractor de todos
//recuerda tener mucho cuidado con el supply chain protection que implemento pnpm 11 - esto para mayor seguridad siempre recuerdalo si?
//recuerda que este es el pagamento asi que este si se queda cuando limpiamos neutro entorno de trabajo porque nos agiliza todo recuerda

//hasta ahora hemos generado modulos controllers y demas conde se alojan y todo ello para que sirve cada uno y muchas mas ahora vamos a los servies que es lo mas importante de todo hasta ahora.
