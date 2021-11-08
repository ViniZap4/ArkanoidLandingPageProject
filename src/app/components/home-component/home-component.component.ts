import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

const EMAIL_REGEX = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
@Component({
  selector: 'ark-home',
  templateUrl: './home-component.component.html',
  styleUrls: [ './home-component.component.scss' ]
})
export class HomeComponent implements OnInit {

  public form: FormGroup | any;

  constructor(private readonly fb: FormBuilder, private readonly toastr: ToastrService) {}

  public ngOnInit(): void {
    this.form = this.fb.group({
      email: [ null, Validators.pattern(EMAIL_REGEX) ]
    })
  }

  public send(): void {
    if (this.form.valid && this.form.get('email').value) {
      this.toastr.success('Contato cadastrado com sucesso!');
      this.form.reset();
    }
  }
  
}

