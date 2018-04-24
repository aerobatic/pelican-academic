Metadata
#########

Pelican Academic makes use of the latest structured metadata standards to make your site meaningful to non-humans including search engines, Twitter, and other friendly bots that can enhance the discoverability of your site.

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


Twitter card
--------------

The `article_metadata <components.html#article_metadata>`__ component emits the twitter card summary so any tweets containing the url to your article will be enhanced with a title and featured image similiar to this:

.. image:: /images/twitter-card-preview.png
  :width: 500px
  :align: center

In the view-source of the `demo article <https://pelican-academic.aerobaticapp.com/publication/study-interpretation-ancient-runes>`_, you'll see the following output:

.. code-block:: html

    <meta name="twitter:site" content="@aerobaticapp">
    <meta name="twitter:creator" content="@aerobaticapp">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="https://pelican-academic.aerobaticapp.com/theme/images/virus.jpg" />