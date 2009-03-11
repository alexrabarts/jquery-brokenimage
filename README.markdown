# brokenImage: a jQuery plugin

brokenImage is a jQuery plugin that is able to detect and replace images
that are either broken or are taking a long time to load.  If no replacement
image is specified then the CSS visibility is set to hidden.

## Usage

Fix a broken <code>Image</code> object:

<pre>
  var image = new Image();
  image.src = '/might/be/broken.png';
  image.brokenImage();
</pre>

Fix a broken image tag:

<pre>
  &lt;img src="/might/be/broken.png" alt="Might be broken" id="myImage" /&gt;

  $('#myImage').brokenImage();
</pre>

Fix a collection of images:

<pre>
  &lt;div id="myImages"&gt;
    &lt;img src="/might/be/broken" alt="Might be broken" /&gt;
    &lt;img src="/might/also/be/broken" alt="Might also be broken" /&gt;
  &lt;/div>

  $('#myImages img').brokenImage();
</pre>

Set a custom image replacement instead of setting the visibility to hidden:

<pre>
  image.brokenImage({replacement: '/images/placeholder.png'});
</pre>

Set a custom timeout to override the 5 second default:

<pre>
  image.brokenImage({timeout: 100}); // 100 ms
</pre>

# Licensing

Licensed under the MIT:
http://www.opensource.org/licenses/mit-license.php

Copyright (c) 2008 Stateless Systems (http://statelesssystems.com)
