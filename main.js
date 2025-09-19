// Enhanced DapBuddy Application
class DapBuddyApp {

    // REFACTOR: Moved data to the constructor for better organization.
    // In a real app, this would be fetched from an API.
    constructor() {
        this.rawData = {
            users: [{"user_id":"U100001","username":"user_1","rating":3.6,"services":[{"category_code":"ED","sub_category_code":"UD"},{"category_code":"SW","sub_category_code":"M3"}]},{"user_id":"U100002","username":"user_2","rating":4.1,"services":[{"category_code":"SW","sub_category_code":"AC"},{"category_code":"AI","sub_category_code":"GG"},{"category_code":"GA","sub_category_code":"EA"}]},{"user_id":"U100003","username":"user_3","rating":4.7,"services":[{"category_code":"ED","sub_category_code":"UD"},{"category_code":"CS","sub_category_code":"IC"},{"category_code":"SE","sub_category_code":"CGH"},{"category_code":"MU","sub_category_code":"SP"}]},{"user_id":"U100004","username":"user_4","rating":4.4,"services":[{"category_code":"SW","sub_category_code":"SL"},{"category_code":"SE","sub_category_code":"SS"},{"category_code":"ED","sub_category_code":"CR"},{"category_code":"EC","sub_category_code":"EB"}]},{"user_id":"U100005","username":"user_5","rating":3.3,"services":[{"category_code":"CS","sub_category_code":"GD"},{"category_code":"SE","sub_category_code":"SS"},{"category_code":"EC","sub_category_code":"WM"}]},{"user_id":"U100006","username":"user_6","rating":4.9,"services":[{"category_code":"AI","sub_category_code":"NA"},{"category_code":"ST","sub_category_code":"NF"},{"category_code":"CS","sub_category_code":"DB"}]},{"user_id":"U100007","username":"user_7","rating":3.7,"services":[{"category_code":"ST","sub_category_code":"AP"},{"category_code":"EC","sub_category_code":"AL"}]},{"user_id":"U100008","username":"user_8","rating":4.2,"services":[{"category_code":"MU","sub_category_code":"AM"},{"category_code":"AI","sub_category_code":"CG"},{"category_code":"GA","sub_category_code":"SM"}]},{"user_id":"U100009","username":"user_9","rating":4.6,"services":[{"category_code":"SE","sub_category_code":"PV"},{"category_code":"ED","sub_category_code":"BJ"},{"category_code":"ST","sub_category_code":"HU"}]},{"user_id":"U100010","username":"user_10","rating":3.8,"services":[{"category_code":"MU","sub_category_code":"TD"},{"category_code":"ST","sub_category_code":"DS"},{"category_code":"SW","sub_category_code":"ZM"},{"category_code":"EC","sub_category_code":"AMZ"}]},{"user_id":"U100011","username":"user_11","rating":4.0,"services":[{"category_code":"MU","sub_category_code":"SP"},{"category_code":"AI","sub_category_code":"CL"}]}],
            listingIds: ["LST-U100001-EDUD-001","LST-U100001-SWM3-002","LST-U100002-AIGG-002","LST-U100002-GAEA-003","LST-U100002-SWAC-001","LST-U100003-CSIC-002","LST-U100003-EDUD-001","LST-U100003-MUSP-004","LST-U100003-SECGH-003","LST-U100004-ECEB-004","LST-U100004-EDCR-003","LST-U100004-SESS-002","LST-U100004-SWSL-001","LST-U100005-CSGD-001","LST-U100005-ECWM-003","LST-U100005-SESS-002","LST-U100006-AINA-001","LST-U100006-CSDB-003","LST-U100006-STNF-002","LST-U100007-ECAL-002","LST-U100007-STAP-001","LST-U100008-AICG-002","LST-U100008-GASM-003","LST-U100008-MUAM-001","LST-U100009-EDBJ-002","LST-U100009-SEPV-001","LST-U100009-STHU-003","LST-U100010-ECAMZ-004","LST-U100010-MUTD-001","LST-U100010-STDS-002","LST-U100010-SWZM-003","LST-U100011-AICL-002","LST-U100011-MUSP-001"]
        };
        this.serviceNameMap = {
            category: { 'MU': 'Music', 'ST': 'Streaming', 'AI': 'AI & Productivity', 'SW': 'Software', 'SE': 'Security', 'ED': 'Education', 'CS': 'Cloud Storage', 'GA': 'Games', 'EC': 'E-commerce' },
            subCategory: { 'SP': 'Spotify', 'AM': 'Apple Music', 'YM': 'YouTube Music', 'AZ': 'Amazon Music', 'TD': 'Tidal', 'NF': 'Netflix', 'DS': 'Disney+', 'AP': 'Amazon Prime Video', 'HU': 'Hulu', 'HB': 'HBO Max', 'CG': 'ChatGPT', 'GG': 'Google Gemini', 'CL': 'Claude (Anthropic)', 'MC': 'Microsoft Copilot', 'NA': 'Notion AI', 'M3': 'Microsoft 365', 'GW': 'Google Workspace', 'AC': 'Adobe Creative Cloud', 'SL': 'Slack', 'ZM': 'Zoom', 'NV': 'NordVPN', 'EV': 'ExpressVPN', 'SS': 'Surfshark', 'PV': 'ProtonVPN', 'CGH': 'CyberGhost', 'DL': 'Duolingo', 'CR': 'Coursera', 'KA': 'Khan Academy', 'UD': 'Udemy', 'BJ': 'BYJU\'s', 'IC': 'iCloud+', 'GD': 'Google Drive', 'DB': 'Dropbox', 'OD': 'OneDrive', 'MG': 'Mega', 'XG': 'Xbox Game Pass', 'PS': 'PlayStation Plus', 'NS': 'Nintendo Switch Online', 'EA': 'EA Play', 'SM': 'Steam', 'AMZ': 'Amazon Prime', 'FP': 'Flipkart Plus', 'WM': 'Walmart+', 'EB': 'eBay', 'AL': 'AliExpress' }
        };
        this.serviceMetadata = {
            'SP': { icon: '🎵', logoClass: 'spotify', description: 'Premium music streaming' },
            'NF': { icon: '🎬', logoClass: 'netflix', description: 'Unlimited movies and TV shows' },
            'CG': { icon: '🤖', logoClass: 'chatgpt', description: 'AI-powered productivity assistant' },
            'M3': { icon: '📊', logoClass: 'microsoft', description: 'Complete office suite' },
            'UD': { icon: '🦉', logoClass: 'duolingo', description: 'Learn a new skill online' },
        };
        this.dapBuddyPlans = {
            "service_categories": [{
                "category_name": "🎵 Music",
                "services": [{
                    "service_id": "SPOTIFY_FAMILY_SLOT_1M",
                    "service_name": "Spotify",
                    "plan_name": "Premium (1 Slot)",
                    "pricing": {
                        "actual_price": 139.00,
                        "offered_price": 70.00,
                        "price_breakdown": {
                            "base_price": 59.00,
                            "platform_fees": 11.00
                        }
                    }
                }, {
                    "service_id": "APPLE_MUSIC_FAMILY_SLOT_1M",
                    "service_name": "Apple Music",
                    "plan_name": "Family Plan (1 Slot)",
                    "pricing": {
                        "actual_price": 99.00,
                        "offered_price": 50.00,
                        "price_breakdown": {
                            "base_price": 39.00,
                            "platform_fees": 11.00
                        }
                    }
                }, {
                    "service_id": "YOUTUBE_MUSIC_FAMILY_SLOT_1M",
                    "service_name": "YouTube Music",
                    "plan_name": "Premium Family (1 Slot)",
                    "pricing": {
                        "actual_price": 129.00,
                        "offered_price": 60.00,
                        "price_breakdown": {
                            "base_price": 49.00,
                            "platform_fees": 11.00
                        }
                    }
                }, ]
            }, {
                "category_name": "🎬 Streaming (Video)",
                "services": [{
                    "service_id": "NETFLIX_PREMIUM_SLOT_1M",
                    "service_name": "Netflix",
                    "plan_name": "Premium (1 Slot/Screen)",
                    "pricing": {
                        "actual_price": 499.00,
                        "offered_price": 290.00,
                        "price_breakdown": {
                            "base_price": 259.00,
                            "platform_fees": 31.00
                        }
                    }
                }, {
                    "service_id": "HOTSTAR_PREMIUM_SLOT_1M",
                    "service_name": "Disney+ Hotstar",
                    "plan_name": "Premium (1 Slot/Screen)",
                    "pricing": {
                        "actual_price": 299.00,
                        "offered_price": 140.00,
                        "price_breakdown": {
                            "base_price": 119.00,
                            "platform_fees": 21.00
                        }
                    }
                }, {
                    "service_id": "PRIME_VIDEO_1M",
                    "service_name": "Amazon Prime Video",
                    "plan_name": "Standard",
                    "pricing": {
                        "actual_price": 125.00,
                        "offered_price": 125.00,
                        "price_breakdown": {
                            "base_price": 125.00,
                            "platform_fees": 0.00
                        }
                    }
                }]
            }, {
                "category_name": "🤖 AI & Productivity",
                "services": [{
                    "service_id": "CHATGPT_PLUS_1M",
                    "service_name": "ChatGPT",
                    "plan_name": "Plus",
                    "pricing": {
                        "actual_price": 1670.00,
                        "offered_price": 1670.00,
                        "price_breakdown": {
                            "base_price": 1670.00,
                            "platform_fees": 0.00
                        }
                    }
                }, {
                    "service_id": "GEMINI_ADVANCED_FAMILY_SLOT_1M",
                    "service_name": "Google Gemini",
                    "plan_name": "Advanced (1 Slot)",
                    "pricing": {
                        "actual_price": 1950.00,
                        "offered_price": 530.00,
                        "price_breakdown": {
                            "base_price": 469.00,
                            "platform_fees": 61.00
                        }
                    }
                }, ]
            }, {
                "category_name": "💻 Software (Office / General Tools)",
                "services": [{
                    "service_id": "M365_FAMILY_SLOT_1M",
                    "service_name": "Microsoft 365",
                    "plan_name": "Family (1 Slot)",
                    "pricing": {
                        "actual_price": 408.00,
                        "offered_price": 130.00,
                        "price_breakdown": {
                            "base_price": 119.00,
                            "platform_fees": 11.00
                        }
                    }
                }, ]
            }, {
                "category_name": "📚 Education / Learning",
                "services": [{
                    "service_id": "DUOLINGO_FAMILY_SLOT_1M",
                    "service_name": "Duolingo",
                    "plan_name": "Super Family (1 Slot)",
                    "pricing": {
                        "actual_price": 62.00,
                        "offered_price": 30.00,
                        "price_breakdown": {
                            "base_price": 29.00,
                            "platform_fees": 1.00
                        }
                    }
                }, ]
            }, ]
        };

        this.loadAndProcessData();
        this.initializeState();
        this.initializeElements();
        this.init();
    }

    loadAndProcessData() {
        const rawUserData = this.rawData.users;
        const rawListingIds = this.rawData.listingIds;

        // REFACTOR: Create a map of users first for efficient lookup (O(1) instead of O(n)).
        this.users = rawUserData.reduce((acc, user) => {
            acc[user.user_id] = { 
                username: user.username, 
                rating: user.rating,
                services: user.services // Keep services here for easier lookup
            };
            return acc;
        }, {});

        this.listings = rawListingIds.map(id => {
            const parts = id.split('-');
            if (parts.length < 3) return null;
            
            const userId = parts[1];
            const fullServiceCode = parts[2];

            // FIX: Use the efficient 'this.users' map instead of searching the raw array again.
            const user = this.users[userId];
            if (!user) return null;

            const serviceInfo = user.services.find(s => (s.category_code + s.sub_category_code) === fullServiceCode);
            if (!serviceInfo) return null;

            return {
                id: id,
                userId: userId,
                categoryCode: serviceInfo.category_code,
                subCategoryCode: serviceInfo.sub_category_code,
                // FIX: Generate a consistent random price once and store it.
                price: Math.floor(Math.random() * (80 - 45 + 1)) + 45
            };
        }).filter(Boolean);

        this.availableServices = this.listings.reduce((acc, listing) => {
            if (!acc[listing.subCategoryCode]) {
                acc[listing.subCategoryCode] = {
                    name: this.serviceNameMap.subCategory[listing.subCategoryCode] || 'Unknown',
                    category: this.serviceNameMap.category[listing.categoryCode] || 'Unknown',
                    code: listing.subCategoryCode,
                    listingCount: 0,
                };
            }
            acc[listing.subCategoryCode].listingCount++;
            return acc;
        }, {});
    }
    
    getCommunityPlansForService(serviceName) {
        const subCategoryCode = Object.keys(this.serviceNameMap.subCategory).find(
            key => this.serviceNameMap.subCategory[key] === serviceName
        );

        if (!subCategoryCode) return [];

        return this.listings
            .filter(listing => listing.subCategoryCode === subCategoryCode)
            .map(listing => {
                const user = this.users[listing.userId];
                // FIX: Price is now read from the processed listing, not randomly generated each time.
                return user ? {
                    username: user.username,
                    rating: user.rating,
                    price: listing.price, 
                } : null;
            })
            .filter(Boolean);
    }
    
    // ... (rest of the methods are mostly the same, placed inside the class)

    updateAuthState() {
        if (this.isLoggedIn) {
            this.appContainer.classList.add('logged-in');
        } else {
            this.appContainer.classList.remove('logged-in');
        }
    }

    initializeElements() {
        this.filterPills = document.querySelectorAll('.filter-pill');
        this.serviceCards = document.querySelectorAll('.service-card');
        this.searchInput = document.querySelector('.search-input');
        this.marketplaceSearchInput = document.getElementById('marketplaceSearch');
        this.hamburger = document.getElementById('hamburgerBtn');
        this.appContainer = document.querySelector('.app-container');
        this.profileBtn = document.querySelector('.profile-btn');
        this.authButtons = document.querySelector('.auth-buttons');
        this.loginBtn = document.getElementById('loginBtn');
        this.signupBtn = document.getElementById('signupBtn');
        this.slides = [];
        this.slideshowTrack = document.getElementById('slideshowTrack');
        this.slideshowViewport = document.querySelector('.slideshow-viewport');
        this.slidePrevBtn = document.getElementById('slidePrevBtn');
        this.slideNextBtn = document.getElementById('slideNextBtn');
        this.slideshowIndicators = document.getElementById('slideshowIndicators');
        this.dropdownMenu = document.getElementById('dropdownMenu');
        this.dropdownOverlay = document.getElementById('dropdownOverlay');
        this.themeToggle = document.getElementById('themeToggle');
        this.marketplaceThemeToggle = document.getElementById('marketplaceToggle');
        this.profileMenuOverlay = document.getElementById('profileMenuOverlay');
        this.profileMenuContent = document.getElementById('profileMenuContent');
        this.profileMenuBackground = document.getElementById('profileMenuBackground');
        this.profileBackBtn = document.getElementById('profileBackBtn');
        this.editAvatarBtn = document.getElementById('editAvatarBtn');
        this.avatarEditSheet = document.getElementById('avatarEditSheet');
        this.sheetBackdrop = document.getElementById('sheetBackdrop');
        this.removePhotoBtn = document.getElementById('removePhotoBtn');
        this.cameraBtn = document.getElementById('cameraBtn');
        this.uploadBtn = document.getElementById('uploadBtn');
        this.logoutBtn = document.getElementById('logoutBtn');
        this.planDetailsOverlay = document.getElementById('planDetailsOverlay');
        this.closeOverlayBtn = document.getElementById('closeOverlayBtn');
        this.overlayElements = {
            officialPlanName: document.getElementById('officialPlanName'),
            officialPlanPrice: document.getElementById('officialPlanPrice'),
            dapPlanPrice: document.getElementById('dapPlanPrice'),
            basePrice: document.getElementById('basePrice'),
            platformFee: document.getElementById('platformFee'),
            gstAmount: document.getElementById('gstAmount'),
            totalPrice: document.getElementById('totalPrice')
        };
        
        // Marketplace specific elements
        this.marketplaceContainer = document.getElementById('marketplace-container');
        this.totalPlansElement = document.getElementById('totalPlans');
        this.avgPriceElement = document.getElementById('avgPrice');
        this.topRatingElement = document.getElementById('topRating');
        this.sortFilter = document.getElementById('sortFilter');
        this.priceFilter = document.getElementById('priceFilter');
    }

    initializeState() {
        // REFACTOR: Use constants for magic numbers
        this.SLIDE_TIMER_DURATION = 4000;
        this.USER_INTERACTION_TIMEOUT = 8000;
        this.SLIDE_TRANSITION_DURATION = 800;

        this.currentSlide = 0;
        this.totalSlides = 0;
        this.slideInterval = null;
        this.isTransitioning = false;
        this.userInteractionTimer = null;
        this.isUserInteracting = false;
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.touchCurrentX = 0;
        this.touchCurrentY = 0;
        this.isProfileDragging = false;
        this.isSlideDragging = false;
        this.slideStartX = 0;
        this.isDarkMode = this.getStoredTheme();
        this.profileBtnInitialPos = { top: 0, left: 0 };
        this.isLoggedIn = false; // Set to true for development to see logged-in state
        this.currentMarketplacePlans = [];
        this.filteredPlans = [];
    }

    getStoredTheme() {
        const stored = localStorage.getItem('dapbuddy-theme');
        if (stored) {
            return stored === 'dark';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    storeTheme(isDark) {
        localStorage.setItem('dapbuddy-theme', isDark ? 'dark' : 'light');
    }
    
    renderSlides() {
        if (!this.slideshowTrack) return;
        const servicesToRender = Object.values(this.availableServices);
        const slidesHTML = servicesToRender.map((service, index) => {
            const metadata = this.serviceMetadata[service.code] || { icon: '💰', logoClass: 'default', description: `${service.listingCount} plans available` };
            const serviceName = encodeURIComponent(service.name);
            return `
                <a class="slide" data-category="${service.category}" href="marketplace.html?service=${serviceName}">
                    <div class="slide-content">
                        <div class="slide-icon">
                            <div class="service-logo ${metadata.logoClass}">${metadata.icon}</div>
                        </div>
                        <div class="slide-info">
                            <h3>${service.name}</h3>
                            <p class="slide-price">from ₹45/m</p>
                            <span class="slide-savings">${service.listingCount} Plans Live</span>
                            <p class="slide-description">${metadata.description}</p>
                        </div>
                    </div>
                </a>
            `;
        }).join('');
        this.slideshowTrack.innerHTML = slidesHTML;
    }

    init() {
        this.renderSlides();
        this.slides = document.querySelectorAll('.slide');
        this.totalSlides = this.slides.length;
        if (this.totalSlides > 0) {
            this.slides[0].classList.add('active');
        }
        this.setupEventListeners();
        this.addRippleEffect();
        this.initializeTheme();
        this.initializeSlideshow();
        this.createIndicators();
        this.addLoadingStates();
        this.updateAuthState();
        
        if (this.marketplaceContainer) {
            this.initializeMarketplace();
        }
        
        requestAnimationFrame(() => {
            this.updateSlidePositions();
            setTimeout(() => {
                this.startSlideshow();
            }, 500);
        });
        console.log('DapBuddy App initialized with dynamic data');
    }

        initializeMarketplace() {
        const urlParams = new URLSearchParams(window.location.search);
        const serviceName = urlParams.get('service') || 'Unknown Service';
        const pageTitle = document.querySelector('.header-title');
        if (pageTitle) {
            pageTitle.textContent = `${serviceName} Plans`;
        }

        this.currentMarketplacePlans = this.getCommunityPlansForService(serviceName);
        this.filteredPlans = [...this.currentMarketplacePlans];
        this.renderMarketplaceListings();
        this.updateMarketplaceStats();
        this.setupMarketplaceFilters();

        // --- NEW TAB HANDLING LOGIC ---
        const dapbuddyPlanTab = document.getElementById('dapbuddyPlanTab');
        const communityPlansTab = document.getElementById('communityPlansTab');
        const marketplaceContainer = document.getElementById('marketplace-container');
        const dapbuddyPlanContainer = document.getElementById('dapbuddy-plan-container');
        const marketplaceFilters = document.querySelector('.marketplace-filters');
        const marketplaceStats = document.querySelector('.marketplace-stats');

        dapbuddyPlanTab.addEventListener('click', (e) => {
            e.preventDefault();
            communityPlansTab.classList.remove('active');
            dapbuddyPlanTab.classList.add('active');

            marketplaceContainer.style.display = 'none';
            marketplaceFilters.style.display = 'none';
            marketplaceStats.style.display = 'none';
            dapbuddyPlanContainer.style.display = 'block';

            this.handleDapBuddyPlanClick(serviceName);
        });

        communityPlansTab.addEventListener('click', (e) => {
            e.preventDefault();
            dapbuddyPlanTab.classList.remove('active');
            communityPlansTab.classList.add('active');

            dapbuddyPlanContainer.style.display = 'none';
            marketplaceContainer.style.display = 'block';
            marketplaceFilters.style.display = 'flex'; // Use flex for filters
            marketplaceStats.style.display = 'grid'; // Use grid for stats
        });
    }

    setupMarketplaceFilters() {
        if (this.marketplaceSearchInput) {
            this.marketplaceSearchInput.addEventListener('input', (e) => {
                this.filterMarketplacePlans(e.target.value.toLowerCase());
            });
        }
        if (this.sortFilter) {
            this.sortFilter.addEventListener('change', () => this.applyFiltersAndSort());
        }
        if (this.priceFilter) {
            this.priceFilter.addEventListener('change', () => this.applyFiltersAndSort());
        }
    }

    applyFiltersAndSort() {
        const searchTerm = this.marketplaceSearchInput ? this.marketplaceSearchInput.value.toLowerCase() : '';
        const priceRange = this.priceFilter ? this.priceFilter.value : 'all';
        const sortType = this.sortFilter ? this.sortFilter.value : 'newest';

        this.filteredPlans = this.currentMarketplacePlans.filter(plan => {
            const matchesSearch = plan.username.toLowerCase().includes(searchTerm);
            
            let matchesPrice = true;
            if (priceRange !== 'all') {
                const [min, max] = priceRange.includes('-') 
                    ? priceRange.split('-').map(p => parseInt(p)) 
                    : [parseInt(priceRange.replace('+', '')), Infinity];
                matchesPrice = plan.price >= min && (max === Infinity || plan.price <= max);
            }
            
            return matchesSearch && matchesPrice;
        });
        
        switch (sortType) {
            case 'price-low':
                this.filteredPlans.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                this.filteredPlans.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                this.filteredPlans.sort((a, b) => b.rating - a.rating);
                break;
        }

        this.renderMarketplaceListings();
        this.updateMarketplaceStats();
    }

    updateMarketplaceStats() {
        if (!this.totalPlansElement) return;

        const planCount = this.filteredPlans.length;
        this.totalPlansElement.textContent = planCount;

        if (this.avgPriceElement) {
            const avgPrice = planCount > 0 ? this.filteredPlans.reduce((sum, plan) => sum + plan.price, 0) / planCount : 0;
            this.avgPriceElement.textContent = `₹${Math.round(avgPrice)}`;
        }

        if (this.topRatingElement) {
            const topRating = planCount > 0 ? Math.max(...this.filteredPlans.map(plan => plan.rating)) : 0;
            this.topRatingElement.textContent = topRating.toFixed(1);
        }
    }
   handleDapBuddyPlanClick(serviceName) {
        let serviceData = null;
        const container = document.getElementById('dapbuddy-plan-container');
        if (!container) return;

        // Search for the service in our new JSON data
        for (const category of this.dapBuddyPlans.service_categories) {
            const foundService = category.services.find(s => s.service_name.toLowerCase() === serviceName.toLowerCase());
            if (foundService) {
                serviceData = foundService;
                break;
            }
        }

        let contentHTML = '';
        if (serviceData) {
            // If we found the service, build the HTML for the plan details
            const { pricing } = serviceData;
            const { base_price, platform_fees } = pricing.price_breakdown;
            const gstAmount = (base_price + platform_fees) * 0.18;
            const total = base_price + platform_fees + gstAmount;

            contentHTML = `
                <div class="comparison-table">
                    <div class="comparison-column">
                        <h3>${serviceData.service_name} Std Plan</h3>
                        <div class="price">₹${pricing.actual_price.toFixed(2)}/month</div>
                        <span>Official Price</span>
                    </div>
                    <div class="comparison-column">
                        <h3>DapBuddy's Plan</h3>
                        <div class="price">₹${total.toFixed(2)}/month</div>
                        <span>Your Price</span>
                    </div>
                </div>
                <button class="cta-button checkout-button">Proceed to Checkout</button>
                <div class="price-breakdown">
                    <details open>
                        <summary>Price Breakdown</summary>
                        <div class="breakdown-content">
                            <div class="breakdown-row"><span>Base Price</span><span>₹${base_price.toFixed(2)}</span></div>
                            <div class="breakdown-row"><span>Platform Fee</span><span>₹${platform_fees.toFixed(2)}</span></div>
                            <div class="breakdown-row"><span>GST (18%)</span><span>₹${gstAmount.toFixed(2)}</span></div>
                            <hr style="border-color: rgba(100, 116, 139, 0.2); margin: 8px 0;">
                            <div class="breakdown-row" style="font-weight: bold; color: var(--text-primary);">
                                <span>Total</span><span>₹${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </details>
                </div>
            `;
        } else {
            // If the service is not in our JSON, show the "coming soon" message
            contentHTML = `
                <div class="empty-state dapbuddy-coming-soon">
                    <h3>Coming to DapBuddy very soon...</h3>
                </div>
            `;
        }
        container.innerHTML = contentHTML;
    }
    
    renderMarketplaceListings() {
      if (!this.marketplaceContainer) return;
      let contentHTML = '';
      if (this.filteredPlans.length === 0) {
          contentHTML = `
              <div class="empty-state">
                  <h3>No plans match your criteria</h3>
                  <button class="cta-button">Be the First Host</button>
              </div>
          `;
      } else {
          contentHTML = this.filteredPlans.map(plan => `
              <div class="community-plan-listing" data-username="${plan.username}" data-rating="${plan.rating}" data-price="${plan.price}">
                  <div class="listing-avatar">${plan.username.charAt(0).toUpperCase()}</div>
                  <div class="listing-info">
                      <div class="listing-username">${plan.username}</div>
                      <div class="listing-rating">
                          <span class="rating-stars">${'★'.repeat(Math.round(plan.rating))}</span>
                          <span>(${plan.rating.toFixed(1)})</span>
                      </div>
                  </div>
                  <div class="listing-action">
                      <button class="join-btn">Join Plan</button>
                      <div class="listing-price">₹${plan.price}/mo</div>
                  </div>
              </div>
          `).join('');
      }
      this.marketplaceContainer.innerHTML = contentHTML;
      this.marketplaceContainer.querySelectorAll('.join-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
              e.preventDefault();
              this.handleJoinPlan(e.target.closest('.community-plan-listing'));
          });
      });
      this.marketplaceContainer.querySelectorAll('.community-plan-listing').forEach((listing, index) => {
          listing.style.opacity = '0';
          listing.style.transform = 'translateY(20px)';
          setTimeout(() => {
              listing.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
              listing.style.opacity = '1';
              listing.style.transform = 'translateY(0)';
          }, index * 100);
      });
    }
    handleJoinPlan(listingElement) {
      const username = listingElement.dataset.username;
      const price = listingElement.dataset.price;
      this.showNotification(`Joining ${username}'s plan for ₹${price}/mo...`);
      const btn = listingElement.querySelector('.join-btn');
      const originalText = btn.textContent;
      btn.textContent = 'Joining...';
      btn.disabled = true;
      btn.style.opacity = '0.7';
      setTimeout(() => {
          btn.textContent = 'Joined!';
          btn.style.background = 'var(--gradient-success)';
          btn.style.color = 'white';
          setTimeout(() => {
              btn.textContent = originalText;
              btn.disabled = false;
              btn.style.opacity = '1';
              btn.style.background = '';
              btn.style.color = '';
          }, 2000);
      }, 1500);
    }
    createIndicators() {
      if (!this.slideshowIndicators) return;
      this.slideshowIndicators.innerHTML = '';
      for (let i = 0; i < this.totalSlides; i++) {
          const indicator = document.createElement('div');
          indicator.className = `indicator ${i === 0 ? 'active' : ''}`;
          indicator.addEventListener('click', () => this.goToSlide(i));
          this.slideshowIndicators.appendChild(indicator);
      }
    }
    updateIndicators() {
        const indicators = this.slideshowIndicators?.querySelectorAll('.indicator');
        if (!indicators || !indicators.length) return;

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSlide);
        });

        const container = this.slideshowIndicators.parentElement;
        if (container && container.classList.contains('slideshow-indicators-container')) {
            const containerWidth = container.offsetWidth;
            const indicatorWidth = indicators[0]?.offsetWidth || 8;
            const indicatorGap = 8;
            
            const targetOffset = (containerWidth / 2) - (indicatorWidth / 2);
            const newTransform = targetOffset - (this.currentSlide * (indicatorWidth + indicatorGap));

            this.slideshowIndicators.style.transform = `translateX(${newTransform}px)`;
        }
    }
    initializeSlideshow() {
      this.setupSlideSwipeHandlers();
      document.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowLeft') {
              e.preventDefault(); this.prevSlide(); this.handleUserInteraction();
          } else if (e.key === 'ArrowRight') {
              e.preventDefault(); this.nextSlide(); this.handleUserInteraction();
          }
      });
    }
    addSlideAnimations() {
      const activeSlide = document.querySelector('.slide.active');
      if (activeSlide) {
          const content = activeSlide.querySelector('.slide-content');
          if (content) {
              content.style.animation = 'none';
              requestAnimationFrame(() => {
                  content.style.animation = 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards';
              });
          }
      }
    }
    setupEventListeners() {
      if (this.slidePrevBtn) { this.slidePrevBtn.addEventListener('click', (e) => { e.preventDefault(); this.prevSlide(); this.handleUserInteraction(); this.addButtonFeedback(this.slidePrevBtn); }); }
      if (this.slideNextBtn) { this.slideNextBtn.addEventListener('click', (e) => { e.preventDefault(); this.nextSlide(); this.handleUserInteraction(); this.addButtonFeedback(this.slideNextBtn); }); }
      this.filterPills.forEach(pill => { pill.addEventListener('click', (e) => { this.handleFilterClick(e); this.addButtonFeedback(pill); }); });
      if (this.searchInput) {
          this.searchInput.addEventListener('input', (e) => this.handleSearch(e));
          this.searchInput.addEventListener('keypress', (e) => {
              if (e.key === 'Enter') {
                  this.handleSearchSubmit();
              }
          });
          this.searchInput.addEventListener('focus', () => { this.handleUserInteraction(); this.searchInput.parentElement.classList.add('focused'); });
          this.searchInput.addEventListener('blur', () => { this.searchInput.parentElement.classList.remove('focused'); });
      }
      if (this.hamburger) { this.hamburger.addEventListener('click', (e) => { e.stopPropagation(); this.toggleDropdown(); this.addButtonFeedback(this.hamburger); }); }
      if (this.dropdownOverlay) { this.dropdownOverlay.addEventListener('click', () => this.closeDropdown()); }
      [this.themeToggle, this.marketplaceThemeToggle].forEach(toggle => {
          if (toggle) {
              toggle.addEventListener('click', () => { this.toggleTheme(); this.addButtonFeedback(toggle); });
          }
      });
      document.querySelectorAll('.menu-item[data-page]').forEach(item => { item.addEventListener('click', (e) => { this.handleMenuItemClick(e.currentTarget.dataset.page); this.addButtonFeedback(item); }); });
      if (this.profileBtn) { this.profileBtn.addEventListener('click', (e) => { e.stopPropagation(); this.openProfileMenu(); }); }
      if (this.profileBackBtn) { this.profileBackBtn.addEventListener('click', () => this.closeProfileMenu()); }
      if (this.profileMenuBackground) { this.profileMenuBackground.addEventListener('click', () => this.closeProfileMenu()); }
      document.querySelectorAll('.profile-menu-item[data-page]').forEach(item => { item.addEventListener('click', (e) => { this.handleProfileMenuItemClick(e.currentTarget.dataset.page); this.addButtonFeedback(item); }); });
      if (this.editAvatarBtn) { this.editAvatarBtn.addEventListener('click', (e) => { e.stopPropagation(); this.openAvatarEditSheet(); }); }
      if (this.sheetBackdrop) { this.sheetBackdrop.addEventListener('click', () => this.closeAvatarEditSheet()); }
      if (this.removePhotoBtn) { this.removePhotoBtn.addEventListener('click', () => this.handleRemovePhoto()); }
      if (this.cameraBtn) { this.cameraBtn.addEventListener('click', () => this.handleOpenCamera()); }
      if (this.uploadBtn) { this.uploadBtn.addEventListener('click', () => this.handleUploadPhoto()); }
      if (this.logoutBtn) {
          this.logoutBtn.addEventListener('click', () => {
              if (confirm('Are you sure you want to logout?')) {
                  this.isLoggedIn = false;
                  this.updateAuthState();
                  this.showNotification('Logging out...');
                  this.handleLogout();
              }
          });
      }
      if (this.loginBtn) {
          this.loginBtn.addEventListener('click', () => {
              this.isLoggedIn = true;
              this.updateAuthState();
              this.showNotification('Successfully logged in!');
          });
      }
      if (this.signupBtn) {
          this.signupBtn.addEventListener('click', () => {
              this.showNotification('Sign up form would appear here!');
          });
      }
      document.querySelectorAll('.cta-button').forEach(btn => { btn.addEventListener('click', (e) => { this.handleCTAClick(e); this.addButtonFeedback(btn); }); });
      this.serviceCards.forEach(card => { card.addEventListener('click', (e) => this.handleCardClick(e)); });
      this.setupProfileMenuTouchHandlers();
      document.addEventListener('click', (e) => { if (this.dropdownMenu && !this.dropdownMenu.contains(e.target) && this.hamburger && !this.hamburger.contains(e.target)) { this.closeDropdown(); } });
      document.addEventListener('visibilitychange', () => { if (document.hidden) { this.stopSlideshow(); } else { setTimeout(() => { if (!this.isUserInteracting) { this.startSlideshow(); } }, 1000); } });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { this.closeDropdown(); if (this.planDetailsOverlay?.classList.contains('visible')) { this.closeOverlay(); } if (this.profileMenuOverlay?.classList.contains('visible')) { this.closeProfileMenu(); } if (this.avatarEditSheet?.classList.contains('visible')) { this.closeAvatarEditSheet(); } } });
      this.setupIntersectionObserver();
    }
    handleSearchSubmit() {
        const searchTerm = this.searchInput.value.trim().toLowerCase();
        if (!searchTerm) return;
        
        const matchingService = Object.values(this.availableServices).find(service =>
            service.name.toLowerCase().includes(searchTerm)
        );
        
        if (matchingService) {
            window.location.href = `marketplace.html?service=${encodeURIComponent(matchingService.name)}`;
        } else {
            this.showNotification(`No results found for "${searchTerm}"`);
        }
    }
    setupIntersectionObserver() {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              entry.target.classList.toggle('in-view', entry.isIntersecting);
          });
      }, {
          threshold: 0.1,
          rootMargin: '50px'
      });
      if (this.slideshowViewport) {
          observer.observe(this.slideshowViewport);
      }
      document.querySelectorAll('.step, .filter-pill').forEach(el => {
          observer.observe(el);
      });
    }
    addButtonFeedback(element) {
      element.style.transform = 'scale(0.95)';
      setTimeout(() => {
          element.style.transform = '';
      }, 150);
    }
    addLoadingStates() {
      document.querySelectorAll('.slide').forEach((slide, index) => {
          slide.style.animationDelay = `${index * 0.1}s`;
          slide.classList.add('fadeInUp');
      });
    }
    initializeTheme() {
      const shouldBeDark = this.isDarkMode;
      document.documentElement.setAttribute('data-theme', shouldBeDark ? 'dark' : 'light');
      [this.themeToggle, this.marketplaceThemeToggle].forEach(toggle => {
          if (toggle) toggle.classList.toggle('active', shouldBeDark);
      });
    }
    setupProfileMenuTouchHandlers() {
      if (!this.profileMenuContent) return;
      this.profileMenuContent.addEventListener('touchstart', (e) => {
          if (!this.profileMenuOverlay.classList.contains('visible')) return;
          this.touchStartX = e.touches[0].clientX;
          this.isProfileDragging = false;
      }, { passive: true });
      this.profileMenuContent.addEventListener('touchmove', (e) => {
          if (!this.profileMenuOverlay.classList.contains('visible') || this.touchStartX === 0) return;
          this.touchCurrentX = e.touches[0].clientX;
          const deltaX = this.touchCurrentX - this.touchStartX;
          if (deltaX > 0) {
              this.isProfileDragging = true;
              this.profileMenuContent.style.transition = 'none';
              this.profileMenuContent.style.transform = `translateX(${Math.min(deltaX, 100)}px)`;
              e.preventDefault();
          }
      }, { passive: false });
      this.profileMenuContent.addEventListener('touchend', () => {
          if (!this.isProfileDragging) return;
          this.profileMenuContent.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
          const deltaX = this.touchCurrentX - this.touchStartX;
          const swipeThreshold = window.innerWidth * 0.3;
          if (deltaX > swipeThreshold) {
              this.closeProfileMenu();
          } else {
              this.profileMenuContent.style.transform = 'translateX(0)';
          }
          this.isProfileDragging = false;
          this.touchStartX = 0;
          this.touchCurrentX = 0;
      });
    }
    handleMenuItemClick(page) {
      this.closeDropdown();
      console.log(`Navigating to ${page}`);
      this.showNotification(`Opening ${page.replace('-', ' ')}...`);
    }

    // --- MODIFIED FUNCTION ---
    openProfileMenu() {
        this.handleUserInteraction();
        this.profileMenuOverlay.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }

    // --- MODIFIED FUNCTION ---
    closeProfileMenu() {
        this.profileMenuOverlay.classList.remove('visible');
        document.body.style.overflow = '';
        
        // Reset styles and slideshow after the transition ends
        setTimeout(() => {
            if (this.profileMenuContent) {
                this.profileMenuContent.style.transform = '';
                this.profileMenuContent.style.transition = '';
            }
            if (!this.isUserInteracting) {
                this.startSlideshow();
            }
        }, 400); // This duration should match the CSS transition time
    }

    handleProfileMenuItemClick(page) {
      console.log(`Navigating to profile page: ${page}`);
      this.showNotification(`Opening ${page.replace('-', ' ')}...`);
    }
    openAvatarEditSheet() { this.avatarEditSheet.classList.add('visible'); }
    closeAvatarEditSheet() { this.avatarEditSheet.classList.remove('visible'); }
    handleRemovePhoto() {
      const avatarSpan = document.querySelector('.profile-avatar span');
      if (avatarSpan) avatarSpan.textContent = 'U';
      this.closeAvatarEditSheet();
      this.showNotification('Profile picture removed');
    }
    handleOpenCamera() {
      this.closeAvatarEditSheet();
      this.showNotification('Camera functionality would open here');
      console.log('Open camera for profile picture');
    }
    handleUploadPhoto() {
      this.closeAvatarEditSheet();
      this.showNotification('File picker would open here');
      console.log('Upload photo from device');
    }
    handleLogout() {
      console.log('User logged out');
      document.body.style.opacity = '0';
      setTimeout(() => window.location.reload(), 1000);
    }
    toggleDropdown() { this.dropdownMenu.classList.contains('show') ? this.closeDropdown() : this.openDropdown(); }
    openDropdown() {
      this.handleUserInteraction();
      this.dropdownMenu.classList.add('show');
      this.dropdownOverlay.classList.add('show');
      this.hamburger.classList.add('active');
      this.dropdownMenu.querySelectorAll('.dropdown-section').forEach((item, index) => {
          item.style.opacity = '0';
          item.style.transform = 'translateY(-20px)';
          setTimeout(() => {
              item.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
          }, index * 100);
      });
    }
    closeDropdown() {
      this.dropdownMenu.classList.remove('show');
      this.dropdownOverlay.classList.remove('show');
      this.hamburger.classList.remove('active');
    }
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      this.storeTheme(this.isDarkMode);
      this.initializeTheme(); // REFACTOR: Call initializeTheme to update all UI elements
      document.body.style.transition = 'background-color 0.3s, color 0.3s';
      setTimeout(() => document.body.style.transition = '', 300);
      this.showNotification(`Switched to ${this.isDarkMode ? 'dark' : 'light'} mode`);
    }
    handleFilterClick(e) {
      this.filterPills.forEach(pill => pill.classList.remove('active'));
      const clickedPill = e.currentTarget;
      clickedPill.classList.add('active');
      const category = clickedPill.dataset.category; // FIX: Use data-category for reliability
      this.handleUserInteraction();
      let firstVisibleIndex = -1;
      this.slides.forEach((slide, index) => {
          const isVisible = category === 'all' || slide.dataset.category === category;
          slide.style.display = isVisible ? '' : 'none';
          if (isVisible && firstVisibleIndex === -1) {
              firstVisibleIndex = index;
          }
      });
      if (firstVisibleIndex !== -1 && firstVisibleIndex !== this.currentSlide) {
          this.goToSlide(firstVisibleIndex);
      }
      this.showNotification(`Filtered by ${category === 'all' ? 'Popular' : category}`);
    }
    handleSearch(e) {
      const searchTerm = e.target.value.toLowerCase().trim();
      if (searchTerm) {
          this.handleUserInteraction();
      } else if (!this.isUserInteracting) {
          this.startSlideshow();
      }
      let hasVisibleSlides = false;
      let firstVisibleIndex = -1;
      this.slides.forEach((slide, index) => {
          const slideName = slide.querySelector('h3')?.textContent.toLowerCase() || '';
          const slideDesc = slide.querySelector('.slide-description')?.textContent.toLowerCase() || '';
          const isVisible = !searchTerm || slideName.includes(searchTerm) || slideDesc.includes(searchTerm);
          slide.style.display = isVisible ? '' : 'none';
          if (isVisible) {
              hasVisibleSlides = true;
              if (firstVisibleIndex === -1) firstVisibleIndex = index;
          }
      });
      this.serviceCards.forEach(card => {
          const serviceName = card.querySelector('.service-name')?.textContent.toLowerCase() || '';
          const isVisible = !searchTerm || serviceName.includes(searchTerm);
          card.style.display = isVisible ? 'block' : 'none';
      });
      if (searchTerm && firstVisibleIndex !== -1 && firstVisibleIndex !== this.currentSlide) {
          this.goToSlide(firstVisibleIndex);
      }
      if (!searchTerm) {
          this.filterPills.forEach(pill => pill.classList.remove('active'));
          this.filterPills[0]?.classList.add('active');
          this.slides.forEach(slide => slide.style.display = '');
          if (this.currentSlide !== 0) this.goToSlide(0);
      }
    }
    openPlanDetails(card) {
      const serviceName = card.dataset.serviceName || 'Service';
      const dapPrice = card.dataset.dapPrice || '₹60/month';
      const officialPrice = card.dataset.officialPrice || '₹179/month';
      const platformFee = parseFloat(card.dataset.platformFee) || 10.20;
      const gst = parseFloat(card.dataset.gst) || 1.84;
      const total = parseFloat(dapPrice.replace(/[^0-9.]/g, '')) || 60;
      const basePrice = (total - platformFee - gst).toFixed(2);
      this.overlayElements.officialPlanName.textContent = `${serviceName.split(' ')[0]} Std Plan`;
      this.overlayElements.officialPlanPrice.textContent = officialPrice;
      this.overlayElements.dapPlanPrice.textContent = dapPrice;
      this.overlayElements.basePrice.textContent = `₹${basePrice}`;
      this.overlayElements.platformFee.textContent = `₹${platformFee.toFixed(2)}`;
      this.overlayElements.gstAmount.textContent = `₹${gst.toFixed(2)}`;
      this.overlayElements.totalPrice.textContent = `₹${total.toFixed(2)}`;
      this.showOverlay();
    }
    showOverlay() {
      this.handleUserInteraction();
      if(this.planDetailsOverlay) this.planDetailsOverlay.classList.add('visible');
      document.body.style.overflow = 'hidden';
    }
    closeOverlay() {
      if(this.planDetailsOverlay) this.planDetailsOverlay.classList.remove('visible');
      document.body.style.overflow = '';
      if (!this.isUserInteracting) this.startSlideshow();
    }
    handleCTAClick(e) {
      if (e.target.closest('.plan-details-overlay')) return;
      e.preventDefault();
      this.createRippleEffect(e);
      this.showNotification('Redirecting to checkout...');
      const button = e.target;
      const originalText = button.textContent;
      button.textContent = 'Loading...';
      button.disabled = true;
      setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
      }, 2000);
    }
    createRippleEffect(e) {
      const button = e.currentTarget;
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      ripple.classList.add('ripple');
      const existingRipple = button.querySelector('.ripple');
      if (existingRipple) existingRipple.remove();
      button.appendChild(ripple);
    }
    handleCardClick(e) {
      if (!e.target.classList.contains('cta-button')) {
          const card = e.currentTarget;
          card.style.transform = 'scale(0.98)';
          setTimeout(() => card.style.transform = '', 150);
          this.showNotification('Card details would appear here');
      }
    }
    addRippleEffect() {
      // This can be simplified or removed if the ripple effect logic is attached directly
    }
    showNotification(message, duration = 3000) {
      let notification = document.getElementById('app-notification');
      if (!notification) {
          notification = document.createElement('div');
          notification.id = 'app-notification';
          notification.style.cssText = `position: fixed; top: 20px; left: 50%; transform: translateX(-50%) translateY(-100px); background: var(--bg-card); color: var(--text-primary); padding: 12px 24px; border-radius: 24px; font-size: 14px; font-weight: 600; z-index: 1000; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid var(--border-color); backdrop-filter: blur(20px); box-shadow: 0 4px 20px var(--shadow-primary); opacity: 0;`;
          document.body.appendChild(notification);
      }
      notification.textContent = message;
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(-50%) translateY(0)';
      setTimeout(() => {
          notification.style.opacity = '0';
          notification.style.transform = 'translateX(-50%) translateY(-100px)';
      }, duration);
    }
    destroy() {
      this.stopSlideshow();
      if (this.userInteractionTimer) clearTimeout(this.userInteractionTimer);
      console.log('DapBuddy App destroyed');
    }
    setupSlideSwipeHandlers() {
      if (!this.slideshowViewport) return;
      this.slideshowViewport.addEventListener('touchstart', (e) => {
          this.touchStartX = e.touches[0].clientX; this.touchStartY = e.touches[0].clientY;
          this.slideStartX = this.touchStartX; this.isSlideDragging = false;
      }, { passive: true });
      this.slideshowViewport.addEventListener('touchmove', (e) => {
          if (this.isTransitioning) return;
          this.touchCurrentX = e.touches[0].clientX; this.touchCurrentY = e.touches[0].clientY;
          const deltaX = this.touchCurrentX - this.touchStartX; const deltaY = this.touchCurrentY - this.touchStartY;
          if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
              this.isSlideDragging = true; e.preventDefault();
          }
      }, { passive: false });
      this.slideshowViewport.addEventListener('touchend', () => {
          if (!this.isSlideDragging) return;
          const deltaX = this.touchCurrentX - this.slideStartX; const swipeThreshold = 50;
          if (Math.abs(deltaX) > swipeThreshold) {
              if (deltaX > 0) { this.prevSlide(); } else { this.nextSlide(); }
              this.handleUserInteraction();
          }
          this.isSlideDragging = false; this.touchStartX = 0; this.touchCurrentX = 0;
      });
    }
    startSlideshow() {
      this.stopSlideshow();
      if (!this.isUserInteracting) {
          this.slideInterval = setInterval(() => {
              if (!this.isUserInteracting && !this.isTransitioning) {
                  this.nextSlide();
              }
          }, this.SLIDE_TIMER_DURATION);
      }
    }
    stopSlideshow() {
      if (this.slideInterval) {
          clearInterval(this.slideInterval); this.slideInterval = null;
      }
    }
    handleUserInteraction() {
      this.isUserInteracting = true;
      this.stopSlideshow();
      if (this.userInteractionTimer) clearTimeout(this.userInteractionTimer);
      this.userInteractionTimer = setTimeout(() => {
          this.isUserInteracting = false; this.startSlideshow();
      }, this.USER_INTERACTION_TIMEOUT);
    }
    nextSlide() {
      if (this.isTransitioning || this.totalSlides < 2) return;
      this.isTransitioning = true;
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
      this.updateSlideshow();
      setTimeout(() => { this.isTransitioning = false; }, this.SLIDE_TRANSITION_DURATION);
    }
    prevSlide() {
      if (this.isTransitioning || this.totalSlides < 2) return;
      this.isTransitioning = true;
      this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
      this.updateSlideshow();
      setTimeout(() => { this.isTransitioning = false; }, this.SLIDE_TRANSITION_DURATION);
    }
    goToSlide(index) {
      if (this.isTransitioning || index === this.currentSlide || index < 0 || index >= this.totalSlides) return;
      this.isTransitioning = true; this.currentSlide = index;
      this.updateSlideshow();
      setTimeout(() => { this.isTransitioning = false; }, this.SLIDE_TRANSITION_DURATION);
    }
    updateSlideshow() {
      this.updateSlidePositions(); this.updateIndicators(); this.addSlideAnimations();
    }
    updateSlidePositions() {
      if (!this.slides.length) return;
      this.slides.forEach((slide, index) => {
          slide.classList.remove('active', 'prev', 'next', 'hidden-left', 'hidden-right');
          const total = this.totalSlides; const current = this.currentSlide;
          if (index === current) { slide.classList.add('active');
          } else if (index === (current - 1 + total) % total) { slide.classList.add('prev');
          } else if (index === (current + 1) % total) { slide.classList.add('next');
          } else {
              let diff = index - current;
              if (Math.abs(diff) > total / 2) {
                  diff = diff < 0 ? diff + total : diff - total;
              }
              if (diff > 0) {
                  slide.classList.add('hidden-right');
              } else {
                  slide.classList.add('hidden-left');
              }
          }
      });
    }

} // <--- This is the correct closing brace for the class

document.addEventListener('DOMContentLoaded', () => {
    try {
        window.dapBuddyApp = new DapBuddyApp();
        console.log('DapBuddy App loaded successfully');
    } catch (error) {
        console.error('Failed to initialize DapBuddy App:', error);
    }
});

window.addEventListener('beforeunload', () => {
    if (window.dapBuddyApp && typeof window.dapBuddyApp.destroy === 'function') {
        window.dapBuddyApp.destroy();
    }
});