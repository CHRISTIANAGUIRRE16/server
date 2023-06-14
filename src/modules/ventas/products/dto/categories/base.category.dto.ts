import {  IsNotEmpty, IsString } from "class-validator";

export class BaseCategoryDto {
  @IsString()
  @IsNotEmpty(isStringValidationOptions())
  readonly name:string;

  @IsString()
  @IsNotEmpty()
  readonly description;

}


