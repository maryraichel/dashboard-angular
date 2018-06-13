import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
text:string
password:any
message:string



  constructor() { }

  ngOnInit() {
  }
registerUser(event){
  event.preventDefault()
  const error=[]
  const target=event.target
  const password= target.querySelector('#password').value
  if(password!='admin')
  {
    error.push("incorrect password")
  }
  console.log(password)

}
  
  


}
/*<script>
function myFunction() {
  <a routerLink='/admin'><button type="submit">Login</button></a>
}
</script>*/