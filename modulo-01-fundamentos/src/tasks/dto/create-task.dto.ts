//recuerda que aqui esta o vamos a estar con el DTO no lo olvides nunca si?
//ademas recuerda que un dto es un data transfer object.
import { IsNotEmpty, IsString, isPhoneNumber, MinLength, IsPhoneNumber } from 'class-validator';
export class CreateTaskDto {
    //recuerda que en nestjs un dto puede ser tanto una clase o un contrato osea una interface recuerdalo si? no lo olvides porfavor.
    //una interfaz al ser un contrato este deve ser implementado casi siempre
    //ahora esste al ser un contrato pues nos vamos al controller para ser usado como tipo de dato de entrada si? no lo olvides porfavor
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsString()
    @IsPhoneNumber('PE')
    phone: string;
    //recuerda que el id no es necesario porque este lo genera o lo maneja siempre la base de datos
    //ahora para usar class validator de forma limpia este deve ser instalado usando el gestor de paquetes que estas usado o tambien mediante el cli de nestjs
}
//aqui cambiaresmos de contrato a clase
//recuerda que el dto por si solo no puede hacer nada, osea no puede aplicar restricciones 
//para ello se usa los famosos class validator, estos son los que aplican la restriccion, para hacer mas seguro las entradas y salidas