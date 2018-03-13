from pelican import signals
from pelican.readers import Markdown
from jinja2 import Environment, ChoiceLoader

def register_filter(obj):
    if 'JINJA_ENVIRONMENT' in obj.settings: # pelican 3.7
        jinja_environment = obj.settings['JINJA_ENVIRONMENT']
    else:
        jinja_environment = {
            'trim_blocks': True,
            'lstrip_blocks': True,
            'extensions': self.settings['JINJA_EXTENSIONS']
        }

    env = Environment(**jinja_environment)

    md = Markdown(extensions=obj.settings['MARKDOWN']['extensions'])

    # if filters not in self.env:
    env.filters['markdown'] = lambda input: md.convert(input)

def register():
    signals.initialized.connect(register_filter)
