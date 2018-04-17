Components
################

Pelican Academic includes a library of re-usable components that you can declare in your templates. Components are nothing more than `Jinja2 macros <http://jinja.pocoo.org/docs/2.10/templates/#macros>`_ that you import into one of your template html files. All components are invoked with a set of named arguments. These argument values can either be hard-coded or can refer to variables; both `those made available by Pelican <http://docs.getpelican.com/en/stable/themes.html#templates-and-variables>`_ and custom variables set in your ``pelicanconf.py`` file.

Importing components
--------------------
In order to be used, each individual component must be explicitly imported into your template. The syntax for importing a template looks like so:

.. code-block:: jinja

  {% from "components/profile.html" import profile %}

.. note::

  The "components" folder is part of the pelican-academic theme. Jinja will automatically resolve imports that are nested within the configured theme.

Component library
--------------------

.. py:function:: article_card(article, site_url)

  Renders an individual article card consisting of an image header and text summary. The card is hyperlinked to the article details.

  :param object article: A Pelican `article object <http://docs.getpelican.com/en/stable/themes.html#article>`_
  :param object site_url: The url of the site, typically set to the Pelican ``SITEURL`` configuration setting
  
  **Example**:

  .. code-block:: jinja

    {% from "components/article_card.html" import article_card %}

    {{ article_card(article=article, site_url=SITEURL) }}

  .. note::

    Rather than use this component directly, it is more likely you will declare the ``article_card_deck`` component which uses this component internally.

.. py:function:: article_card_deck(articles, site_url)

  Renders a collection of articles using the `Bootstrap card deck component <https://getbootstrap.com/docs/4.0/components/card/#card-decks>`_. Each individual article is an instance of the ``article_card`` component.

  :param list article: A list of Pelican `article objects <http://docs.getpelican.com/en/stable/themes.html#article>`_
  :param object site_url: The url of the site, typically set to the Pelican ``SITEURL`` configuration setting
  
  **Example**:

  .. code-block:: jinja

    {% from "components/article_card_deck.html" import article_card_deck %}

    {{ article_card_deck(articles | isselected('posts'), site_url=SITEURL) }}

.. py:function:: profile(full_name, [job_title], [works_for], [email_address], [network_urls])

  Used to render your basic profile including picture, name, title, email, and links to social network profiles.

  :param str full_name: Your full name
  :param str job_title: Your job title
  :param str works_for: The name of the organization or institution you work for
  :param object network_urls: Urls to your profile on various social networks. Each will be rendered as a hyperlinked icon. Supported keys are ``google_scholar``, ``twitter``, and ``github``. Each key is optional.

  **Example:**

  .. code-block:: jinja

    {% from "components/profile.html" import profile %}

    {{ profile(
      full_name=PROFILE_METADATA.fullName,
      job_title=PROFILE_METADATA.jobTitle,
      works_for=PROFILE_METADATA.worksFor.name,
      email_address="test@example.org",
      network_urls={
        "google_scholar": "https://scholar.google.co.uk/citations?user=sIwtMXoAAAAJ",
        "twitter": "https://twitter.com/" + TWITTER_USERNAME,
        "github": "https://github.com/aerobatic/pelican-academic"
      }
    )}}

  


