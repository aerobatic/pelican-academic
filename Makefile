# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line.
SPHINXOPTS    =
SPHINXBUILD   = sphinx-build
SPHINXPROJ    = Pelican Academic Docs
SOURCEDIR     = .
BUILDDIR      = _build

serve-docs:
	sphinx-autobuild docs docs/_build/html

# Put it first so that "make" without argument is like "make help".
help:
	@echo 'Help                                           '

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
.PHONY: help
