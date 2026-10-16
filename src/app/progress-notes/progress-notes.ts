import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, FormsModule],
  selector: 'app-progress-notes',
  styleUrl: './progress-notes.css',
  templateUrl: './progress-notes.html',
})
export class ProgressNotes {
  progressNotesForm = new FormGroup({
    projectCode: new FormControl(''),
    projectName: new FormControl(''),
    projectDate: new FormControl(''),
    projectStatus: new FormControl(''),

    projectDetails: new FormGroup({
      projectMember: new FormControl(''),
      projectNote: new FormControl(''),
    }),
  });

  progressNote = 'Initial progress note';

  codeMap = new Map<string, string>([
    ['PPT101', 'Project Progress Tracker'],
    ['WEB202', 'Website Redesign'],
    ['APP303', 'Mobile Application Development'],
    ['DATA404', 'Data Analytics Dashboard'],
  ]);

  updateProjectName(): void {
    const enteredCode: string | null = this.progressNotesForm.controls.projectCode.value;

    if (enteredCode !== null && enteredCode !== '') {
      const formattedCode: string = enteredCode.trim().toUpperCase();

      if (this.codeMap.has(formattedCode)) {
        const matchedProjectName: string | undefined = this.codeMap.get(formattedCode);

        if (matchedProjectName !== undefined) {
          this.progressNotesForm.controls.projectName.setValue(matchedProjectName);
        }
      } else {
        this.progressNotesForm.controls.projectName.setValue('Project code not found');
      }
    }
  }
}

