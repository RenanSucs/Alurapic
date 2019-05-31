import { Component, Input } from  '@angular/core';

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent{

  @Input() description =''; //input = inbound properties, aceita receber valor fora do meu componente, direto no app.component
  
  @Input() url ='';
}