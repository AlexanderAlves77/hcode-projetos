import { CreateCategoriesDTO } from "./createCategories.dto";
import { PartialType } from "@nestjs/mapped-types"


export class UpdateCategoriesDTO extends PartialType(CreateCategoriesDTO) {

  
}