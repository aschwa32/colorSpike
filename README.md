Color Spike
----------------------
Color spike is a front-end tool to allow randomized color schemes on your web pages.  You
can specify how many colors color spike should generate and which attributes of which 
elements should match.  All of this can be specified with a simple bit of javascript to
include in your document and the addition of the proper classes to elements
Here is how:

Steps to using color spike

1)
	Include the javascript file in your html
	Include JQuery in your html

2)
	In the ready function of your page call spikeColors(param) with a single boolean
	parameter which specifies whether spikeColors() should create a new color scheme
	or use an already existing one.

3)
	Finally we can use color spike!  All of the color spike logic begins with the
	class 'spike' on an element.
		<div class="spike">
	This tells color spike to look at this element.

	The next requirement is to specify a property to spike and also an integer
	which specifies which color in the scheme to set the property to. (If you don't 
	want any of the properties to match just set each spike to a different number.

	A full spike example could look like this:
		<div class="spike spike-background-scolor-1"></div>

	Now if I want to set another div with a different background color I could write:
		<div class="spike spike-background-scolor-2"></div>

	You don't have to limit yourself to background colors though, you can specify any
	property in background's place and it will work too.
