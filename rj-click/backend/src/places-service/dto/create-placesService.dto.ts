import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreatePlacesServiceDTO {
    
  @IsNotEmpty()
  @IsString()
  name: string;
}