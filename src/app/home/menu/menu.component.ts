import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  
  constructor(
    private router: Router
  ) {}

  ngOnInit(){}

  isButtonHovered1: boolean = false;
  onButtonHover1(isHovered: boolean){
    this.isButtonHovered1 = isHovered;
  }


  isButtonHovered2: boolean = false;
  onButtonHover2(isHovered: boolean){
    this.isButtonHovered2 = isHovered;
  }


  isButtonHovered3: boolean = false
  onButtonHover3(isHovered: boolean){
    this.isButtonHovered3 = isHovered;
  }


  isButtonHovered4: boolean = false;
  onButtonHover4(isHovered: boolean){
    this.isButtonHovered4 = isHovered;
  }


  isButtonHovered5: boolean = false;
  onButtonHover5(isHovered: boolean){
    this.isButtonHovered5 = isHovered;
  }


  isButtonHovered6: boolean = false;
  onButtonHover6(isHovered: boolean){
    this.isButtonHovered6 = isHovered;
  }


  isButtonHovered7: boolean = false;
  onButtonHover7(isHovered: boolean){
    this.isButtonHovered7 = isHovered;
  }

  goTo(route: any){
    console.log(route)
    console.log('click');
    this.router.navigate([route])
  }
}
