import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

const route: Routes = [
    {
      path: '',
      component: WelcomeComponent,
      title: 'Welcome'
    },
    {
      path: 'login',
      component: LoginComponent,
      title: 'Log in'
    },
    {
        path: 'signup',
        component: RegisterComponent,
        title: 'SignUp'
    },
    {
      path: 'chatbot',
      component: ChatbotComponent,
      title: 'chatbot'
  }
  ];
  
  export default route;