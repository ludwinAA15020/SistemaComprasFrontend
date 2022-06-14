import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPerfiles'
})
export class FiltroPerfilesPipe implements PipeTransform {

  transform(value:any,arg:any): any[] {
    const resultPerfiles=[];
    for(const perfil of value){
      if(perfil.idproveedores.indexof(arg)>-1){
        resultPerfiles.push(perfil)
      }
    }
    return resultPerfiles;
  }

}
