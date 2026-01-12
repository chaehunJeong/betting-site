// 다국어 번역 데이터
const translations = {
    ko: {
        // 헤더
        title: '🎲 랜덤 선택기',
        subtitle: '사진을 올리면 하나를 골라드려요!',

        // 업로드 섹션
        uploadTitle: '사진을 선택해주세요',
        uploadDescription: '최소 2장, 최대 20장까지 가능해요',
        btnGallery: '📁 갤러리에서 선택',
        btnCamera: '📷 사진 촬영',

        // 미리보기
        uploadedPhotos: '업로드된 사진',
        photosCount: '장',
        btnRandomSelect: '🎯 랜덤 선택하기',

        // 결과 섹션
        resultTitle: '🎉 선택된 결과',
        btnRetry: '🔄 다시 뽑기',
        btnNew: '✨ 새로운 사진으로 시작',

        // 푸터
        footerText: '© 2026 랜덤 선택기 | 결정 장애 해결의 시작',

        // 알림 메시지
        alertMaxImages: '최대 20장까지만 업로드할 수 있습니다.',
        alertNotImage: '은(는) 이미지 파일이 아닙니다.',
        alertFileSize: '은(는) 5MB를 초과합니다.',
        alertMinImages: '최소 2장 이상의 이미지를 업로드해주세요.',
        selectingText: '선택 중...',
    },
    en: {
        // Header
        title: '🎲 Random Picker',
        subtitle: 'Upload photos and we\'ll pick one for you!',

        // Upload section
        uploadTitle: 'Select Your Photos',
        uploadDescription: 'Min 2 photos, Max 20 photos',
        btnGallery: '📁 Choose from Gallery',
        btnCamera: '📷 Take Photo',

        // Preview
        uploadedPhotos: 'Uploaded Photos',
        photosCount: 'photos',
        btnRandomSelect: '🎯 Random Select',

        // Result section
        resultTitle: '🎉 Selected Result',
        btnRetry: '🔄 Try Again',
        btnNew: '✨ Start with New Photos',

        // Footer
        footerText: '© 2026 Random Picker | Solve Your Decision Paralysis',

        // Alert messages
        alertMaxImages: 'You can upload up to 20 photos maximum.',
        alertNotImage: 'is not an image file.',
        alertFileSize: 'exceeds 5MB.',
        alertMinImages: 'Please upload at least 2 images.',
        selectingText: 'Selecting...',
    },
    ja: {
        // ヘッダー
        title: '🎲 ランダム選択',
        subtitle: '写真をアップロードすると、一つを選びます！',

        // アップロードセクション
        uploadTitle: '写真を選択してください',
        uploadDescription: '最小2枚、最大20枚まで',
        btnGallery: '📁 ギャラリーから選択',
        btnCamera: '📷 写真を撮る',

        // プレビュー
        uploadedPhotos: 'アップロードされた写真',
        photosCount: '枚',
        btnRandomSelect: '🎯 ランダム選択',

        // 結果セクション
        resultTitle: '🎉 選択結果',
        btnRetry: '🔄 もう一度',
        btnNew: '✨ 新しい写真で開始',

        // フッター
        footerText: '© 2026 ランダム選択 | 決断の手助け',

        // アラートメッセージ
        alertMaxImages: '最大20枚までアップロードできます。',
        alertNotImage: 'は画像ファイルではありません。',
        alertFileSize: 'は5MBを超えています。',
        alertMinImages: '最低2枚以上の画像をアップロードしてください。',
        selectingText: '選択中...',
    },
    zh: {
        // 标题
        title: '🎲 随机选择器',
        subtitle: '上传照片，我们帮你选一个！',

        // 上传部分
        uploadTitle: '请选择照片',
        uploadDescription: '最少2张，最多20张',
        btnGallery: '📁 从相册选择',
        btnCamera: '📷 拍照',

        // 预览
        uploadedPhotos: '已上传照片',
        photosCount: '张',
        btnRandomSelect: '🎯 随机选择',

        // 结果部分
        resultTitle: '🎉 选择结果',
        btnRetry: '🔄 重新选择',
        btnNew: '✨ 上传新照片',

        // 页脚
        footerText: '© 2026 随机选择器 | 解决选择困难',

        // 提示信息
        alertMaxImages: '最多只能上传20张照片。',
        alertNotImage: '不是图片文件。',
        alertFileSize: '超过5MB。',
        alertMinImages: '请至少上传2张图片。',
        selectingText: '选择中...',
    }
};

// 현재 언어 (기본값: 브라우저 언어 또는 한국어)
let currentLanguage = localStorage.getItem('preferredLanguage') || getBrowserLanguage();

// 브라우저 언어 감지
function getBrowserLanguage() {
    const browserLang = navigator.language.toLowerCase();

    if (browserLang.startsWith('ko')) return 'ko';
    if (browserLang.startsWith('ja')) return 'ja';
    if (browserLang.startsWith('zh')) return 'zh';
    return 'en'; // 기본값: 영어
}

// 언어 변경 함수
function changeLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language ${lang} not supported`);
        return;
    }

    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    updatePageLanguage();
}

// 페이지 텍스트 업데이트
function updatePageLanguage() {
    const t = translations[currentLanguage];

    // 헤더
    document.querySelector('.header h1').textContent = t.title;
    document.querySelector('.subtitle').textContent = t.subtitle;

    // 업로드 섹션
    document.querySelector('.upload-area h2').textContent = t.uploadTitle;
    document.querySelector('.upload-area p').textContent = t.uploadDescription;
    document.querySelector('label[for="file-input"]').textContent = t.btnGallery;
    document.querySelector('label[for="camera-input"]').textContent = t.btnCamera;

    // 미리보기
    const previewTitle = document.querySelector('.preview-container h3');
    if (previewTitle) {
        const count = document.getElementById('image-count').textContent;
        previewTitle.innerHTML = `${t.uploadedPhotos} (<span id="image-count">${count}</span>${t.photosCount})`;
    }

    document.getElementById('select-btn').textContent = t.btnRandomSelect;

    // 결과 섹션
    document.querySelector('.result-container h2').textContent = t.resultTitle;
    document.getElementById('retry-btn').textContent = t.btnRetry;
    document.getElementById('new-btn').textContent = t.btnNew;

    // 푸터
    document.querySelector('.footer p').textContent = t.footerText;

    // HTML lang 속성 업데이트
    document.documentElement.lang = currentLanguage;

    // 언어 선택 버튼 활성화 상태 업데이트
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

// 번역 텍스트 가져오기 함수
function t(key) {
    return translations[currentLanguage][key] || key;
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    updatePageLanguage();
});
