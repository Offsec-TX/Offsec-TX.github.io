---
layout: page
title: Contribute
---

## Structure

Each test case is defined in a Markdown file in the [`_blackbox/`], [`_greybox/`], or [`_whitebox/`] folder, named `<testcase name>.md`. The file consists only of a YAML front matter block describing the test case and its attributes.

The full syntax is the following:

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

`platforms`: Values from the relevant platforms YAML file (e.g., [`_data/black_platforms.yml`])
`references`: At least one link to a relevant tool or resource

## Pull request process

I accept commands that run on either Linux or Windows, just as long as they are useful for any kind of attacking scenario.

Before sending a pull request of a new command, ensure the following:

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


[YAML]: http://yaml.org/
[`__blackbox/`]: https://github.com/Offsec-TX/Offsec-TX.github.io/tree/master/_blackbox/
[`_greybox/`]: https://github.com/Offsec-TX/Offsec-TX.github.io/tree/master/_greybox/
[`_greybox/`]: https://github.com/Offsec-TX/Offsec-TX.github.io/tree/master/_whitebox/
[`_data/black_platforms.yml`]: https://github.com/Offsec-TX/Offsec-TX.github.io/blob/master/_data/black_platforms.yml
[`_data/grey_platforms.yml`]: https://github.com/Offsec-TX/Offsec-TX.github.io/blob/master/_data/grey_platforms.yml
[`_data/white_platforms.yml`]: https://github.com/Offsec-TX/Offsec-TX.github.io/blob/master/_data/white_platforms.yml
