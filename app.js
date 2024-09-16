document.getElementById('submitBtn').addEventListener('click', async function() {
    const question = document.getElementById('question').value;

    if (question) {
        // Panggil API AI (contoh menggunakan OpenAI)
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY_HERE'
            },
            body: JSON.stringify({
                model: 'text-davinci-003',
                prompt: question,
                max_tokens: 100
            })
        });

        const result = await response.json();
        document.getElementById('answer').textContent = result.choices[0].text.trim();
    }
});