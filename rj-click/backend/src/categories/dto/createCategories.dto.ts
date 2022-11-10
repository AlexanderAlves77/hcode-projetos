import { IsNotEmpty, IsString } from "class-validator";
import { MessagesHelper } from "src/helpers/messages.helpers";

export class CreateCategoriesDTO {
  
  @IsString()
  @IsNotEmpty({ message: MessagesHelper.INPUT_NOT_EMPTY })
  name: string;
}