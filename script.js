// ================================
// Neural Portfolio - Clean JavaScript Implementation
// ================================

(function() {
    'use strict';

    // ================================
    // Neural Network Background System
    // ================================
    class NeuralNetwork {
        constructor() {
            this.svg = document.getElementById('neuralSvg');
            this.nodes = [];
            this.connections = [];
            this.nodeCount = window.innerWidth > 768 ? 30 : 15;
            this.connectionCount = window.innerWidth > 768 ? 20 : 10;
        }

        init() {
            if (!this.svg) return;
            this.createNodes();
            this.createConnections();
            this.startNeuralActivity();
        }

        createNodes() {
            for (let i = 0; i < this.nodeCount; i++) {
                const node = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                
                node.setAttribute('cx', x);
                node.setAttribute('cy', y);
                node.setAttribute('r', 3);
                node.setAttribute('class', 'neural-node');
                node.style.animationDelay = Math.random() * 3 + 's';
                
                this.svg.appendChild(node);
                this.nodes.push({ element: node, x, y, id: i });
            }
        }

        createConnections() {
            for (let i = 0; i < this.connectionCount; i++) {
                const node1 = this.nodes[Math.floor(Math.random() * this.nodes.length)];
                const node2 = this.nodes[Math.floor(Math.random() * this.nodes.length)];
                
                if (node1 !== node2) {
                    const connection = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    connection.setAttribute('x1', node1.x);
                    connection.setAttribute('y1', node1.y);
                    connection.setAttribute('x2', node2.x);
                    connection.setAttribute('y2', node2.y);
                    connection.setAttribute('class', 'neural-connection');
                    
                    this.svg.appendChild(connection);
                    this.connections.push({ element: connection, node1, node2 });
                }
            }
        }

        fireConnection(connection) {
            connection.element.classList.add('active');
            setTimeout(() => {
                connection.element.classList.remove('active');
            }, 1500);
        }

        startNeuralActivity() {
            setInterval(() => {
                if (this.connections.length > 0) {
                    const randomConnection = this.connections[Math.floor(Math.random() * this.connections.length)];
                    this.fireConnection(randomConnection);
                }
            }, 2000 + Math.random() * 3000);
        }

        triggerNeuralFiring() {
            const fireCount = Math.min(5, this.connections.length);
            for (let i = 0; i < fireCount; i++) {
                const randomConnection = this.connections[Math.floor(Math.random() * this.connections.length)];
                setTimeout(() => this.fireConnection(randomConnection), i * 200);
            }
        }

        triggerEnhancedFiring() {
            // Fading cascade effect - starts intense and gradually fades
            this.createFadingCascade();
        }

        createFadingCascade() {
            // Phase 1: High-energy burst (0-1 seconds)
            this.fireCascadePhase(12, 100, this.getVibriantColors(), 3);
            
            // Phase 2: Medium activity (1-2.5 seconds)
            setTimeout(() => {
                this.fireCascadePhase(6, 200, this.getMediumColors(), 2);
            }, 1000);
            
            // Phase 3: Low activity (2.5-4 seconds)
            setTimeout(() => {
                this.fireCascadePhase(3, 400, this.getSubtleColors(), 1);
            }, 2500);
        }

        fireCascadePhase(fireCount, interval, colors, strokeWidth) {
            const actualFireCount = Math.min(fireCount, this.connections.length);
            for (let i = 0; i < actualFireCount; i++) {
                const randomConnection = this.connections[Math.floor(Math.random() * this.connections.length)];
                setTimeout(() => {
                    this.fireStyledConnection(randomConnection, colors, strokeWidth);
                }, i * interval);
            }
        }

        fireStyledConnection(connection, colors, strokeWidth) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            connection.element.classList.add('active');
            connection.element.style.stroke = color;
            connection.element.style.strokeWidth = strokeWidth + 'px';
            connection.element.style.filter = `drop-shadow(0 0 ${strokeWidth * 3}px ${color})`;
            
            setTimeout(() => {
                connection.element.classList.remove('active');
                connection.element.style.stroke = '';
                connection.element.style.strokeWidth = '';
                connection.element.style.filter = '';
            }, 1500);
        }

        getVibriantColors() {
            return ['#00E5FF', '#E91E63', '#9C27B0', '#FF9800', '#4CAF50', '#2196F3'];
        }

        getMediumColors() {
            return ['#4FC3F7', '#F06292', '#BA68C8', '#FFB74D', '#81C784'];
        }

        getSubtleColors() {
            return ['#81D4FA', '#F8BBD9', '#D1C4E9', '#FFCC02'];
        }
    }

    // ================================
    // Profile Picture Manager
    // ================================
    class ProfileManager {
        constructor() {
            this.profilePic = document.getElementById('profile-pic');
            this.profileCounter = document.getElementById('profile-counter');
            this.currentIndex = 0;
            this.totalImages = 4;
        }

        init() {
            if (!this.profilePic || !this.profileCounter) return;
            this.profilePic.addEventListener('click', () => this.cycleImage());
        }

        cycleImage() {
            this.profilePic.classList.add('loading');
            
            // Trigger neural cascade effect
            this.triggerEffects();
            
            setTimeout(() => {
                this.currentIndex = (this.currentIndex + 1) % this.totalImages;
                const timestamp = new Date().getTime();
                this.profilePic.src = `images/profile${this.currentIndex + 1}.jpg?${timestamp}`;
                this.profileCounter.textContent = `${this.currentIndex + 1}/${this.totalImages}`;
                this.profilePic.classList.remove('loading');
            }, 300);
        }

        triggerEffects() {
            // Trigger neural network firing
            if (window.neuralNetwork) {
                window.neuralNetwork.triggerNeuralFiring();
            }
            
            // Create cascade effect from profile picture
            if (window.cascadeSystem) {
                const rect = this.profilePic.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                window.cascadeSystem.createCascade(centerX, centerY);
            }
        }
    }

    // ================================
    // Navigation Manager
    // ================================
    class NavigationManager {
        constructor() {
            this.tabs = document.querySelectorAll('.nav-tab');
            this.sections = document.querySelectorAll('.content-section');
        }

        init() {
            this.tabs.forEach(tab => {
                tab.addEventListener('click', () => this.switchSection(tab));
            });

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key >= '1' && e.key <= '3') {
                    const tabIndex = parseInt(e.key) - 1;
                    if (this.tabs[tabIndex]) {
                        this.switchSection(this.tabs[tabIndex]);
                    }
                }
            });
        }

        switchSection(activeTab) {
            const sectionId = activeTab.dataset.section;
            
            // Update active tab
            this.tabs.forEach(tab => tab.classList.remove('active'));
            activeTab.classList.add('active');
            
            // Show corresponding section
            this.sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === sectionId) {
                    section.classList.add('active');
                    this.animateContentLoad(section);
                }
            });
        }

        animateContentLoad(section) {
            const animatedElements = section.querySelectorAll('[data-delay]');
            animatedElements.forEach(element => {
                const delay = parseInt(element.dataset.delay) || 0;
                setTimeout(() => {
                    element.classList.add('visible');
                }, delay);
            });
        }
    }

    // ================================
    // Scroll Animation Manager
    // ================================
    class ScrollAnimationManager {
        constructor() {
            this.observer = null;
        }

        init() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        this.triggerSynapticEffect(entry.target);
                    }
                });
            }, observerOptions);

            this.observeElements();
        }

        observeElements() {
            const elements = document.querySelectorAll(
                '.stat-card, .goal-card, .timeline-item, .contact-item, .project-card'
            );
            
            elements.forEach(el => {
                this.observer.observe(el);
            });
        }

        triggerSynapticEffect(element) {
            const effect = document.createElement('div');
            effect.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: radial-gradient(circle at center, rgba(79, 195, 247, 0.3) 0%, transparent 70%);
                pointer-events: none;
                opacity: 0;
                border-radius: inherit;
                animation: synapticPulse 1s ease-out;
            `;
            
            element.style.position = 'relative';
            element.appendChild(effect);
            
            setTimeout(() => {
                if (effect.parentNode) {
                    effect.parentNode.removeChild(effect);
                }
            }, 1000);
        }
    }

    // ================================
    // Typing Effect
    // ================================
    class TypingEffect {
        constructor() {
            this.subtitle = document.getElementById('typingSubtitle');
            if (!this.subtitle) return;
            this.originalText = this.subtitle.textContent;
        }

        init() {
            if (!this.subtitle) return;
            this.subtitle.textContent = '';
            setTimeout(() => this.startTyping(), 1000);
        }

        startTyping() {
            let i = 0;
            const typeWriter = () => {
                if (i < this.originalText.length) {
                    this.subtitle.textContent += this.originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            };
            typeWriter();
        }
    }

    // ================================
    // Contact Manager
    // ================================
    class ContactManager {
        constructor() {
            this.contactItems = document.querySelectorAll('.contact-item[href^="http"]');
        }

        init() {
            this.contactItems.forEach(item => {
                item.addEventListener('click', (e) => this.handleContactClick(e, item));
            });
        }

        handleContactClick(e, item) {
            const icon = item.querySelector('.contact-icon i');
            if (!icon) return;
            
            const originalClass = icon.className;
            
            // Add loading animation
            icon.className = 'fas fa-spinner fa-spin';
            
            // Trigger neural firing effect
            if (window.neuralNetwork) {
                window.neuralNetwork.triggerNeuralFiring();
            }
            
            setTimeout(() => {
                icon.className = originalClass;
            }, 1000);
        }
    }

    // ================================
    // Neural Cascade Effect System
    // ================================
    class CascadeSystem {
        constructor() {
            this.isActive = false;
        }

        init() {
            // Add click listener to the entire document
            document.addEventListener('click', (e) => {
                // Don't interfere with actual clickable elements
                if (!e.target.closest('button, a, [role="button"], input, select, textarea')) {
                    this.createCascade(e.clientX, e.clientY);
                }
            });

            // Add cascade styles
            this.addCascadeStyles();
        }

        createCascade(x, y) {
            if (this.isActive) return; // Prevent overlapping cascades
            
            this.isActive = true;
            
            // Only trigger enhanced neural network activity (no foreground effects)
            if (window.neuralNetwork) {
                window.neuralNetwork.triggerEnhancedFiring();
            }
            
            setTimeout(() => {
                this.isActive = false;
            }, 2000);
        }

        createRipple(x, y) {
            const ripple = document.createElement('div');
            ripple.className = 'cascade-ripple';
            ripple.style.left = (x - 5) + 'px';
            ripple.style.top = (y - 5) + 'px';
            ripple.style.zIndex = '999';
            
            document.body.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 2000);
        }

        createRadiatingConnections(centerX, centerY) {
            const connectionCount = 8;
            const maxLength = 150;
            
            for (let i = 0; i < connectionCount; i++) {
                const angle = (i / connectionCount) * 2 * Math.PI;
                const length = 50 + Math.random() * maxLength;
                
                setTimeout(() => {
                    const connection = document.createElement('div');
                    connection.className = 'cascade-connection';
                    
                    connection.style.left = centerX + 'px';
                    connection.style.top = centerY + 'px';
                    connection.style.width = length + 'px';
                    connection.style.transformOrigin = '0 50%';
                    connection.style.transform = `rotate(${angle}rad)`;
                    connection.style.zIndex = '998';
                    
                    document.body.appendChild(connection);
                    
                    setTimeout(() => {
                        if (connection.parentNode) {
                            connection.parentNode.removeChild(connection);
                        }
                    }, 1500);
                }, i * 100);
            }
        }

        addCascadeStyles() {
            if (document.head.querySelector('[data-cascade-style]')) return;
            
            const style = document.createElement('style');
            style.setAttribute('data-cascade-style', 'true');
            style.textContent = `
                .cascade-ripple {
                    position: fixed;
                    border: 2px solid var(--neural-cyan);
                    border-radius: 50%;
                    pointer-events: none;
                    animation: cascadeRipple 2s ease-out;
                    box-shadow: 0 0 20px var(--neural-cyan);
                }

                .cascade-connection {
                    position: fixed;
                    height: 2px;
                    background: linear-gradient(90deg, var(--neural-cyan), var(--neural-pink), transparent);
                    pointer-events: none;
                    animation: cascadeConnection 1.5s ease-out;
                    filter: drop-shadow(0 0 4px var(--neural-pink));
                }

                @keyframes cascadeRipple {
                    0% {
                        width: 10px;
                        height: 10px;
                        opacity: 1;
                        border-width: 3px;
                    }
                    100% {
                        width: 300px;
                        height: 300px;
                        opacity: 0;
                        border-width: 1px;
                    }
                }

                @keyframes cascadeConnection {
                    0% {
                        opacity: 0;
                        transform: scaleX(0);
                    }
                    50% {
                        opacity: 1;
                        transform: scaleX(1);
                    }
                    100% {
                        opacity: 0;
                        transform: scaleX(1);
                    }
                }

                @keyframes synapticPulse {
                    0% { opacity: 0; transform: scale(0.8); }
                    50% { opacity: 1; transform: scale(1.1); }
                    100% { opacity: 0; transform: scale(1); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // ================================
    // Accessibility Manager
    // ================================
    class AccessibilityManager {
        constructor() {
            this.init();
        }

        init() {
            this.setupKeyboardNavigation();
            this.setupReducedMotion();
            this.setupFocusStyles();
        }

        setupKeyboardNavigation() {
            document.addEventListener('keydown', (e) => {
                // ESC key to reduce motion for accessibility
                if (e.key === 'Escape') {
                    document.body.classList.toggle('reduce-motion');
                }
                
                // Tab navigation enhancement
                if (e.key === 'Tab') {
                    document.body.classList.add('using-keyboard');
                }
            });

            document.addEventListener('mousedown', () => {
                document.body.classList.remove('using-keyboard');
            });
        }

        setupReducedMotion() {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                document.body.classList.add('reduce-motion');
                
                const reducedMotionCSS = `
                    .reduce-motion *,
                    .reduce-motion *::before,
                    .reduce-motion *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                    
                    .reduce-motion .neural-node,
                    .reduce-motion .neural-connection {
                        animation: none !important;
                    }
                `;
                
                const style = document.createElement('style');
                style.textContent = reducedMotionCSS;
                document.head.appendChild(style);
            }
        }

        setupFocusStyles() {
            const focusCSS = `
                .using-keyboard *:focus {
                    outline: 2px solid var(--neural-cyan) !important;
                    outline-offset: 2px !important;
                }
                
                .using-keyboard .nav-tab:focus {
                    box-shadow: 0 0 0 3px rgba(79, 195, 247, 0.5) !important;
                }
            `;
            
            const style = document.createElement('style');
            style.textContent = focusCSS;
            document.head.appendChild(style);
        }
    }

    // ================================
    // Main Application
    // ================================
    class PortfolioApp {
        constructor() {
            this.systems = {};
            this.init();
        }

        init() {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.initializeSystems());
            } else {
                this.initializeSystems();
            }
        }

        initializeSystems() {
            try {
                // Initialize all systems
                this.systems.neuralNetwork = new NeuralNetwork();
                this.systems.profileManager = new ProfileManager();
                this.systems.navigationManager = new NavigationManager();
                this.systems.scrollAnimationManager = new ScrollAnimationManager();
                this.systems.typingEffect = new TypingEffect();
                this.systems.contactManager = new ContactManager();
                this.systems.cascadeSystem = new CascadeSystem();
                this.systems.accessibilityManager = new AccessibilityManager();

                // Initialize each system
                this.systems.neuralNetwork.init();
                this.systems.profileManager.init();
                this.systems.navigationManager.init();
                this.systems.scrollAnimationManager.init();
                this.systems.typingEffect.init();
                this.systems.contactManager.init();
                this.systems.cascadeSystem.init();

                // Make systems globally accessible
                window.neuralNetwork = this.systems.neuralNetwork;
                window.cascadeSystem = this.systems.cascadeSystem;

                // Initialize content animations for the first section
                this.initializeInitialAnimations();

                // Fade in the main container
                setTimeout(() => {
                    const container = document.querySelector('.container');
                    if (container) {
                        container.style.opacity = '1';
                    }
                }, 100);

                console.log('🧠 Neural portfolio system initialized successfully');

            } catch (error) {
                console.error('❌ Error initializing portfolio systems:', error);
                
                // Fallback: at least show the content
                const container = document.querySelector('.container');
                if (container) {
                    container.style.opacity = '1';
                }
            }
        }

        initializeInitialAnimations() {
            const aboutSection = document.getElementById('about');
            if (aboutSection && aboutSection.classList.contains('active')) {
                const animatedElements = aboutSection.querySelectorAll('[data-delay]');
                animatedElements.forEach(element => {
                    const delay = parseInt(element.dataset.delay) || 0;
                    setTimeout(() => {
                        element.classList.add('visible');
                    }, delay + 500);
                });
            }
        }
    }

    // ================================
    // Initialize Application
    // ================================
    new PortfolioApp();

})();