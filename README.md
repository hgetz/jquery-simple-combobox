jQuery Simple Combobox plugin
=============================

A jQuery combobox plugin.

Usage
-----

You can find reference in index.html and see [fiddles here](http://jsfiddle.net/user/ivkremer/fiddles/ "JSFiddle") to understand its features.

You can change the name of a plugin in your code by changing ```var pname = 'scombobox';``` line (starting the script). Make sure your CSS class prefixes correcpond this name.

### IE8 compatibility ###

This plugin uses the following JS native stuff:

```JavaScript
String.prototype.trim()
Object.keys()
console.warn()
```

To provide IE8 support add this methods to your project (see [js/missed.js](https://github.com/ivkremer/jquery-simple-combobox/blob/master/js/missed.js) file).

License
-------

The MIT License (MIT)

Copyright (c) 2013 Ilya Kremer
