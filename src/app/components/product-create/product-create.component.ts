import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
              private toastr: ToastrService) {
    this.productForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      tipo: ['', Validators.required],
      precio: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  saveProduct() {
    console.log(this.productForm)

    const PRODUCT: Product = {
      nameProduct: this.productForm.get('producto')?.value,
      categorie: this.productForm.get('categoria')?.value,
      typeProduct: this.productForm.get('tipo')?.value,
      price: this.productForm.get('precio')?.value
    }
    this.toastr.success('Producto '+ PRODUCT.nameProduct + ' registrado con exito!!!', 
                        'Registro de Productos',
                        {positionClass: 'toast-bottom-right'});
    console.log(" PRODUCTO EN MEMORIA: " + PRODUCT)
    this.router.navigate(['list-product']);
  }
}
