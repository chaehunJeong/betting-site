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

        // 소개 섹션
        introTitle: '🎯 결정 장애, 이제 그만!',
        introText: '점심 메뉴 고민, 커피 값 내기, 게임 캐릭터 선택... 매일 반복되는 작은 선택들이 스트레스가 되나요? <strong>랜덤 선택기</strong>가 공정하고 재미있게 해결해드립니다!',
        introFeature1Title: '빠른 선택',
        introFeature1Desc: '10초 안에 결정 완료',
        introFeature2Title: '안전한 사용',
        introFeature2Desc: '이미지는 서버에 저장되지 않아요',
        introFeature3Title: '공정한 랜덤',
        introFeature3Desc: '암호학적으로 안전한 알고리즘',
        introFeature4Title: '모바일 최적화',
        introFeature4Desc: '언제 어디서나 사용 가능',

        // 사용법 섹션
        howItWorksTitle: '📖 사용법 (3단계로 끝!)',
        step1Title: '사진 준비',
        step1Desc: '선택하고 싶은 항목들의 사진을 찍거나 준비하세요. 점심 메뉴, 카드, 게임 캐릭터 등 무엇이든 OK!',
        step2Title: '업로드',
        step2Desc: '갤러리에서 선택하거나 바로 촬영하세요. 최소 2장부터 최대 20장까지 가능합니다.',
        step3Title: '랜덤 선택',
        step3Desc: '"랜덤 선택하기" 버튼을 누르면 재미있는 애니메이션과 함께 하나가 선택됩니다!',
        btnDetailedGuide: '자세한 사용법 보기 →',

        // 활용 사례 섹션
        useCasesTitle: '💡 이럴 때 사용하세요!',
        useCase1Title: '점심 메뉴 선택',
        useCase1Desc: '매일 반복되는 "뭐 먹을까?" 고민. 메뉴판 사진 찍고 바로 결정!',
        useCase2Title: '커피 내기',
        useCase2Desc: '팀원들의 이름표나 카드 사진으로 공정하게 커피 값 내는 사람 뽑기',
        useCase3Title: '게임 캐릭터 선택',
        useCase3Desc: '어떤 캐릭터를 플레이할지 고민? 스크린샷 모아서 랜덤 선택!',
        useCase4Title: '여행지 결정',
        useCase4Desc: '가고 싶은 여행지가 너무 많아? 사진 모아서 운명에 맡겨보세요',
        useCase5Title: '영화/드라마 선택',
        useCase5Desc: '오늘 볼 영화 고민? 포스터 사진으로 빠르게 결정',
        useCase6Title: '선물 추첨',
        useCase6Desc: '이벤트나 모임에서 경품 추첨할 때 공정하고 재미있게!',

        // 특징 섹션
        featuresTitle: '✨ 왜 랜덤 선택기를 사용해야 할까요?',
        feature1Title: '빠르고 간편한 사용',
        feature1Desc: '회원가입 없이 바로 사용할 수 있습니다. 사진 업로드부터 선택까지 단 10초! 복잡한 설정이나 학습 없이 누구나 쉽게 사용할 수 있습니다.',
        feature2Title: '완벽한 개인정보 보호',
        feature2Desc: '업로드한 이미지는 서버에 절대 저장되지 않습니다. 모든 처리는 브라우저 메모리에서만 이루어지며, 페이지를 닫으면 자동으로 삭제됩니다.',
        feature3Title: '진짜 랜덤, 진짜 공정',
        feature3Desc: 'Crypto API를 사용한 암호학적으로 안전한 랜덤 알고리즘으로 완전히 공정한 선택을 보장합니다. 어떤 조작이나 편향도 없습니다.',
        feature4Title: '모바일에 최적화',
        feature4Desc: '스마트폰, 태블릿, 데스크톱 모두에서 완벽하게 작동합니다. 모바일에서는 카메라를 바로 실행해서 촬영할 수 있어 더욱 편리합니다.',
        feature5Title: '다국어 지원',
        feature5Desc: '한국어, 영어, 일본어, 중국어를 지원합니다. 전 세계 누구나 편하게 사용할 수 있습니다.',
        feature6Title: '완전 무료',
        feature6Desc: '모든 기능을 무료로 제공합니다. 숨겨진 비용이나 프리미엄 기능이 없습니다. 언제든지 무제한으로 사용하세요!',

        // FAQ 섹션
        faqTitle: '❓ 자주 묻는 질문',
        faq1Q: 'Q. 업로드한 사진은 안전한가요?',
        faq1A: 'A. 네, 100% 안전합니다! 업로드한 이미지는 서버에 전혀 저장되지 않으며, 브라우저 메모리에서만 처리됩니다. 페이지를 닫으면 자동으로 삭제되어 개인정보가 완벽하게 보호됩니다.',
        faq2Q: 'Q. 정말 공정한 랜덤인가요?',
        faq2A: 'A. 네! Crypto API의 getRandomValues() 메서드를 사용하여 암호학적으로 안전한 랜덤 숫자를 생성합니다. 이는 일반적인 Math.random()보다 훨씬 예측 불가능하고 공정합니다.',
        faq3Q: 'Q. 회원가입이 필요한가요?',
        faq3A: 'A. 아니요! 회원가입이나 로그인 없이 바로 사용할 수 있습니다. 개인정보를 수집하지 않아 더욱 안심하고 사용하실 수 있습니다.',
        faq4Q: 'Q. 몇 장의 사진을 업로드할 수 있나요?',
        faq4A: 'A. 최소 2장부터 최대 20장까지 업로드 가능합니다. 각 이미지는 최대 5MB까지 지원하며, JPG, PNG, WebP 등 대부분의 이미지 형식을 지원합니다.',
        faq5Q: 'Q. 모바일에서도 사용할 수 있나요?',
        faq5A: 'A. 물론입니다! 모바일에 완벽하게 최적화되어 있습니다. 스마트폰에서는 "사진 촬영" 버튼을 누르면 카메라가 바로 실행되어 더욱 편리하게 사용할 수 있습니다.',
        faq6Q: 'Q. 비용이 드나요?',
        faq6A: 'A. 완전 무료입니다! 모든 기능을 무제한으로 사용할 수 있으며, 숨겨진 비용이나 프리미엄 기능이 없습니다.',
        faqMore: '더 궁금한 점이 있으신가요?',
        faqLink: '전체 FAQ 보기 →',

        // CTA 섹션
        ctaTitle: '🎉 지금 바로 시작해보세요!',
        ctaDesc: '결정 장애로 고민하는 시간을 줄이고, 더 중요한 일에 집중하세요',
        ctaButton: '📸 사진 업로드하고 시작하기',
        ctaSubtext: '회원가입 없이 바로 사용 가능 • 완전 무료',

        // 푸터
        footerText: '© 2026 랜덤 선택기',
        footerHow: '사용법',
        footerPrivacy: '개인정보 처리방침',
        footerTerms: '이용약관',

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

        // Intro section
        introTitle: '🎯 Say Goodbye to Decision Paralysis!',
        introText: 'Lunch menu decisions, coffee bet, game character selection... Are these daily choices stressing you out? <strong>Random Picker</strong> solves them fairly and fun!',
        introFeature1Title: 'Quick Selection',
        introFeature1Desc: 'Decision made in 10 seconds',
        introFeature2Title: 'Safe to Use',
        introFeature2Desc: 'Images are not stored on server',
        introFeature3Title: 'Fair Random',
        introFeature3Desc: 'Cryptographically secure algorithm',
        introFeature4Title: 'Mobile Optimized',
        introFeature4Desc: 'Use anywhere, anytime',

        // How it works section
        howItWorksTitle: '📖 How to Use (Just 3 Steps!)',
        step1Title: 'Prepare Photos',
        step1Desc: 'Take or prepare photos of items you want to choose from. Lunch menus, cards, game characters - anything goes!',
        step2Title: 'Upload',
        step2Desc: 'Choose from gallery or take photos directly. Upload between 2 to 20 photos.',
        step3Title: 'Random Select',
        step3Desc: 'Click "Random Select" button and watch the fun animation pick one for you!',
        btnDetailedGuide: 'View Detailed Guide →',

        // Use cases section
        useCasesTitle: '💡 Perfect For These Situations!',
        useCase1Title: 'Lunch Menu Selection',
        useCase1Desc: 'Daily "What should I eat?" dilemma. Just snap menu photos and decide instantly!',
        useCase2Title: 'Coffee Bet',
        useCase2Desc: 'Pick who buys coffee fairly with team member name cards or photos',
        useCase3Title: 'Game Character Selection',
        useCase3Desc: 'Can\'t decide which character to play? Screenshot them and let fate decide!',
        useCase4Title: 'Travel Destination',
        useCase4Desc: 'Too many places to visit? Collect photos and leave it to destiny',
        useCase5Title: 'Movie/Drama Selection',
        useCase5Desc: 'Can\'t decide what to watch? Quick decision with poster photos',
        useCase6Title: 'Prize Draw',
        useCase6Desc: 'Fair and fun prize drawing at events or gatherings!',

        // Features section
        featuresTitle: '✨ Why Use Random Picker?',
        feature1Title: 'Fast and Easy',
        feature1Desc: 'No registration required. From upload to selection in just 10 seconds! Easy to use for anyone without complex settings or learning.',
        feature2Title: 'Perfect Privacy Protection',
        feature2Desc: 'Uploaded images are never stored on servers. All processing happens in browser memory and automatically deleted when you close the page.',
        feature3Title: 'True Random, True Fair',
        feature3Desc: 'Uses Crypto API\'s cryptographically secure random algorithm to ensure completely fair selection. No manipulation or bias.',
        feature4Title: 'Mobile Optimized',
        feature4Desc: 'Works perfectly on smartphones, tablets, and desktops. On mobile, camera launches instantly for even more convenience.',
        feature5Title: 'Multi-language Support',
        feature5Desc: 'Supports Korean, English, Japanese, and Chinese. Anyone worldwide can use it comfortably.',
        feature6Title: 'Completely Free',
        feature6Desc: 'All features are free. No hidden costs or premium features. Use unlimited anytime!',

        // FAQ section
        faqTitle: '❓ Frequently Asked Questions',
        faq1Q: 'Q. Are uploaded photos safe?',
        faq1A: 'A. Yes, 100% safe! Uploaded images are not stored on servers at all and only processed in browser memory. They are automatically deleted when you close the page, ensuring perfect privacy protection.',
        faq2Q: 'Q. Is it truly random and fair?',
        faq2A: 'A. Yes! We use Crypto API\'s getRandomValues() method to generate cryptographically secure random numbers. This is much more unpredictable and fair than regular Math.random().',
        faq3Q: 'Q. Do I need to register?',
        faq3A: 'A. No! You can use it immediately without registration or login. We don\'t collect personal information, so you can use it with peace of mind.',
        faq4Q: 'Q. How many photos can I upload?',
        faq4A: 'A. You can upload between 2 to 20 photos. Each image supports up to 5MB and most image formats like JPG, PNG, WebP.',
        faq5Q: 'Q. Can I use it on mobile?',
        faq5A: 'A. Of course! It\'s perfectly optimized for mobile. On smartphones, tap "Take Photo" button to launch camera instantly for more convenience.',
        faq6Q: 'Q. Does it cost anything?',
        faq6A: 'A. Completely free! You can use all features unlimited, with no hidden costs or premium features.',
        faqMore: 'Have more questions?',
        faqLink: 'View Full FAQ →',

        // CTA section
        ctaTitle: '🎉 Start Now!',
        ctaDesc: 'Reduce time spent on decision paralysis and focus on what matters',
        ctaButton: '📸 Upload Photos and Start',
        ctaSubtext: 'No registration required • Completely free',

        // Footer
        footerText: '© 2026 Random Picker',
        footerHow: 'How to Use',
        footerPrivacy: 'Privacy Policy',
        footerTerms: 'Terms of Service',

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

        // 紹介セクション
        introTitle: '🎯 決断疲れ、もうやめよう！',
        introText: 'ランチメニュー、コーヒー代、ゲームキャラ選択...日々の小さな選択がストレスになっていませんか？<strong>ランダム選択</strong>が公平で楽しく解決します！',
        introFeature1Title: '高速選択',
        introFeature1Desc: '10秒で決定完了',
        introFeature2Title: '安全な使用',
        introFeature2Desc: '画像はサーバーに保存されません',
        introFeature3Title: '公平なランダム',
        introFeature3Desc: '暗号学的に安全なアルゴリズム',
        introFeature4Title: 'モバイル最適化',
        introFeature4Desc: 'いつでもどこでも使用可能',

        // 使い方セクション
        howItWorksTitle: '📖 使い方（3ステップで完了！）',
        step1Title: '写真を準備',
        step1Desc: '選びたい項目の写真を撮影または準備します。ランチメニュー、カード、ゲームキャラなど何でもOK！',
        step2Title: 'アップロード',
        step2Desc: 'ギャラリーから選択するか、直接撮影します。2枚から20枚まで可能です。',
        step3Title: 'ランダム選択',
        step3Desc: '「ランダム選択」ボタンを押すと、楽しいアニメーションと共に一つが選ばれます！',
        btnDetailedGuide: '詳しい使い方を見る →',

        // 活用事例セクション
        useCasesTitle: '💡 こんな時に使おう！',
        useCase1Title: 'ランチメニュー選択',
        useCase1Desc: '毎日の「何食べよう？」の悩み。メニュー写真を撮ってすぐ決定！',
        useCase2Title: 'コーヒー代',
        useCase2Desc: 'チームメンバーの名札やカード写真で公平にコーヒー代を払う人を選出',
        useCase3Title: 'ゲームキャラ選択',
        useCase3Desc: 'どのキャラでプレイするか迷う？スクショを集めてランダム選択！',
        useCase4Title: '旅行先決定',
        useCase4Desc: '行きたい場所が多すぎる？写真を集めて運命に任せよう',
        useCase5Title: '映画・ドラマ選択',
        useCase5Desc: '今日見る映画に迷う？ポスター写真で素早く決定',
        useCase6Title: 'プレゼント抽選',
        useCase6Desc: 'イベントや集まりで景品抽選する時、公平で楽しく！',

        // 特徴セクション
        featuresTitle: '✨ なぜランダム選択を使うべき？',
        feature1Title: '速くて簡単な使用',
        feature1Desc: '会員登録不要ですぐ使えます。写真アップロードから選択まで10秒！複雑な設定や学習なしで誰でも簡単に使えます。',
        feature2Title: '完璧な個人情報保護',
        feature2Desc: 'アップロードした画像はサーバーに絶対保存されません。全ての処理はブラウザメモリのみで行われ、ページを閉じると自動削除されます。',
        feature3Title: '本当のランダム、本当の公平',
        feature3Desc: 'Crypto APIを使用した暗号学的に安全なランダムアルゴリズムで完全に公平な選択を保証します。操作や偏りは一切ありません。',
        feature4Title: 'モバイルに最適化',
        feature4Desc: 'スマートフォン、タブレット、デスクトップ全てで完璧に動作します。モバイルではカメラをすぐ起動して撮影できてさらに便利です。',
        feature5Title: '多言語サポート',
        feature5Desc: '韓国語、英語、日本語、中国語をサポート。世界中の誰でも快適に使えます。',
        feature6Title: '完全無料',
        feature6Desc: '全ての機能を無料で提供。隠れた費用やプレミアム機能はありません。いつでも無制限に使えます！',

        // FAQセクション
        faqTitle: '❓ よくある質問',
        faq1Q: 'Q. アップロードした写真は安全ですか？',
        faq1A: 'A. はい、100％安全です！アップロードした画像はサーバーに全く保存されず、ブラウザメモリのみで処理されます。ページを閉じると自動削除され、個人情報が完璧に保護されます。',
        faq2Q: 'Q. 本当に公平なランダムですか？',
        faq2A: 'A. はい！Crypto APIのgetRandomValues()メソッドを使用して暗号学的に安全な乱数を生成します。これは一般的なMath.random()よりはるかに予測不可能で公平です。',
        faq3Q: 'Q. 会員登録は必要ですか？',
        faq3A: 'A. いいえ！会員登録やログインなしですぐ使えます。個人情報を収集しないので安心して使えます。',
        faq4Q: 'Q. 何枚の写真をアップロードできますか？',
        faq4A: 'A. 最小2枚から最大20枚までアップロード可能です。各画像は最大5MBまでサポートし、JPG、PNG、WebPなどほとんどの画像形式をサポートします。',
        faq5Q: 'Q. モバイルでも使えますか？',
        faq5A: 'A. もちろんです！モバイルに完璧に最適化されています。スマートフォンでは「写真を撮る」ボタンを押すとカメラがすぐ起動してさらに便利に使えます。',
        faq6Q: 'Q. 費用はかかりますか？',
        faq6A: 'A. 完全無料です！全ての機能を無制限に使え、隠れた費用やプレミアム機能はありません。',
        faqMore: 'もっと質問がありますか？',
        faqLink: '全てのFAQを見る →',

        // CTAセクション
        ctaTitle: '🎉 今すぐ始めよう！',
        ctaDesc: '決断疲れの時間を減らし、大切なことに集中しましょう',
        ctaButton: '📸 写真をアップロードして始める',
        ctaSubtext: '会員登録不要 • 完全無料',

        // フッター
        footerText: '© 2026 ランダム選択',
        footerHow: '使い方',
        footerPrivacy: 'プライバシーポリシー',
        footerTerms: '利用規約',

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

        // 介绍部分
        introTitle: '🎯 选择困难，到此为止！',
        introText: '午餐菜单、咖啡轮次、游戏角色选择...每天重复的小选择让你压力山大？<strong>随机选择器</strong>公平有趣地帮你解决！',
        introFeature1Title: '快速选择',
        introFeature1Desc: '10秒内完成决定',
        introFeature2Title: '安全使用',
        introFeature2Desc: '图片不会存储在服务器',
        introFeature3Title: '公平随机',
        introFeature3Desc: '密码学安全算法',
        introFeature4Title: '移动优化',
        introFeature4Desc: '随时随地使用',

        // 使用方法部分
        howItWorksTitle: '📖 使用方法（只需3步！）',
        step1Title: '准备照片',
        step1Desc: '拍摄或准备想要选择的项目照片。午餐菜单、卡片、游戏角色等都可以！',
        step2Title: '上传',
        step2Desc: '从相册选择或直接拍照。可上传2到20张照片。',
        step3Title: '随机选择',
        step3Desc: '点击"随机选择"按钮，有趣的动画会帮你选出一个！',
        btnDetailedGuide: '查看详细指南 →',

        // 使用场景部分
        useCasesTitle: '💡 适用这些场景！',
        useCase1Title: '午餐菜单选择',
        useCase1Desc: '每天重复的"吃什么？"烦恼。拍下菜单照片立即决定！',
        useCase2Title: '咖啡轮次',
        useCase2Desc: '用团队成员名牌或卡片照片公平地选出请咖啡的人',
        useCase3Title: '游戏角色选择',
        useCase3Desc: '不知道玩哪个角色？截图收集后随机选择！',
        useCase4Title: '旅行目的地决定',
        useCase4Desc: '想去的地方太多？收集照片让命运决定',
        useCase5Title: '电影/剧集选择',
        useCase5Desc: '不知道看什么电影？用海报照片快速决定',
        useCase6Title: '奖品抽奖',
        useCase6Desc: '活动或聚会抽奖时公平有趣！',

        // 特点部分
        featuresTitle: '✨ 为什么使用随机选择器？',
        feature1Title: '快速简便使用',
        feature1Desc: '无需注册即可使用。从上传到选择只需10秒！无需复杂设置或学习，任何人都能轻松使用。',
        feature2Title: '完美隐私保护',
        feature2Desc: '上传的图片绝不存储在服务器。所有处理仅在浏览器内存中进行，关闭页面后自动删除。',
        feature3Title: '真随机，真公平',
        feature3Desc: '使用Crypto API的密码学安全随机算法，保证完全公平的选择。没有任何操纵或偏见。',
        feature4Title: '移动优化',
        feature4Desc: '在智能手机、平板和桌面上完美运行。移动端可直接启动相机拍照更加方便。',
        feature5Title: '多语言支持',
        feature5Desc: '支持韩语、英语、日语和中文。全球任何人都能舒适使用。',
        feature6Title: '完全免费',
        feature6Desc: '所有功能免费提供。没有隐藏费用或高级功能。随时无限使用！',

        // FAQ部分
        faqTitle: '❓ 常见问题',
        faq1Q: 'Q. 上传的照片安全吗？',
        faq1A: 'A. 是的，100%安全！上传的图片完全不存储在服务器，仅在浏览器内存中处理。关闭页面后自动删除，隐私得到完美保护。',
        faq2Q: 'Q. 真的是公平随机吗？',
        faq2A: 'A. 是的！我们使用Crypto API的getRandomValues()方法生成密码学安全的随机数。比普通的Math.random()更不可预测、更公平。',
        faq3Q: 'Q. 需要注册吗？',
        faq3A: 'A. 不需要！无需注册或登录即可立即使用。我们不收集个人信息，可以放心使用。',
        faq4Q: 'Q. 可以上传多少张照片？',
        faq4A: 'A. 最少2张，最多20张。每张图片最大支持5MB，支持JPG、PNG、WebP等大多数图片格式。',
        faq5Q: 'Q. 可以在移动端使用吗？',
        faq5A: 'A. 当然可以！完美适配移动端。在智能手机上点击"拍照"按钮可立即启动相机，更加方便。',
        faq6Q: 'Q. 需要付费吗？',
        faq6A: 'A. 完全免费！可无限使用所有功能，没有隐藏费用或高级功能。',
        faqMore: '还有其他问题？',
        faqLink: '查看完整FAQ →',

        // CTA部分
        ctaTitle: '🎉 立即开始！',
        ctaDesc: '减少选择困难的时间，专注于更重要的事',
        ctaButton: '📸 上传照片开始',
        ctaSubtext: '无需注册 • 完全免费',

        // 页脚
        footerText: '© 2026 随机选择器',
        footerHow: '使用方法',
        footerPrivacy: '隐私政策',
        footerTerms: '服务条款',

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

    // data-i18n 속성을 가진 모든 요소 번역
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });

    // data-i18n-html 속성을 가진 모든 요소 번역 (HTML 포함)
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        if (t[key]) {
            element.innerHTML = t[key];
        }
    });

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
