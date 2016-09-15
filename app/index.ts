/// <reference path="../typings/index.d.ts" />
import 'angular';
import './app.module';
import { NewsItemComponent } from './app.component';

(()=> {
    angular.module("idealapp").component("newsItem", NewsItemComponent);    
})();