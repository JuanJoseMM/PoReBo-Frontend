import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public selectedHome=0
  public usuario:any
  public agente:any
  public isLogin= false
  public agencia:any
  public firma:any
  


  constructor() { }
}
