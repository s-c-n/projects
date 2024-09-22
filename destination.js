// Function to show the region content
function showRegion(region) {
    // Hide all regions
    const regions = document.querySelectorAll('.region');
    regions.forEach((region) => {
        region.style.display = 'none';
    });

    // Show the selected region
    document.getElementById(region).style.display = 'block';
}

// Default to showing the Africa region when the page loads
document.addEventListener('DOMContentLoaded', function () {
    showRegion('africa');
});
