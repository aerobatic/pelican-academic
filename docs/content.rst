Writing content
################

Homepage
==========

Your site homepage is controlled by the ``templates/index.html`` file. Since it is an html template, rather than a markdown file, you have full control over the content and layout. So you can organize it however you like. The default version that comes from the ``pelican-academic-demo`` repo provides a good starting point. The homepage is structured as set of stacked sections such as **Profile**, **Selected Projects**, **Selected Posts**, and **Teaching**. Feel free to add or remove sections to fit your needs.

These homepage sections can work in conjunction with the top navigation menu. When you configure your top_bar menu in your ``templates/base.html``, you can specify that certain links are anchored to a homepage section. When the link is clicked from the homepage itself, the browser will smoothly scroll down to the corresponding section.

You can see this in action by clicking on a link like "Teaching" on the demo at `<https://pelican-academic.aerobaticapp.com>`_.


Math
=====
