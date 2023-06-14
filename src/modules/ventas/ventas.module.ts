import { Global, Module } from '@nestjs/common';
import { ventasProviders } from 'src/modules/ventas/products/providers';
import { VentasService } from './products/services/ventas.service';


@Global()
@Module({
  imports: [DataBaseModule],
  controllers: [],
  providers: [...ventasProviders, VentasService],
  exports:[],
})
export class VentasModule { }
