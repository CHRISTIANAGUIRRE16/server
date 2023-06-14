import { BaseProductDto } from "./base.product.dto";
import { Exclude, Expose } from "class-transformer"
@Exclude()
export class ReadProductDto extends BaseProductDto{
  @Expose()
  readonly id;

  @Expose()
  readonly title;

  @Expose()
  readonly precio;

  @Expose()
  readonly description;

  @Expose()
  readonly image;
  
}