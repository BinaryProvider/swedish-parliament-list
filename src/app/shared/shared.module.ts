import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule, MatSortModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    CdkTableModule,
    MatTableModule,
    MatSortModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    CdkTableModule,
    MatTableModule,
    MatSortModule,
    FontAwesomeModule
  ]
})
export class SharedModule {
  constructor() {
    library.add(fas);
  }
}
