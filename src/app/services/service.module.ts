import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{ SharedService,SettingsService,SidebarService} from './service.index'

@NgModule({
  imports: [
  
    CommonModule
  ],
  providers:[
    SharedService,
    SettingsService,
    SidebarService

  ],
  declarations: []
})
export class ServiceModule { }
