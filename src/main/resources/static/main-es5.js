function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"myApp\">\n  <mat-drawer-container *ngIf=\"!isAdminConsole\">\n    <mat-drawer class=\"mobile-devices-left-menu\" [opened]=\"leftMenuOpened\" mode=\"over\">\n      <mat-list>\n        <div mat-subheader style=\"width: 100%; color: white;\">\n          <span style=\"width: 50%; text-align: left;\">Menu</span>\n          <span style=\"width: 50%; text-align: right;\">\n          <button mat-button (click)=\"onMenuClosed()\">\n            <mat-icon>close</mat-icon>\n          </button>\n        </span>\n        </div>\n        <mat-list-item routerLink=\"/articles\"\n                       routerLinkActive=\"menu-link-active\"\n                       class=\"mat-list-web-item\"\n                       [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"onMenuClosed()\">\n          <mat-icon mat-list-icon>home</mat-icon>\n          <div mat-line> Articles </div>\n        </mat-list-item>\n        <mat-list-item routerLink=\"/infos\" routerLinkActive=\"menu-link-active\" (click)=\"onMenuClosed()\" class=\"mat-list-web-item\">\n          <mat-icon mat-list-icon>info</mat-icon>\n          <div mat-line> A propos </div>\n        </mat-list-item>\n        <mat-list-item routerLink=\"/contact\" routerLinkActive=\"menu-link-active\" (click)=\"onMenuClosed()\" class=\"mat-list-web-item\">\n          <mat-icon mat-list-icon>mail</mat-icon>\n          <div mat-line> Contact </div>\n        </mat-list-item>\n      </mat-list>\n    </mat-drawer>\n    <mat-drawer-content>\n      <app-header [mobileDeviceMenuOpened]=\"leftMenuOpened\"></app-header>\n      <app-main-content></app-main-content>\n    </mat-drawer-content>\n  </mat-drawer-container>\n\n  <div *ngIf=\"isAdminConsole\">\n    <app-header [mobileDeviceMenuOpened]=\"leftMenuOpened\"></app-header>\n    <mat-drawer-container style=\"height: 100vh;\">\n      <mat-drawer [opened]=\"true\" mode=\"side\" class=\"desktop-devices-left-menu\">\n        <mat-list>\n          <div mat-subheader style=\"width: 100%; color: black;\">Console d'administration</div>\n          <mat-list-item routerLink=\"/admin/articles/add\" class=\"mat-list-admin-item\"\n                         routerLinkActive=\"link-active\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <mat-icon mat-list-icon>article</mat-icon>\n            <div mat-line> Nouvel article </div>\n          </mat-list-item>\n          <mat-list-item routerLink=\"/admin/articles/all\" class=\"mat-list-admin-item\"\n                         routerLinkActive=\"link-active\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <mat-icon mat-list-icon>update</mat-icon>\n            <div mat-line> Modifier article </div>\n          </mat-list-item>\n        </mat-list>\n        <ul class=\"admin-page-user-infos\">\n          <li>{{admin.fullName}}</li>\n          <li>\n            <a mat-button (click)=\"onDisconnect()\">Déconnexion</a>\n          </li>\n        </ul>\n      </mat-drawer>\n      <mat-drawer-content>\n        <router-outlet></router-outlet>\n      </mat-drawer-content>\n    </mat-drawer-container>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/about/about.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/about/about.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContentAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"height: 100vh;\">\n  <div style=\"text-align: center;\">\n    <h2> A propos de ce blog </h2>\n  </div>\n  <mat-divider></mat-divider>\n <div style=\"background-color: white; width: 100%; margin-top: 3%;\">\n   <mat-card>\n     <p>\n       Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n       Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.\n       Duis vulputate commodo lectus, ac blandit elit tincidunt id.\n       Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.\n       Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam.\n       Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit.\n       Vivamus varius pretium ligula, a aliquam odio euismod sit amet.\n       Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra.\n       Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.\n     </p>\n   </mat-card>\n </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/admin/article-creation/article-creation.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/admin/article-creation/article-creation.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContentAdminArticleCreationArticleCreationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-tab-group animationDuration=\"0ms\" style=\"height: 100vh;\">\n  <mat-tab label=\"Creation\">\n    <form [formGroup]=\"formOptions\" (ngSubmit)=\"onSubmit()\" [ngStyle]=\"formStyle\">\n      <mat-card>\n        <mat-card-header>\n          <mat-card-title>Ecrire un nouvel article</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <mat-form-field appearance=\"outline\" class=\"blog-admin-creation-form-field\">\n            <mat-label>Intitulé de l'article</mat-label>\n            <input matInput\n                   placeholder=\"Saisir le titre de l'article\"\n                   [formControl]=\"titleControl\"\n                   autocomplete=\"title\"\n                   required>\n            <mat-error *ngIf=\"titleControl.invalid\">{{handleLoginErrors()}}</mat-error>\n          </mat-form-field>\n          <br>\n          <mat-form-field appearance=\"outline\" class=\"blog-admin-creation-form-field\">\n            <mat-label>Contenu de l'article</mat-label>\n            <textarea matInput rows=\"20\"\n                      placeholder=\"Ecrire le contenu de l'article ici\"\n                      [formControl]=\"contentControl\"\n                      autocomplete=\"content\"\n                      required>\n            </textarea>\n            <mat-error *ngIf=\"contentControl.invalid\">{{handlePasswordErrors()}}</mat-error>\n          </mat-form-field>\n        </mat-card-content>\n        <mat-card-actions>\n          <button type=\"submit\" mat-raised-button\n                  class=\"button-primary-color\">\n            Soumettre\n          </button>\n        </mat-card-actions>\n        <mat-error *ngIf=\"!connected\" style=\"text-align: center;\">{{connectionResponse}}</mat-error>\n      </mat-card>\n    </form>\n  </mat-tab>\n  <mat-tab label=\"Prévisualisation\">\n    <mat-card [ngStyle]=\"formStyle\" *ngIf=\"titleControl.valid || contentControl.valid\">\n      <mat-card-header>\n        <mat-card-title *ngIf=\"titleControl.valid\">\n          {{titleControl.value}}\n        </mat-card-title>\n      </mat-card-header>\n      <mat-card-content *ngIf=\"contentControl.valid\" [innerHTML]=\"contentControl.value\"></mat-card-content>\n    </mat-card>\n  </mat-tab>\n</mat-tab-group>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/admin/article-update-deletion/article-update-deletion.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/admin/article-update-deletion/article-update-deletion.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContentAdminArticleUpdateDeletionArticleUpdateDeletionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ad-page-content\">\n  <div style=\"text-align: center;\">\n    <h2> Mettre à jour un articles </h2>\n  </div>\n  <mat-divider></mat-divider>\n\n  <div *ngIf=\"allArticles.length > 0\" style=\"margin-top: 3%;\">\n    <mat-card class=\"content-article-update-form\">\n      <form [formGroup]=\"formOptions\" (ngSubmit)=\"onUpdate()\" #form>\n        <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n          <mat-label>Titre</mat-label>\n          <input matInput\n                 [formControl]=\"titleControl\"\n                 autocomplete=\"on\"\n                 value=\"{{articleToUpdate.title}}\">\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n          <mat-label>Contenu</mat-label>\n          <textarea rows=\"30\"\n                    matInput\n                    [formControl]=\"contentControl\"\n                    value=\"{{articleToUpdate.content}}\"\n                    autocomplete=\"on\">\n          </textarea>\n        </mat-form-field>\n        <button [disabled]=\"!(titleChanged || contentChange)\"\n                type=\"submit\"\n                mat-raised-button\n                class=\"button-primary-color\">\n          Mettre à jour\n        </button>\n      </form>\n    </mat-card>\n  </div>\n\n  <div>\n    <mat-card class=\"content-articles-list\"\n              tabindex=\"0\"\n              role=\"region\"\n              *ngFor=\"let article of allArticles\" (click)=\"onSelect(article.id)\">\n      <mat-card-title>{{article.title}}</mat-card-title>\n      <mat-card-content>\n        {{article.content | slice: 0 : 80 }} ...\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/admin/login/login.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/admin/login/login.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContentAdminLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"formOptions\" (ngSubmit)=\"onSubmit()\" [ngStyle]=\"formStyle\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>Console d'administration</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-form-field appearance=\"standard\" class=\"blog-admin-login-form-field\">\n        <mat-label>Login</mat-label>\n        <input matInput\n               placeholder=\"Saisir l'identifiant\"\n               [formControl]=\"loginControl\"\n               autocomplete=\"username\"\n               required>\n        <mat-error *ngIf=\"loginControl.invalid\">{{handleLoginErrors()}}</mat-error>\n      </mat-form-field>\n      <br>\n      <mat-form-field appearance=\"standard\" class=\"blog-admin-login-form-field\">\n        <mat-label>Mot de passe</mat-label>\n        <input matInput\n               placeholder=\"Saisir le mot de passe\"\n               [type]=\"hide ? 'password' : 'text'\"\n               [formControl]=\"passwordControl\"\n               autocomplete=\"current-password\"\n               required>\n        <mat-error *ngIf=\"passwordControl.invalid\">{{handlePasswordErrors()}}</mat-error>\n        <button type=\"button\" mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Cachez le mot de pass'\" [attr.aria-pressed]=\"hide\">\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </button>\n      </mat-form-field>\n    </mat-card-content>\n    <mat-card-actions>\n      <button type=\"submit\" mat-raised-button\n              class=\"button-primary-color\">\n        Connexion\n      </button>\n    </mat-card-actions>\n    <mat-error *ngIf=\"!connected\" style=\"text-align: center;\">{{connectionResponse}}</mat-error>\n  </mat-card>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/article-details/article-details.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/article-details/article-details.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContentArticleDetailsArticleDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"height: 100vh;\">\n  <mat-card style=\"margin: 25px 0;\">\n    <ul class=\"breadcrumb\">\n      <li><a routerLink=\"/articles\"> Articles </a></li>\n      <li>{{articleDetails.title}}</li>\n    </ul>\n  </mat-card>\n  <mat-card class=\"ad-card-article\">\n    <mat-card-title> {{articleDetails.title}} </mat-card-title>\n    <mat-card-subtitle>\n      <span> Publié le {{articleDetails.releaseDate}} par {{articleDetails.author}} - Thématiques: </span>\n      <span *ngFor=\"let topic of articleDetails.topics\"> {{topic.label}} </span>\n    </mat-card-subtitle>\n    <mat-card-content>\n      {{articleDetails.content}}\n    </mat-card-content>\n    <mat-card-actions>\n      <a mat-button routerLink=\"/articles\">\n        <mat-icon mat-list-icon>arrow_back</mat-icon>\n        <span> Retour </span>\n      </a>\n    </mat-card-actions>\n  </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/articles/articles.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/articles/articles.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContentArticlesArticlesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"height: 100vh;\">\n  <h2 style=\"text-align: center;\"> Les derniers articles</h2>\n  <mat-divider></mat-divider>\n  <div style=\"margin-top: 3%;\">\n    <mat-grid-list cols=\"{{cols}}\" rowHeight=\"{{rowHeight}}\">\n      <mat-grid-tile  *ngFor=\"let article of articles\">\n        <mat-card style=\"width: 90%; height: 90%;\">\n          <mat-card-title> {{article.title}} </mat-card-title>\n          <mat-card-subtitle>\n            <span> par {{article.author}} le {{article.releaseDate}} | </span>\n            <span *ngFor=\"let topic of article.topics\"> {{topic.label}} </span>\n          </mat-card-subtitle>\n          <mat-card-content>\n            <p> {{article.content | slice: 0 : 240 }} ... </p>\n          </mat-card-content>\n          <mat-card-actions>\n            <a mat-button [routerLink]=\"['/articles', article.id]\"> Lire l'article </a>\n          </mat-card-actions>\n        </mat-card>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/contact/contact.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/contact/contact.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContentContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"height: 100vh;\">\n  <div style=\"text-align: center;\">\n    <h2>Page de contact</h2>\n  </div>\n  <mat-divider></mat-divider>\n  <form [formGroup]=\"formOptions\" (ngSubmit)=\"onSubmit()\" [ngStyle]=\"formStyle\" style=\"background-color: white; margin-top: 3%;\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title style=\"text-align: center;\">Contactez-nous via ce formulaire</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n          <mat-label>Email</mat-label>\n          <input matInput\n                 placeholder=\"Votre email\"\n                 [formControl]=\"emailControl\"\n                 autocomplete=\"email\"\n                 required>\n          <mat-error *ngIf=\"emailControl.invalid\">{{handleEmailError()}}</mat-error>\n        </mat-form-field>\n        <br>\n        <mat-form-field appearance=\"outline\" style=\"width: 100%;\">\n          <mat-label>Message</mat-label>\n          <textarea matInput rows=\"15\"\n                    placeholder=\"Votre message\"\n                    [formControl]=\"messageControl\"\n                    autocomplete=\"message\"\n                    required>\n        </textarea>\n          <mat-error *ngIf=\"messageControl.invalid\">{{handleMessageError()}}</mat-error>\n        </mat-form-field>\n      </mat-card-content>\n      <mat-card-actions>\n        <button type=\"submit\" mat-raised-button class=\"button-primary-color\"> Envoyer </button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/main-content/main-content.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/main-content/main-content.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContentMainContentMainContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"main\" *ngIf=\"!smallScreen\">\n  <div></div>\n  <div style=\"width: 50%;\">\n    <router-outlet></router-outlet>\n  </div>\n  <div></div>\n</div>\n\n<div *ngIf=\"smallScreen\">\n  <router-outlet></router-outlet>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/header/header.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/header/header.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar class=\"header-styles\">\n  <mat-toolbar-row class=\"header-content-alignment\" *ngIf=\"!smallScreen\">\n    <div></div>\n    <div style=\"width: 50%; display: flex; flex: auto;\">\n      <a mat-button routerLink=\"/\">\n        <h1>Afropreneur Digital</h1>\n      </a>\n      <div style=\"width: 70%; text-align: right;\">\n        <a mat-button routerLink=\"/articles\"\n           routerLinkActive=\"link-active\"\n           [routerLinkActiveOptions]=\"{exact: true}\">\n          Articles\n        </a>\n        <a mat-button routerLink=\"/infos\"\n           routerLinkActive=\"link-active\"\n           [routerLinkActiveOptions]=\"{exact: true}\">\n          A propos\n        </a>\n        <a mat-button routerLink=\"/contact\"\n           routerLinkActive=\"link-active\"\n           [routerLinkActiveOptions]=\"{exact: true}\">\n          Contact\n        </a>\n      </div>\n    </div>\n    <div></div>\n  </mat-toolbar-row>\n  <mat-toolbar-row *ngIf=\"smallScreen\">\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\" (click)=\"onMenuToggle()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <a mat-button routerLink=\"/\">\n      <h1>Afropreneur Digital</h1>\n    </a>\n  </mat-toolbar-row>\n</mat-toolbar>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!switchToAdminDashboard\">\n  <mat-list class=\"blog-left-menu-content\">\n    <div class=\"logo\">\n      <a mat-button routerLink=\"/\"><h2>Afropreneur <span style=\"color: orange;\">Digital</span></h2></a>\n    </div>\n    <div mat-subheader class=\"blog-left-menu-subheader\">Le blog</div>\n    <mat-list-item routerLink=\"/articles\" routerLinkActive=\"link-active\" [routerLinkActiveOptions]=\"{exact: true}\">\n      <mat-icon mat-list-icon>home</mat-icon>\n      <div mat-line> Accueil </div>\n    </mat-list-item>\n    <mat-list-item routerLink=\"/infos\" routerLinkActive=\"link-active\">\n      <mat-icon mat-list-icon>info</mat-icon>\n      <div mat-line> A propos </div>\n    </mat-list-item>\n    <div mat-subheader class=\"blog-left-menu-subheader\">Les thématiques </div>\n    <mat-list-item [routerLink]=\"['/articles', 'education']\"\n                   routerLinkActive=\"link-active\"\n                   [routerLinkActiveOptions]=\"{exact: true}\">\n      <mat-icon mat-list-icon>school</mat-icon>\n      <div mat-line>Education</div>\n    </mat-list-item>\n    <mat-list-item [routerLink]=\"['/articles', 'healthcare']\"\n                   routerLinkActive=\"link-active\"\n                   [routerLinkActiveOptions]=\"{exact: true}\">\n      <mat-icon mat-list-icon>local_hospital</mat-icon>\n      <div mat-line>Santé</div>\n    </mat-list-item>\n    <mat-list-item [routerLink]=\"['/articles', 'fintech']\"\n                   routerLinkActive=\"link-active\"\n                   [routerLinkActiveOptions]=\"{exact: true}\">\n      <mat-icon mat-list-icon>trending_up</mat-icon>\n      <div mat-line>FinTech</div>\n    </mat-list-item>\n  </mat-list>\n</div>\n\n<div *ngIf=\"switchToAdminDashboard\">\n  <mat-list class=\"blog-left-menu-content\">\n    <div class=\"logo\">\n      <a mat-button routerLink=\"/admin\"><h2>Afropreneur <span style=\"color: orange;\">Digital</span></h2></a>\n    </div>\n    <div mat-subheader class=\"blog-left-menu-subheader\">Console d'administration</div>\n    <mat-list-item routerLink=\"/admin/articles/add\" routerLinkActive=\"link-active\" [routerLinkActiveOptions]=\"{exact: true}\">\n      <mat-icon mat-list-icon>article</mat-icon>\n      <div mat-line> Nouvel article </div>\n    </mat-list-item>\n    <mat-list-item routerLink=\"/admin/articles\" routerLinkActive=\"link-active\" [routerLinkActiveOptions]=\"{exact: true}\">\n      <mat-icon mat-list-icon>update</mat-icon>\n      <div mat-line> Modifier article </div>\n    </mat-list-item>\n  </mat-list>\n\n  <ul class=\"admin-page-user-infos\">\n    <li>{{user.fullName}}</li>\n    <li>\n      <a mat-button (click)=\"onDisconnect()\">Déconnexion</a>\n    </li>\n  </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_content_articles_articles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/content/articles/articles.component */
    "./src/app/pages/content/articles/articles.component.ts");
    /* harmony import */


    var _pages_content_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/content/about/about.component */
    "./src/app/pages/content/about/about.component.ts");
    /* harmony import */


    var _pages_content_admin_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/content/admin/login/login.component */
    "./src/app/pages/content/admin/login/login.component.ts");
    /* harmony import */


    var _pages_content_admin_article_creation_article_creation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/content/admin/article-creation/article-creation.component */
    "./src/app/pages/content/admin/article-creation/article-creation.component.ts");
    /* harmony import */


    var _pages_content_admin_article_update_deletion_article_update_deletion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/content/admin/article-update-deletion/article-update-deletion.component */
    "./src/app/pages/content/admin/article-update-deletion/article-update-deletion.component.ts");
    /* harmony import */


    var _services_CanActivateAdmin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/CanActivateAdmin */
    "./src/app/services/CanActivateAdmin.ts");
    /* harmony import */


    var _pages_content_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/content/article-details/article-details.component */
    "./src/app/pages/content/article-details/article-details.component.ts");
    /* harmony import */


    var _pages_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/content/contact/contact.component */
    "./src/app/pages/content/contact/contact.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'articles',
      pathMatch: 'full'
    }, {
      path: 'articles',
      component: _pages_content_articles_articles_component__WEBPACK_IMPORTED_MODULE_3__["ArticlesComponent"]
    }, {
      path: 'articles/:id',
      component: _pages_content_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_9__["ArticleDetailsComponent"]
    }, {
      path: 'infos',
      component: _pages_content_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }, {
      path: 'contact',
      component: _pages_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]
    }, {
      path: 'admin/login',
      component: _pages_content_admin_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: 'admin/articles/add',
      component: _pages_content_admin_article_creation_article_creation_component__WEBPACK_IMPORTED_MODULE_6__["ArticleCreationComponent"],
      canActivate: [_services_CanActivateAdmin__WEBPACK_IMPORTED_MODULE_8__["CanActivateAdmin"]]
    }, {
      path: 'admin/articles/all',
      component: _pages_content_admin_article_update_deletion_article_update_deletion_component__WEBPACK_IMPORTED_MODULE_7__["ArticleUpdateDeletionComponent"],
      canActivate: [_services_CanActivateAdmin__WEBPACK_IMPORTED_MODULE_8__["CanActivateAdmin"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo {\n  text-align: left;\n}\n#myApp {\n  overflow-x: hidden;\n}\n.mobile-devices-left-menu {\n  width: 100vw;\n  height: 100vh;\n  background-color: #0050a5;\n}\n.desktop-devices-left-menu {\n  width: 15%;\n  height: 100vh;\n  background-color: #ffffff;\n}\n.menu-link-active {\n  background-color: #014794;\n}\n.mat-list-web-item {\n  color: white;\n}\n.mat-list-admin-item {\n  color: black;\n}\n.link-active {\n  background-color: #dddddd;\n}\n.mat-list-item:hover {\n  background-color: #dddddd;\n}\n.blog-left-menu-content .mat-list-item, .blog-left-menu-subheader {\n  color: whitesmoke;\n}\n.admin-page-user-infos {\n  list-style-type: none;\n  position: fixed;\n  bottom: 25px;\n}\n.button-primary-color {\n  width: 98%;\n  margin: 1%;\n  background-color: #0050a5;\n  color: white;\n}\n.button-primary-color:hover {\n  background-color: #00438f;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiNteUFwcCB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5tb2JpbGUtZGV2aWNlcy1sZWZ0LW1lbnUge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUwYTU7XG59XG5cbi5kZXNrdG9wLWRldmljZXMtbGVmdC1tZW51IHtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLm1lbnUtbGluay1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE0Nzk0O1xufVxuXG4ubWF0LWxpc3Qtd2ViLWl0ZW0ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtbGlzdC1hZG1pbi1pdGVtIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubGluay1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufVxuXG4ubWF0LWxpc3QtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59XG5cbi5ibG9nLWxlZnQtbWVudS1jb250ZW50IC5tYXQtbGlzdC1pdGVtLCAuYmxvZy1sZWZ0LW1lbnUtc3ViaGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5hZG1pbi1wYWdlLXVzZXItaW5mb3Mge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyNXB4O1xufVxuXG4uYnV0dG9uLXByaW1hcnktY29sb3Ige1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IDElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MGE1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24tcHJpbWFyeS1jb2xvcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQzOGY7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/AuthenticationServices */
    "./src/app/services/AuthenticationServices.ts");
    /* harmony import */


    var _services_AppServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/AppServices */
    "./src/app/services/AppServices.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(appServices, authenticationServices, router) {
        _classCallCheck(this, AppComponent);

        this.appServices = appServices;
        this.authenticationServices = authenticationServices;
        this.router = router;
        this.leftMenuOpened = false;
        this.isAdminConsole = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.appServices.getMobileDevicesMenuObserver().subscribe(function (opened) {
            _this.leftMenuOpened = opened;
          });
          this.appServices.getOpenAdminConsoleSubjectObserver().subscribe(function (opened) {
            _this.isAdminConsole = opened;
            _this.admin = _this.authenticationServices.getAdmin();

            if (opened) {
              console.log('Admin Console Opened');
            } else {}
          });
        }
      }, {
        key: "onMenuClosed",
        value: function onMenuClosed() {
          this.leftMenuOpened = !this.leftMenuOpened;
        }
      }, {
        key: "onDisconnect",
        value: function onDisconnect() {
          var _this2 = this;

          console.log('Disconnecting from the admin');
          this.authenticationServices.logout();

          if (!this.authenticationServices.connected()) {
            this.router.navigate(['/admin/login']).then(function (ok) {
              _this2.appServices.enableAdminConsole(false);

              console.log('Admin console closed', ok);
            })["catch"](function (err) {
              console.log('Something went wrong while trying to close the admin console');
              console.log('Error message: ', err);
            });
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_AppServices__WEBPACK_IMPORTED_MODULE_3__["AppServices"]
      }, {
        type: _services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServices"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/header/header.component */
    "./src/app/pages/header/header.component.ts");
    /* harmony import */


    var _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/menu/menu.component */
    "./src/app/pages/menu/menu.component.ts");
    /* harmony import */


    var _pages_content_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pages/content/main-content/main-content.component */
    "./src/app/pages/content/main-content/main-content.component.ts");
    /* harmony import */


    var _pages_content_about_about_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/content/about/about.component */
    "./src/app/pages/content/about/about.component.ts");
    /* harmony import */


    var _pages_content_articles_articles_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pages/content/articles/articles.component */
    "./src/app/pages/content/articles/articles.component.ts");
    /* harmony import */


    var _pages_content_admin_login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pages/content/admin/login/login.component */
    "./src/app/pages/content/admin/login/login.component.ts");
    /* harmony import */


    var _pages_content_admin_article_creation_article_creation_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./pages/content/admin/article-creation/article-creation.component */
    "./src/app/pages/content/admin/article-creation/article-creation.component.ts");
    /* harmony import */


    var _pages_content_admin_article_update_deletion_article_update_deletion_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./pages/content/admin/article-update-deletion/article-update-deletion.component */
    "./src/app/pages/content/admin/article-update-deletion/article-update-deletion.component.ts");
    /* harmony import */


    var _pages_content_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./pages/content/article-details/article-details.component */
    "./src/app/pages/content/article-details/article-details.component.ts");
    /* harmony import */


    var _pages_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./pages/content/contact/contact.component */
    "./src/app/pages/content/contact/contact.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"], _pages_header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"], _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_22__["MenuComponent"], _pages_content_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_23__["MainContentComponent"], _pages_content_about_about_component__WEBPACK_IMPORTED_MODULE_24__["AboutComponent"], _pages_content_articles_articles_component__WEBPACK_IMPORTED_MODULE_25__["ArticlesComponent"], _pages_content_admin_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"], _pages_content_admin_article_creation_article_creation_component__WEBPACK_IMPORTED_MODULE_27__["ArticleCreationComponent"], _pages_content_admin_article_update_deletion_article_update_deletion_component__WEBPACK_IMPORTED_MODULE_28__["ArticleUpdateDeletionComponent"], _pages_content_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_29__["ArticleDetailsComponent"], _pages_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_30__["ContactComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/pages/content/about/about.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/pages/content/about/about.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContentAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/content/about/about.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/content/about/about.component.ts ***!
    \********************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppPagesContentAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.css */
      "./src/app/pages/content/about/about.component.css"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../main-content/main-content.component.css */
      "./src/app/pages/content/main-content/main-content.component.css"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/pages/content/admin/article-creation/article-creation.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/content/admin/article-creation/article-creation.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContentAdminArticleCreationArticleCreationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".blog-admin-creation-form-field {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC9hZG1pbi9hcnRpY2xlLWNyZWF0aW9uL2FydGljbGUtY3JlYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvYWRtaW4vYXJ0aWNsZS1jcmVhdGlvbi9hcnRpY2xlLWNyZWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1hZG1pbi1jcmVhdGlvbi1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/content/admin/article-creation/article-creation.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/content/admin/article-creation/article-creation.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ArticleCreationComponent */

  /***/
  function srcAppPagesContentAdminArticleCreationArticleCreationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleCreationComponent", function () {
      return ArticleCreationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/AuthenticationServices */
    "./src/app/services/AuthenticationServices.ts");
    /* harmony import */


    var _services_AppServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/AppServices */
    "./src/app/services/AppServices.ts");

    var ArticleCreationComponent = /*#__PURE__*/function () {
      function ArticleCreationComponent(fb, authenticationServices, appServices) {
        var _this3 = this;

        _classCallCheck(this, ArticleCreationComponent);

        this.fb = fb;
        this.authenticationServices = authenticationServices;
        this.appServices = appServices;
        this.titleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.contentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]);
        this.hideRequiredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        this.floatLabelControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('auto');
        this.connected = false;
        this.connectionResponse = '';
        this.mobileFormStyle = {
          width: '90%',
          'margin-left': '5%',
          'margin-top': '2%'
        };
        this.desktopFormStyle = {
          width: '80%',
          'margin-left': '10%',
          'margin-top': '2%'
        };
        this.formOptions = fb.group({
          hideRequired: this.hideRequiredControl,
          floatLabel: this.floatLabelControl
        });
        appServices.observeMobileDevices().subscribe(function (results) {
          _this3.formStyle = results.matches ? _this3.mobileFormStyle : _this3.desktopFormStyle;
        });
      }

      _createClass(ArticleCreationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.authenticationServices.switchToAdminConsole(true);
        }
      }, {
        key: "handleLoginErrors",
        value: function handleLoginErrors() {
          if (this.titleControl.hasError('required')) {
            return 'Le titre est obligatoire';
          }

          return '';
        }
      }, {
        key: "handlePasswordErrors",
        value: function handlePasswordErrors() {
          if (this.contentControl.hasError('required')) {
            return 'Contenu obligatoire';
          }

          return '';
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var title = this.titleControl.value;
          var content = this.contentControl.value;
          console.log(title);
          console.log(content);
        }
      }]);

      return ArticleCreationComponent;
    }();

    ArticleCreationComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServices"]
      }, {
        type: _services_AppServices__WEBPACK_IMPORTED_MODULE_4__["AppServices"]
      }];
    };

    ArticleCreationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-article-creation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./article-creation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/admin/article-creation/article-creation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./article-creation.component.css */
      "./src/app/pages/content/admin/article-creation/article-creation.component.css"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../main-content/main-content.component.css */
      "./src/app/pages/content/main-content/main-content.component.css"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../../app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], ArticleCreationComponent);
    /***/
  },

  /***/
  "./src/app/pages/content/admin/article-update-deletion/article-update-deletion.component.css":
  /*!***************************************************************************************************!*\
    !*** ./src/app/pages/content/admin/article-update-deletion/article-update-deletion.component.css ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContentAdminArticleUpdateDeletionArticleUpdateDeletionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content-articles-list {\n  width: 35%;\n  margin-bottom: 10px;\n}\n\n.content-article-update-form {\n  width: 55%;\n  float: right;\n}\n\n.content-articles-list:hover {\n  background-color: antiquewhite;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC9hZG1pbi9hcnRpY2xlLXVwZGF0ZS1kZWxldGlvbi9hcnRpY2xlLXVwZGF0ZS1kZWxldGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvYWRtaW4vYXJ0aWNsZS11cGRhdGUtZGVsZXRpb24vYXJ0aWNsZS11cGRhdGUtZGVsZXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWFydGljbGVzLWxpc3Qge1xuICB3aWR0aDogMzUlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY29udGVudC1hcnRpY2xlLXVwZGF0ZS1mb3JtIHtcbiAgd2lkdGg6IDU1JTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY29udGVudC1hcnRpY2xlcy1saXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/content/admin/article-update-deletion/article-update-deletion.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/pages/content/admin/article-update-deletion/article-update-deletion.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: ArticleUpdateDeletionComponent */

  /***/
  function srcAppPagesContentAdminArticleUpdateDeletionArticleUpdateDeletionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleUpdateDeletionComponent", function () {
      return ArticleUpdateDeletionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/AuthenticationServices */
    "./src/app/services/AuthenticationServices.ts");
    /* harmony import */


    var _services_ArticlesServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/ArticlesServices */
    "./src/app/services/ArticlesServices.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ArticleUpdateDeletionComponent = /*#__PURE__*/function () {
      function ArticleUpdateDeletionComponent(authenticationServices, articlesServices, formBuilder) {
        _classCallCheck(this, ArticleUpdateDeletionComponent);

        this.authenticationServices = authenticationServices;
        this.articlesServices = articlesServices;
        this.formBuilder = formBuilder;
        this.titleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.titleChanged = false;
        this.contentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.contentChange = false;
        this.hideRequiredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false);
        this.floatLabelControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('auto');
      }

      _createClass(ArticleUpdateDeletionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.authenticationServices.switchToAdminConsole(true);
          this.allArticles = this.articlesServices.findAll();

          if (this.allArticles.length > 0) {
            this.articleToUpdate = this.allArticles[0];
          }

          this.formOptions = this.formBuilder.group({
            hideRequired: this.hideRequiredControl,
            floatLabel: this.floatLabelControl
          });
          this.titleControl.valueChanges.subscribe(function (value) {
            _this4.titleChanged = true;
          });
          this.contentControl.valueChanges.subscribe(function (value) {
            _this4.contentChange = true;
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(id) {
          var _this5 = this;

          this.allArticles.forEach(function (a) {
            if (a.id === id) {
              _this5.articleToUpdate = a;
            }
          });
        }
      }, {
        key: "onUpdate",
        value: function onUpdate() {
          var _this6 = this;

          var newTitle = this.titleChanged ? this.titleControl.value : this.articleToUpdate.title;
          var newContent = this.contentChange ? this.contentControl.value : this.articleToUpdate.content;
          var updateIndex = this.allArticles.findIndex(function (a) {
            return a.id === _this6.articleToUpdate.id;
          });
          Object.assign(this.allArticles[updateIndex], {
            id: this.articleToUpdate.id,
            title: newTitle,
            releaseDate: this.articleToUpdate.releaseDate,
            author: this.articleToUpdate.author,
            topics: this.articleToUpdate.topics,
            content: newContent
          });
        }
      }]);

      return ArticleUpdateDeletionComponent;
    }();

    ArticleUpdateDeletionComponent.ctorParameters = function () {
      return [{
        type: _services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServices"]
      }, {
        type: _services_ArticlesServices__WEBPACK_IMPORTED_MODULE_3__["ArticlesServices"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ArticleUpdateDeletionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-article-update-deletion',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./article-update-deletion.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/admin/article-update-deletion/article-update-deletion.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./article-update-deletion.component.css */
      "./src/app/pages/content/admin/article-update-deletion/article-update-deletion.component.css"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../main-content/main-content.component.css */
      "./src/app/pages/content/main-content/main-content.component.css"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../../app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], ArticleUpdateDeletionComponent);
    /***/
  },

  /***/
  "./src/app/pages/content/admin/login/login.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/pages/content/admin/login/login.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContentAdminLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".blog-admin-login-form-field {\n  width: 100%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC9hZG1pbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGVudC9hZG1pbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2ctYWRtaW4tbG9naW4tZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/content/admin/login/login.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/content/admin/login/login.component.ts ***!
    \**************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesContentAdminLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/AuthenticationServices */
    "./src/app/services/AuthenticationServices.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_AppServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../services/AppServices */
    "./src/app/services/AppServices.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, authenticationServices, mobileDeviceObserver, router, appServices) {
        var _this7 = this;

        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.authenticationServices = authenticationServices;
        this.mobileDeviceObserver = mobileDeviceObserver;
        this.router = router;
        this.appServices = appServices;
        this.loginControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.passwordControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]);
        this.hide = true;
        this.hideRequiredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        this.floatLabelControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('auto');
        this.connected = false;
        this.connectionResponse = '';
        this.mobileFormStyle = {
          width: '90%',
          'margin-left': '5%',
          'margin-top': '10%'
        };
        this.desktopFormStyle = {
          width: '45%',
          'margin-left': '30%',
          'margin-top': '10%'
        };
        this.formOptions = fb.group({
          hideRequired: this.hideRequiredControl,
          floatLabel: this.floatLabelControl
        });
        mobileDeviceObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Handset, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Tablet, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].WebPortrait]).subscribe(function (results) {
          if (results.matches) {
            _this7.formStyle = _this7.mobileFormStyle;
          } else {
            _this7.formStyle = _this7.desktopFormStyle;
          }
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authenticationServices.switchToAdminConsole(this.connected);
        }
      }, {
        key: "handleLoginErrors",
        value: function handleLoginErrors() {
          if (this.loginControl.hasError('required')) {
            return 'Identifiant obligatoire';
          }

          return '';
        }
      }, {
        key: "handlePasswordErrors",
        value: function handlePasswordErrors() {
          if (this.passwordControl.hasError('required')) {
            return 'Mot de passe est obligatoire';
          }

          if (this.passwordControl.hasError('minlength')) {
            return 'Mot de passe très court';
          }

          return '';
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this8 = this;

          var login = this.loginControl.value;
          var password = this.passwordControl.value;

          if (!this.loginControl.invalid && !this.passwordControl.invalid) {
            this.authenticationServices.login(login, password).subscribe(function (response) {
              if (response.status === 'OK') {
                _this8.connected = true;
                _this8.connectionResponse = response.message;

                _this8.authenticationServices.setLoggedIn(_this8.connected);

                _this8.authenticationServices.setAdmin(response.data);

                _this8.router.navigate(['/admin', 'articles', 'add']).then(function (ok) {
                  console.log('Open console ?', ok);

                  if (ok) {
                    _this8.appServices.enableAdminConsole(ok);

                    console.log('Opening admin console');
                  } else {
                    console.log('Unable to open the admin console');
                  }
                })["catch"](function (err) {
                  console.log('Something went wrong: ' + err);
                });
              } else {
                _this8.connected = false;
                _this8.connectionResponse = response.message;
              }
            });
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServices"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_AppServices__WEBPACK_IMPORTED_MODULE_6__["AppServices"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/admin/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/pages/content/admin/login/login.component.css"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../../app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pages/content/article-details/article-details.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/content/article-details/article-details.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContentArticleDetailsArticleDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ul.breadcrumb {\n  padding: 10px 16px;\n  list-style: none;\n  background-color: white;\n}\nul.breadcrumb li {\n  display: inline;\n  font-size: 15px;\n}\nul.breadcrumb li+li:before {\n  content: \"/\\00a0\";\n}\nul.breadcrumb li a {\n  color: #0275d8;\n  text-decoration: none;\n}\nul.breadcrumb li a:hover {\n  color: #01447e;\n  text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC9hcnRpY2xlLWRldGFpbHMvYXJ0aWNsZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvYXJ0aWNsZS1kZXRhaWxzL2FydGljbGUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwuYnJlYWRjcnVtYiB7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG51bC5icmVhZGNydW1iIGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmb250LXNpemU6IDE1cHg7XG59XG51bC5icmVhZGNydW1iIGxpK2xpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiL1xcMDBhMFwiO1xufVxudWwuYnJlYWRjcnVtYiBsaSBhIHtcbiAgY29sb3I6ICMwMjc1ZDg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbnVsLmJyZWFkY3J1bWIgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDE0NDdlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/content/article-details/article-details.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/content/article-details/article-details.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ArticleDetailsComponent */

  /***/
  function srcAppPagesContentArticleDetailsArticleDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleDetailsComponent", function () {
      return ArticleDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_ArticlesServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/ArticlesServices */
    "./src/app/services/ArticlesServices.ts");

    var ArticleDetailsComponent = /*#__PURE__*/function () {
      function ArticleDetailsComponent(activatedRoute, articlesServices) {
        _classCallCheck(this, ArticleDetailsComponent);

        this.activatedRoute = activatedRoute;
        this.articlesServices = articlesServices;
      }

      _createClass(ArticleDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.activatedRoute.params.subscribe(function (params) {
            _this9.articleDetails = _this9.articlesServices.findArticleById(+params.id);
          });
        }
      }]);

      return ArticleDetailsComponent;
    }();

    ArticleDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_ArticlesServices__WEBPACK_IMPORTED_MODULE_3__["ArticlesServices"]
      }];
    };

    ArticleDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-article-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./article-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/article-details/article-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./article-details.component.css */
      "./src/app/pages/content/article-details/article-details.component.css"))["default"]]
    })], ArticleDetailsComponent);
    /***/
  },

  /***/
  "./src/app/pages/content/articles/articles.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/pages/content/articles/articles.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContentArticlesArticlesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".avatar-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC9hcnRpY2xlcy9hcnRpY2xlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUZBQW1GO0VBQ25GLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvYXJ0aWNsZXMvYXJ0aWNsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/content/articles/articles.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/content/articles/articles.component.ts ***!
    \**************************************************************/

  /*! exports provided: ArticlesComponent */

  /***/
  function srcAppPagesContentArticlesArticlesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function () {
      return ArticlesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_ArticlesServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/ArticlesServices */
    "./src/app/services/ArticlesServices.ts");
    /* harmony import */


    var _services_AppServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/AppServices */
    "./src/app/services/AppServices.ts");

    var ArticlesComponent = /*#__PURE__*/function () {
      function ArticlesComponent(router, activatedRoute, articlesServices, appServices) {
        var _this10 = this;

        _classCallCheck(this, ArticlesComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.articlesServices = articlesServices;
        this.appServices = appServices;
        appServices.observeWebLandscape().subscribe(function (res) {
          if (res.matches) {
            _this10.cols = 3;
            _this10.rowHeight = '1:1';
          }
        });
        appServices.observeTablet().subscribe(function (res) {
          if (res.matches) {
            _this10.cols = 2;
            _this10.rowHeight = '9:10';
          }
        });
        appServices.observePhone().subscribe(function (res) {
          if (res.matches) {
            _this10.cols = 1;
            _this10.rowHeight = '9:10';
          }
        });
      }

      _createClass(ArticlesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.articles = this.articlesServices.findAll();
          this.articles = this.articlesServices.sortArticlesByDateDescending(this.articles);
        }
      }]);

      return ArticlesComponent;
    }();

    ArticlesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _services_ArticlesServices__WEBPACK_IMPORTED_MODULE_3__["ArticlesServices"]
      }, {
        type: _services_AppServices__WEBPACK_IMPORTED_MODULE_4__["AppServices"]
      }];
    };

    ArticlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-articles',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./articles.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/articles/articles.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./articles.component.css */
      "./src/app/pages/content/articles/articles.component.css"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../main-content/main-content.component.css */
      "./src/app/pages/content/main-content/main-content.component.css"))["default"]]
    })], ArticlesComponent);
    /***/
  },

  /***/
  "./src/app/pages/content/contact/contact.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/pages/content/contact/contact.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContentContactContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/content/contact/contact.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/content/contact/contact.component.ts ***!
    \************************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppPagesContentContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_AppServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/AppServices */
    "./src/app/services/AppServices.ts");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(fb, appServices) {
        var _this11 = this;

        _classCallCheck(this, ContactComponent);

        this.fb = fb;
        this.appServices = appServices;
        this.emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.messageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]);
        this.hide = true;
        this.hideRequiredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        this.floatLabelControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('auto');
        this.mobileFormStyle = {
          width: '100%',
          'margin-top': '3%'
        };
        this.desktopFormStyle = {
          width: '100%',
          'margin-top': '3%'
        };
        this.formOptions = fb.group({
          hideRequired: this.hideRequiredControl,
          floatLabel: this.floatLabelControl
        });
        appServices.observeMobileDevices().subscribe(function (results) {
          _this11.formStyle = results.matches ? _this11.mobileFormStyle : _this11.desktopFormStyle;
        });
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.emailControl.value);
        }
      }, {
        key: "handleEmailError",
        value: function handleEmailError() {
          if (this.emailControl.hasError('required')) {
            return 'Email obligatoire';
          }

          if (this.emailControl.hasError('email')) {
            return 'Format email non valide';
          }

          return '';
        }
      }, {
        key: "handleMessageError",
        value: function handleMessageError() {
          if (this.messageControl.hasError('required')) {
            return 'Le message est obligatoire';
          }

          if (this.messageControl.hasError('minLength')) {
            return 'Votre message est trop court. Dites-nous en un peu plus!';
          }

          return '';
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_AppServices__WEBPACK_IMPORTED_MODULE_3__["AppServices"]
      }];
    };

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.css */
      "./src/app/pages/content/contact/contact.component.css"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/pages/content/main-content/main-content.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/content/main-content/main-content.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContentMainContentMainContentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".blog-main-container {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n\n.blog-left-section {\n  width: 15%;\n  height: 100%;\n  color: whitesmoke;\n  background-color: #003748;\n}\n\n.blog-right-section {\n  background-color: whitesmoke;\n}\n\n.mat-drawer-content {\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.ad-page-content {\n  padding: 25px 5%;\n}\n\n.ad-card-title {\n  text-align: center;\n  margin-bottom: 25px;\n}\n\n.ad-card-article {\n  text-align: left;\n  margin-bottom: 25px;\n}\n\n.ad-article-avatar {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n\n#main {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  background-color: whitesmoke;\n  overflow: hidden;;\n}\n\n#main div {\n  flex: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0I7QUFDeEI7O0FBR0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGVudC9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1tYWluLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJsb2ctbGVmdC1zZWN0aW9uIHtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzc0ODtcbn1cblxuLmJsb2ctcmlnaHQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmFkLXBhZ2UtY29udGVudCB7XG4gIHBhZGRpbmc6IDI1cHggNSU7XG59XG5cbi5hZC1jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uYWQtY2FyZC1hcnRpY2xlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmFkLWFydGljbGUtYXZhdGFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cblxuI21haW4ge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIG92ZXJmbG93OiBoaWRkZW47O1xufVxuXG4jbWFpbiBkaXYge1xuICBmbGV4OiBhdXRvO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/content/main-content/main-content.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/content/main-content/main-content.component.ts ***!
    \**********************************************************************/

  /*! exports provided: MainContentComponent */

  /***/
  function srcAppPagesContentMainContentMainContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainContentComponent", function () {
      return MainContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");

    var MainContentComponent = /*#__PURE__*/function () {
      function MainContentComponent(mobileDeviceObserver) {
        _classCallCheck(this, MainContentComponent);

        this.mobileDeviceObserver = mobileDeviceObserver;
        this.smallScreen = false;
      }

      _createClass(MainContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.mobileDeviceObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].WebPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].TabletPortrait]).subscribe(function (res) {
            _this12.smallScreen = res.matches;
          });
        }
      }]);

      return MainContentComponent;
    }();

    MainContentComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MainContentComponent.prototype, "menuOpened", void 0);
    MainContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-content',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content/main-content/main-content.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-content.component.css */
      "./src/app/pages/content/main-content/main-content.component.css"))["default"]]
    })], MainContentComponent);
    /***/
  },

  /***/
  "./src/app/pages/header/header.component.css":
  /*!***************************************************!*\
    !*** ./src/app/pages/header/header.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-styles {\n  overflow-scrolling: unset;\n  color: white;\n  background-color: #0050a5; /* another color: #003748 */\n}\n\n.header-content-alignment {\n  width: 100vw;\n  display: flex;\n}\n\n.header-content-alignment div {\n  flex: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix5QkFBeUIsRUFBRSwyQkFBMkI7QUFDeEQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1zdHlsZXMge1xuICBvdmVyZmxvdy1zY3JvbGxpbmc6IHVuc2V0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUwYTU7IC8qIGFub3RoZXIgY29sb3I6ICMwMDM3NDggKi9cbn1cblxuLmhlYWRlci1jb250ZW50LWFsaWdubWVudCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYWRlci1jb250ZW50LWFsaWdubWVudCBkaXYge1xuICBmbGV4OiBhdXRvO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/header/header.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/header/header.component.ts ***!
    \**************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppPagesHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_AppServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/AppServices */
    "./src/app/services/AppServices.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(router, appServices) {
        var _this13 = this;

        _classCallCheck(this, HeaderComponent);

        this.router = router;
        this.appServices = appServices;
        this.toolbarMenuOpened = undefined;
        this.smallScreen = false;
        this.mobileDeviceMenuOpened = false;
        appServices.observeMobileDevices().subscribe(function (res) {
          return _this13.smallScreen = res.matches;
        });
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.router.events.subscribe(function (value) {
            if (value instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
              _this14.toolbarMenuOpened = false;
            }
          });
        }
      }, {
        key: "onMenuToggle",
        value: function onMenuToggle() {
          this.mobileDeviceMenuOpened = !this.mobileDeviceMenuOpened;
          this.appServices.openMenuForMobileDevices(this.mobileDeviceMenuOpened);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_AppServices__WEBPACK_IMPORTED_MODULE_3__["AppServices"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HeaderComponent.prototype, "mobileDeviceMenuOpened", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/pages/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/pages/menu/menu.component.css":
  /*!***********************************************!*\
    !*** ./src/app/pages/menu/menu.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMenuMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".link-active {\n  background-color: #002935;\n}\n\n.mat-list-item:hover {\n  background-color: #002935;\n}\n\n.blog-left-menu-content .mat-list-item, .blog-left-menu-subheader {\n  color: whitesmoke;\n}\n\n.admin-page-user-infos {\n  list-style-type: none;\n  position: fixed;\n  bottom: 25px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmstYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjkzNTtcbn1cblxuLm1hdC1saXN0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyOTM1O1xufVxuXG4uYmxvZy1sZWZ0LW1lbnUtY29udGVudCAubWF0LWxpc3QtaXRlbSwgLmJsb2ctbGVmdC1tZW51LXN1YmhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uYWRtaW4tcGFnZS11c2VyLWluZm9zIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjVweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/menu/menu.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/menu/menu.component.ts ***!
    \**********************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppPagesMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/AuthenticationServices */
    "./src/app/services/AuthenticationServices.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(authenticationServices, router) {
        _classCallCheck(this, MenuComponent);

        this.authenticationServices = authenticationServices;
        this.router = router;
        this.switchToAdminDashboard = false;
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.authenticationServices.getAuthServiceMessage().subscribe(function (canSwitch) {
            _this15.switchToAdminDashboard = canSwitch;
            _this15.user = _this15.authenticationServices.getAdmin();
          });
        }
      }, {
        key: "onDisconnect",
        value: function onDisconnect() {
          this.authenticationServices.logout(); // this.router.navigate(['/admin']).then(r => console.log(r));
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ctorParameters = function () {
      return [{
        type: _services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServices"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.css */
      "./src/app/pages/menu/menu.component.css"))["default"]]
    })], MenuComponent);
    /***/
  },

  /***/
  "./src/app/services/AppServices.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/AppServices.ts ***!
    \*****************************************/

  /*! exports provided: AppServices */

  /***/
  function srcAppServicesAppServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppServices", function () {
      return AppServices;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");

    var AppServices = /*#__PURE__*/function () {
      function AppServices(mobileDeviceObserver, phoneObserver, tabletObserver, webLandscapeObserver) {
        _classCallCheck(this, AppServices);

        this.mobileDeviceObserver = mobileDeviceObserver;
        this.phoneObserver = phoneObserver;
        this.tabletObserver = tabletObserver;
        this.webLandscapeObserver = webLandscapeObserver;
        this.openAdminConsoleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.mobileDevicesMenuSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(AppServices, [{
        key: "getOpenAdminConsoleSubjectObserver",
        value: function getOpenAdminConsoleSubjectObserver() {
          return this.openAdminConsoleSubject.asObservable();
        }
      }, {
        key: "enableAdminConsole",
        value: function enableAdminConsole(enable) {
          this.openAdminConsoleSubject.next(enable);
        }
      }, {
        key: "getMobileDevicesMenuObserver",
        value: function getMobileDevicesMenuObserver() {
          return this.mobileDevicesMenuSubject.asObservable();
        }
      }, {
        key: "openMenuForMobileDevices",
        value: function openMenuForMobileDevices(opened) {
          this.mobileDevicesMenuSubject.next(opened);
        }
      }, {
        key: "observeMobileDevices",
        value: function observeMobileDevices() {
          return this.mobileDeviceObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Tablet, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].WebPortrait]);
        }
      }, {
        key: "observePhone",
        value: function observePhone() {
          return this.phoneObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset]);
        }
      }, {
        key: "observeTablet",
        value: function observeTablet() {
          return this.tabletObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Tablet, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].WebPortrait]);
        }
      }, {
        key: "observeWebLandscape",
        value: function observeWebLandscape() {
          return this.webLandscapeObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].WebLandscape]);
        }
      }]);

      return AppServices;
    }();

    AppServices.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]
      }];
    };

    AppServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppServices);
    /***/
  },

  /***/
  "./src/app/services/ArticlesServices.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/ArticlesServices.ts ***!
    \**********************************************/

  /*! exports provided: ArticlesServices */

  /***/
  function srcAppServicesArticlesServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticlesServices", function () {
      return ArticlesServices;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _articles_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./articles.json */
    "./src/app/services/articles.json");

    var _articles_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ./articles.json */
    "./src/app/services/articles.json", 1);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ArticlesServices = /*#__PURE__*/function () {
      function ArticlesServices(http) {
        _classCallCheck(this, ArticlesServices);

        this.http = http;
        this.API_ARTICLE_URL = 'http://localhost:8080/api/v1/articles';
      }

      _createClass(ArticlesServices, [{
        key: "findAll",
        value: function findAll() {
          if (this.articles !== null && this.articles !== undefined && this.articles.length > 0) {
            return this.articles;
          }

          this.articles = _articles_json__WEBPACK_IMPORTED_MODULE_2___namespace[Object.keys(_articles_json__WEBPACK_IMPORTED_MODULE_2___namespace).shift()];
          /*this.http
              .get(this.API_ARTICLE_URL)
              .subscribe( response => {
                console.log('ok');
              }); */

          return this.articles;
        }
      }, {
        key: "sortArticlesByDateAscending",
        value: function sortArticlesByDateAscending(articles) {
          articles = articles.sort(function (a, b) {
            var da = Date.parse(a.releaseDate);
            var db = Date.parse(b.releaseDate);
            return da - db;
          });
          return articles;
        }
      }, {
        key: "sortArticlesByDateDescending",
        value: function sortArticlesByDateDescending(articles) {
          articles = articles.sort(function (a, b) {
            var da = Date.parse(a.releaseDate);
            var db = Date.parse(b.releaseDate);
            return db - da;
          });
          return articles;
        }
      }, {
        key: "findArticleById",
        value: function findArticleById(id) {
          return this.findAll().find(function (article) {
            return article.id === id;
          });
        }
      }]);

      return ArticlesServices;
    }();

    ArticlesServices.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ArticlesServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ArticlesServices);
    /***/
  },

  /***/
  "./src/app/services/AuthenticationServices.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/AuthenticationServices.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticationServices */

  /***/
  function srcAppServicesAuthenticationServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationServices", function () {
      return AuthenticationServices;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AuthenticationServices = /*#__PURE__*/function () {
      function AuthenticationServices(http) {
        _classCallCheck(this, AuthenticationServices);

        this.http = http;
        this.authServiceMessage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loggedIn = false;
        this.BASE_URL = 'http://localhost:8080/api/v1/authors/';
      }

      _createClass(AuthenticationServices, [{
        key: "login",
        value: function login(_login, password) {
          return this.http.get(this.BASE_URL + _login + '/' + password);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.loggedIn = false;
          this.admin = null;
        }
      }, {
        key: "getAdmin",
        value: function getAdmin() {
          return this.admin;
        }
      }, {
        key: "setAdmin",
        value: function setAdmin(newAdmin) {
          this.admin = newAdmin;
        }
      }, {
        key: "switchToAdminConsole",
        value: function switchToAdminConsole(canSwitch) {
          this.authServiceMessage.next(canSwitch);
        }
      }, {
        key: "getAuthServiceMessage",
        value: function getAuthServiceMessage() {
          return this.authServiceMessage.asObservable();
        }
      }, {
        key: "connected",
        value: function connected() {
          return this.loggedIn;
        }
      }, {
        key: "setLoggedIn",
        value: function setLoggedIn(logged) {
          this.loggedIn = logged;
        }
      }]);

      return AuthenticationServices;
    }();

    AuthenticationServices.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AuthenticationServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationServices);
    /***/
  },

  /***/
  "./src/app/services/CanActivateAdmin.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/CanActivateAdmin.ts ***!
    \**********************************************/

  /*! exports provided: CanActivateAdmin */

  /***/
  function srcAppServicesCanActivateAdminTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanActivateAdmin", function () {
      return CanActivateAdmin;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _AuthenticationServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./AuthenticationServices */
    "./src/app/services/AuthenticationServices.ts");

    var CanActivateAdmin = /*#__PURE__*/function () {
      function CanActivateAdmin(authenticationServices) {
        _classCallCheck(this, CanActivateAdmin);

        this.authenticationServices = authenticationServices;
      }

      _createClass(CanActivateAdmin, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          console.log(this.authenticationServices.connected());
          return this.authenticationServices.connected();
        }
      }]);

      return CanActivateAdmin;
    }();

    CanActivateAdmin.ctorParameters = function () {
      return [{
        type: _AuthenticationServices__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServices"]
      }];
    };

    CanActivateAdmin = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CanActivateAdmin);
    /***/
  },

  /***/
  "./src/app/services/articles.json":
  /*!****************************************!*\
    !*** ./src/app/services/articles.json ***!
    \****************************************/

  /*! exports provided: 0, 1, 2, 3, 4, default */

  /***/
  function srcAppServicesArticlesJson(module) {
    module.exports = JSON.parse("[{\"id\":7326452,\"title\":\"Les enjeux de l'entrepreneuriat en Afrique\",\"releaseDate\":\"2020/05/20\",\"author\":\"Mohamed Toure\",\"topics\":[{\"label\":\"Education\",\"value\":\"education\"}],\"content\":\" Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n      la quam velit, vulputate eu pharetra nec, mattis ac neque.\\n      Duis vulputate commodo lectus, ac blandit elit tincidunt id.\\n      Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.\\n      Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam.\\n      Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit.\\n      Vivamus varius pretium ligula, a aliquam odio euismod sit amet.\\n      Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra.\\n      Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.\"},{\"id\":7566452,\"title\":\"Les enjeux de l'entrepreneuriat Dans le monde\",\"releaseDate\":\"2020/05/21\",\"author\":\"Mohamed Toure\",\"topics\":[{\"label\":\"Education\",\"value\":\"education\"}],\"content\":\" Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n      la quam velit, vulputate eu pharetra nec, mattis ac neque.\\n      Duis vulputate commodo lectus, ac blandit elit tincidunt id.\\n      Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.\\n      Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam.\\n      Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit.\\n      Vivamus varius pretium ligula, a aliquam odio euismod sit amet.\\n      Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra.\\n      Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.\"},{\"id\":73632452,\"title\":\"Les enjeux de l'entrepreneuriat en Afrique\",\"releaseDate\":\"2020/05/22\",\"author\":\"Mohamed Toure\",\"topics\":[{\"label\":\"Education\",\"value\":\"education\"}],\"content\":\" Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n      la quam velit, vulputate eu pharetra nec, mattis ac neque.\\n      Duis vulputate commodo lectus, ac blandit elit tincidunt id.\\n      Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.\\n      Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam.\\n      Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit.\\n      Vivamus varius pretium ligula, a aliquam odio euismod sit amet.\\n      Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra.\\n      Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.\"},{\"id\":73632459,\"title\":\"L'entrepreneuriat dans la santé\",\"releaseDate\":\"2020/05/23\",\"author\":\"Mohamed Toure\",\"topics\":[{\"label\":\"Santé\",\"value\":\"healthcare\"}],\"content\":\" Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n      la quam velit, vulputate eu pharetra nec, mattis ac neque.\\n      Duis vulputate commodo lectus, ac blandit elit tincidunt id.\\n      Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.\\n      Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam.\\n      Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit.\\n      Vivamus varius pretium ligula, a aliquam odio euismod sit amet.\\n      Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra.\\n      Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.\"},{\"id\":73632449,\"title\":\"Les enjeux de l'entrepreneuriat en Afrique\",\"releaseDate\":\"2020/05/24\",\"author\":\"Mohamed Toure\",\"topics\":[{\"label\":\"Fin Tech\",\"value\":\"fintech\"},{\"label\":\"Santé\",\"value\":\"healthcare\"}],\"content\":\" Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\n      la quam velit, vulputate eu pharetra nec, mattis ac neque.\\n      Duis vulputate commodo lectus, ac blandit elit tincidunt id.\\n      Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.\\n      Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam.\\n      Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit.\\n      Vivamus varius pretium ligula, a aliquam odio euismod sit amet.\\n      Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra.\\n      Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.\"}]");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/demahom/java/blog/src/main/ui/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map