---
layout: common
title: WTX
---

{% include page_title.html title=page.title %}

{% include white_platforms.html %}

<!-- External Libraries -->
<script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>
<link rel="stylesheet" href="../assets/css/style.css">


<div style="display: flex; justify-content: flex-end; margin-bottom: 10px;">
  <button id="exportExcel" class="container-btn-file" type="button" aria-label="Export to Excel">
    <svg
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 50 50"
      style="vertical-align: middle; margin-right: 8px;"
    >
      <path
        d="M28.8125 .03125L.8125 5.34375C.339844 
        5.433594 0 5.863281 0 6.34375L0 43.65625C0 
        44.136719 .339844 44.566406 .8125 44.65625L28.8125 
        49.96875C28.875 49.980469 28.9375 50 29 50C29.230469 
        50 29.445313 49.929688 29.625 49.78125C29.855469 49.589844 
        30 49.296875 30 49L30 1C30 .703125 29.855469 .410156 29.625 
        .21875C29.394531 .0273438 29.105469 -.0234375 28.8125 .03125ZM32 
        6L32 13L34 13L34 15L32 15L32 20L34 20L34 22L32 22L32 27L34 27L34 
        29L32 29L32 35L34 35L34 37L32 37L32 44L47 44C48.101563 44 49 
        43.101563 49 42L49 8C49 6.898438 48.101563 6 47 6ZM36 13L44 
        13L44 15L36 15ZM6.6875 15.6875L11.8125 15.6875L14.5 21.28125C14.710938 
        21.722656 14.898438 22.265625 15.0625 22.875L15.09375 22.875C15.199219 
        22.511719 15.402344 21.941406 15.6875 21.21875L18.65625 15.6875L23.34375 
        15.6875L17.75 24.9375L23.5 34.375L18.53125 34.375L15.28125 
        28.28125C15.160156 28.054688 15.035156 27.636719 14.90625 
        27.03125L14.875 27.03125C14.8125 27.316406 14.664063 27.761719 
        14.4375 28.34375L11.1875 34.375L6.1875 34.375L12.15625 25.03125ZM36 
        20L44 20L44 22L36 22ZM36 27L44 27L44 29L36 29ZM36 35L44 35L44 37L36 37Z"
      ></path>
    </svg>
    Export to Excel
  </button>
</div>

<table id="testcases">
  <thead>
    <tr>
      <th style="text-align: center; width: 48px;">S.No</th>
      <th style="text-align: center; min-width: 160px;">Test Case</th>
      <th style="text-align: center; width: 110px;">T/NT</th>
      <th style="text-align: center; width: 130px;">A/NA</th>
      <th style="text-align: center; min-width: 100px;">Comments</th>
    </tr>
  </thead>
  <tbody>
    {% for test in site.whitebox %}
      <tr class="test-row" data-platforms="{% if test.platforms %}{% if test.platforms contains ',' or test.platforms contains '[' %}{{ test.platforms | join: ',' }}{% else %}{{ test.platforms }}{% endif %}{% endif %}">
        <td style="text-align: center;">{{ test.sno }}</td>
        <td>{{ test.testcase }}</td>
        <td>
          <label class="switch tested-switch" aria-label="Tested/Not-Tested">
            <input type="checkbox" class="tested-toggle">
            <div class="slider">
              <div class="circle">
                <svg class="cross" viewBox="0 0 365.696 365.696" height="6" width="6">
                  <g>
                    <path fill="currentColor" d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"></path>
                  </g>
                </svg>
                <svg class="checkmark" viewBox="0 0 24 24" height="10" width="10">
                  <g>
                    <path fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </label>
        </td>
        <td>
          <label class="switch tested-switch" aria-label="Applicable/Not-Applicable">
            <input type="checkbox" class="applicable-toggle">
            <div class="slider">
              <div class="circle">
                <svg class="cross" viewBox="0 0 365.696 365.696" height="6" width="6">
                  <g>
                    <path fill="currentColor" d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"></path>
                  </g>
                </svg>
                <svg class="checkmark" viewBox="0 0 24 24" height="10" width="10">
                  <g>
                    <path fill="currentColor" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </label>
        </td>
        <td>
          <input type="text" class="comment-input" placeholder="Add comment" aria-label="Add comment">
        </td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<script src="../assets/js/excel.js"></script>