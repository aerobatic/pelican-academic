Quickstart
############

Before you get started, make you have Python3 installed.

Create new site
----------------

The easiest way to start a new site is to clone the demo site (replacing "my-academic-site" with your own site name)::

  git clone --depth 0 https://github.com/aerobatic/pelican-academic-demo.git my-academic-site

Now cd into the created directory and create a virtual environment::

  cd my-academic-site

Run the `install.sh` script::
  
  bash install.sh

Run site locally
-----------------

The demo repo comes with a ``Makefile`` that defines a ``serve`` task. This will build your site and start a local server at `<http://localhost:8001>`_::
  
  make serve

You can also override the port from the command line::

  make serve PORT=9000

You may see a warning related to feeds, but that is normal when developing locally and can be ignored for now.

Preview your site by navigating to `<http://localhost:8001>`_ in your browser. Behind the scenes, a livereload server will automatically refresh your browser window whenever changes are made to your project. This makes for a very efficient coding and content authoring workflow; just save in your editor, and your changes are immediately reflected.


Replace demo content
---------------------

Here are some steps to get you started replacing the Harry Potter demo content with your own:

- Update ``content/_blocks/biography.md`` with your own biographical content that appears as the first section on the homepage.
- Overwrite ``content/images/portrait.jpg`` with a photo of yourself. Optimal dimensions are roughly 400x400px, but any photo where your face is centered should work.
- Update the properties in the ``PROFILE_METADATA`` Python object in ``pelicanconf.py``. The shape of this object is taken directly from the `JSON-LD Person <http://schema.org/Person>`_ schema. 


Deploying your site
--------------------

To build your site in preparation for deployment run::
  
  make publish

This will generate your site using the publish config settings from ``publishconf.py``. The built output of your site is just static html, js, css, etc. So it can be deployed on any web server or static hosting provider. See the `Pelican deployment docs <http://docs.getpelican.com/en/stable/publish.html#deployment>`_ for different deployment options.

`Aerobatic <https://www.aerobatic.com>`_, the sponsor of Pelican Academic, is a specialized static hosting service. There are some optional capabilities built into the theme you can take advantage of if you choose to deploy your site there. See the :doc:`../aerobatic` Aerobatic specific options. 
