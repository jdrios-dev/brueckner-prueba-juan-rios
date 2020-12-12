import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

const material = [
  MatToolbarModule,
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSelectModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
