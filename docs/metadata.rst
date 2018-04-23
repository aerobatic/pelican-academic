Metadata
#########

Pelican Academic makes use of the latest structured metadata standards to make your site meaningful to non-humans including search engines, Twitter, and other friendly bots that can enhance the discoverability of your site.

Article image
--------------

Each article should be assigned a featured image. The goal is to re-purpose this image in a number of places:

- In the image cap of the `article_card <components.html#article_card>`__ component.
- At the top of the `article_content <components.html#article_content>`__ component.
- As the canonical metadata image in the JSON-LD `Article<http://schema.org/Person>`_ schema.
- The ``og:image`` open-graph canonical image
- The Twitter summary card image

The images should be placed your site's ``content/images`` directory and cropped to recommended size of **800x418** pixels, an aspect ratio of **1.91:1**. This is the recommended size for Twitter and will also render well on LinkedIn and other networks. The best images are abstract backgrounds rather than a photo with a definite subject (like a person). This avoids chopping off part of a head when cropped to render at different aspect ratios.

The theme includes a number of science-oriented backgrounds you can use for your own articles. You can see them `here <https://github.com/aerobatic/pelican-academic/tree/master/static/images>`_.

.. note::

  `Pixabay <https://pixabay.com/>`_ is an excellent source of royalty free images that you can use without attribution.

The featured image is declared in the article YAML metadata::

  featured_image: theme/images/virus.jpg  

JSON-LD
---------

Pelican Academic renders `JSON-LD <https://json-ld.org/metadata>`_ to the `<head>` of the following webpages:

* In the ``index.html`` homepage template, the `profile_metadata <components.html#profile_metadata>`__ component will emit your profile using the `Person schema <http://schema.org/Person>`_. In the view-source of the `demo homepage <https://pelican-academic-demo.aerobaticapp.com>`_, you'll see the following output:

  .. code-block:: html

    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "Person",
        "email": "test@example.org",
        "jobTitle": "Headmaster, Professor of Transfiguration",
        "name": "Albus Dumbledore",
        "worksFor": {
          "location": "Scotland Highlands",
          "name": "Hogwart\u0027s School of Magic"
        }
      }
    </script>

* In the ``article.html`` template, the `article_metadata <components.html#article_metadata>`__ component emits emit your profile using the `Article schema <http://schema.org/Article>`_. In the view-source of the `demo article <https://pelican-academic.aerobaticapp.com/publication/study-interpretation-ancient-runes>`_, you'll see the following output:

  .. code-block:: html

    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "Article",
        "headline": "Interpretation of Ancient Runes",
        "image": [
          "https://pelican-academic.aerobaticapp.com/theme/images/virus.jpg"
        ],
        "datePublished": "2010-12-03 10:20:00-08:00",
        "dateModified": "2015-02-05T09:20:00+08:00",
        "author": [
          {
            "@type": "Person",
            "name": A Dumbledore
          }
        ],
        "url": "https://pelican-academic.aerobaticapp.com/study-interpretation-ancient-runes"
      }
    </script>


Twitter cards
--------------

The `article_metadata <components.html#article_metadata>`__ component also emits the twitter card

.. image:: /images/twitter-card-preview.png
  :width: 500px
  :align: center