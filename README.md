Ajax-Spinner-jQuery-Plugin
==========================

A jQuery plugin that automatically displays a spinner for standard jQuery Ajax calls as-well-as manually.

Copyright 2012 Gary H. Wilson [http://www.jarofcode.com]

Ajax Spinner jQuery Plugin is a jQuery plugin for displaying a standard spinner with transparent background when any jQuery Ajax methods are called. The spinner can also be manually summoned, as well.

* [GitHub Repository](https://github.com/ghwilson4456/Ajax-Spinner-jQuery-Plugin)


## Dependencies (not included in this repository)

- [jQuery](http://jquery.com)

##Usage

Designed to display a spinner with transparent background over the body of your HTML, Ajax Spinner jQuery Plugin will automatically display the spinner on any jQuery call or manually if needed.

Here is an minimal example:

<pre>
spinner = new $.spinner();
</pre>

Here is another example that shows the available options for instantiating the spinner:

<pre>
spinner = new $.spinner({
    autoSpinner: false,
    html: '&lt;div class="spinner">&lt;/div>',
    image: '/images/ajax-spinner.gif',
    opacity: 0.7,
    bgcolor: '#fff',
    delay: 300
});
</pre>

The default options are as follow:

<pre>
{
    autoSpinner: true,
    html: '&lt;div style="position:absolute;top:0;left:0;width:100%;height:##winHeight##px;background:##bgcolor## url(##image##) no-repeat center center;-moz-opacity:##opacity##;filter:alpha(opacity=##opacityIE##);opacity:##opacity##;">&lt;/div>',
    image: '',
    opacity: 0.5,
    bgcolor: '#000',
    delay: 500
}
</pre>

* *autoSpinner*: setting this to false will stop the spinner from showing during jQuery Ajax calls. When set to true, the spinner will display on any jQuery Ajax call automatically.
* *html*: you can define any HTML markup to use for the spinner display. There are four variables that are dynamically replaced: winHeight, bgcolor, image and opacity. The values must be surround by double-hash marks.
* *image*: this is the path to your image that will be displayed as a spinner animation.
* *opacity*: this is the opacity value for the background color of your HTML block. The accepted values for opacity are from 0 (completely transparent) to 1 (completely opaque). For example, a value of 0.5 would be 50% transparent.
* *bgcolor*: the background color in hexidecimal format.
* *delay*: the delay value represents the time between when the Ajax method is called and the spinner displays. Setting a small delay can prevent the spinner from displaying and disappearing quickly.

Here is an example that manually starts and stops the spinner:

<pre>
spinner = new $.spinner({autoSpinner: false});

spinner.start();
spinner.stop();
</pre>