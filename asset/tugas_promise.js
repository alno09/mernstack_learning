// script.js

const apiKey = '07cafdeaeaa44bab83673574ca269b10'; // Ganti dengan kunci API Anda
const newsContainer = document.getElementById('news');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Fungsi untuk mengambil berita dari API
async function fetchNews(query) {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`);
        const data = await response.json();
        const articles = data.articles;

        // Tampilkan berita dalam elemen HTML
        newsContainer.innerHTML = ''; // Mengosongkan hasil sebelum menampilkan hasil pencarian baru
        articles.forEach(article => {
            const newsItem = document.createElement('div');
            newsItem.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Baca Selengkapnya</a>
            `;
            newsContainer.appendChild(newsItem);
        });
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
}

// Event listener untuk tombol pencarian
searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        fetchNews(query);
    }
});
