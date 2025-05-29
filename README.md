# Offsec-TX

This project is a Jekyll-based website that serves as a collection of penetration testing test cases categorized by different approaches: black box, grey box, and white box. The test cases are further divided into four types: network, web, API, and mobile assessments.

## Project Structure

- **_blackbox/**, **_greybox/**, **_whitebox/**:  
  Contain individual test case files (`<testcase name>.md`). Each file uses a YAML front matter to describe the test case, its usage, and metadata.
- **_data/**:  
  Contains supporting YAML files:
  - `black_platforms.yml`: List of platforms for black-box test cases
  - `grey_platforms.yml`: List of platforms for grey-box test cases
  - `white_platforms.yml`: List of platforms for white-box test cases
- **assets/css/**:  
  Contains SCSS files for site styling (`style.scss`, `styleDark.scss`).
- **_layouts/common.html**: Default layout for the site, including header, footer, and main content area.
- **assets/js/excel.js**: JavaScript functionality to export test case completion status to an Excel sheet.
- **Gemfile**: Specifies Ruby gems required for the Jekyll site.
- **index.md**: Homepage of the site, providing an overview of the test cases.
- **README.md**: Documentation for the project.

## Setup Instructions

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/Offsec-TX/Offsec-TX.github.io.git
   cd Offsec-TX
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

## Contributing Guide

Thank you for your interest in contributing to this project! This repository is a collection of test cases for offensive security, focusing on Web, API, Mobile, Network, and Active Directory. The project is organized to make it easy to add test cases and supporting data.

## Features

- **Test Case Tracking**: Each test case includes a checkbox to track its completion status.
- **Export Functionality**: Once all test cases are marked, you can export the status to an Excel sheet summarizing each test case as Tested, Not Tested, or Not Applicable.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.