import { Allow, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";
import { CategoryEntity } from "src/modules/ventas/products/entities/category.entity";

export class BaseProductDto {
  @Allow()
  readonly category: CategoryEntity;
  @IsString()
  @IsNotEmpty(isStringValidationOptions())
  readonly title;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price;

  @IsString()
  @IsNotEmpty()
  readonly description;

  @IsString()
  readonly image;

  @IsString()
  @IsNotEmpty()
  readonly category:CategoryEntity;


}


