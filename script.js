// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Gallery items
const galleryItems = [
    {
        title: 'Community Gathering',
        description: 'A vibrant community event bringing people together',
        emoji: '👥'
    },
    {
        title: 'City Landmarks',
        description: 'Iconic places that define San Francisco',
        emoji: '🏛️'
    },
    {
        title: 'Local Artists',
        description: 'Showcasing the creative talent of our city',
        emoji: '🎨'
    },
    {
        title: 'Street Life',
        description: 'The daily rhythm and energy of SF streets',
        emoji: '🚶'
    },
    {
        title: 'Cultural Events',
        description: 'Celebrating the diverse cultures of San Francisco',
        emoji: '🎭'
    },
    {
        title: 'Neighborhood Stories',
        description: 'Tales from the heart of each neighborhood',
        emoji: '🏘️'
    }
];

// Render gallery items
function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (galleryGrid) {
        galleryGrid.innerHTML = galleryItems.map(item => `
            <div class="gallery-item">
                <div class="gallery-item-image">${item.emoji}</div>
                <div class="gallery-item-content">
                    <h3 class="gallery-item-title">${item.title}</h3>
                    <p class="gallery-item-description">${item.description}</p>
                </div>
            </div>
        `).join('');
    }
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// CTA button scroll to gallery
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
            gallerySection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Initialize gallery on page load
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
});

// Add scroll animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
