// 전역 변수
let uploadedImages = [];

// DOM 요소
const fileInput = document.getElementById('file-input');
const cameraInput = document.getElementById('camera-input');
const imageGrid = document.getElementById('image-grid');
const previewContainer = document.getElementById('preview-container');
const uploadSection = document.getElementById('upload-section');
const resultSection = document.getElementById('result-section');
const selectBtn = document.getElementById('select-btn');
const retryBtn = document.getElementById('retry-btn');
const newBtn = document.getElementById('new-btn');
const imageCount = document.getElementById('image-count');
const resultImage = document.getElementById('result-image');

// 이벤트 리스너
fileInput.addEventListener('change', handleFileSelect);
cameraInput.addEventListener('change', handleFileSelect);
selectBtn.addEventListener('click', selectRandomImage);
retryBtn.addEventListener('click', selectRandomImage);
newBtn.addEventListener('click', resetApp);

// 파일 선택 핸들러
function handleFileSelect(event) {
    const files = Array.from(event.target.files);

    // 파일 검증
    if (files.length === 0) return;

    if (uploadedImages.length + files.length > 20) {
        alert(t('alertMaxImages'));
        return;
    }

    files.forEach(file => {
        // 파일 타입 검증
        if (!file.type.startsWith('image/')) {
            alert(`${file.name} ${t('alertNotImage')}`);
            return;
        }

        // 파일 크기 검증 (5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert(`${file.name} ${t('alertFileSize')}`);
            return;
        }

        // FileReader로 이미지 읽기
        const reader = new FileReader();

        reader.onload = function(e) {
            const imageData = {
                id: Date.now() + Math.random(),
                src: e.target.result,
                name: file.name
            };

            uploadedImages.push(imageData);
            addImageToGrid(imageData);
            updateImageCount();
            showPreviewContainer();
        };

        reader.readAsDataURL(file);
    });

    // 인풋 리셋 (같은 파일 재선택 가능하도록)
    event.target.value = '';
}

// 이미지를 그리드에 추가
function addImageToGrid(imageData) {
    const imageItem = document.createElement('div');
    imageItem.className = 'image-item';
    imageItem.dataset.id = imageData.id;

    imageItem.innerHTML = `
        <img src="${imageData.src}" alt="${imageData.name}">
        <button class="delete-btn" onclick="deleteImage(${imageData.id})">×</button>
    `;

    imageGrid.appendChild(imageItem);
}

// 이미지 삭제
function deleteImage(imageId) {
    // 배열에서 제거
    uploadedImages = uploadedImages.filter(img => img.id !== imageId);

    // DOM에서 제거
    const imageItem = document.querySelector(`[data-id="${imageId}"]`);
    if (imageItem) {
        imageItem.remove();
    }

    updateImageCount();

    // 이미지가 없으면 미리보기 숨기기
    if (uploadedImages.length === 0) {
        hidePreviewContainer();
    }
}

// 이미지 카운트 업데이트
function updateImageCount() {
    const count = uploadedImages.length;
    imageCount.textContent = count;

    // 미리보기 제목 업데이트 (다국어)
    const previewTitle = document.querySelector('.preview-container h3');
    if (previewTitle && typeof t === 'function') {
        previewTitle.innerHTML = `${t('uploadedPhotos')} (<span id="image-count">${count}</span>${t('photosCount')})`;
    }

    // 선택 버튼 활성화/비활성화
    if (uploadedImages.length >= 2) {
        selectBtn.disabled = false;
    } else {
        selectBtn.disabled = true;
    }
}

// 미리보기 컨테이너 표시
function showPreviewContainer() {
    previewContainer.classList.remove('hidden');
}

// 미리보기 컨테이너 숨기기
function hidePreviewContainer() {
    previewContainer.classList.add('hidden');
}

// 랜덤 이미지 선택
function selectRandomImage() {
    if (uploadedImages.length < 2) {
        alert(t('alertMinImages'));
        return;
    }

    // 애니메이션 효과를 위한 딜레이
    selectBtn.disabled = true;
    selectBtn.textContent = t('selectingText');

    // 랜덤 선택 애니메이션 (슬롯머신 효과)
    let animationCount = 0;
    const animationInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * uploadedImages.length);
        const tempImage = uploadedImages[randomIndex];

        // 결과 영역에 임시로 표시 (빠른 전환)
        resultImage.innerHTML = `<img src="${tempImage.src}" alt="${t('selectingText')}">`;

        animationCount++;

        if (animationCount >= 20) {
            clearInterval(animationInterval);

            // 최종 선택 (Crypto API 사용 - 더 안전한 랜덤)
            const randomValues = new Uint32Array(1);
            crypto.getRandomValues(randomValues);
            const finalIndex = randomValues[0] % uploadedImages.length;
            const selectedImage = uploadedImages[finalIndex];

            // 최종 결과 표시
            resultImage.innerHTML = `<img src="${selectedImage.src}" alt="${selectedImage.name}">`;

            // 화면 전환
            uploadSection.classList.add('hidden');
            resultSection.classList.remove('hidden');

            // 버튼 복원
            selectBtn.disabled = false;
            selectBtn.textContent = t('btnRandomSelect');
        }
    }, 100);
}

// 앱 리셋
function resetApp() {
    // 데이터 초기화
    uploadedImages = [];
    imageGrid.innerHTML = '';
    resultImage.innerHTML = '';

    // 화면 전환
    resultSection.classList.add('hidden');
    uploadSection.classList.remove('hidden');
    hidePreviewContainer();

    // 카운트 리셋
    updateImageCount();
}

// 초기 설정
updateImageCount();
