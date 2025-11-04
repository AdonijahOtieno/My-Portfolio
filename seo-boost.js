// seo-boost.js - SEO enhancements without modifying HTML
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Inject Meta Tags Dynamically
    function injectMetaTags() {
        const metaTags = [
            // Basic SEO
            { name: 'description', content: 'Otieno Adonijah Ogara - R&D Mechanical Engineer & Data Scientist specializing in E-mobility innovation in Africa. Bridging hardware engineering with data intelligence.' },
            { name: 'keywords', content: 'Mechanical Engineer, Data Scientist, E-Mobility, R&D Engineer, Africa Innovation, Electric Vehicles, Kenya Engineer' },
            { name: 'author', content: 'Otieno Adonijah Ogara' },
            
            // Open Graph
            { property: 'og:title', content: 'Otieno Adonijah Ogara | R&D Mechanical Engineer & Data Scientist' },
            { property: 'og:description', content: 'Bridging hardware engineering with data intelligence to drive sustainable innovation in Africa\'s mobility revolution.' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: window.location.href },
            
            // Twitter Card
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: 'Otieno Adonijah Ogara | R&D Mechanical Engineer & Data Scientist' },
            { name: 'twitter:description', content: 'Engineering synergist bridging mechanical innovation with data science for Africa\'s mobility revolution.' }
        ];

        metaTags.forEach(tag => {
            const meta = document.createElement('meta');
            if (tag.property) {
                meta.setAttribute('property', tag.property);
            } else {
                meta.setAttribute('name', tag.name);
            }
            meta.content = tag.content;
            document.head.appendChild(meta);
        });
    }

    // 2. Inject Structured Data
    function injectStructuredData() {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Otieno Adonijah Ogara",
            "jobTitle": "R&D Mechanical Engineer & Data Scientist",
            "url": window.location.href,
            "sameAs": [
                "https://linkedin.com/in/adonijahotieno"
            ],
            "worksFor": {
                "@type": "Organization",
                "name": "Ampersand E-Mobility"
            },
            "knowsAbout": [
                "Mechanical Engineering",
                "Data Science", 
                "E-Mobility",
                "Electric Vehicles",
                "Battery Systems",
                "Python Programming",
                "SolidWorks"
            ],
            "description": "R&D Mechanical Engineer and Data Scientist specializing in E-mobility innovation in Africa."
        });
        document.head.appendChild(script);
    }

    // 3. Optimize Images Dynamically
    function optimizeImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            // Add alt text if missing
            if (!img.alt) {
                if (img.src.includes('profile')) {
                    img.alt = 'Otieno Adonijah Ogara - R&D Mechanical Engineer and Data Scientist';
                } else if (img.closest('.project-card')) {
                    const projectTitle = img.closest('.project-card').querySelector('h3');
                    img.alt = projectTitle ? `${projectTitle.textContent} - Project by Otieno Adonijah Ogara` : 'Engineering Project';
                }
            }
            
            // Add lazy loading
            img.loading = 'lazy';
            
            // Add dimensions if missing
            if (!img.width && !img.height) {
                img.width = 400;
                img.height = 400;
            }
        });
    }

    // 4. Add Analytics
    function injectAnalytics() {
        // Google Analytics
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
        document.head.appendChild(gaScript);
        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
    }

    // 5. Improve Internal Linking
    function enhanceInternalLinking() {
        // Add anchor links for better navigation
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const id = section.id;
            const firstHeading = section.querySelector('h1, h2, h3, h4, h5, h6');
            if (firstHeading && !firstHeading.id) {
                firstHeading.id = `${id}-heading`;
            }
        });
    }

    // 6. Add Performance Monitoring
    function monitorPerformance() {
        // Log Core Web Vitals
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log('Page load time:', loadTime, 'ms');
        });
    }

    // 7. Generate Dynamic Sitemap
    function generateSitemapHint() {
        const sitemapLink = document.createElement('link');
        sitemapLink.rel = 'sitemap';
        sitemapLink.type = 'application/xml';
        sitemapLink.href = '/sitemap.xml';
        document.head.appendChild(sitemapLink);
    }

    // Initialize all SEO features
    injectMetaTags();
    injectStructuredData();
    optimizeImages();
    enhanceInternalLinking();
    monitorPerformance();
    generateSitemapHint();
    
    // Only inject analytics if you have the ID
    // injectAnalytics();

    console.log('✅ SEO enhancements loaded successfully!');
});