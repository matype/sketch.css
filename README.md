# Sketch

> :art: Sketch is a CSS framework, it makes web designing more fun :D

![](http://i.giphy.com/3o7ZezEuA6BtkQgNSE.gif)

## Concepts

### As if drawing a picture

Sketch is an HTML-based design tool.
All you have to do is to write class names in your HTML, so you can focus all your attention on creating UI's and improving UX.

### Sketch.app based naming

Classes of Sketch are named based on those of [Sketch.app](https://www.sketchapp.com/), one of the most famous and useful design tools. People familiar with Sketch.app will feel right at home here.

### Rapid prototyping

Sketch helps people rapidly build and easy to change web sites or apps.
Having a physical model in hand, it is possible to incorporate the changes instantly merely by asking the feedback from the customers.

### Natural to read and easy to write

Sketch seems just a CSS utility(or helper) library, like [SUIT CSS utilities](https://github.com/suitcss/utils), [BASSCSS](http://www.basscss.com) and so on.
Almost all CSS utility library rules named by the shorthand of property and values, e.g. `u-flexAlignItemsStar` means `align-items: flex-start;`.
We need high CSS knowledge using existing libraries, but rules in Sketch are named according to Sketch.app, so it's natural to read and easy to write.

### Responsive grid system

Sketch contains responsive grid system using Flexbox, so we can build responsive web sites or apps more easily. [Here](https://github.com/morishitter/sketch.css/blob/master/src/grid.css) is the code.

## Download

### Download zip file

[Click here](https://github.com/morishitter/sketch.css/archive/master.zip)

### Install with npm

```bash
$ npm install sketch.css
```

### Install with Bower

```bash
$ bower install sketch.css
```

## Attention

Sketch is intended for rapid prototyping. It includes some new features of CSS (Flexbox, for example) and therefore is not supported in `IE < 10`. Sketch will include unused rules in your web app. If you use Sketch in a production environment, I recommend you remove any unused rules via [UnCSS](https://github.com/giakki/uncss).

## License

The MIT License (MIT)

Copyright (c) 2016 Masaaki Morishita
