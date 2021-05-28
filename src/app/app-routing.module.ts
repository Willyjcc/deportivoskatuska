import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NoLoginGuard } from "./guards/nologin.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'politicas-de-privacidad',
    loadChildren: () => import('./pages/politicas-de-privacidad/politicas-de-privacidad.module').then( m => m.PoliticasDePrivacidadPageModule)
  },
  {
    path: 'informacion-de-envio',
    loadChildren: () => import('./pages/informacion-de-envio/informacion-de-envio.module').then( m => m.InformacionDeEnvioPageModule)
  },
  {
    path: 'mapa-del-sitio',
    loadChildren: () => import('./pages/mapa-del-sitio/mapa-del-sitio.module').then( m => m.MapaDelSitioPageModule)
  },
  {
    path: 'responsabilidad-social',
    loadChildren: () => import('./pages/responsabilidad-social/responsabilidad-social.module').then( m => m.ResponsabilidadSocialPageModule)
  },
  {
    path: 'sobre-nosotros',
    loadChildren: () => import('./pages/sobre-nosotros/sobre-nosotros.module').then( m => m.SobreNosotrosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./admin/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./admin/dashboard/dashboard.module').then( m => m.DashboardPageModule), canActivate : [AuthGuard]
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./admin/todo-details/todo-details.module').then( m => m.TodoDetailsPageModule), canActivate : [AuthGuard]
  },
  {
    path: 'details',
    loadChildren: () => import('./admin/todo-details/todo-details.module').then( m => m.TodoDetailsPageModule), canActivate : [AuthGuard]
  },
  {
    path: 'admingaleriageneral',
    loadChildren: () => import('./admin/admingaleriageneral/admingaleriageneral.module').then( m => m.AdmingaleriageneralPageModule), canActivate : [AuthGuard]
  },
  {
    path: 'todo-admin-galeria-general/:id',
    loadChildren: () => import('./admin/todo-admin-galeria-general/todo-admin-galeria-general.module').then( m => m.TodoAdminGaleriaGeneralPageModule), canActivate : [AuthGuard]
  },
  {
    path: 'todo-admin-galeria-general',
    loadChildren: () => import('./admin/todo-admin-galeria-general/todo-admin-galeria-general.module').then( m => m.TodoAdminGaleriaGeneralPageModule), canActivate : [AuthGuard]
  },
  {
    path: 'producto/:id',
    loadChildren: () => import('./pages/producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./pages/producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'promociones',
    loadChildren: () => import('./pages/promociones/promociones.module').then( m => m.PromocionesPageModule)
  },
  {
    path: 'galeriageneral/:id',
    loadChildren: () => import('./pages/galeriageneral/galeriageneral.module').then( m => m.GaleriageneralPageModule)
  },
  {
    path: 'galeriageneral',
    loadChildren: () => import('./pages/galeriageneral/galeriageneral.module').then( m => m.GaleriageneralPageModule)
  },
  {
    path: 'producto-galeria-general/:id',
    loadChildren: () => import('./pages/producto-galeria-general/producto-galeria-general.module').then( m => m.ProductoGaleriaGeneralPageModule)
  },
  {
    path: 'producto-galeria-general',
    loadChildren: () => import('./pages/producto-galeria-general/producto-galeria-general.module').then( m => m.ProductoGaleriaGeneralPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
