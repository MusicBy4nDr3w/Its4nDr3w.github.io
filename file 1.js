// Chờ cho đến khi trang tải xong
document.addEventListener('DOMContentLoaded', function() {
    // Sau khi animation hoàn tất, hiển thị nội dung chính
    setTimeout(function() {
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.main-content').classList.add('show-main');
    }, 3000); // Thời gian của animation CSS (3s ở ví dụ trên)
});