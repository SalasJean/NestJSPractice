//recuerda que aqui esta o vamos a estar con el DTO no lo olvides nunca si?
//ademas recuerda que un dto es un data transfer object.
import { IsNotEmpty, IsString } from 'class-validator';
export class createTaskDto {
    //este que va a recibir? pues generalmente puede recibir o enviar los datos que nosotros queremos recibir o enviar de parte del cliente no lo olvides si?
    @IsString()
    @IsNotEmpty()
    title: string;
    //para usar estas notaciones devemos descargar el class validator recuerdalo sid?
    //esta es la forma de trabajar con validatores recuerdalo si?
    // pnpm add class-validator class-transformer
    @IsString()
    @IsNotEmpty()
    description: string;
    //recuerda que en nestjs un dto puede ser tanto una clase o un contrato osea una interface recuerdalo si? no lo olvides porfavor.
    //una interfaz al ser un contrato este deve ser implementado casi siempre
    //ahora esste al ser un contrato pues nos vamos al controller para ser usado como tipo de dato de entrada si? no lo olvides porfavor
}
//aqui cambiaresmos de contrato a clase
//recuerda que el dto por si solo no puede hacer nada, osea no puede aplicar restricciones 
//para ello se usa los famosos class validator, estos son los que aplican la restriccion, para hacer mas seguro las entradas y salidas