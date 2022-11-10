import { PartialType } from "@nestjs/mapped-types";
import { CreatePlacesServiceDTO } from "./create-placesService.dto";

export class UpdatePlacesServiceDTO extends PartialType(CreatePlacesServiceDTO) {}