import { Controller, Get, Req, Res} from '@nestjs/common';
import { Request, Response } from 'express';
import { url } from 'inspector';

@Controller('/')
export class HelloController {
    @Get('/hello')
    index(@Req() request: Request, @Res() response: Response){ 
        //ahora esto lo podemos leer tambiend esde la consola recuerdalo si? es muy importante asi
        console.log(request.url);
        response.status(200).json({
            messaje: 'hello world',
        });
    }
}
//esta manera de crear controladores puede funcionar al ser similar a un midleware, pero la mejor manera de crear controladores es con el cli para cada modulo asi nest generate controller projects
//con este comando sabra el sistema a que modulo crearle su controlador con su scaffolding
//ahora vamos a aprender mas acerca de como se usa expressen nestjs con typescript si? recuerdalo porfavor vamos 
//ahora vamos a aprender a como recibir un dato del cliente hacia nuestra app asi
