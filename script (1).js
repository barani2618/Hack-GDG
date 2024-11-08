<script>
    document.getElementById('news-form').addEventListener('submit', function(e) {
        e.preventDefault();

        let newsText = document.getElementById('news-text').value.trim();

        if(newsText === '') {
            alert('Please enter the news article text!');
            return;
        }

        // Simulate fake news detection (you can replace this with a real API call)
        let resultText = detectFakeNews(newsText);

        // Display the result
        let resultDiv = document.getElementById('result');
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `<h3>Result:</h3><p>${resultText}</p>`;
    });

    function detectFakeNews(text) {
        // A mock detection function (replace with real logic or API call)
        if (text.toLowerCase().includes('hoax') || text.toLowerCase().includes('fake')) {
            return "This news appears to be fake!";
        } else {
            return "This news appears to be true.";
        }
    }
</script>
