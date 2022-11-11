import { IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class CreatePlacesDTO {
  
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumberString()  
  categoryId: number;
}