# Sketch

> :art: Sketch is a CSS framework, it makes Web designing more fun :D

![](http://i.giphy.com/3o7ZezEuA6BtkQgNSE.gif)

## Concepts

### As if drawing a picture

Sketch is an HTML-based design tool.
All you have to do is to write class names in your HTML, so you can focus all your attention on creating UI's and improving UX.

### Sketch.app based naming

Classes of Sketch are named based on those of [Sketch.app](https://www.sketchapp.com/), one of the most famous and useful design tools. People familiar with Sketch.app will feel right at home here.

### Rapid prototyping

Sketch helps people rapidly build and easy to change Web sites or apps.
Having a physical model in hand, it is possible to incorporate the changes instantly merely by asking the feedback from the customers.

### Natural to read and easy to write

Sketch seems just a CSS utility(or helper) library, like [SUIT CSS utilities](https://github.com/suitcss/utils), [BASSCSS](http://www.basscss.com) and so on.
Almost all CSS utility library rules named by the shorthand of property and values, e.g. `u-flexAlignItemsStar` means `align-items: flex-start;`.
We need high CSS knowledge using existing libraries, but Sketch

## How to use

### Text, Typography

#### font-size

- `text-10px`, `text-24px`: select font size of this text

#### text-align

- `align-left`: align the text to left
- `align-center`: align the text to center
- `align-right`: align the text to right

#### font-weight

- `text-bold`: set bold style text

#### Example

```html
<h1 class="text-22px text-bold align-left">Header</h1>
<p class="text-12px">text attached font size 12px</p>
```

### Spacing

#### Set space to inset

- `top-pd-0`: top padding
- `right-pd-12px`: right padding
- `bottom-pd-20px`: bottom padding
- `left-pd-12px`: left padding
- `pd-12px`: set padding to all direction

#### Set space to outside

- `top-mg-0`: top margin
- `right-mg-12px`: right margin
- `bottom-mg-20px`: bottom margin
- `left-mg-12px`: left margin
- `mg-12px`: set margin to all direction

### Colors

#### color palette

```css
:root {
  --black: #333;
  --darkGray: #777;
  --gray: #aaa;
  --lightGray: #ddd;
  --white: #fff;
  --blue: #0074d9;
  --navy: #001f3f;
  --aqua: #7fdbff;
  --teal: #39cccc;
  --olive: #3d9970;
  --green: #2ecc40;
  --lime: #01ff70;
  --yellow: ffdc00;
  --orange: #ff851b;
  --red: #ff4136;
  --maroon: #85144b;
  --purple: #b10dc9;
}
```

#### Set the color to text, background and border

- `blue`: color the text to blue
- `bg-lightGray`: color the background to light gray
- `border-red`: color the border to red

### Border

#### border

- `border-2px`: set border arround the content
- `under-line-1px`: underscore the line in 1px

#### radius

- `radius-5px`: radius the content with 5px

#### circle

- `circle`: change the shape of content to circle

#### Example

```html
<p class="text-12px darkGray under-line-1px border-red">text</p>
<img class="circle border-1px border-white" src="" alt="" />
```

### Grid

#### Grid layout

```html
<div class="grid">
  <div class="cell-half"></div>
  <div class="cell-half"></div>
</div>

<div class="grid">
  <div class="cell-one-third"></div>
  <div class="cell-one-third"></div>
  <div class="cell-one-third"></div>
</div>

<div class="grid">
  <div class="cell-quarter"></div>
  <div class="cell-quarter"></div>
  <div class="cell-quarter"></div>
  <div class="cell-quarter"></div>
</div>
```

### State

- `is-deleted`: remove the content
- `is-hidden`: hide the content, but the space is existing
- `is-disabled`: make the content to not use(disallow clicking)

#### Example

```html
<div class="awesome-content is-deleted">content</div>
<div class="this-content is-hidden">content</div>
<div class="this-content is-disabled">content</div>
```

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
