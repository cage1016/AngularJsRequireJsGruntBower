AngularJsRequireJsGruntBower-sample
===================================

> This article is part of a series of posts on RequireJs, AnguarJs, Grunt and Bower. Here are the parts so far:
>
> 1.  [AngularJs, RequireJs, Grunt and Bower Part1 - Getting Started and concept with ASP.NET MVC ~ 竹部落](http://bamboobig.blogspot.tw/2014/06/angularjs-requirejs-grunt-and-bower.html)
> 2.  [AngularJs, RequireJs, Grunt and Bower Part2 - Grunt ~ 竹部落](http://bamboobig.blogspot.tw/2014/07/angularjs-requirejs-grunt-and-bower.html)
> 3.  [AngularJs, RequireJs, Grunt and Bower Part3 - generator-angular-requirejs-grunt-bower with ASP.NET MVC ~ 竹部落](http://bamboobig.blogspot.tw/2014/07/angularjs-requirejs-grunt-and-bower_14.html)
> 4.  [AngularJs, RequireJs, Grunt and Bower Part4 - How to extend your own code with ASP.NET MVC ~ 竹部落](http://bamboobig.blogspot.tw/2014/07/angularjs-requirejs-grunt-and-bower_15.html)
> 5.  AngularJs, RequireJs, Grunt and Bower Part5 - Yoeman generator-angular-requirejs-grunt-bower with Express.js **//to be done**

After you clone source code from github reop, you can run following command:

* `git checkout -f step-0` is status project created
* `git checkout -f step-1` is status Nuget install Require.js.
* `git checkout -f step-2` is status project Add AngularJs, RequireJs, Grunt and Bower to Public folder.
* `git checkout -f step-3` is status modify _Layout.chtml to render RequireJs. You will see the final result.
    * Please cd to `AngularJsRequireJsGruntBower\AngularJsRequireJsGruntBower\Public` and execute `bower install` to restore those library project included.
* `git checkout -f setp-4` is status ready to do grunt tasks.
    * Please cd to `AngularJsRequireJsGruntBower\AngularJsRequireJsGruntBower\Public` and execute `npm install` to restore `grunt` required libraries.
    * execute command `grunt` to do grunt tasks.
* `git checkout -f step-5` extend `Product` application
* `git checkout -f step-6` extend AngularJs service `book-service` and add `BookLoader` to route resolve
* `git checkout -f step-7` extend AngularJs service `book-service` and inject `BOOK` service to controller
* `git checkout -f step-5` extend `Product` application
* `git checkout -f step-6` extend AngularJs service `book-service` and add `BookLoader` to route resolve
* `git checkout -f step-7` extend AngularJs service `book-service` and inject `BOOK` service to controller
* `git checkout -f step-8` add `Product` to `Gruntfile.js` module block

## License
[BSD license](http://opensource.org/licenses/bsd-license.php)
