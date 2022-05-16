import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-crear-evaluacion',
  templateUrl: './crear-evaluacion.component.html',
  styleUrls: ['./crear-evaluacion.component.css']
})
export class CrearEvaluacionComponent implements OnInit {

  evaluacion: any[] = [
    {
    nota_atencion_cliente:6,
    nota_capacidad_financiera:6,
    nota_fuerza_tecnica:5,
    nota_imagen_producto:7,
    nota_instalaciones:8,
    nota_localizacion:6,
    nota_servicio_postventa:6,
    nota_nivel_organizativo: 6,
    nota_periodo_garantia:5,
    nota_proveedor_mercado:7,
  }];
  constructor(private fb:FormBuilder,private toastr: ToastrService) {
    this.form = this.fb.group({
      nota_atencion_cliente: ['',[Validators.required, Validators.max(10),Validators.min(1)]],
      nota_capacidad_financiera:['',[Validators.required, Validators.max(10),Validators.min(1)]],
      nota_fuerza_tecnica:['',[Validators.required, Validators.max(10),Validators.min(1)]],
      nota_imagen_producto:['',[Validators.required, Validators.max(10),Validators.min(1)]],
      nota_instalaciones:['',[Validators.required, Validators.max(10),Validators.min(1)]],
      nota_localizacion:['',[Validators.required, Validators.max(10),Validators.min(1)]],
      nota_servicio_postventa:['',[Validators.required, Validators.max(10),Validators.min(1)]],
      nota_nivel_organizativo:['',[Validators.required, Validators.max(10),Validators.min(1)]],
      nota_periodo_garantia:['',[Validators.required, Validators.max(10),Validators.min(1)]],
      nota_proveedor_mercado:['',[Validators.required, Validators.max(10),Validators.min(1)]],
    })
  }

  ngOnInit(): void {
  }

  form:FormGroup;
  agregarCriterios() {
    const criterios: any = {
      nota_atencion_cliente: this.form.get('nota_atencion_cliente')?.value,
      nota_capacidad_financiera: this.form.get('nota_capacidad_financiera')?.value,
      nota_fuerza_tecnica: this.form.get('nota_fuerza_tecnica')?.value,
      nota_imagen_producto: this.form.get('nota_imagen_producto')?.value,
      nota_instalaciones: this.form.get('nota_instalaciones')?.value,
      nota_localizacion: this.form.get('nota_localizacion')?.value,
      nota_servicio_postventa: this.form.get('nota_servicio_postventa')?.value,
      nota_nivel_organizativo: this.form.get('nota_nivel_organizativo')?.value,
      nota_periodo_garantia: this.form.get('nota_periodo_garantia')?.value,
      nota_proveedor_mercado: this.form.get('nota_proveedor_mercado')?.value,
    }
    this.evaluacion.push(criterios);
    this.toastr.success('La evaluación fue registrada con exito!', 'Evaluación Registrada');
    this.form.reset();
  }  

}
