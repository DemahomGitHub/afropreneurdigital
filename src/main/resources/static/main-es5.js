(function () {
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _pages_content_articles_articles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/content/articles/articles.component */
      "./src/app/pages/content/articles/articles.component.ts");
      /* harmony import */


      var _pages_content_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/content/about/about.component */
      "./src/app/pages/content/about/about.component.ts");
      /* harmony import */


      var _pages_content_admin_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/content/admin/login/login.component */
      "./src/app/pages/content/admin/login/login.component.ts");
      /* harmony import */


      var _pages_content_admin_article_creation_article_creation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/content/admin/article-creation/article-creation.component */
      "./src/app/pages/content/admin/article-creation/article-creation.component.ts");
      /* harmony import */


      var _pages_content_admin_article_update_deletion_article_update_deletion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/content/admin/article-update-deletion/article-update-deletion.component */
      "./src/app/pages/content/admin/article-update-deletion/article-update-deletion.component.ts");
      /* harmony import */


      var _services_CanActivateAdmin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/CanActivateAdmin */
      "./src/app/services/CanActivateAdmin.ts");
      /* harmony import */


      var _pages_content_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/content/article-details/article-details.component */
      "./src/app/pages/content/article-details/article-details.component.ts");
      /* harmony import */


      var _pages_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/content/contact/contact.component */
      "./src/app/pages/content/contact/contact.component.ts");
      /* harmony import */


      var _pages_content_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/content/page-not-found/page-not-found.component */
      "./src/app/pages/content/page-not-found/page-not-found.component.ts");

      var routes = [{
        path: '',
        redirectTo: 'articles',
        pathMatch: 'full'
      }, {
        path: 'articles',
        component: _pages_content_articles_articles_component__WEBPACK_IMPORTED_MODULE_2__["ArticlesComponent"]
      }, {
        path: 'articles/:id',
        component: _pages_content_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_8__["ArticleDetailsComponent"]
      }, {
        path: 'infos',
        component: _pages_content_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
      }, {
        path: 'contact',
        component: _pages_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]
      }, {
        path: 'admin/login',
        component: _pages_content_admin_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }, {
        path: 'admin/articles/add',
        component: _pages_content_admin_article_creation_article_creation_component__WEBPACK_IMPORTED_MODULE_5__["ArticleCreationComponent"],
        canActivate: [_services_CanActivateAdmin__WEBPACK_IMPORTED_MODULE_7__["CanActivateAdmin"]]
      }, {
        path: 'admin/articles/all',
        component: _pages_content_admin_article_update_deletion_article_update_deletion_component__WEBPACK_IMPORTED_MODULE_6__["ArticleUpdateDeletionComponent"],
        canActivate: [_services_CanActivateAdmin__WEBPACK_IMPORTED_MODULE_7__["CanActivateAdmin"]]
      }, {
        path: 'not-found',
        component: _pages_content_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"]
      }, {
        path: '**',
        redirectTo: 'not-found',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_AppServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/AppServices */
      "./src/app/services/AppServices.ts");
      /* harmony import */


      var _services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/AuthenticationServices */
      "./src/app/services/AuthenticationServices.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/sidenav.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/list.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");
      /* harmony import */


      var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/header/header.component */
      "./src/app/pages/header/header.component.ts");
      /* harmony import */


      var _pages_content_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pages/content/main-content/main-content.component */
      "./src/app/pages/content/main-content/main-content.component.ts");

      var _c0 = function _c0() {
        return {
          exact: true
        };
      };

      function AppComponent_mat_drawer_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_mat_drawer_container_1_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onMenuClosed();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_mat_drawer_container_1_Template_mat_list_item_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onMenuClosed();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Articles ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_mat_drawer_container_1_Template_mat_list_item_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onMenuClosed();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " A propos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-list-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_mat_drawer_container_1_Template_mat_list_item_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.onMenuClosed();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Contact ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-drawer-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-header", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-main-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx_r0.leftMenuOpened);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mobileDeviceMenuOpened", ctx_r0.leftMenuOpened);
        }
      }

      function AppComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-drawer", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Console d'administration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list-item", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "article");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Nouvel article ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-list-item", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Modifier article ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_2_Template_a_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.onDisconnect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "D\xE9connexion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-drawer-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mobileDeviceMenuOpened", ctx_r1.leftMenuOpened);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.admin.fullName);
        }
      }

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

            if (this.authenticationServices.connected()) {
              this.authenticationServices.logout();
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

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_AppServices__WEBPACK_IMPORTED_MODULE_1__["AppServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 2,
        consts: [["id", "myApp"], [4, "ngIf"], ["mode", "over", 1, "mobile-devices-left-menu", 3, "opened"], ["mat-subheader", "", 2, "width", "100%", "color", "white"], [2, "width", "50%", "text-align", "left"], [2, "width", "50%", "text-align", "right"], ["mat-button", "", 3, "click"], ["routerLink", "/articles", "routerLinkActive", "menu-link-active", 1, "mat-list-web-item", 3, "routerLinkActiveOptions", "click"], ["mat-list-icon", ""], ["mat-line", ""], ["routerLink", "/infos", "routerLinkActive", "menu-link-active", 1, "mat-list-web-item", 3, "click"], ["routerLink", "/contact", "routerLinkActive", "menu-link-active", 1, "mat-list-web-item", 3, "click"], [3, "mobileDeviceMenuOpened"], [2, "height", "100vh"], ["mode", "side", 1, "desktop-devices-left-menu", 3, "opened"], ["mat-subheader", "", 2, "width", "100%", "color", "black"], ["routerLink", "/admin/articles/add", "routerLinkActive", "link-active", 1, "mat-list-admin-item", 3, "routerLinkActiveOptions"], ["routerLink", "/admin/articles/all", "routerLinkActive", "link-active", 1, "mat-list-admin-item", 3, "routerLinkActiveOptions"], [1, "admin-page-user-infos"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_mat_drawer_container_1_Template, 28, 4, "mat-drawer-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 25, 7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAdminConsole);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdminConsole);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawer"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListSubheaderCssMatStyler"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatLine"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatDrawerContent"], _pages_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _pages_content_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_11__["MainContentComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: [".logo[_ngcontent-%COMP%] {\n  text-align: left;\n}\n#myApp[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.mobile-devices-left-menu[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background-color: #0050a5;\n}\n.desktop-devices-left-menu[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 100vh;\n  background-color: #ffffff;\n}\n.menu-link-active[_ngcontent-%COMP%] {\n  background-color: #014794;\n}\n.mat-list-web-item[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-list-admin-item[_ngcontent-%COMP%] {\n  color: black;\n}\n.link-active[_ngcontent-%COMP%] {\n  background-color: #dddddd;\n}\n.mat-list-item[_ngcontent-%COMP%]:hover {\n  background-color: #dddddd;\n}\n.blog-left-menu-content[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%], .blog-left-menu-subheader[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n.admin-page-user-infos[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: fixed;\n  bottom: 25px;\n}\n.button-primary-color[_ngcontent-%COMP%] {\n  width: 98%;\n  margin: 1%;\n  background-color: #0050a5;\n  color: white;\n}\n.button-primary-color[_ngcontent-%COMP%]:hover {\n  background-color: #00438f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiNteUFwcCB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5tb2JpbGUtZGV2aWNlcy1sZWZ0LW1lbnUge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUwYTU7XG59XG5cbi5kZXNrdG9wLWRldmljZXMtbGVmdC1tZW51IHtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLm1lbnUtbGluay1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE0Nzk0O1xufVxuXG4ubWF0LWxpc3Qtd2ViLWl0ZW0ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtbGlzdC1hZG1pbi1pdGVtIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubGluay1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufVxuXG4ubWF0LWxpc3QtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59XG5cbi5ibG9nLWxlZnQtbWVudS1jb250ZW50IC5tYXQtbGlzdC1pdGVtLCAuYmxvZy1sZWZ0LW1lbnUtc3ViaGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5hZG1pbi1wYWdlLXVzZXItaW5mb3Mge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyNXB4O1xufVxuXG4uYnV0dG9uLXByaW1hcnktY29sb3Ige1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IDElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MGE1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24tcHJpbWFyeS1jb2xvcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQzOGY7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: _services_AppServices__WEBPACK_IMPORTED_MODULE_1__["AppServices"]
          }, {
            type: _services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServices"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/toolbar.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/sidenav.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/list.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/divider.js");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/grid-list.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tabs.js");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/expansion */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/expansion.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./pages/header/header.component */
      "./src/app/pages/header/header.component.ts");
      /* harmony import */


      var _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./pages/menu/menu.component */
      "./src/app/pages/menu/menu.component.ts");
      /* harmony import */


      var _pages_content_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./pages/content/main-content/main-content.component */
      "./src/app/pages/content/main-content/main-content.component.ts");
      /* harmony import */


      var _pages_content_about_about_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./pages/content/about/about.component */
      "./src/app/pages/content/about/about.component.ts");
      /* harmony import */


      var _pages_content_articles_articles_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./pages/content/articles/articles.component */
      "./src/app/pages/content/articles/articles.component.ts");
      /* harmony import */


      var _pages_content_admin_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./pages/content/admin/login/login.component */
      "./src/app/pages/content/admin/login/login.component.ts");
      /* harmony import */


      var _pages_content_admin_article_creation_article_creation_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./pages/content/admin/article-creation/article-creation.component */
      "./src/app/pages/content/admin/article-creation/article-creation.component.ts");
      /* harmony import */


      var _pages_content_admin_article_update_deletion_article_update_deletion_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./pages/content/admin/article-update-deletion/article-update-deletion.component */
      "./src/app/pages/content/admin/article-update-deletion/article-update-deletion.component.ts");
      /* harmony import */


      var _pages_content_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./pages/content/article-details/article-details.component */
      "./src/app/pages/content/article-details/article-details.component.ts");
      /* harmony import */


      var _pages_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./pages/content/contact/contact.component */
      "./src/app/pages/content/contact/contact.component.ts");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");
      /* harmony import */


      var _pages_content_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./pages/content/page-not-found/page-not-found.component */
      "./src/app/pages/content/page-not-found/page-not-found.component.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_31__["CookieService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"], _pages_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"], _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_21__["MenuComponent"], _pages_content_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_22__["MainContentComponent"], _pages_content_about_about_component__WEBPACK_IMPORTED_MODULE_23__["AboutComponent"], _pages_content_articles_articles_component__WEBPACK_IMPORTED_MODULE_24__["ArticlesComponent"], _pages_content_admin_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"], _pages_content_admin_article_creation_article_creation_component__WEBPACK_IMPORTED_MODULE_26__["ArticleCreationComponent"], _pages_content_admin_article_update_deletion_article_update_deletion_component__WEBPACK_IMPORTED_MODULE_27__["ArticleUpdateDeletionComponent"], _pages_content_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_28__["ArticleDetailsComponent"], _pages_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_29__["ContactComponent"], _pages_content_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_32__["PageNotFoundComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"], _pages_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"], _pages_menu_menu_component__WEBPACK_IMPORTED_MODULE_21__["MenuComponent"], _pages_content_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_22__["MainContentComponent"], _pages_content_about_about_component__WEBPACK_IMPORTED_MODULE_23__["AboutComponent"], _pages_content_articles_articles_component__WEBPACK_IMPORTED_MODULE_24__["ArticlesComponent"], _pages_content_admin_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"], _pages_content_admin_article_creation_article_creation_component__WEBPACK_IMPORTED_MODULE_26__["ArticleCreationComponent"], _pages_content_admin_article_update_deletion_article_update_deletion_component__WEBPACK_IMPORTED_MODULE_27__["ArticleUpdateDeletionComponent"], _pages_content_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_28__["ArticleDetailsComponent"], _pages_content_contact_contact_component__WEBPACK_IMPORTED_MODULE_29__["ContactComponent"], _pages_content_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_32__["PageNotFoundComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"]],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_31__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/model/CookieName.ts":
    /*!*************************************!*\
      !*** ./src/app/model/CookieName.ts ***!
      \*************************************/

    /*! exports provided: CookieName */

    /***/
    function srcAppModelCookieNameTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CookieName", function () {
        return CookieName;
      });

      var CookieName;

      (function (CookieName) {
        CookieName["ID"] = "AfropreneurDigitalUserID";
        CookieName["LOGIN"] = "AfropreneurDigitalLogin";
        CookieName["PASSWORD"] = "AfropreneurDigitalPassword";
        CookieName["FULL_NAME"] = "AfropreneurDigitalFullName";
        CookieName["DESCRIPTION"] = "AfropreneurDigitalDescription";
      })(CookieName || (CookieName = {}));
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/divider.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");

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

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 9,
        vars: 0,
        consts: [[2, "height", "100vh"], [2, "text-align", "center"], [2, "background-color", "white", "width", "100%", "margin-top", "3%"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " A propos de ce blog ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */", ".blog-main-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n\n.blog-left-section[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 100%;\n  color: whitesmoke;\n  background-color: #003748;\n}\n\n.blog-right-section[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n}\n\n.mat-drawer-content[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.ad-page-content[_ngcontent-%COMP%] {\n  padding: 25px 5%;\n}\n\n.ad-card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 25px;\n}\n\n.ad-card-article[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 25px;\n}\n\n.ad-article-avatar[_ngcontent-%COMP%] {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n\n#main[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  background-color: whitesmoke;\n  overflow: hidden;;\n}\n\n#main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0I7QUFDeEI7O0FBR0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGVudC9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1tYWluLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJsb2ctbGVmdC1zZWN0aW9uIHtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzc0ODtcbn1cblxuLmJsb2ctcmlnaHQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmFkLXBhZ2UtY29udGVudCB7XG4gIHBhZGRpbmc6IDI1cHggNSU7XG59XG5cbi5hZC1jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uYWQtY2FyZC1hcnRpY2xlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmFkLWFydGljbGUtYXZhdGFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cblxuI21haW4ge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIG92ZXJmbG93OiBoaWRkZW47O1xufVxuXG4jbWFpbiBkaXYge1xuICBmbGV4OiBhdXRvO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css', '../main-content/main-content.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_AppServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/AppServices */
      "./src/app/services/AppServices.ts");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tabs.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");

      function ArticleCreationComponent_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.handleLoginErrors());
        }
      }

      function ArticleCreationComponent_mat_error_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.handlePasswordErrors());
        }
      }

      function ArticleCreationComponent_mat_error_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.connectionResponse);
        }
      }

      function ArticleCreationComponent_mat_card_25_mat_card_title_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.titleControl.value, " ");
        }
      }

      function ArticleCreationComponent_mat_card_25_mat_card_content_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-card-content", 14);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.contentControl.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function ArticleCreationComponent_mat_card_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArticleCreationComponent_mat_card_25_mat_card_title_2_Template, 2, 1, "mat-card-title", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ArticleCreationComponent_mat_card_25_mat_card_content_3_Template, 1, 1, "mat-card-content", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.formStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.titleControl.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.contentControl.valid);
        }
      }

      var ArticleCreationComponent = /*#__PURE__*/function () {
        function ArticleCreationComponent(fb, appServices) {
          var _this3 = this;

          _classCallCheck(this, ArticleCreationComponent);

          this.fb = fb;
          this.appServices = appServices;
          this.titleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.contentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]);
          this.hideRequiredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
          this.floatLabelControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('auto');
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
          value: function ngOnInit() {
            this.appServices.enableAdminConsole(true);
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

      ArticleCreationComponent.ɵfac = function ArticleCreationComponent_Factory(t) {
        return new (t || ArticleCreationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_AppServices__WEBPACK_IMPORTED_MODULE_2__["AppServices"]));
      };

      ArticleCreationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ArticleCreationComponent,
        selectors: [["app-article-creation"]],
        decls: 26,
        vars: 8,
        consts: [["animationDuration", "0ms", 2, "height", "100vh"], ["label", "Creation"], [3, "formGroup", "ngStyle", "ngSubmit"], ["appearance", "outline", 1, "blog-admin-creation-form-field"], ["matInput", "", "placeholder", "Saisir le titre de l'article", "autocomplete", "title", "required", "", 3, "formControl"], [4, "ngIf"], ["matInput", "", "rows", "20", "placeholder", "Ecrire le contenu de l'article ici", "autocomplete", "content", "required", "", 3, "formControl"], ["type", "submit", "mat-raised-button", "", 1, "button-primary-color"], ["style", "text-align: center;", 4, "ngIf"], ["label", "Pr\xE9visualisation"], [3, "ngStyle", 4, "ngIf"], [2, "text-align", "center"], [3, "ngStyle"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"]],
        template: function ArticleCreationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ArticleCreationComponent_Template_form_ngSubmit_2_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ecrire un nouvel article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Intitul\xE9 de l'article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ArticleCreationComponent_mat_error_12_Template, 2, 1, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contenu de l'article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ArticleCreationComponent_mat_error_19_Template, 2, 1, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Soumettre ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ArticleCreationComponent_mat_error_23_Template, 2, 1, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-tab", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ArticleCreationComponent_mat_card_25_Template, 4, 3, "mat-card", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formOptions)("ngStyle", ctx.formStyle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.titleControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.titleControl.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.contentControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentControl.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.connected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.titleControl.valid || ctx.contentControl.valid);
          }
        },
        directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
        styles: [".blog-admin-creation-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC9hZG1pbi9hcnRpY2xlLWNyZWF0aW9uL2FydGljbGUtY3JlYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvYWRtaW4vYXJ0aWNsZS1jcmVhdGlvbi9hcnRpY2xlLWNyZWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1hZG1pbi1jcmVhdGlvbi1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */", ".blog-main-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n\n.blog-left-section[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 100%;\n  color: whitesmoke;\n  background-color: #003748;\n}\n\n.blog-right-section[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n}\n\n.mat-drawer-content[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.ad-page-content[_ngcontent-%COMP%] {\n  padding: 25px 5%;\n}\n\n.ad-card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 25px;\n}\n\n.ad-card-article[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 25px;\n}\n\n.ad-article-avatar[_ngcontent-%COMP%] {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n\n#main[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  background-color: whitesmoke;\n  overflow: hidden;;\n}\n\n#main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0I7QUFDeEI7O0FBR0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGVudC9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1tYWluLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJsb2ctbGVmdC1zZWN0aW9uIHtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzc0ODtcbn1cblxuLmJsb2ctcmlnaHQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmFkLXBhZ2UtY29udGVudCB7XG4gIHBhZGRpbmc6IDI1cHggNSU7XG59XG5cbi5hZC1jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uYWQtY2FyZC1hcnRpY2xlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmFkLWFydGljbGUtYXZhdGFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cblxuI21haW4ge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIG92ZXJmbG93OiBoaWRkZW47O1xufVxuXG4jbWFpbiBkaXYge1xuICBmbGV4OiBhdXRvO1xufVxuIl19 */", ".logo[_ngcontent-%COMP%] {\n  text-align: left;\n}\n#myApp[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.mobile-devices-left-menu[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background-color: #0050a5;\n}\n.desktop-devices-left-menu[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 100vh;\n  background-color: #ffffff;\n}\n.menu-link-active[_ngcontent-%COMP%] {\n  background-color: #014794;\n}\n.mat-list-web-item[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-list-admin-item[_ngcontent-%COMP%] {\n  color: black;\n}\n.link-active[_ngcontent-%COMP%] {\n  background-color: #dddddd;\n}\n.mat-list-item[_ngcontent-%COMP%]:hover {\n  background-color: #dddddd;\n}\n.blog-left-menu-content[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%], .blog-left-menu-subheader[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n.admin-page-user-infos[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: fixed;\n  bottom: 25px;\n}\n.button-primary-color[_ngcontent-%COMP%] {\n  width: 98%;\n  margin: 1%;\n  background-color: #0050a5;\n  color: white;\n}\n.button-primary-color[_ngcontent-%COMP%]:hover {\n  background-color: #00438f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiNteUFwcCB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5tb2JpbGUtZGV2aWNlcy1sZWZ0LW1lbnUge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUwYTU7XG59XG5cbi5kZXNrdG9wLWRldmljZXMtbGVmdC1tZW51IHtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLm1lbnUtbGluay1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE0Nzk0O1xufVxuXG4ubWF0LWxpc3Qtd2ViLWl0ZW0ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtbGlzdC1hZG1pbi1pdGVtIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubGluay1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufVxuXG4ubWF0LWxpc3QtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59XG5cbi5ibG9nLWxlZnQtbWVudS1jb250ZW50IC5tYXQtbGlzdC1pdGVtLCAuYmxvZy1sZWZ0LW1lbnUtc3ViaGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5hZG1pbi1wYWdlLXVzZXItaW5mb3Mge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyNXB4O1xufVxuXG4uYnV0dG9uLXByaW1hcnktY29sb3Ige1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IDElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MGE1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24tcHJpbWFyeS1jb2xvcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQzOGY7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleCreationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-article-creation',
            templateUrl: './article-creation.component.html',
            styleUrls: ['./article-creation.component.css', '../../main-content/main-content.component.css', '../../../../app.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_AppServices__WEBPACK_IMPORTED_MODULE_2__["AppServices"]
          }];
        }, null);
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/AuthenticationServices */
      "./src/app/services/AuthenticationServices.ts");
      /* harmony import */


      var _services_ArticlesServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/ArticlesServices */
      "./src/app/services/ArticlesServices.ts");
      /* harmony import */


      var _services_AppServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/AppServices */
      "./src/app/services/AppServices.ts");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/divider.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");

      function ArticleUpdateDeletionComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ArticleUpdateDeletionComponent_div_5_Template_form_ngSubmit_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onUpdate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Titre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Contenu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Mettre \xE0 jour ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.articleToUpdate.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.titleControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.articleToUpdate.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.contentControl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx_r0.titleChanged || ctx_r0.contentChange));
        }
      }

      function ArticleUpdateDeletionComponent_mat_card_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleUpdateDeletionComponent_mat_card_7_Template_mat_card_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var article_r4 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onSelect(article_r4.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var article_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 2, article_r4.content, 0, 80), " ... ");
        }
      }

      var ArticleUpdateDeletionComponent = /*#__PURE__*/function () {
        function ArticleUpdateDeletionComponent(authenticationServices, articlesServices, formBuilder, appServices) {
          _classCallCheck(this, ArticleUpdateDeletionComponent);

          this.authenticationServices = authenticationServices;
          this.articlesServices = articlesServices;
          this.formBuilder = formBuilder;
          this.appServices = appServices;
          this.titleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
          this.titleChanged = false;
          this.contentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
          this.contentChange = false;
          this.hideRequiredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
          this.floatLabelControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('auto');
        }

        _createClass(ArticleUpdateDeletionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.appServices.enableAdminConsole(true); // this.allArticles = this.articlesServices.findAll();

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

      ArticleUpdateDeletionComponent.ɵfac = function ArticleUpdateDeletionComponent_Factory(t) {
        return new (t || ArticleUpdateDeletionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ArticlesServices__WEBPACK_IMPORTED_MODULE_3__["ArticlesServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_AppServices__WEBPACK_IMPORTED_MODULE_4__["AppServices"]));
      };

      ArticleUpdateDeletionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ArticleUpdateDeletionComponent,
        selectors: [["app-article-update-deletion"]],
        decls: 8,
        vars: 2,
        consts: [[1, "ad-page-content"], [2, "text-align", "center"], ["style", "margin-top: 3%;", 4, "ngIf"], ["class", "content-articles-list", "tabindex", "0", "role", "region", 3, "click", 4, "ngFor", "ngForOf"], [2, "margin-top", "3%"], [1, "content-article-update-form"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", "autocomplete", "on", 3, "formControl", "value"], ["rows", "30", "matInput", "", "autocomplete", "on", 3, "formControl", "value"], ["type", "submit", "mat-raised-button", "", 1, "button-primary-color", 3, "disabled"], ["tabindex", "0", "role", "region", 1, "content-articles-list", 3, "click"]],
        template: function ArticleUpdateDeletionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Mettre \xE0 jour un articles ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ArticleUpdateDeletionComponent_div_5_Template, 14, 6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ArticleUpdateDeletionComponent_mat_card_7_Template, 6, 6, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allArticles.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allArticles);
          }
        },
        directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"]],
        styles: [".content-articles-list[_ngcontent-%COMP%] {\n  width: 35%;\n  margin-bottom: 10px;\n}\n\n.content-article-update-form[_ngcontent-%COMP%] {\n  width: 55%;\n  float: right;\n}\n\n.content-articles-list[_ngcontent-%COMP%]:hover {\n  background-color: antiquewhite;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC9hZG1pbi9hcnRpY2xlLXVwZGF0ZS1kZWxldGlvbi9hcnRpY2xlLXVwZGF0ZS1kZWxldGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvYWRtaW4vYXJ0aWNsZS11cGRhdGUtZGVsZXRpb24vYXJ0aWNsZS11cGRhdGUtZGVsZXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWFydGljbGVzLWxpc3Qge1xuICB3aWR0aDogMzUlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY29udGVudC1hcnRpY2xlLXVwZGF0ZS1mb3JtIHtcbiAgd2lkdGg6IDU1JTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY29udGVudC1hcnRpY2xlcy1saXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */", ".blog-main-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n\n.blog-left-section[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 100%;\n  color: whitesmoke;\n  background-color: #003748;\n}\n\n.blog-right-section[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n}\n\n.mat-drawer-content[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.ad-page-content[_ngcontent-%COMP%] {\n  padding: 25px 5%;\n}\n\n.ad-card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 25px;\n}\n\n.ad-card-article[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 25px;\n}\n\n.ad-article-avatar[_ngcontent-%COMP%] {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n\n#main[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  background-color: whitesmoke;\n  overflow: hidden;;\n}\n\n#main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0I7QUFDeEI7O0FBR0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGVudC9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1tYWluLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJsb2ctbGVmdC1zZWN0aW9uIHtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzc0ODtcbn1cblxuLmJsb2ctcmlnaHQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmFkLXBhZ2UtY29udGVudCB7XG4gIHBhZGRpbmc6IDI1cHggNSU7XG59XG5cbi5hZC1jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uYWQtY2FyZC1hcnRpY2xlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmFkLWFydGljbGUtYXZhdGFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cblxuI21haW4ge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIG92ZXJmbG93OiBoaWRkZW47O1xufVxuXG4jbWFpbiBkaXYge1xuICBmbGV4OiBhdXRvO1xufVxuIl19 */", ".logo[_ngcontent-%COMP%] {\n  text-align: left;\n}\n#myApp[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.mobile-devices-left-menu[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background-color: #0050a5;\n}\n.desktop-devices-left-menu[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 100vh;\n  background-color: #ffffff;\n}\n.menu-link-active[_ngcontent-%COMP%] {\n  background-color: #014794;\n}\n.mat-list-web-item[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-list-admin-item[_ngcontent-%COMP%] {\n  color: black;\n}\n.link-active[_ngcontent-%COMP%] {\n  background-color: #dddddd;\n}\n.mat-list-item[_ngcontent-%COMP%]:hover {\n  background-color: #dddddd;\n}\n.blog-left-menu-content[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%], .blog-left-menu-subheader[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n.admin-page-user-infos[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: fixed;\n  bottom: 25px;\n}\n.button-primary-color[_ngcontent-%COMP%] {\n  width: 98%;\n  margin: 1%;\n  background-color: #0050a5;\n  color: white;\n}\n.button-primary-color[_ngcontent-%COMP%]:hover {\n  background-color: #00438f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiNteUFwcCB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5tb2JpbGUtZGV2aWNlcy1sZWZ0LW1lbnUge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUwYTU7XG59XG5cbi5kZXNrdG9wLWRldmljZXMtbGVmdC1tZW51IHtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLm1lbnUtbGluay1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE0Nzk0O1xufVxuXG4ubWF0LWxpc3Qtd2ViLWl0ZW0ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtbGlzdC1hZG1pbi1pdGVtIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubGluay1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufVxuXG4ubWF0LWxpc3QtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59XG5cbi5ibG9nLWxlZnQtbWVudS1jb250ZW50IC5tYXQtbGlzdC1pdGVtLCAuYmxvZy1sZWZ0LW1lbnUtc3ViaGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5hZG1pbi1wYWdlLXVzZXItaW5mb3Mge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyNXB4O1xufVxuXG4uYnV0dG9uLXByaW1hcnktY29sb3Ige1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IDElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MGE1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24tcHJpbWFyeS1jb2xvcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQzOGY7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleUpdateDeletionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-article-update-deletion',
            templateUrl: './article-update-deletion.component.html',
            styleUrls: ['./article-update-deletion.component.css', '../../main-content/main-content.component.css', '../../../../app.component.css']
          }]
        }], function () {
          return [{
            type: _services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServices"]
          }, {
            type: _services_ArticlesServices__WEBPACK_IMPORTED_MODULE_3__["ArticlesServices"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_AppServices__WEBPACK_IMPORTED_MODULE_4__["AppServices"]
          }];
        }, null);
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/layout.js");
      /* harmony import */


      var _services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/AuthenticationServices */
      "./src/app/services/AuthenticationServices.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_AppServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../services/AppServices */
      "./src/app/services/AppServices.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");

      function LoginComponent_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.handleLoginErrors());
        }
      }

      function LoginComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.handlePasswordErrors());
        }
      }

      function LoginComponent_mat_error_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.connectionResponse);
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(fb, authenticationServices, mobileDeviceObserver, router, appServices) {
          var _this7 = this;

          _classCallCheck(this, LoginComponent);

          this.fb = fb;
          this.authenticationServices = authenticationServices;
          this.mobileDeviceObserver = mobileDeviceObserver;
          this.router = router;
          this.appServices = appServices;
          this.loginControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
          this.passwordControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)]);
          this.hide = true;
          this.hideRequiredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
          this.floatLabelControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('auto');
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
          mobileDeviceObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Tablet, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].WebPortrait]).subscribe(function (results) {
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
            // this.authenticationServices.switchToAdminConsole(this.authenticationServices.connected());
            if (this.authenticationServices.connected()) {
              this.appServices.enableAdminConsole(true);
              this.router.navigate(['/admin/articles/add']).then(function (ok) {
                if (ok) {
                  console.log('Redirecting to admin console');
                } else {
                  console.log('Redirecting to login page');
                }
              })["catch"](function (err) {
                console.log('Something went wrong.', err);
              });
            }
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
                  _this8.authenticationServices.saveUserSession(response.data);

                  _this8.router.navigate(['/admin/articles/add']).then(function (ok) {
                    console.log('Redirecting to admin console');

                    if (ok) {
                      _this8.appServices.enableAdminConsole(ok);
                    } else {
                      console.log('Unable to open the admin console');
                    }
                  })["catch"](function (err) {
                    console.log('Something went wrong: ' + err);
                  });
                }

                _this8.connected = _this8.authenticationServices.connected();
                _this8.connectionResponse = response.message;
              });
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_AppServices__WEBPACK_IMPORTED_MODULE_5__["AppServices"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 24,
        vars: 11,
        consts: [[3, "formGroup", "ngStyle", "ngSubmit"], ["appearance", "standard", 1, "blog-admin-login-form-field"], ["matInput", "", "placeholder", "Saisir l'identifiant", "autocomplete", "username", "required", "", 3, "formControl"], [4, "ngIf"], ["matInput", "", "placeholder", "Saisir le mot de passe", "autocomplete", "current-password", "required", "", 3, "type", "formControl"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["type", "submit", "mat-raised-button", "", 1, "button-primary-color"], ["style", "text-align: center;", 4, "ngIf"], [2, "text-align", "center"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Console d'administration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_mat_error_10_Template, 2, 1, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Mot de passe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_mat_error_16_Template, 2, 1, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Connexion ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LoginComponent_mat_error_23_Template, 2, 1, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formOptions)("ngStyle", ctx.formStyle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.loginControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginControl.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("formControl", ctx.passwordControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordControl.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Cachez le mot de pass")("aria-pressed", ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.connected);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
        styles: [".blog-admin-login-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC9hZG1pbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGVudC9hZG1pbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2ctYWRtaW4tbG9naW4tZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4iXX0= */", ".logo[_ngcontent-%COMP%] {\n  text-align: left;\n}\n#myApp[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.mobile-devices-left-menu[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background-color: #0050a5;\n}\n.desktop-devices-left-menu[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 100vh;\n  background-color: #ffffff;\n}\n.menu-link-active[_ngcontent-%COMP%] {\n  background-color: #014794;\n}\n.mat-list-web-item[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-list-admin-item[_ngcontent-%COMP%] {\n  color: black;\n}\n.link-active[_ngcontent-%COMP%] {\n  background-color: #dddddd;\n}\n.mat-list-item[_ngcontent-%COMP%]:hover {\n  background-color: #dddddd;\n}\n.blog-left-menu-content[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%], .blog-left-menu-subheader[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n.admin-page-user-infos[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: fixed;\n  bottom: 25px;\n}\n.button-primary-color[_ngcontent-%COMP%] {\n  width: 98%;\n  margin: 1%;\n  background-color: #0050a5;\n  color: white;\n}\n.button-primary-color[_ngcontent-%COMP%]:hover {\n  background-color: #00438f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiNteUFwcCB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5tb2JpbGUtZGV2aWNlcy1sZWZ0LW1lbnUge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUwYTU7XG59XG5cbi5kZXNrdG9wLWRldmljZXMtbGVmdC1tZW51IHtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLm1lbnUtbGluay1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE0Nzk0O1xufVxuXG4ubWF0LWxpc3Qtd2ViLWl0ZW0ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtbGlzdC1hZG1pbi1pdGVtIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubGluay1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufVxuXG4ubWF0LWxpc3QtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59XG5cbi5ibG9nLWxlZnQtbWVudS1jb250ZW50IC5tYXQtbGlzdC1pdGVtLCAuYmxvZy1sZWZ0LW1lbnUtc3ViaGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5hZG1pbi1wYWdlLXVzZXItaW5mb3Mge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyNXB4O1xufVxuXG4uYnV0dG9uLXByaW1hcnktY29sb3Ige1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IDElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MGE1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24tcHJpbWFyeS1jb2xvcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQzOGY7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css', '../../../../app.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServices"]
          }, {
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _services_AppServices__WEBPACK_IMPORTED_MODULE_5__["AppServices"]
          }];
        }, null);
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_ArticlesServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/ArticlesServices */
      "./src/app/services/ArticlesServices.ts");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/list.js");

      function ArticleDetailsComponent_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var topic_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", topic_r1.label, " ");
        }
      }

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

      ArticleDetailsComponent.ɵfac = function ArticleDetailsComponent_Factory(t) {
        return new (t || ArticleDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ArticlesServices__WEBPACK_IMPORTED_MODULE_2__["ArticlesServices"]));
      };

      ArticleDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ArticleDetailsComponent,
        selectors: [["app-article-details"]],
        decls: 23,
        vars: 6,
        consts: [[2, "height", "100vh"], [2, "margin", "25px 0"], [1, "breadcrumb"], ["routerLink", "/articles"], [1, "ad-card-article"], [4, "ngFor", "ngForOf"], ["mat-button", "", "routerLink", "/articles"], ["mat-list-icon", ""]],
        template: function ArticleDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Articles ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ArticleDetailsComponent_span_14_Template, 2, 1, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "arrow_back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Retour ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.articleDetails.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.articleDetails.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Publi\xE9 le ", ctx.articleDetails.releaseDate, " par ", ctx.articleDetails.author, " - Th\xE9matiques: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articleDetails.topics);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.articleDetails.content, " ");
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListIconCssMatStyler"]],
        styles: ["ul.breadcrumb[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  list-style: none;\n  background-color: white;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  font-size: 15px;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]:before {\n  content: \"/\\00a0\";\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0275d8;\n  text-decoration: none;\n}\nul.breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #01447e;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC9hcnRpY2xlLWRldGFpbHMvYXJ0aWNsZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvYXJ0aWNsZS1kZXRhaWxzL2FydGljbGUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwuYnJlYWRjcnVtYiB7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG51bC5icmVhZGNydW1iIGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmb250LXNpemU6IDE1cHg7XG59XG51bC5icmVhZGNydW1iIGxpK2xpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiL1xcMDBhMFwiO1xufVxudWwuYnJlYWRjcnVtYiBsaSBhIHtcbiAgY29sb3I6ICMwMjc1ZDg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbnVsLmJyZWFkY3J1bWIgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDE0NDdlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-article-details',
            templateUrl: './article-details.component.html',
            styleUrls: ['./article-details.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _services_ArticlesServices__WEBPACK_IMPORTED_MODULE_2__["ArticlesServices"]
          }];
        }, null);
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_ArticlesServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/ArticlesServices */
      "./src/app/services/ArticlesServices.ts");
      /* harmony import */


      var _services_AppServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/AppServices */
      "./src/app/services/AppServices.ts");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/divider.js");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/grid-list.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");

      function ArticlesComponent_mat_grid_tile_6_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var topic_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", topic_r3.label, " ");
        }
      }

      var _c0 = function _c0(a1) {
        return ["/articles", a1];
      };

      function ArticlesComponent_mat_grid_tile_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ArticlesComponent_mat_grid_tile_6_span_7_Template, 2, 1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Lire l'article ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var article_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", article_r1.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" par ", article_r1.author, " le ", article_r1.releaseDate, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", article_r1.topics);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](11, 6, article_r1.content, 0, 240), " ... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, article_r1.id));
        }
      }

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
            var _this11 = this;

            this.articlesServices.findAll().subscribe(function (resp) {
              console.log(resp);

              if (resp.status === 'OK') {
                console.log('OK');
                _this11.articles = resp.data;
              } else {
                console.log(resp.message);
              }
            });
            this.articles = this.articlesServices.sortArticlesByDateDescending(this.articles);
          }
        }]);

        return ArticlesComponent;
      }();

      ArticlesComponent.ɵfac = function ArticlesComponent_Factory(t) {
        return new (t || ArticlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ArticlesServices__WEBPACK_IMPORTED_MODULE_2__["ArticlesServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_AppServices__WEBPACK_IMPORTED_MODULE_3__["AppServices"]));
      };

      ArticlesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ArticlesComponent,
        selectors: [["app-articles"]],
        decls: 7,
        vars: 3,
        consts: [[2, "height", "100vh"], [2, "text-align", "center"], [2, "margin-top", "3%"], [3, "cols", "rowHeight"], [4, "ngFor", "ngForOf"], [2, "width", "90%", "height", "90%"], ["mat-button", "", 3, "routerLink"]],
        template: function ArticlesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Les derniers articles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-list", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ArticlesComponent_mat_grid_tile_6_Template, 15, 12, "mat-grid-tile", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("cols", ctx.cols);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("rowHeight", ctx.rowHeight);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
          }
        },
        directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"]],
        styles: [".avatar-image[_ngcontent-%COMP%] {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC9hcnRpY2xlcy9hcnRpY2xlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUZBQW1GO0VBQ25GLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvYXJ0aWNsZXMvYXJ0aWNsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiJdfQ== */", ".blog-main-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n\n.blog-left-section[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 100%;\n  color: whitesmoke;\n  background-color: #003748;\n}\n\n.blog-right-section[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n}\n\n.mat-drawer-content[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.ad-page-content[_ngcontent-%COMP%] {\n  padding: 25px 5%;\n}\n\n.ad-card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 25px;\n}\n\n.ad-card-article[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 25px;\n}\n\n.ad-article-avatar[_ngcontent-%COMP%] {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n\n#main[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  background-color: whitesmoke;\n  overflow: hidden;;\n}\n\n#main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0I7QUFDeEI7O0FBR0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGVudC9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1tYWluLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJsb2ctbGVmdC1zZWN0aW9uIHtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzc0ODtcbn1cblxuLmJsb2ctcmlnaHQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmFkLXBhZ2UtY29udGVudCB7XG4gIHBhZGRpbmc6IDI1cHggNSU7XG59XG5cbi5hZC1jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uYWQtY2FyZC1hcnRpY2xlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmFkLWFydGljbGUtYXZhdGFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cblxuI21haW4ge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIG92ZXJmbG93OiBoaWRkZW47O1xufVxuXG4jbWFpbiBkaXYge1xuICBmbGV4OiBhdXRvO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticlesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-articles',
            templateUrl: './articles.component.html',
            styleUrls: ['./articles.component.css', '../main-content/main-content.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _services_ArticlesServices__WEBPACK_IMPORTED_MODULE_2__["ArticlesServices"]
          }, {
            type: _services_AppServices__WEBPACK_IMPORTED_MODULE_3__["AppServices"]
          }];
        }, null);
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_AppServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/AppServices */
      "./src/app/services/AppServices.ts");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/divider.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");

      function ContactComponent_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.handleEmailError());
        }
      }

      function ContactComponent_mat_error_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.handleMessageError());
        }
      }

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent(fb, appServices) {
          var _this12 = this;

          _classCallCheck(this, ContactComponent);

          this.fb = fb;
          this.appServices = appServices;
          this.emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
          this.messageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]);
          this.hide = true;
          this.hideRequiredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
          this.floatLabelControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('auto');
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
            _this12.formStyle = results.matches ? _this12.mobileFormStyle : _this12.desktopFormStyle;
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

      ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_AppServices__WEBPACK_IMPORTED_MODULE_2__["AppServices"]));
      };

      ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        decls: 26,
        vars: 6,
        consts: [[2, "height", "100vh"], [2, "text-align", "center"], [2, "background-color", "white", "margin-top", "3%", 3, "formGroup", "ngStyle", "ngSubmit"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", "placeholder", "Votre email", "autocomplete", "email", "required", "", 3, "formControl"], [4, "ngIf"], ["matInput", "", "rows", "15", "placeholder", "Votre message", "autocomplete", "message", "required", "", 3, "formControl"], ["type", "submit", "mat-raised-button", "", 1, "button-primary-color"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page de contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_5_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Contactez-nous via ce formulaire");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ContactComponent_mat_error_15_Template, 2, 1, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "textarea", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ContactComponent_mat_error_22_Template, 2, 1, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Envoyer ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formOptions)("ngStyle", ctx.formStyle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.emailControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailControl.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.messageControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageControl.invalid);
          }
        },
        directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */", ".logo[_ngcontent-%COMP%] {\n  text-align: left;\n}\n#myApp[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.mobile-devices-left-menu[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background-color: #0050a5;\n}\n.desktop-devices-left-menu[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 100vh;\n  background-color: #ffffff;\n}\n.menu-link-active[_ngcontent-%COMP%] {\n  background-color: #014794;\n}\n.mat-list-web-item[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-list-admin-item[_ngcontent-%COMP%] {\n  color: black;\n}\n.link-active[_ngcontent-%COMP%] {\n  background-color: #dddddd;\n}\n.mat-list-item[_ngcontent-%COMP%]:hover {\n  background-color: #dddddd;\n}\n.blog-left-menu-content[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%], .blog-left-menu-subheader[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n.admin-page-user-infos[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: fixed;\n  bottom: 25px;\n}\n.button-primary-color[_ngcontent-%COMP%] {\n  width: 98%;\n  margin: 1%;\n  background-color: #0050a5;\n  color: white;\n}\n.button-primary-color[_ngcontent-%COMP%]:hover {\n  background-color: #00438f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiNteUFwcCB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5tb2JpbGUtZGV2aWNlcy1sZWZ0LW1lbnUge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUwYTU7XG59XG5cbi5kZXNrdG9wLWRldmljZXMtbGVmdC1tZW51IHtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLm1lbnUtbGluay1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE0Nzk0O1xufVxuXG4ubWF0LWxpc3Qtd2ViLWl0ZW0ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtbGlzdC1hZG1pbi1pdGVtIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubGluay1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufVxuXG4ubWF0LWxpc3QtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59XG5cbi5ibG9nLWxlZnQtbWVudS1jb250ZW50IC5tYXQtbGlzdC1pdGVtLCAuYmxvZy1sZWZ0LW1lbnUtc3ViaGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5hZG1pbi1wYWdlLXVzZXItaW5mb3Mge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyNXB4O1xufVxuXG4uYnV0dG9uLXByaW1hcnktY29sb3Ige1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IDElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MGE1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24tcHJpbWFyeS1jb2xvcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQzOGY7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.css', '../../../app.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_AppServices__WEBPACK_IMPORTED_MODULE_2__["AppServices"]
          }];
        }, null);
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/layout.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      function MainContentComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MainContentComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var MainContentComponent = /*#__PURE__*/function () {
        function MainContentComponent(mobileDeviceObserver) {
          _classCallCheck(this, MainContentComponent);

          this.mobileDeviceObserver = mobileDeviceObserver;
          this.smallScreen = false;
        }

        _createClass(MainContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.mobileDeviceObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].WebPortrait, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].TabletPortrait]).subscribe(function (res) {
              _this13.smallScreen = res.matches;
            });
          }
        }]);

        return MainContentComponent;
      }();

      MainContentComponent.ɵfac = function MainContentComponent_Factory(t) {
        return new (t || MainContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]));
      };

      MainContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainContentComponent,
        selectors: [["app-main-content"]],
        inputs: {
          menuOpened: "menuOpened"
        },
        decls: 2,
        vars: 2,
        consts: [["id", "main", 4, "ngIf"], [4, "ngIf"], ["id", "main"], [2, "width", "50%"]],
        template: function MainContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MainContentComponent_div_0_Template, 5, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainContentComponent_div_1_Template, 2, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.smallScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.smallScreen);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: [".blog-main-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n\n.blog-left-section[_ngcontent-%COMP%] {\n  width: 15%;\n  height: 100%;\n  color: whitesmoke;\n  background-color: #003748;\n}\n\n.blog-right-section[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n}\n\n.mat-drawer-content[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.ad-page-content[_ngcontent-%COMP%] {\n  padding: 25px 5%;\n}\n\n.ad-card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 25px;\n}\n\n.ad-card-article[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 25px;\n}\n\n.ad-article-avatar[_ngcontent-%COMP%] {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n\n#main[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  background-color: whitesmoke;\n  overflow: hidden;;\n}\n\n#main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0I7QUFDeEI7O0FBR0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGVudC9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1tYWluLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJsb2ctbGVmdC1zZWN0aW9uIHtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzc0ODtcbn1cblxuLmJsb2ctcmlnaHQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmFkLXBhZ2UtY29udGVudCB7XG4gIHBhZGRpbmc6IDI1cHggNSU7XG59XG5cbi5hZC1jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uYWQtY2FyZC1hcnRpY2xlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmFkLWFydGljbGUtYXZhdGFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cblxuI21haW4ge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIG92ZXJmbG93OiBoaWRkZW47O1xufVxuXG4jbWFpbiBkaXYge1xuICBmbGV4OiBhdXRvO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainContentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main-content',
            templateUrl: './main-content.component.html',
            styleUrls: ['./main-content.component.css']
          }]
        }], function () {
          return [{
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
          }];
        }, {
          menuOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/content/page-not-found/page-not-found.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/content/page-not-found/page-not-found.component.ts ***!
      \**************************************************************************/

    /*! exports provided: PageNotFoundComponent */

    /***/
    function srcAppPagesContentPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
        return PageNotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/divider.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");

      var PageNotFoundComponent = /*#__PURE__*/function () {
        function PageNotFoundComponent() {
          _classCallCheck(this, PageNotFoundComponent);
        }

        _createClass(PageNotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageNotFoundComponent;
      }();

      PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
        return new (t || PageNotFoundComponent)();
      };

      PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageNotFoundComponent,
        selectors: [["app-page-not-found"]],
        decls: 10,
        vars: 0,
        consts: [[2, "height", "100vh"], [2, "text-align", "center"], [2, "background-color", "white", "width", "100%", "height", "40%", "margin-top", "3%", "text-align", "center"]],
        template: function PageNotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Page Introuvable ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " La page que vous recherchez est introuvable.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Assurez-vous que le lien est bien orthographi\xE9 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-page-not-found',
            templateUrl: './page-not-found.component.html',
            styleUrls: ['./page-not-found.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_AppServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/AppServices */
      "./src/app/services/AppServices.ts");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/toolbar.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");

      var _c0 = function _c0() {
        return {
          exact: true
        };
      };

      function HeaderComponent_mat_toolbar_row_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar-row", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Afropreneur Digital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Articles ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " A propos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Contact ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        }
      }

      function HeaderComponent_mat_toolbar_row_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_mat_toolbar_row_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onMenuToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Afropreneur Digital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(router, appServices) {
          var _this14 = this;

          _classCallCheck(this, HeaderComponent);

          this.router = router;
          this.appServices = appServices;
          this.toolbarMenuOpened = undefined;
          this.smallScreen = false;
          this.mobileDeviceMenuOpened = false;
          appServices.observeMobileDevices().subscribe(function (res) {
            return _this14.smallScreen = res.matches;
          });
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.router.events.subscribe(function (value) {
              if (value instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this15.toolbarMenuOpened = false;
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

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_AppServices__WEBPACK_IMPORTED_MODULE_2__["AppServices"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        inputs: {
          mobileDeviceMenuOpened: "mobileDeviceMenuOpened"
        },
        decls: 3,
        vars: 2,
        consts: [[1, "header-styles"], ["class", "header-content-alignment", 4, "ngIf"], [4, "ngIf"], [1, "header-content-alignment"], [2, "width", "50%", "display", "flex", "flex", "auto"], ["mat-button", "", "routerLink", "/"], [2, "width", "70%", "text-align", "right"], ["mat-button", "", "routerLink", "/articles", "routerLinkActive", "link-active", 3, "routerLinkActiveOptions"], ["mat-button", "", "routerLink", "/infos", "routerLinkActive", "link-active", 3, "routerLinkActiveOptions"], ["mat-button", "", "routerLink", "/contact", "routerLinkActive", "link-active", 3, "routerLinkActiveOptions"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_mat_toolbar_row_1_Template, 14, 6, "mat-toolbar-row", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_mat_toolbar_row_2_Template, 7, 0, "mat-toolbar-row", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.smallScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.smallScreen);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
        styles: [".header-styles[_ngcontent-%COMP%] {\n  overflow-scrolling: unset;\n  color: white;\n  background-color: #0050a5; \n}\n\n.header-content-alignment[_ngcontent-%COMP%] {\n  width: 100vw;\n  display: flex;\n}\n\n.header-content-alignment[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix5QkFBeUIsRUFBRSwyQkFBMkI7QUFDeEQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1zdHlsZXMge1xuICBvdmVyZmxvdy1zY3JvbGxpbmc6IHVuc2V0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUwYTU7IC8qIGFub3RoZXIgY29sb3I6ICMwMDM3NDggKi9cbn1cblxuLmhlYWRlci1jb250ZW50LWFsaWdubWVudCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYWRlci1jb250ZW50LWFsaWdubWVudCBkaXYge1xuICBmbGV4OiBhdXRvO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_AppServices__WEBPACK_IMPORTED_MODULE_2__["AppServices"]
          }];
        }, {
          mobileDeviceMenuOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/AuthenticationServices */
      "./src/app/services/AuthenticationServices.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/list.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");

      var _c0 = function _c0() {
        return {
          exact: true
        };
      };

      var _c1 = function _c1() {
        return ["/articles", "education"];
      };

      var _c2 = function _c2() {
        return ["/articles", "healthcare"];
      };

      var _c3 = function _c3() {
        return ["/articles", "fintech"];
      };

      function MenuComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Afropreneur ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Digital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Le blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list-item", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Accueil ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " A propos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Les th\xE9matiques ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-list-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "school");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-list-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "local_hospital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sant\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-list-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "trending_up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "FinTech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        }
      }

      function MenuComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Afropreneur ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Digital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Console d'administration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list-item", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "article");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Nouvel article ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Modifier article ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_div_1_Template_a_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onDisconnect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "D\xE9connexion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.user.fullName);
        }
      }

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
            var _this16 = this;

            this.authenticationServices.getAuthServiceMessage().subscribe(function (canSwitch) {
              _this16.switchToAdminDashboard = canSwitch;
              _this16.user = _this16.authenticationServices.getAdmin();
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

      MenuComponent.ɵfac = function MenuComponent_Factory(t) {
        return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_1__["AuthenticationServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MenuComponent,
        selectors: [["app-menu"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], [1, "blog-left-menu-content"], [1, "logo"], ["mat-button", "", "routerLink", "/"], [2, "color", "orange"], ["mat-subheader", "", 1, "blog-left-menu-subheader"], ["routerLink", "/articles", "routerLinkActive", "link-active", 3, "routerLinkActiveOptions"], ["mat-list-icon", ""], ["mat-line", ""], ["routerLink", "/infos", "routerLinkActive", "link-active"], ["routerLinkActive", "link-active", 3, "routerLink", "routerLinkActiveOptions"], ["mat-button", "", "routerLink", "/admin"], ["routerLink", "/admin/articles/add", "routerLinkActive", "link-active", 3, "routerLinkActiveOptions"], ["routerLink", "/admin/articles", "routerLinkActive", "link-active", 3, "routerLinkActiveOptions"], [1, "admin-page-user-infos"], ["mat-button", "", 3, "click"]],
        template: function MenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenuComponent_div_0_Template, 37, 14, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_div_1_Template, 26, 5, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.switchToAdminDashboard);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.switchToAdminDashboard);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatList"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatLine"]],
        styles: [".link-active[_ngcontent-%COMP%] {\n  background-color: #002935;\n}\n\n.mat-list-item[_ngcontent-%COMP%]:hover {\n  background-color: #002935;\n}\n\n.blog-left-menu-content[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%], .blog-left-menu-subheader[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n\n.admin-page-user-infos[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: fixed;\n  bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmstYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjkzNTtcbn1cblxuLm1hdC1saXN0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyOTM1O1xufVxuXG4uYmxvZy1sZWZ0LW1lbnUtY29udGVudCAubWF0LWxpc3QtaXRlbSwgLmJsb2ctbGVmdC1tZW51LXN1YmhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uYWRtaW4tcGFnZS11c2VyLWluZm9zIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjVweDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.css']
          }]
        }], function () {
          return [{
            type: _services_AuthenticationServices__WEBPACK_IMPORTED_MODULE_1__["AuthenticationServices"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/layout.js");

      var AppServices = /*#__PURE__*/function () {
        function AppServices(mobileDeviceObserver, phoneObserver, tabletObserver, webLandscapeObserver) {
          _classCallCheck(this, AppServices);

          this.mobileDeviceObserver = mobileDeviceObserver;
          this.phoneObserver = phoneObserver;
          this.tabletObserver = tabletObserver;
          this.webLandscapeObserver = webLandscapeObserver;
          this.openAdminConsoleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.mobileDevicesMenuSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
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
            return this.mobileDeviceObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Tablet, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].WebPortrait]);
          }
        }, {
          key: "observePhone",
          value: function observePhone() {
            return this.phoneObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset]);
          }
        }, {
          key: "observeTablet",
          value: function observeTablet() {
            return this.tabletObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Tablet, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].WebPortrait]);
          }
        }, {
          key: "observeWebLandscape",
          value: function observeWebLandscape() {
            return this.webLandscapeObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].WebLandscape]);
          }
        }]);

        return AppServices;
      }();

      AppServices.ɵfac = function AppServices_Factory(t) {
        return new (t || AppServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]));
      };

      AppServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AppServices,
        factory: AppServices.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppServices, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
          }, {
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
          }, {
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
          }, {
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
          }];
        }, null);
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var ArticlesServices = /*#__PURE__*/function () {
        function ArticlesServices(http) {
          _classCallCheck(this, ArticlesServices);

          this.http = http;
          this.API_ARTICLE_URL = 'http://localhost:8080/api/v1/articles';
        }

        _createClass(ArticlesServices, [{
          key: "findAll",
          value: function findAll() {
            /*
            if (this.articles !== null && this.articles !== undefined && this.articles.length > 0) {
              return this.articles;
            }
            this.articles = fromArticles[Object.keys(fromArticles).shift()] as Article[];*/
            return this.http.get(this.API_ARTICLE_URL);
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
            return this.articles.find(function (article) {
              return article.id === id;
            });
          }
        }]);

        return ArticlesServices;
      }();

      ArticlesServices.ɵfac = function ArticlesServices_Factory(t) {
        return new (t || ArticlesServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ArticlesServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ArticlesServices,
        factory: ArticlesServices.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticlesServices, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _model_CookieName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../model/CookieName */
      "./src/app/model/CookieName.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");

      var AuthenticationServices = /*#__PURE__*/function () {
        function AuthenticationServices(http, cookieService) {
          _classCallCheck(this, AuthenticationServices);

          this.http = http;
          this.cookieService = cookieService;
          this.authServiceMessage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
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

            if (this.cookieService.check(_model_CookieName__WEBPACK_IMPORTED_MODULE_2__["CookieName"].ID)) {
              this.cookieService["delete"](_model_CookieName__WEBPACK_IMPORTED_MODULE_2__["CookieName"].ID);
              this.cookieService["delete"](_model_CookieName__WEBPACK_IMPORTED_MODULE_2__["CookieName"].LOGIN);
              this.cookieService["delete"](_model_CookieName__WEBPACK_IMPORTED_MODULE_2__["CookieName"].PASSWORD);
              this.cookieService["delete"](_model_CookieName__WEBPACK_IMPORTED_MODULE_2__["CookieName"].FULL_NAME);
              this.cookieService["delete"](_model_CookieName__WEBPACK_IMPORTED_MODULE_2__["CookieName"].DESCRIPTION);
            }
          }
        }, {
          key: "getAdmin",
          value: function getAdmin() {
            if (this.connected()) {
              return this.admin;
            }

            return null;
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
            return this.getUserSession() != null;
          }
        }, {
          key: "setLoggedIn",
          value: function setLoggedIn(logged) {
            this.loggedIn = logged;
          }
        }, {
          key: "saveUserSession",
          value: function saveUserSession(data) {
            var expiresIn = 1;
            this.cookieService.set(_model_CookieName__WEBPACK_IMPORTED_MODULE_2__["CookieName"].ID, String(data.id), expiresIn, '/admin', 'localhost', false, 'Strict');
            this.cookieService.set(_model_CookieName__WEBPACK_IMPORTED_MODULE_2__["CookieName"].LOGIN, data.login, expiresIn, '/admin', 'localhost', false, 'Strict');
            this.cookieService.set(_model_CookieName__WEBPACK_IMPORTED_MODULE_2__["CookieName"].FULL_NAME, data.fullName, expiresIn, '/admin', 'localhost', false, 'Strict');
            this.cookieService.set(_model_CookieName__WEBPACK_IMPORTED_MODULE_2__["CookieName"].DESCRIPTION, data.description, expiresIn, '/admin', 'localhost', false, 'Strict');
            this.admin = data;
          }
        }, {
          key: "getUserSession",
          value: function getUserSession() {
            if (this.cookieService.check(_model_CookieName__WEBPACK_IMPORTED_MODULE_2__["CookieName"].ID)) {
              this.admin = {
                id: +this.cookieService.get(_model_CookieName__WEBPACK_IMPORTED_MODULE_2__["CookieName"].ID),
                login: this.cookieService.get(_model_CookieName__WEBPACK_IMPORTED_MODULE_2__["CookieName"].LOGIN),
                password: '',
                fullName: this.cookieService.get(_model_CookieName__WEBPACK_IMPORTED_MODULE_2__["CookieName"].FULL_NAME),
                description: this.cookieService.get(_model_CookieName__WEBPACK_IMPORTED_MODULE_2__["CookieName"].DESCRIPTION)
              };
              return this.admin;
            }

            return null;
          }
        }]);

        return AuthenticationServices;
      }();

      AuthenticationServices.ɵfac = function AuthenticationServices_Factory(t) {
        return new (t || AuthenticationServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]));
      };

      AuthenticationServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthenticationServices,
        factory: AuthenticationServices.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationServices, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
          }];
        }, null);
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _AuthenticationServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
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
            return this.authenticationServices.connected();
          }
        }]);

        return CanActivateAdmin;
      }();

      CanActivateAdmin.ɵfac = function CanActivateAdmin_Factory(t) {
        return new (t || CanActivateAdmin)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_AuthenticationServices__WEBPACK_IMPORTED_MODULE_1__["AuthenticationServices"]));
      };

      CanActivateAdmin.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CanActivateAdmin,
        factory: CanActivateAdmin.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanActivateAdmin, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _AuthenticationServices__WEBPACK_IMPORTED_MODULE_1__["AuthenticationServices"]
          }];
        }, null);
      })();
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
      }); // This file can be replaced during build by using the `fileReplacements` array.
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


      var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! hammerjs */
      "./node_modules/hammerjs/hammer.js");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
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
})();
//# sourceMappingURL=main-es5.js.map