Writing content
################

Homepage
---------

Your site homepage is controlled by the ``templates/index.html`` file. Since it is an html template, rather than a markdown file, you have full control over the content and layout. So you can organize it however you like. The default version that comes from the ``pelican-academic-demo`` repo provides a good starting point. The homepage is structured as set of stacked sections such as **Profile**, **Selected Projects**, **Selected Posts**, and **Teaching**. Feel free to add or remove sections to fit your needs.

These homepage sections can work in conjunction with the top navigation menu. When you configure your top_bar menu in ``templates/base.html``, you can specify that certain links are anchored to a homepage section. When the link is clicked from the homepage itself, the browser will smoothly scroll down to the corresponding section.

You can see this in action by clicking on a link like "Teaching" on the demo at `<https://pelican-academic.aerobaticapp.com>`_.

For the sections that display summary cards of articles (using the `article_card_deck component <components.html#article_card_deck>`_), you can use a Jinja filter to control which articles you want to feature. The demo site includes a simple ``isselected`` filter implementation that will match articles belonging to a specific category that have ``is_selected: "1"`` specified in metadata. For example the following snippet renders articles in the "projects" category where ``is_selected: "1"``.

.. code-block:: jinja
  :emphasize-lines: 6

  <section id="selected_projects" class="home-section">
    <div class="container">
      <div class="section-heading">
        <h3>Projects</h3>
      </div>
      {{ article_card_deck(articles | isselected('projects'), site_url=SITEURL) }}
    </div>
  </section>

Articles
----------

Articles should be authored in `Markdown format <https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet>`_. The ``.md`` file should be placed in a sub-directory corresponding to the category of the article. Pelican Academic the following 3 categories (however you can also create your own):

- posts
- publications
- projects

You arrange your articles in the filesystem like so:

.. code-block:: sh

  content
  ├── posts
  │   └── sorting-hat-algorithm.md
  ├── projects
  │   └── defence-against-the-dark-arts.md
  └── publications
      ├── proceedings-of-international-confederation-wizards.md
      └── study-interpretation-ancient-runes.md

YAML metadata
==============

The article metadata should be in YAML format which offers better support for complex data structures such as lists and dictionaries. In order to parse the YAML metadata, the `md-metayaml <https://github.com/joachimneu/pelican-md-metayaml>`_ pelican plugin must be declared in the `PLUGINS setting <http://docs.getpelican.com/en/stable/plugins.html#how-to-use-plugins>`_ in ``pelicanconf.py``:

.. code-block:: python
  :emphasize-lines: 2

  PLUGINS = [
    'md-metayaml',
    'render_math',
    'share_post'
  ]

Here is the metadata of the demo site articles (`view full markdown source <https://github.com/aerobatic/pelican-academic-demo/blob/initial-dev/content/posts/sorting-hat-algorithm.md>`_):

.. code-block:: yaml
  
  ---
  title: Sorting Hat Algorithm
  date: 2010-12-03 10:20
  summary: "Analysis of the sorting hat algorithm"
  authors: ["A Dumbledore"] # authors
  is_selected: "1"
  featured_image: theme/images/red-bubbles.jpg
  ---

.. warning::

  Make sure you place the triple dash lines ``---`` above and below the YAML metadata. This is a convention established by Jekyll which refers to this structure as `front-matter <https://jekyllrb.com/docs/frontmatter/>`_.

Article image
==============

Each article should be assigned a featured image. The goal is to re-purpose this image in a number of places:

- In the image cap of the `article_card <components.html#article_card>`__ component.
- At the top of the `article_content <components.html#article_content>`__ component.
- As the canonical metadata image in the JSON-LD `Article <http://schema.org/Person>`_ schema.
- The ``og:image`` open-graph canonical image
- The `Twitter summary card <metadata.html#twitter-card>`_ image

The images should be placed your site's ``content/images`` directory and cropped to recommended size of **800x418** pixels, an aspect ratio of **1.91:1**. This is the recommended size for Twitter and will also render well on LinkedIn and other networks. The best images are "wallpaper" style backgrounds that lack an obvious focal point (such as a person or object). This avoids chopping off part of a head when cropped to render at different aspect ratios.

.. note::

  `Pixabay <https://pixabay.com/>`_ is an excellent source of royalty free images that you can use without attribution.

The theme includes a number of science-oriented backgrounds you can use for your own articles including ``dna.jpg`` (shown below). You can see them `here <https://github.com/aerobatic/pelican-academic/tree/master/static/images>`_. 

.. image:: https://raw.githubusercontent.com/aerobatic/pelican-academic/initial-dev/static/images/dna.jpg
  :width: 800px
  :align: center

The featured image is declared in the article YAML metadata. If you are using one of the included featured images, then use the ``/theme`` path prefix::

  featured_image: theme/images/dna.jpg

See the `metadata section <metadata.html>`_ for more details on how images are used as part of the article metadata.

Math
-----
