# Contributing Guide

Thank you for your interest in contributing to this project! This repository is a collection of test cases for offensive security, focusing on Web, API, Mobile, Network, and Active Directory. The project is organized to make it easy to add test cases and supporting data.

## Project Structure

- **_testcases/**:  
  Contain individual test case files (`<testcase name>.md`). Each file uses a YAML front matter to describe the test case, its usage, and metadata.

- **_data/**:  
  Contains supporting YAML files:
  - `black_platforms.yml`: List of platforms for black-box test cases
  - `grey_platforms.yml`: List of platforms for grey-box test cases
  - `white_platforms.yml`: List of platforms for white-box test cases

- **assets/css/**:  
  Contains SCSS files for site styling (`style.scss`, `styleDark.scss`).

- **Other files**:  
  Standard project files like `README.md`, `CONTRIBUTING.md`, etc.

## Adding a New Test Case

Each test case is defined in a Markdown file in the [`_blackbox/`], [`_greybox/`], or [`_whitebox/`] folder, named `<testcase name>.md`. The file consists only of a YAML front matter block describing the test case and its attributes.

**Example Syntax:**

```
---
sno: 1
testcase: Scan the target for open TCP and UDP ports using nmap.
platforms:
  - Network
  - Web
  - API
  - Mobile
references:
  - https://nmap.org/download.html
---
```

- `platforms`: Values from the relevant platforms YAML file (e.g., [`_data/black_platforms.yml`])
- `references`: At least one link to a relevant tool or resource

## Adding/Updating Data

You may propose new platforms, services, OS, or attack types by editing the corresponding YAML files in `_data/`. These changes are subject to review by project maintainers.

## Pull Request Process

1. **Test Your Test Case:**  
   Ensure your test case is accurate, relevant, and clearly described.

2. **Use Standard YAML Front Matter:**  
   Provide clear and concise YAML front matter as shown in the example above.

3. **Specify Platforms:**  
   List all applicable platforms for your test case using values from the relevant platforms YAML file.

4. **Provide References:**  
   Include at least one link to a relevant tool or resource under `references`.

5. **Data Additions:**  
   If you add new platforms and test cases ensure they are relevant, well-documented, and added to the appropriate YAML files in `_data/`.

6. **Style and Formatting:**  
   Follow the existing YAML and Markdown formatting for consistency and readability.

## Additional Notes

- Pull requests are welcome for both new test cases and updates to supporting data.
- All contributions are reviewed for accuracy, relevance, and formatting.
- For any questions, refer to the [YAML documentation](http://yaml.org/) or open an issue.

[YAML]: http://yaml.org/
[`_testcases/`]: ./_testcases/
[`_data/platforms.yml`]: ./_data/platforms.yml
[`_data/methodology.yml`]: ./_data/methodology.yml

