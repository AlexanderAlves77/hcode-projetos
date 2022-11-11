import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumberString, IsString } from "class-validator";
import { CreatePlacesDTO } from "./create-places.dto";

export class UpdatePlacesDTO extends PartialType(CreatePlacesDTO) {}