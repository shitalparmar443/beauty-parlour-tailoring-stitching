// Defaults configuration
const DEFAULTS = {
    mode: 'light',
    palette: 'rose',
    font: "'Inter', sans-serif",
    fontSize: '18'
};

// Toggle Settings Side Drawer
function toggleSettingsDrawer() {
    const drawer = document.getElementById('settings-drawer');
    const overlay = document.getElementById('settings-overlay');
    
    if (drawer.classList.contains('translate-x-full')) {
        drawer.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.remove('opacity-0'), 10);
    } else {
        drawer.classList.add('translate-x-full');
        overlay.classList.add('opacity-0');
        setTimeout(() => overlay.classList.add('hidden'), 300);
    }
}

// 1. Set Light / Dark Display Mode
function setTheme(mode) {
    const htmlElement = document.documentElement;
    if (mode === 'dark') {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }
    localStorage.setItem('app-theme-mode', mode);
    updateActiveUI();
}

// 2. Set Color Accent Palette
function setPalette(paletteName) {
    document.documentElement.setAttribute('data-palette', paletteName);
    localStorage.setItem('app-theme-palette', paletteName);
    updateActiveUI();
}

// 3. Set Font Family
function changeFontFamily(fontFamily) {
    document.body.style.fontFamily = fontFamily;
    localStorage.setItem('app-theme-font', fontFamily);
    updateActiveUI();
}

// 4. Set Base Font Size
function changeFontSize(size) {
    document.documentElement.style.fontSize = `${size}px`;
    const label = document.getElementById('font-size-val');
    if (label) label.textContent = `${size}px`;
    localStorage.setItem('app-theme-fontsize', size);
}

// Reset All Customizations to Default
function resetCustomizations() {
    setTheme(DEFAULTS.mode);
    setPalette(DEFAULTS.palette);
    changeFontFamily(DEFAULTS.font);
    changeFontSize(DEFAULTS.fontSize);
    
    const slider = document.getElementById('font-size-slider');
    if (slider) slider.value = DEFAULTS.fontSize;
}

// Highlight Currently Active Items in Drawer UI
function updateActiveUI() {
    const currentMode = localStorage.getItem('app-theme-mode') || DEFAULTS.mode;
    const currentPalette = localStorage.getItem('app-theme-palette') || DEFAULTS.palette;
    const currentFont = localStorage.getItem('app-theme-font') || DEFAULTS.font;

    // 1. Highlight Active Dark/Light Mode Buttons
    const lightBtn = document.getElementById('theme-light-btn');
    const darkBtn = document.getElementById('theme-dark-btn');

    if (lightBtn && darkBtn) {
        const activeClasses = "bg-brand-600 text-white shadow-md font-semibold";
        const inactiveClasses = "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium";

        if (currentMode === 'light') {
            lightBtn.className = `flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm transition-all cursor-pointer ${activeClasses}`;
            darkBtn.className = `flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm transition-all cursor-pointer ${inactiveClasses}`;
        } else {
            darkBtn.className = `flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm transition-all cursor-pointer ${activeClasses}`;
            lightBtn.className = `flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm transition-all cursor-pointer ${inactiveClasses}`;
        }
    }

    // 2. Select Active Font Dropdown Value
    const fontSelect = document.getElementById('font-select');
    if (fontSelect) {
        fontSelect.value = currentFont;
    }

    // 3. Highlight Active Palette Button
    const paletteButtons = document.querySelectorAll('[data-palette-option]');
    paletteButtons.forEach(button => {
        const pName = button.getAttribute('data-palette-option');
        const checkIcon = button.querySelector('.check-indicator');

        if (pName === currentPalette) {
            button.classList.add('border-brand-600', 'bg-brand-50/50', 'dark:bg-brand-900/30', 'ring-2', 'ring-brand-500');
            button.classList.remove('border-gray-200', 'dark:border-gray-800');
            if (checkIcon) checkIcon.classList.remove('hidden');
        } else {
            button.classList.remove('border-brand-600', 'bg-brand-50/50', 'dark:bg-brand-900/30', 'ring-2', 'ring-brand-500');
            button.classList.add('border-gray-200', 'dark:border-gray-800');
            if (checkIcon) checkIcon.classList.add('hidden');
        }
    });
}

// Initial Loading Logic
function initTheme() {
    const savedMode = localStorage.getItem('app-theme-mode') || DEFAULTS.mode;
    const savedPalette = localStorage.getItem('app-theme-palette') || DEFAULTS.palette;
    const savedFont = localStorage.getItem('app-theme-font') || DEFAULTS.font;
    const savedFontSize = localStorage.getItem('app-theme-fontsize') || DEFAULTS.fontSize;

    // Apply Saved State
    setTheme(savedMode);
    setPalette(savedPalette);
    changeFontFamily(savedFont);
    changeFontSize(savedFontSize);

    // Sync Slider input UI
    const slider = document.getElementById('font-size-slider');
    if (slider) slider.value = savedFontSize;
}

// Execute immediately when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
} else {
    initTheme();
}

// Toggle Mobile Nav Menu Drawer (Right to Left)
function toggleMobileMenu() {
    const drawer = document.getElementById('mobile-menu-drawer');
    const overlay = document.getElementById('mobile-menu-overlay');

    if (drawer.classList.contains('translate-x-full')) {
        drawer.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.remove('opacity-0'), 10);
    } else {
        drawer.classList.add('translate-x-full');
        overlay.classList.add('opacity-0');
        setTimeout(() => overlay.classList.add('hidden'), 300);
    }
}

// Data Definitions
const beautyServices = [
    { name: "Facial & Skin Care", price: 250, icon: "fa-spa" },
    { name: "Face Cleanup", price: 199, icon: "fa-wand-magic-sparkles" },
    { name: "Face Massage", price: 199, icon: "fa-hand-sparkles" },
    { name: "Eyebrow", price: 40, icon: "fa-eye" },
    { name: "Upper Lip", price: 10, icon: "fa-smile" },
    { name: "Waxing", price: 299, icon: "fa-bottle-droplet" },
    { name: "Threading", price: 50, icon: "fa-scissors" },
    { name: "Hair Cutting", price: 99, icon: "fa-scissors" },
    { name: "Hair Styling", price: 149, icon: "fa-comb" },
    { name: "Hair Spa", price: 289, icon: "fa-shower" },
    { name: "Hair Coloring", price: 399, icon: "fa-palette" },
    { name: "Head Massage", price: 99, icon: "fa-hands" },
    { name: "Manicure", price: 250, icon: "fa-hand" },
    { name: "Pedicure", price: 250, icon: "fa-shoe-prints" },
    { name: "Bridal Makeup", price: 6999, icon: "fa-gem" },
    { name: "Party Makeup", price: 1499, icon: "fa-star" },
    { name: "Bridal Beauty Packages", price: 9999, icon: "fa-crown" }
];

const tailorServices = [                       
    { name: "Blouse Stitching", price: 150, icon: "fa-scissors" },
    { name: "Blouse Design & Stitching", price: 250, icon: "fa-compass-drafting" },
    { name: "Dress Stitching", price: 250, icon: "fa-vest" },
    { name: "Suit Stitching", price: 250, icon: "fa-user-nurse" },
    { name: "Kurti Stitching", price: 100, icon: "fa-vest-patches" },
    { name: "Salwar Suit Stitching", price: 250, icon: "fa-person-dress" },
    { name: "Lehenga Stitching", price: 399, icon: "fa-wand-magic" },
    { name: "Saree Blouse Alteration", price: 50, icon: "fa-rotate" },
    { name: "Dress Alteration", price: 40, icon: "fa-ruler" },
    { name: "Clothing Alteration", price: 20, icon: "fa-pencil" },
    { name: "Custom Stitching", price: 0 , icon: "fa-pen-ruler" },            
];

const reviewsData = [
    {
        name: "Pooja Patel",
        location: "Vajdi Vad, Gujarat",
        text: "Shital Tailor did an absolute amazing job with my designer blouse stitching. The fitting around Metoda was perfect, and the bridal makeup service for my sister was praised by everyone!"
    },
    {
        name: "Anjali Rathod",
        location: "Haripal Pal, Rajkot",
        text: "Extremely convenient home service available right at Haripal Pal! The hair spa and facial treatment were incredibly relaxing and reasonably priced."
    },
    {
        name: "Hetashvi Parmar",
        location: "Metoda Gate No 1",
        text: "Master tailor skills are brilliant! They finished my dress stitching and lehenga alteration on very short notice before the event. Highly recommended."
    },
    {
        name: "Kajal Solanki",
        location: "Kankot, Gujarat",
        text: "The facial glow lasted for days! Very clean, hygienic beauty parlour services with gentle care. Always my go-to choice in Vajdi."
    },
    {
        name: "Bhavna Ben",
        location: "Avadh Dhal",
        text: "Very reliable tailoring service! Perfect saree blouse alteration and custom kurti stitching with exact measurements every time."
    }
];

// WhatsApp Direct Link Generator
function generateWhatsAppUrl(serviceName, price) {
    const message = `Hello Shital Beauty Parlour & Tailor, I would like to book or inquire about *${serviceName}* (Price: ₹${price}). Please share details!`;
    return `https://wa.me/918200276755?text=${encodeURIComponent(message)}`;
}

// Render Service Card
function createServiceCard(service) {
    const waUrl = generateWhatsAppUrl(service.name, service.price);
    return `
        <div class="service-card bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div>
                <div class="flex items-center justify-between mb-3">
                    <div class="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-900/40 text-brand-600 dark:text-brand-300 flex items-center justify-center text-lg">
                        <i class="fa-solid ${service.icon}"></i>
                    </div>
                    <span class="text-lg font-bold text-gray-900 dark:text-white">₹${service.price}</span>
                </div>
                <h3 class="font-bold text-gray-800 dark:text-white text-base mb-1 group-hover:text-brand-600 transition-colors">${service.name}</h3>
                <p class="text-xs text-gray-500 dark:text-gray-400">Professional quality & customized fitting</p>
            </div>
            <div class="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700/60">
                <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="w-full bg-emerald-50 hover:bg-emerald-500 text-emerald-700 hover:text-white dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:bg-emerald-600 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2">
                    <i class="fa-brands fa-whatsapp text-sm"></i>
                    Inquire on WhatsApp
                </a>
            </div>
        </div>
    `;
}

function renderServices() {
    document.getElementById('beauty-list').innerHTML = beautyServices.map(createServiceCard).join('');
    document.getElementById('tailor-list').innerHTML = tailorServices.map(createServiceCard).join('');
}

 let currentReviewIndex = 0;
        let reviewAutoInterval;

        function renderTestimonials() {
            const track = document.getElementById('carousel-track');
            track.innerHTML = '';

            reviewsData.forEach((rev, idx) => {
                const cardWrapper = document.createElement('div');
                // Responsive widths: 1 card on mobile, 2 on tablet, 3 cards visible on desktop (33.333%)
                cardWrapper.className = 'w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 py-2';
                
                cardWrapper.innerHTML = `
                    <div id="review-card-${idx}" class="testimonial-card bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-md h-full flex flex-col justify-between">
                        <div>
                            <div class="flex text-amber-400 text-sm mb-3">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            </div>
                            <p class="text-gray-700 dark:text-gray-200 text-sm italic mb-4">"${rev.text}"</p>
                        </div>
                        <div class="border-t border-gray-100 dark:border-gray-700 pt-3">
                            <div class="font-bold text-gray-900 dark:text-white text-sm">${rev.name}</div>
                            <div class="text-xs text-gray-400 dark:text-gray-500">${rev.location}</div>
                        </div>
                    </div>
                `;
                track.appendChild(cardWrapper);
            });

            // Render Dots
            const dotsContainer = document.getElementById('carousel-dots');
            dotsContainer.innerHTML = reviewsData.map((_, i) => `
                <button onclick="jumpToReview(${i})" class="w-3 h-3 rounded-full transition-all ${i === 0 ? 'bg-brand-600 scale-125' : 'bg-gray-300 dark:bg-gray-700'}"></button>
            `).join('');

            updateCarouselView();
        }

        function updateCarouselView() {
            const track = document.getElementById('carousel-track');
            const total = reviewsData.length;
            const isDesktop = window.innerWidth >= 1024;
            const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

            // Calculate Translate Percentage
            let cardWidthPercent = 100;
            if (isDesktop) cardWidthPercent = 33.3333;
            else if (isTablet) cardWidthPercent = 50;

            track.style.transform = `translateX(-${currentReviewIndex * cardWidthPercent}%)`;

            // Identify Active Center Card Index
            let activeIndex = currentReviewIndex;
            if (isDesktop) {
                activeIndex = (currentReviewIndex + 1) % total; // Center of 3 cards
            }

            reviewsData.forEach((_, idx) => {
                const el = document.getElementById(`review-card-${idx}`);
                if (el) {
                    if (idx === activeIndex) {
                        el.classList.add('is-active', 'border-brand-500', 'shadow-2xl');
                        el.classList.remove('is-side');
                    } else {
                        el.classList.add('is-side');
                        el.classList.remove('is-active', 'border-brand-500', 'shadow-2xl');
                    }
                }
            });

            // Update Dots
            const dots = document.getElementById('carousel-dots').children;
            for (let i = 0; i < dots.length; i++) {
                if (i === activeIndex) {
                    dots[i].className = 'w-3 h-3 rounded-full bg-brand-600 scale-125 transition-all';
                } else {
                    dots[i].className = 'w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700 transition-all';
                }
            }
        }

        function moveCarousel(direction) {
            const total = reviewsData.length;
            currentReviewIndex = (currentReviewIndex + direction + total) % total;
            updateCarouselView();
        }

        function jumpToReview(index) {
            const isDesktop = window.innerWidth >= 1024;
            currentReviewIndex = isDesktop ? (index - 1 + reviewsData.length) % reviewsData.length : index;
            updateCarouselView();
        }

        function startReviewTimer() {
            clearInterval(reviewAutoInterval);
            reviewAutoInterval = setInterval(() => {
                moveCarousel(1);
            }, 3500); // 3.5s auto loop
        }

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        window.addEventListener('scroll', () => {
            const btn = document.getElementById('scroll-top-btn');
            if (window.scrollY > 300) {
                btn.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                btn.classList.add('opacity-0', 'pointer-events-none');
            }
        });

        window.addEventListener('resize', updateCarouselView);

        // Window Load
        window.onload = function() {
            renderServices();
            renderTestimonials();            
            startReviewTimer();

            document.getElementById('year-copy').innerText = new Date().getFullYear();

            // Pause review auto slide on mouse hover
            const wrapper = document.getElementById('carousel-wrapper');
            if (wrapper) {
                wrapper.addEventListener('mouseenter', () => clearInterval(reviewAutoInterval));
                wrapper.addEventListener('mouseleave', startReviewTimer);
            }
        };