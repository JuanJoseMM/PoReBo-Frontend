import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/core/service/state.service';
import { UsuarioService } from 'src/app/core/service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router,private userser:UsuarioService,private state:StateService) { }


    async entrar(user:any, pw:any){
      console.log(user,pw)
      //this.state.usuario = this.userser.login("aaa")
      await this.userser.login(user,pw)
      if (this.state.isLogin==false) {
        return
      }else{
        setTimeout(() => {
          this.router.navigate(['/home'])  
        }, 1500);
        
      }
      
    }
}
