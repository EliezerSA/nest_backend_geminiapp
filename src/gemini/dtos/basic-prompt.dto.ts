import { IsNotEmpty, IsString } from "class-validator";

//Crear un objeto apegado a lo que queremos recibir en nuestras peticiones
export class BasicPromptDto{
    @IsString()
    @IsNotEmpty()
    prompt!: string;
}