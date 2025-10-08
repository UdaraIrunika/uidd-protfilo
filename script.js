document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Sticky Header
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to Top Button
    const backToTopBtn = document.createElement('div');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-level');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'skills') {
                    animateSkillBars();
                }
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

const titles = ["Frontend Developer", "Backend Developer", "Graphic Designer", "Owner & CEO"];
let index = 0;
let charIndex = 0;
let typing = true;
const typeSpeed = 100; // ms
const eraseSpeed = 50;  // ms
const delay = 2000;     // ms before erasing

const typewriterEl = document.getElementById("typewriter");

function typeWriter() {
    if (typing) {
        if (charIndex < titles[index].length) {
            typewriterEl.textContent += titles[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typeSpeed);
        } else {
            typing = false;
            setTimeout(typeWriter, delay);
        }
    } else {
        if (charIndex > 0) {
            typewriterEl.textContent = titles[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeWriter, eraseSpeed);
        } else {
            typing = true;
            index = (index + 1) % titles.length;
            setTimeout(typeWriter, typeSpeed);
        }
    }
}

document.addEventListener("DOMContentLoaded", typeWriter);


// Animate education cards on scroll
const eduCards = document.querySelectorAll('.education-card');

window.addEventListener('scroll', () => {
  eduCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add('show-card');
    }
  });
});

// Independent timeline toggle for multiple education cards
document.addEventListener('DOMContentLoaded', function() {
    const timelineButtons = document.querySelectorAll('.timeline-btn');
    
    timelineButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            
            const timelineContainer = this.closest('.education-card').querySelector('.timeline-container');
            const icon = this.querySelector('i');
            
            // Close all other open timelines
            document.querySelectorAll('.timeline-container').forEach(container => {
                if (container !== timelineContainer && container.style.display === 'block') {
                    container.style.display = 'none';
                    container.classList.remove('show');
                    const otherButton = container.closest('.education-card').querySelector('.timeline-btn');
                    if (otherButton) {
                        otherButton.classList.remove('active');
                        const otherIcon = otherButton.querySelector('i');
                        if (otherIcon) otherIcon.className = 'fas fa-chevron-down';
                    }
                }
            });
            
            // Toggle current timeline
            if (timelineContainer.style.display === 'none' || !timelineContainer.style.display) {
                timelineContainer.style.display = 'block';
                setTimeout(() => timelineContainer.classList.add('show'), 10);
                this.classList.add('active');
                icon.className = 'fas fa-chevron-up';
            } else {
                timelineContainer.style.display = 'none';
                timelineContainer.classList.remove('show');
                this.classList.remove('active');
                icon.className = 'fas fa-chevron-down';
            }
        });
    });
});

   // Add smooth scrolling for the CTA button
    document.addEventListener('DOMContentLoaded', function() {
        const ctaButton = document.querySelector('.sponsors-cta .btn');
        if (ctaButton) {
            ctaButton.addEventListener('click', function(e) {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    });


    // Package Category Navigation
document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const packageCategories = document.querySelectorAll('.package-category');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Show selected category
            packageCategories.forEach(cat => {
                cat.classList.remove('active');
                if (cat.id === category) {
                    cat.classList.add('active');
                }
            });
        });
    });
});

// Contact Modal Functionality
function openContactForm(packageName) {
    document.getElementById('packageName').textContent = packageName;
    document.getElementById('contactModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
// Package Category Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    emailjs.init("wxDUx3lT39EZ5Robm"); // Replace with your EmailJS public key
    
    // Category switching
    const categoryBtns = document.querySelectorAll('.category-btn');
    const packageCategories = document.querySelectorAll('.package-category');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show selected category
            packageCategories.forEach(cat => {
                cat.classList.remove('active');
                if (cat.id === category) {
                    cat.classList.add('active');
                }
            });
        });
    });
});

// Modal Functions
function openContactForm(packageName) {
    document.getElementById('packageName').textContent = packageName;
    document.getElementById('contactModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
    document.getElementById('packageContactForm').reset();
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Form Submission with EmailJS
document.getElementById('packageContactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const packageName = document.getElementById('packageName').textContent;
    const formData = new FormData(this);
    const submitBtn = this.querySelector('button[type="submit"]');
    
    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Prepare email data
    const emailData = {
        package_name: packageName,
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
        budget: formData.get('budget'),
        timestamp: new Date().toLocaleString(),
        to_email: 'uiindustryprivetlimited@gmail.com'
    };
    
    // Send email to yourself (admin notification)
    emailjs.send('service_bn85zae', 'template_honbbgg', emailData)
        .then(function(response) {
            console.log('Admin email sent successfully:', response);
            
            // Send auto-reply to client
            return emailjs.send('service_bn85zae', 'template_honbbgg', {
                to_email: emailData.email,
                name: emailData.name,
                package_name: emailData.package_name,
                budget: emailData.budget,
                timestamp: emailData.timestamp
            });
        })
        .then(function(response) {
            console.log('Auto-reply sent successfully:', response);
            alert(`✅ Thank you for your interest in the ${packageName}! We have received your inquiry and will contact you soon.`);
            closeModal();
            document.getElementById('packageContactForm').reset();
        })
        .catch(function(error) {
            console.error('EmailJS Error:', error);
            alert('❌ Sorry, there was an error sending your message. Please try again or contact us directly at uiindustryprivetlimited@gmail.com');
        })
        .finally(function() {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
});

// Update the openContactForm function to handle new services
function openContactForm(serviceName) {
    document.getElementById('packageName').textContent = serviceName;
    document.getElementById('contactModal').style.display = 'block';
}

// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add click listeners to all service buttons
    const serviceButtons = document.querySelectorAll('.service-btn');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceName = this.textContent === 'Inquire' 
                ? this.closest('.service-item').querySelector('h5').textContent
                : this.textContent;
            openContactForm(serviceName);
        });
    });
});
