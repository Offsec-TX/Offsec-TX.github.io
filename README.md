# Penetration Testing Test Cases Site

This project is a Jekyll-based website that serves as a collection of penetration testing test cases categorized by different approaches: black box, grey box, and white box. The test cases are further divided into four types: network, web, API, and mobile assessments.

## Project Structure

- **_config.yml**: Configuration settings for the Jekyll site, including site title and description.
- **_data/testcases.yml**: YAML file storing the test cases for penetration testing.
- **_includes/checkbox.html**: HTML markup for checkboxes to track completion status of each test case.
- **_layouts/default.html**: Default layout for the site, including header, footer, and main content area.
- **_collections/**: Contains Markdown files for each category and type of test case.
- **assets/js/export.js**: JavaScript functionality to export test case completion status to an Excel sheet.
- **Gemfile**: Specifies Ruby gems required for the Jekyll site.
- **index.md**: Homepage of the site, providing an overview of the test cases.
- **README.md**: Documentation for the project.

## Setup Instructions

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/username/pentest-cases-site.git
   cd pentest-cases-site
   ```

2. **Install Dependencies**: 
   Make sure you have Ruby and Bundler installed. Then run:
   ```bash
   bundle install
   ```

3. **Run the Jekyll Server**: 
   Start the Jekyll server to view the site locally:
   ```bash
   bundle exec jekyll serve
   ```

4. **Access the Site**: 
   Open your web browser and go to `http://localhost:4000` to view the site.

## Features

- **Test Case Tracking**: Each test case includes a checkbox to track its completion status.
- **Export Functionality**: Once all test cases are marked, you can export the status to an Excel sheet summarizing each test case as Tested, Not Tested, or Not Applicable.

## Contribution

Feel free to contribute to this project by adding new test cases or improving existing ones. Please submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.