import { Component} from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent{
  url = '';
  video = '';
  video_id='';
  history: string[] = [];

  constructor(private sanitizer: DomSanitizer){}
  getEmbedUrl(){
    if(this.getId(this.url) != '' ){
      this.history.push("https://www.youtube.com/embed/"+ this.getId(this.url));
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ this.getId(this.url))
  }
  getId(url:string){
    for(let i = 0;i<url.length;i++){
      if(url.charAt(i) == '='){
        this.video_id = url.substring(i+1);
      }
    }
    this.url = '';
    return this.video_id
  }

 
}


