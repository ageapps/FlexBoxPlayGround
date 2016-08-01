![class-header-css3](https://cloud.githubusercontent.com/assets/16039428/17283258/b36241f6-57ae-11e6-8b4b-5d96f4bd4800.jpg)
# FlexBoxPlayGround

[PlayGround] where you can try most properties from the CSS3 display property FlexBox.
There is also a [responsive web demo] built with FlexBox.

## Autoprefixer

It is used the [Autoprefixer] plugin from [Gulp] to resolve compatibility issues with most browsers.

### Usage

Just by typing `gulp watch`, gulp will update your `/build` css file and autoprefix it.
The result would be like this.

```groovy
$ gulp watch
[06:23:58] Using gulpfile ~/FlexBoxPlayGround/gulpfile.js
[06:23:58] Starting 'watch'...
[06:23:58] Finished 'watch' after 17 ms
...
```

## Resources
+ [flexbox.io]: FlexBox tutorials by [Wes Bos]
+ [css-tricks]: A Complete Guide to Flexbox



[PlayGround]:http://ageapps.cf/flexBoxPlayground/
[responsive web demo]:http://ageapps.cf/flexBoxPlayground/web.html
[flexbox.io]:http://flexbox.io
[css-tricks]:https://css-tricks.com/snippets/css/a-guide-to-flexbox/
[Wes Bos]:http://wesbos.com
[Gulp]:http://gulpjs.com
[Autoprefixer]:https://www.npmjs.com/package/gulp-autoprefixer/
