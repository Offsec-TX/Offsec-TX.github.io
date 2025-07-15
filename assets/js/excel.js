// GSAP animation for the Export button
const exportBtn = document.getElementById('exportExcel');
if (exportBtn) {
  exportBtn.addEventListener('mouseenter', () => {
    gsap.to(exportBtn, { scale: 1.08, boxShadow: "0px 4px 24px #107C10", duration: 0.3 });
  });
  exportBtn.addEventListener('mouseleave', () => {
    gsap.to(exportBtn, { scale: 1, boxShadow: "0px 0px 0px #107C10", duration: 0.3 });
  });
  exportBtn.addEventListener('mousedown', () => {
    gsap.to(exportBtn, { scale: 0.96, duration: 0.1 });
  });
  exportBtn.addEventListener('mouseup', () => {
    gsap.to(exportBtn, { scale: 1.08, duration: 0.1 });
  });
}

// GSAP grid animation for table rows
window.addEventListener('DOMContentLoaded', () => {
  gsap.from(".test-row", {
    opacity: 0,
    y: 40,
    stagger: 0.08,
    duration: 0.6,
    ease: "power2.out"
  });
});


// Export to Excel (only visible rows)
// Make sure XLSX is loaded in your HTML for this to work
if (exportBtn) {
  exportBtn.addEventListener('click', () => {
    const rows = Array.from(document.querySelectorAll('#testcases .test-row'))
        .filter(row => row.style.display !== 'none');
    const exportData = rows.map(row => ({
        SNo: row.querySelector('td').textContent.trim(),
        TestCase: row.children[1].textContent.trim(),
        OWASP_Category: row.children[2].textContent.trim(),
        T_NT: row.children[3].querySelector('input').checked ? 'Tested' : 'Not Tested',
        A_NA: row.children[4].querySelector('input').checked ? 'Applicable' : 'Not Applicable',
        V_NV: row.children[5].querySelector('input').checked ? 'Vulnerable' : 'Not Vulnerable',
        HowToTest: row.getAttribute('data-howtotest') || '',
        References: row.getAttribute('data-references') || '',
        Comments: row.children[6].querySelector('input').value.trim()
    }));

    // Create worksheet and workbook
    const worksheet = XLSX.utils.json_to_sheet(exportData);

    // Style TestCase and HowToTest columns: wrap text and left align
    const testCaseCol = XLSX.utils.decode_col("B"); // 2nd column
    const howToTestCol = XLSX.utils.decode_col("G"); // 7th column
    const range = XLSX.utils.decode_range(worksheet['!ref']);
    for (let rowNum = range.s.r + 1; rowNum <= range.e.r; ++rowNum) { // skip header row
        [testCaseCol, howToTestCol].forEach(col => {
            const cellAddress = { c: col, r: rowNum };
            const cellRef = XLSX.utils.encode_cell(cellAddress);
            if (worksheet[cellRef]) {
                worksheet[cellRef].s = {
                    alignment: { wrapText: true, horizontal: "left", vertical: "top" }
                };
            }
        });
    }

    // Auto-adjust column width based on max content length
    function getMaxColWidth(colIdx) {
        let maxLen = 10; // minimum width
        for (let rowNum = range.s.r; rowNum <= range.e.r; ++rowNum) {
            const cellRef = XLSX.utils.encode_cell({ c: colIdx, r: rowNum });
            const cell = worksheet[cellRef];
            if (cell && cell.v) {
                const len = String(cell.v).length;
                if (len > maxLen) maxLen = len;
            }
        }
        // Approximate width: 1 char ~ 1.2 units
        return Math.ceil(maxLen * 1.2);
    }
    worksheet['!cols'] = worksheet['!cols'] || [];
    worksheet['!cols'][testCaseCol] = { width: getMaxColWidth(testCaseCol) };
    worksheet['!cols'][howToTestCol] = { width: getMaxColWidth(howToTestCol) };

    // ...existing code to create workbook and export...
    const workbook = XLSX.utils.book_new();
    workbook.SheetNames.push("Testcases");
    workbook.Sheets["Testcases"] = worksheet;

    XLSX.writeFile(workbook, projectName + ".xlsx", { cellStyles: true });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const platformButtons = document.querySelectorAll(".platform-btn");
  const testRows = document.querySelectorAll(".test-row");

  platformButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove 'active' from all buttons, then set for clicked
      platformButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const selectedPlatform = btn.getAttribute("data-label").toLowerCase();

      testRows.forEach((row) => {
        const platforms = row.getAttribute("data-platforms");
        if (!platforms) {
          row.style.display = "none";
          return;
        }
        // Normalize and check if selected platform is present
        const platformList = platforms
          .toLowerCase()
          .replace(/[\[\]\s]/g, "")
          .split(",");
        if (platformList.includes(selectedPlatform)) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    });
  });
});