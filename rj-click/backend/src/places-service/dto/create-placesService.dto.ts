import { IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class CreatePlacesServiceDTO {
    
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumberString()
  price: number;
  placeId: number;
}