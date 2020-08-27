import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseComponent } from './course/course.component';
import { UploadComponent } from './upload/upload.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatMenuModule, MatNativeDateModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatRadioModule } from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Routes, RouterModule } from '@angular/router';
import { MainUploadComponent } from './upload/main-upload/main-upload.component';
import { BottomComponent } from './bottom/bottom.component';
import { ExpandableComponent } from './course/expandable/expandable.component';
import { DataStorageService } from './service/data-storage.service';



const allRoutes: Routes = [
  { path: '' , redirectTo: '/mainLoad',pathMatch: 'full'},
  { path: 'mainLoad' , component : UploadComponent, children:[
    { path: '' , component : MainUploadComponent, outlet: 'uploads'},
    { path: '' , component: BottomComponent, outlet: 'buttons'}
  ]},
  { path: 'formPage' , component: CourseComponent, children: [
    { path: '', component: ExpandableComponent, outlet: 'expand' },
    { path: '', component: BottomComponent, outlet: 'buttons' }
  ]}
];





@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    ToolbarComponent,
    CourseComponent,
    MainUploadComponent,
    BottomComponent,
    ExpandableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allRoutes),
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatExpansionModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
