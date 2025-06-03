# Offsec-TXICC

This project is a Jekyll-based website that hosts a collection of penetration testing test cases categorized by different approaches: black box, grey box, and white box. The test cases are further divided into types: network, web, API, and mobile assessments.

## Project Structure

```
Offsec-TX.github.io/
├── _data/
│   ├── methodology.yml      # List of testing methodologies
│   ├── platforms.yml        # List of platforms for test cases
│   ├── services.yml         # (Optional) List of services for test cases
│   ├── OS.yml               # (Optional) List of Operating Systems
│   ├── items.yml            # (Optional) Additional test case metadata
│   └── attack_types.yml     # (Optional) List of attack types or techniques
├── _includes/
│   ├── bin_testcases.html   # HTML partial for test case table & export functionality
│   └── ...                  # Additional partials and components
├── _layouts/
│   └── common.html          # Default layout for header, footer, and main content area
├── _testcases/
│   └── <testcase>.md        # Individual test case files with YAML front matter
├── assets/
│   ├── css/
│   │   ├── style.scss       # Main SCSS file for site styling
│   │   └── styleDark.scss   # Alternative dark theme styling
│   └── js/
│       └── excel.js         # JavaScript to export test case statuses to Excel
├── Gemfile                  # Ruby gems required for the Jekyll site
├── index.md                 # Homepage overview
└── README.md                # Project documentation
```

## Setup Instructions

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/Offsec-TX/Offsec-TX.github.io.git
   cd Offsec-TX.github.io
   ```

2. **Install Dependencies**:  
   Ensure you have Ruby and Bundler installed, then run:
   ```bash
   bundle install
   ```

3. **Run the Jekyll Server**:  
   Start the Jekyll server to view the site locally:
   ```bash
   bundle exec jekyll serve
   ```

4. **Access the Site**:  
   Open your web browser and navigate to `http://localhost:4000` to view the site.

## Contributing Guide

We welcome contributions! Whether you're adding new test cases, improving existing ones, or enhancing documentation, please refer to our [Contributing Guidelines](/contribute/) for details.

## Features

- **Test Case Tracking**:  
  Each test case includes checkboxes to record its status as Tested, Not Tested, or Not Applicable.

- **Export Functionality**:  
  Easily export the test case statuses to an Excel sheet for a consolidated overview.

- **Dynamic Filtering**:  
  Filter test cases by methodologies, services, platforms, and operating systems for quick navigation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for additional details.