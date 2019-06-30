import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule, MatSortModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModalModule,
    CdkTableModule,
    MatTableModule,
    MatSortModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    NgbModalModule,
    CdkTableModule,
    MatTableModule,
    MatSortModule,
    FontAwesomeModule
  ]
})
export class SharedModule {
  constructor() {
    this.addFontAwesomeIcons();
  }

  private addFontAwesomeIcons(): void {
    library.add(faUsers, faUserCircle);
  }
}
