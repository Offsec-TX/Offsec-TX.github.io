.PHONY: serve serve-public bundle lint

serve:
	bundle exec jekyll serve

serve-public:
	bundle exec jekyll serve --host 0.0.0.0

bundle:
	bundle install

lint:
	yamllint _testcases/*.md
	scripts/validate-schema-testcases.py
	yamllint _wadcoms/*.md
	scripts/validate-schema-wadcoms.py
