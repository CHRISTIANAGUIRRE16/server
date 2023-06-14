import { DataSource } from "typeorm";
import { CategoryEntity, ProductEntity } from "../entities";
import { RepositoryEnum, DataSourceEnum } from "src/shared/enums";

//Se crea una provider por modulo -modulo ventas
//INSTALAR LIBRERIA DE SHARED EN NEST JS COMANDO : 
export const ventasProviders = [
  {
    provide: RepositoryEnum.PRODUCT_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProductEntity),
      inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.CATEGORY_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CategoryEntity),
    inject: [DataSourceEnum.PG_DATA_SOURCE],
  }

]
  
