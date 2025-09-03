import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { supabase } from 'src/app/supabase.client';
import { HomePageRoutingModule } from './home-routing.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    IonicModule,
    RouterModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) {}

  async logout() {
    await supabase.auth.signOut();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
