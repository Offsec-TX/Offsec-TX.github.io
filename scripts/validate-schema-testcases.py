#!/usr/bin/env python3
import jsonschema
import os
import sys
import yaml

def parse_yaml(path):
    with open(path) as fs:
        text = fs.read()
        return yaml.load_all(text, Loader=yaml.SafeLoader)

def build_schema():
    service_names = list(next(parse_yaml('_data/services.yml')).keys())
    platforms_names = list(next(parse_yaml('_data/platforms.yml')).keys())
    methodology_names = list(next(parse_yaml('_data/methodology.yml')).keys())
    return {
        "definitions": {
            'examples': {
                'type': 'array',
                'items': {
                    'type': 'object',
                    'properties': {
                        'description': {'type': 'string'},
                        'code': {'type': 'string'},
                    },
                    'required': ['description', 'code'],
                    'additionalProperties': False
                },
                'minItems': 1
            }
        },
        'type': 'object',
        'properties': {
            'description': {'type': 'string'},
            'command': {'type': 'string'},
            'services': {
                'type': 'array',
                'items': {'type': 'string', 'enum': service_names},
                'minItems': 1,
                'uniqueItems': True
            },
            'methodology': {
                'type': 'array',
                'items': {'type': 'string', 'enum': methodology_names},
                'minItems': 1,
                'uniqueItems': True
            },
            'platforms': {
                'type': 'array',
                'items': {'type': 'string', 'enum': platforms_names},
                'minItems': 1,
                'uniqueItems': True
            },
            'examples': {'$ref': '#/definitions/examples'},
            'references': {
                'type': 'array',
                'items': {'type': 'string'},
                'minItems': 0,
                'uniqueItems': True
            }
        },
        'required': ['services', 'platforms', 'methodology', 'references'],
        'additionalProperties': False
    }

def validate_directory(root):
    schema = build_schema()
    root, _, files = next(os.walk(root))
    for name in files:
        if not name.endswith('.md'):
            continue
        path = os.path.join(root, name)
        data = parse_yaml(path)
        try:
            jsonschema.validate(next(data), schema)
        except jsonschema.exceptions.ValidationError as err:
            print('{}: {}'.format(name, err))
            sys.exit(1)

if __name__ == '__main__':
   validate_directory("_testcases/")
