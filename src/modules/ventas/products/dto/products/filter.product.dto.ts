import {IsOptional, IsString } from "class-validator";
import { PaginationDto } from "./paginationDto";

export class FilterProductDto extends PaginationDto{

  @IsOptional()
  @IsString(isStringValidationOptions())
  readonly title: string;

}