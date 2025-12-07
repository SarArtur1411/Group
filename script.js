// Функція пошуку по категоріях
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.category-card');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    cards.forEach(card => {
        const title = card.querySelector('.category-title').textContent.toLowerCase();
        const brands = card.querySelector('.category-brands').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || brands.includes(searchTerm)) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s';
        } else {
            card.style.display = 'none';
        }
    });
});

// Анімація карток при завантаженні сторінки
cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        card.style.transition = 'all 0.5s';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, index * 50);
});

// Функціонал кнопок фільтрації
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Видаляємо активний клас з усіх кнопок
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Додаємо активний клас до натиснутої кнопки
        button.classList.add('active');
        
        // Тут можна додати логіку сортування/фільтрації
        console.log('Фільтр активовано:', button.textContent);
    });
});

// Додаємо клік по категоріях
cards.forEach(card => {
    card.addEventListener('click', () => {
        const categoryName = card.querySelector('.category-title').textContent;
        console.log('Перехід до категорії:', categoryName);
        // Тут можна додати навігацію, наприклад:
        // window.location.href = `/category/${categoryName}`;
    });
});

// Додаємо стиль для активної кнопки фільтра
const style = document.createElement('style');
style.textContent = `
    .filter-btn.active {
        background: #667eea;
        color: white;
        border-color: #667eea;
    }
`;
document.head.appendChild(style);

// Функція для показу повідомлення при кліку на швидкі посилання
const quickLinks = document.querySelectorAll('.quick-link');

quickLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const linkText = link.textContent;
        console.log('Перехід до:', linkText);
        // Тут можна додати навігацію або показати модальне вікно
    });
});