import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { RegisterComponent } from './register/register.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { SectionListComponent } from './section-list/section-list.component';
import {routing} from './app.routing';
import {CourseServiceClient} from './services/course.service.client';
import {UserServiceClient} from './services/user.service.client';
import {SectionServiceClient} from './services/section.service.client';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {EnrollmentServiceClient} from './services/enrollment.service.client';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    RegisterComponent,
    WhiteBoardComponent,
    ProfileComponent,
    LoginComponent,
    CourseViewerComponent,
    SectionListComponent,
    CourseGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseServiceClient,
    UserServiceClient,
    SectionServiceClient,
    EnrollmentServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
