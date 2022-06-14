import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroEmpresas'
})
export class FiltroEmpresasPipe implements PipeTransform {
  transform(listEmpresas: any[], page: number = 0, search: string = ''): any[] {
    if (search.length == 0)
      // console.log(listProducto)
      return listEmpresas.slice(page, page + 5);
    console.log(search);
    console.log(page);
    const fil = listEmpresas.filter(poke => poke.nombreproveedor.includes(search));
    console.log(fil);
    return fil.slice(page, page + 5);
  }
 

}
