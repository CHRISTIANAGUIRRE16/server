import {IsOptional, IsString } from "class-validator";
import { PaginationDto } from "./paginationDto";

export class FilterCategoryDto extends PaginationDto{

  @IsOptional()
  @IsString(isStringValidationOptions())
  readonly name: string;

}