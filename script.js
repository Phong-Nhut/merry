// Hàm tạo mưa bông tuyết từ nhiều vị trí
/*function rain() {
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');

    e.classList.add('drop');
    cloud.appendChild(e);

    // Lấy vị trí ngẫu nhiên trên màn hình cho các bông tuyết
    let left = Math.floor(Math.random() * window.innerWidth);
    let size = Math.random() * 1.5 + 0.5;
    let duration = Math.random() * 2 + 1;

    // Thay các biểu tượng bằng các biểu tượng tuyết
    const snowIcons = ['❄️', '⛄', '🎄', '🎅', '🌨️'];
    let randomIcon = snowIcons[Math.floor(Math.random() * snowIcons.length)];

    e.innerText = randomIcon;
    e.style.left = left + 'px';
    e.style.fontSize = size + 'em';
    e.style.animationDuration = duration + 's';

    // Loại bỏ bông tuyết sau khi chúng rơi xuống
    setTimeout(function () {
        cloud.removeChild(e)
    }, 3000);
    
}
*/
// Tạo hiệu ứng mưa tuyết liên tục
setInterval(function () {
    rain();
}, 100);

// Tạo hiệu ứng tuyết rơi từ mọi nơi trên màn hình
function createSnowflake() {
    const snow = document.querySelector('.snow');
    const snowflake = document.createElement('div');

    snowflake.classList.add('snowflake');
    snowflake.innerText = '❄️'; // Biểu tượng bông tuyết

    let leftPosition = Math.random() * window.innerWidth;  // Vị trí ngẫu nhiên
    snowflake.style.left = leftPosition + 'px';
    snowflake.style.fontSize = Math.random() * 1.5 + 1 + 'em';

    snow.appendChild(snowflake);

    // Tạo hiệu ứng tuyết rơi từ trên xuống
    snowflake.style.animation = `fall ${Math.random() * 5 + 3}s linear infinite`;

    // Loại bỏ tuyết sau khi rơi xong
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Tạo bông tuyết rơi liên tục từ khắp nơi trên màn hình
setInterval(createSnowflake, 100);

// Tạo chim bay (thay thành biểu tượng tuyết)
function createBird() {
    const birdsContainer = document.querySelector('.birds-container');
    const bird = document.createElement('div');

    bird.classList.add('bird');
    
    // Thay vì chim, sẽ là các biểu tượng mùa đông
    const snowBirds = ['❄️', '⛄', '🎄', '🎅', '🎀','🦌','🧦','🛷'];
    bird.innerHTML = snowBirds[Math.floor(Math.random() * snowBirds.length)];

    // Thêm random cho vị trí và kích thước biểu tượng
    let topPosition = Math.random() * window.innerHeight;
    bird.style.top = topPosition + 'px';
    bird.style.fontSize = Math.random() * 1.5 + 1 + 'em';

    birdsContainer.appendChild(bird);

    // Tạo phiên bản bay ngược với các biểu tượng mùa đông
    const reverseBird = bird.cloneNode(true);
    reverseBird.classList.add('reverse');
    birdsContainer.appendChild(reverseBird);
}

// Tạo các biểu tượng tuyết bay liên tục sau mỗi 4 giây
setInterval(function () {
    createBird();
}, 4000);
