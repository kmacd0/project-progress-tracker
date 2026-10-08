import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-progress-notes',
  styleUrl: './progress-notes.css',
  templateUrl: './progress-notes.html',
})
export class ProgressNotes {
  progressNotesForm = new FormGroup({
    projectName: new FormControl(''),
    projectDate: new FormControl(''),
    projectStatus: new FormControl(''),

    projectDetails: new FormGroup({
      projectMember: new FormControl(''),
      projectNote: new FormControl(''),
    }),
  });
}
