import { Pipe, PipeTransform } from '@angular/core';
import { } from '../lista-producto/lista-producto.component';

@Pipe({
  name: 'filtroProducto'
})
export class FiltroPipe implements PipeTransform {

  transform(listProducto: any[], page: number = 0, search: string = ''): any[] {
    if (search.length == 0)
      // console.log(listProducto)
      return listProducto.slice(page, page + 5);
    console.log(search);
    console.log(page);
    const fil = listProducto.filter(poke => poke.nombreprod.includes(search));
    console.log(fil);
    return fil.slice(page, page + 5);
  }

}
