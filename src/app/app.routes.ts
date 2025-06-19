import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Publications } from './publications/publications';
import { Projects } from './projects/projects'; 
import { About } from './about/about';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'publications', component: Publications},
    {path: 'about', component: About},
    {path: 'projects', component: Projects}
];
