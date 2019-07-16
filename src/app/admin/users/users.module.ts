import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserService } from '../service/user.service';

@NgModule({
  declarations: [UsersComponent],
  providers: [ UserService ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }