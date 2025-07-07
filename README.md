# 🧠 Research Portfolio - Zachary Kaufman

A sophisticated, neuroscience-inspired portfolio website featuring dynamic neural network visualizations, fading cascade effects, and cognitive science theming. Built with modern web technologies and accessibility in mind.

Note: This website was "Vibe Coded" with Claude Sonnet 4

## ✨ Key Features

### 🎨 **Sophisticated Design**
- **Charcoal Dark Theme**: Professional dark color scheme with neural-inspired accents
- **Life Dimensions**: Personal identity cards (Scientist, Social Roboticist, Wellness Technologist, Dog Dad)
- **Academic Timeline**: Reverse chronological education journey with detailed descriptions
- **Research Projects**: Current and past projects organized in neural-themed cards with lab affiliations

### 🧬 **Neural-Inspired Interactions**
- **Fading Cascade Effects**: Background clicks trigger cascading neural activity that gradually fades from intense to subtle
- **Neural Network Background**: Animated SVG network with pulsing nodes and synaptic connections
- **Profile Picture Cycling**: Click to cycle through images with neural firing effects
- **Synaptic Hover Effects**: Cards respond with neurotransmitter-like visual feedback

### 🚀 **Advanced User Experience**
- **Smooth Tab Navigation**: Seamless section switching with staggered animations
- **Responsive Design**: Optimized layouts for all device sizes
- **Accessibility**: Full keyboard navigation, focus management, and reduced motion support
- **Performance Scaling**: Adaptive complexity based on device capabilities

### 🔧 **Technical Excellence**
- **Modular Architecture**: Clean separation of HTML, CSS, and JavaScript
- **Error Recovery**: Graceful degradation with automatic retry mechanisms
- **Modern JavaScript**: ES6+ classes with proper encapsulation
- **CSS Variables**: Consistent theming and easy customization

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling and neural animations
├── script.js           # Interactive functionality and neural effects
├── README.md           # This documentation
└── images/             # Profile pictures (profile1.jpg - profile4.jpg)
```

## 🛠️ Setup Instructions

1. **Clone/Download** the portfolio files to your web server directory
2. **Add Images**: Place your profile pictures in the `images/` folder:
   - `profile1.jpg` (default)
   - `profile2.jpg`
   - `profile3.jpg` 
   - `profile4.jpg`
3. **Customize Content**: Edit `index.html` to update your personal information
4. **Update Lab Links**: Replace placeholder lab URLs in the research project cards
5. **Adjust Colors**: Modify CSS variables in `styles.css` for color customization
6. **Deploy**: Upload to your web hosting service

## 🎨 Customization Guide

### **Color Scheme**
Edit CSS variables in `styles.css`:
```css
:root {
    --neural-blue: #4FC3F7;        /* Primary neural accent */
    --neural-cyan: #00E5FF;        /* Highlight color */
    --neural-purple: #9C27B0;      /* Secondary accent */
    --bg-primary: #1a1a1a;         /* Main background */
    --surface-primary: #2d2d2d;    /* Card backgrounds */
}
```

### **Neural Network Density**
Adjust node count in `script.js`:
```javascript
this.nodeCount = window.innerWidth > 768 ? 30 : 15;  // Desktop : Mobile
this.connectionCount = window.innerWidth > 768 ? 20 : 10;
```

### **Cascade Effect Intensity**
Modify cascade phases in `script.js`:
```javascript
// Phase 1: High-energy burst (0-1 seconds)
this.fireCascadePhase(12, 100, this.getVibriantColors(), 3);
```

### **Life Dimensions**
Update the About Me cards in `index.html`:
```html

    
        
    
    Your Dimension

```

## 🧪 Interactive Features

### **Neural Cascade Effect**
- Click anywhere on the background to trigger cascading neural activity
- **Phase 1**: Intense burst with vibrant colors and thick connections
- **Phase 2**: Medium activity with softer colors
- **Phase 3**: Gentle fade with subtle colors
- **Duration**: 4 seconds total with natural fade-out

### **Profile Picture Interactions**
- Click profile picture to cycle through multiple images
- Triggers enhanced neural firing across the entire network
- Smooth loading transitions with visual feedback

### **Research Projects**
- **Current Projects**: Active research with lab affiliations
- **Past Projects**: Completed work with collaboration status
- **Lab Tags**: Clickable links to research lab websites
- **Field Tags**: Interactive emoji-enabled topic indicators

## 📱 Browser Support

- **Modern Browsers**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **Mobile Support**: iOS Safari 13+, Chrome Mobile 80+
- **Features**: CSS Grid, Custom Properties, Intersection Observer, SVG Animations

## ♿ Accessibility Features

- **Keyboard Navigation**: Full site navigation with Tab/Arrow keys (1-3 for sections)
- **Reduced Motion**: Respects `prefers-reduced-motion` settings (ESC key toggle)
- **Focus Management**: Enhanced focus indicators for keyboard users
- **Screen Reader**: Semantic HTML with proper ARIA labels
- **Color Contrast**: WCAG AA compliant color combinations

## 🚀 Performance Optimizations

- **Adaptive Complexity**: Neural network density scales based on device performance
- **Hardware Detection**: Reduces effects on low-end devices
- **Lazy Loading**: Content animations triggered by scroll visibility
- **Error Recovery**: Automatic system recovery with graceful degradation
- **Mobile Optimization**: Reduced neural network complexity on smaller screens

## 🔧 Advanced Configuration

### **Neural Network Behavior**
```javascript
// Modify firing frequency and intensity
this.fireCascadePhase(connectionCount, interval, colors, strokeWidth);
```

### **Content Animation Delays**
```html

Content
```

### **Contact Card Layout**
```css
/* Adjust contact grid for different layouts */
.contact-grid {
    grid-template-columns: repeat(2, 1fr); /* 2x2 grid */
    max-width: 800px;
}
```

## 🐛 Troubleshooting

### **Neural Network Not Appearing**
- Check browser console for JavaScript errors
- Ensure SVG support is enabled
- Verify all CSS and JS files are loading properly

### **Images Not Loading**
- Verify image files are in the correct `/images/` directory
- Check file names match exactly (`profile1.jpg`, etc.)
- Ensure proper file permissions and web server configuration

### **Animations Too Intensive**
- Press `Esc` key to toggle reduced motion mode
- The system auto-detects low-end devices and adapts accordingly
- Check browser's motion preferences settings

### **Cascade Effect Not Working**
- Ensure JavaScript is enabled and not blocked
- Check for console errors in browser developer tools
- Try clicking in different areas of the background

## 📈 Analytics & Insights

The portfolio includes optional analytics tracking for optimization:
- Profile picture interaction patterns
- Section navigation preferences  
- Contact link engagement metrics
- Time spent in different sections

## 🎯 Future Enhancement Ideas

- **3D Neural Networks**: WebGL-powered visualizations
- **Voice Navigation**: Speech-controlled interface
- **AI Chat Integration**: Interactive research discussion
- **Publication Timeline**: Academic paper visualization
- **Collaboration Network**: Interactive research connections
- **Theme Switcher**: Light/dark mode toggle

## 🏆 Credits & Attribution

**Portfolio Design & Development**: Claude (Anthropic AI Assistant)
- Neural-themed visual design and animations
- Interactive cascade effects and neural network visualizations
- Responsive layout and accessibility features
- Modern JavaScript architecture and performance optimizations

**Content & Research**: Zachary Kaufman
- Personal information, research descriptions, and academic content
- Project details and lab affiliations
- Life dimensions and personal branding

**Collaborative Development Process**: 
This portfolio was created through an iterative design process combining AI capabilities for technical implementation with human expertise for content strategy and user experience refinement.

## 📄 License

This portfolio template is open source and available under the MIT License. Feel free to use, modify, and distribute as needed.

---

**Built with cognitive science in mind** 🧠✨

*A sophisticated neural-themed portfolio showcasing research at the intersection of Human-Computer Interaction, Cognitive Neuroscience, and AI for human well-being.*