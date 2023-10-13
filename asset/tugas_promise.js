const apiKey = '07cafdeaeaa44bab83673574ca269b10';
const newsContainer = document.getElementById('news');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Fungsi untuk mengambil berita acak dari API saat halaman dimuat
async function fetchRandomNews() {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        const data = await response.json();
        const articles = data.articles;

        articles.forEach(article => {
            const newsCard = document.createElement('div');
            newsCard.classList.add('col-lg-4', 'col-md-6', 'mb-4');
            newsCard.innerHTML = `
                <div class="card">
                    <img src="${article.urlToImage || 'placeholder-image.jpg'}" class="card-img-top" alt="Berita">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.description || 'Tidak ada deskripsi.'}</p>
                        <a href="${article.url}" target="_blank" class="btn btn-primary">Baca Selengkapnya</a>
                    </div>
                </div>
            `;
            newsContainer.appendChild(newsCard);
        });
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
}

// Event listener saat halaman dimuat
document.addEventListener('DOMContentLoaded', fetchRandomNews);

// Fungsi untuk menampilkan hasil berita
function showNews() {
    newsContainer.style.display = 'block';
}

// Fungsi untuk mengambil berita dari API
async function fetchNews(query) {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`);
        const data = await response.json();
        const articles = data.articles;

        // Tampilkan berita dalam elemen HTML
        newsContainer.innerHTML = ``; // Mengosongkan hasil sebelum menampilkan hasil pencarian baru
        articles.forEach(article => {
            const newsItem = document.createElement('div');
            newsItem.className = 'card col-sm-4'
            newsItem.innerHTML = `
            <div class="card">
                <img src="${article.urlToImage || 'placeholder-image.jpg'}" class="card-img-top" alt="Berita">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.description || 'Tidak ada deskripsi.'}</p>
                    <a href="${article.url}" target="_blank" class="btn btn-primary">Baca Selengkapnya</a>
                </div>
            </div>
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
