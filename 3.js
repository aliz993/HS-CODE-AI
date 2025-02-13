document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('queryInput').value;
    if (query) {
        // 这里可以添加你的查询逻辑
        document.getElementById('results').innerHTML = `<p>You searched for: <strong>${query}</strong></p>`;
    } else {
        alert('Please enter a query');
    }
});