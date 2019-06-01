import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
    { path: 'user/flavio', component: PhotoListComponent },
    { path: 'p/add', component: PhotoFormComponent },
    { path: '**', component: NotFoundComponent} //Qualquer endereço errado, vai carregar essa página
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes) //linka as rotas com os path acima para exibição da página html
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}