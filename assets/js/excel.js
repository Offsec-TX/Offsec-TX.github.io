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
        Comments: row.children[6].querySelector('input').value.trim(),
        HowToTest: row.getAttribute('data-howtotest') || ''
    }));

    // Create worksheet and workbook
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Testcases");

    // Download
    const projectName = document.getElementById('projectName').value || 'Testcases';
    XLSX.writeFile(workbook, projectName + ".xlsx");
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