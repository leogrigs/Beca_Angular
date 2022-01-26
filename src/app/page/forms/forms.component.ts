import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PlataformDetectorService } from '../services/detector-plataforma/plataform-detector.service';
import { Adress, ViacepService } from '../services/viacep/viacep.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {

  error: boolean = false;

  rua: string = '';
  bairro: string = '';
  localidade: string = '';
  uf: string = '';

  msg: string = '';

  @ViewChild('cep') cepInput: ElementRef<HTMLInputElement> | undefined;  
  
  constructor(private fb: FormBuilder, private viacepService: ViacepService, private plataformDetector: PlataformDetectorService) { }
  
  form = this.fb.group({
    nome: [''],
    cpf: ['', Validators.required],
    email: [''],
    cep: ['', Validators.required]
  })

  // vnome: boolean = this.form.get('nome')?.value == ''? true : false;

  ngOnInit(): void {
  }

  buscar(): void {
    // Printa dados do formulário no console
    console.log('=================  DADOS DO FORMS =================\n\n');
    console.log(this.form.value);

    // Muda visivilidade da div de resposta da busca
    let todo = document.getElementById('todo');
    if (todo != null) {
      todo.style.visibility = "visible";
    }

    let cep = this.form.get("cep")?.value;

    this.getEndereco(cep);

  }

  getEndereco(cep: string) {
    this.viacepService.getCep(cep).subscribe(
      (data: Adress) => {
        console.log('Retorno SUCESSO: '+ data);
        this.syncData(data);
      },
      (err: any) => {
        console.log(err.value);
        this.error = true;
        this.msg = "CEP Inválido"
        this.plataformDetector.isPlatformBrowser() &&
          this.cepInput?.nativeElement.focus();
      }
    )

  }

  syncData(result: Adress) {
    console.log(result);
    this.rua = result.logradouro;
    this.bairro = result.bairro;
    this.localidade = result.localidade;
    this.uf = result.uf;
    if (this.rua != undefined){
      this.msg = this.rua + " - " + this.bairro + " - " + this.localidade + " - " + this.uf;
    }
    else{
      this.msg = "CEP não encontrado!";
      this.plataformDetector.isPlatformBrowser() &&
        this.cepInput?.nativeElement.focus();
    }
   }

}
