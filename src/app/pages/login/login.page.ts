import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
import { supabase } from 'src/app/supabase.client';
import { LoginPageRoutingModule } from './login-routing.module';

@Component({
  standalone:true,
  imports: [CommonModule,
    FormsModule,
    IonicModule,
    RouterModule],
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  async login() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: this.email,
      password: this.password,
    });

    if (error) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: error.message,
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: '¡Inicio de sesión correcto!',
        buttons: ['OK'],
      });
      await alert.present();
      this.router.navigate(['/home']); 
    }
  }


  ngOnInit() {
  }

}
