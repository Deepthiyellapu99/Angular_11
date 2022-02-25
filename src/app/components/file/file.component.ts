import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FileService } from '../../services/file.service';
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  formData : FormData;
  isUploaded : boolean;
  fileName: any;
  fileSize: any;
  constructor(
  private http: HttpClient,
  private file : FileService
    ) { }

  ngOnInit(): void {
  }
 
  onUpload(event): any{
    let file= event.target.files
this.formData = new FormData();
  this.formData.append('file', file[0])
  }

  submitForm(){

    this.file.uploadFile(this.formData).subscribe(res => { 
      if(res['status']==200){
        this.isUploaded = true
  this.fileName=res['name']
   this.fileSize=res['size']
      } else {
        this.isUploaded = false
      }
    }) 
  }


  test(){
    const a = document.createElement('a');
    document.body.appendChild(a);
    const blob = new Blob(['Test String'], { type: 'application/vnd.ms-excel' }),
      url = window.URL.createObjectURL(blob);
    console.log(navigator);
      a.href = url;
      a.download = 'UnitDetails'  + '.xlsx';
      a.click();
      window.URL.revokeObjectURL(url);
    
  }

}
