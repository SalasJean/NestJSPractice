const {sum} = require('./suma');
//recuerda que en nodeJS este metodo ya se ejecuta dentro de node js osea es un metodo intrinseco
const suma = sum(2, 3);

console.log(`la suma de 2 y 3 es: ${suma}`);
//recuerda que en nodejs podemos o se puede trabajar con imprts es muy importante si? no lo olvides para usar el metodo sum devemos tener la logica en otra clase

//recuerda siempre usar el paradigam de desarrollo llamado clean system el cual su objetivo es no encusciar el sistema recuerda si?
//para ello todo deve vivir dentro de un solo directorio esto se logra con estos casos asi
//pnpm dlx @nestjs/cli new mi-proyecto