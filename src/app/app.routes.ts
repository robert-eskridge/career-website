import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Publications } from './publications/publications';
import { Projects } from './projects/projects'; 
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Volunteer } from './volunteer/volunteer';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'publications', component: Publications},
    {path: 'about', component: About},
    {path: 'projects', component: Projects},
    {path: "contact", component:Contact},
    {path: "volunteer", component:Volunteer}
];
