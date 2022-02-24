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
  this.fileName=res['size']
   this.fileSize=res['name']
      } else {
        this.isUploaded = false
      }
    }) 
  }


}
