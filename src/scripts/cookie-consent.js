// 쿠키 동의 배너 관리

// 쿠키 동의 확인
function checkCookieConsent() {
    return localStorage.getItem('cookieConsent') === 'accepted';
}

// 쿠키 배너 표시
function showCookieBanner() {
    if (checkCookieConsent()) {
        return; // 이미 동의한 경우 배너 표시 안 함
    }

    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.innerHTML = `
        <div class="cookie-content">
            <div class="cookie-text">
                <p>
                    <strong>🍪 쿠키 사용 안내</strong><br>
                    이 웹사이트는 사용자 경험 향상과 광고 제공을 위해 쿠키를 사용합니다.
                    계속 사용하시면 쿠키 사용에 동의하는 것으로 간주됩니다.
                    <a href="privacy.html" target="_blank">개인정보 처리방침</a>에서 자세한 내용을 확인하세요.
                </p>
            </div>
            <div class="cookie-buttons">
                <button id="accept-cookies" class="cookie-btn cookie-btn-accept">동의</button>
                <button id="reject-cookies" class="cookie-btn cookie-btn-reject">거부</button>
            </div>
        </div>
    `;

    document.body.appendChild(banner);

    // 동의 버튼 클릭
    document.getElementById('accept-cookies').addEventListener('click', () => {
        acceptCookies();
        hideCookieBanner();
    });

    // 거부 버튼 클릭
    document.getElementById('reject-cookies').addEventListener('click', () => {
        rejectCookies();
        hideCookieBanner();
    });
}

// 쿠키 동의 처리
function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    // 여기에 Google Analytics 또는 AdSense 초기화 코드 추가
    console.log('쿠키 동의: 분석 및 광고 쿠키 활성화');
}

// 쿠키 거부 처리
function rejectCookies() {
    localStorage.setItem('cookieConsent', 'rejected');
    console.log('쿠키 거부: 필수 쿠키만 사용');
}

// 쿠키 배너 숨기기
function hideCookieBanner() {
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) {
        banner.style.opacity = '0';
        setTimeout(() => {
            banner.remove();
        }, 300);
    }
}

// 페이지 로드 시 쿠키 배너 표시
document.addEventListener('DOMContentLoaded', () => {
    // 약간의 지연 후 배너 표시 (사용자 경험 개선)
    setTimeout(() => {
        showCookieBanner();
    }, 1000);
});
