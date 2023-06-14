import { BaseCategoryDto } from "./base.category.dto";
import { Exclude, Expose } from "class-transformer"

@Exclude()
export class ReadCategoryDto extends BaseCategoryDto{
  @Expose()
  readonly name;

  @Expose()
  readonly description;

}