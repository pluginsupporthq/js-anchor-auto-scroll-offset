# JS Anchor Auto Scroll Offset
### How To Use
Just put script in cerain folder and include it to your page. You can set **duration** and **padding**
by ```data-duration ``` and ```data-padding ``` attributes. 

```html
<script type="text/javascript" src="path/to/scroll.js" data-duration='400' data-padding='50' data-padding-sm='30' data-breakpoint='480'></script>
```

For set different height for mobile and pc screens you can use ```data-padding-sm``` and ```data-breakpoint```

```data-duration ``` - animation duration in ms

```data-padding ``` - height in px between top border and div

```data-padding-sm ``` - height in px between top border and div (for small screen,  width < ```data-breakpoint```)

```data-breakpoint``` - width of small screens in px  ```window.screen.width < conf.breakpoint```

