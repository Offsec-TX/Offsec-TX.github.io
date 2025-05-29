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

// Filter test cases by selected platform(s)
function handlePlatformChange() {
  const checked = Array.from(document.querySelectorAll('input[name="platform_name"]:checked')).map(cb => cb.id);
  document.querySelectorAll('.test-row').forEach(row => {
    const rowPlatforms = row.getAttribute('data-platforms') ? row.getAttribute('data-platforms').split(',') : [];
    // Show row if any selected platform matches row's platforms, or if none selected show all
    if (checked.length === 0 || checked.some(p => rowPlatforms.includes(p))) {
      row.style.display = '';
      gsap.to(row, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
    } else {
      gsap.to(row, { opacity: 0, y: 40, duration: 0.3, ease: "power2.in", onComplete: () => { row.style.display = 'none'; } });
    }
  });
}

// Attach event listeners to platform checkboxes
document.querySelectorAll('input[name="platform_name"]').forEach(cb => {
  cb.addEventListener('change', handlePlatformChange);
});

// Export to Excel (only visible rows)
// Make sure XLSX is loaded in your HTML for this to work
if (exportBtn) {
  exportBtn.addEventListener('click', () => {
    const table = document.getElementById('testcases');
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    const data = [["Serial Number", "Test Case", "Tested/Not Tested", "Comments"]];
    rows.forEach(row => {
      if (row.style.display === 'none') return;
      const serial = row.cells[0]?.innerText || '';
      const testcase = row.cells[1]?.innerText || '';
      const testedToggle = row.querySelector('.tested-toggle');
      const tested = testedToggle && testedToggle.checked ? "Tested" : "Not-Tested";
      const commentInput = row.querySelector('.comment-input');
      const comment = commentInput ? commentInput.value : '';
      data.push([serial, testcase, tested, comment]);
    });
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "TestCases");
    XLSX.writeFile(wb, "blackbox_testcases.xlsx");
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