# 🧠 Neural Portfolio - Zachary Kaufman

A modern, neuroscience-inspired portfolio website featuring dynamic neural network visualizations, synaptic transmission effects, and cognitive science theming.

## ✨ Features

### 🎨 **Visual Design**
- **Charcoal Dark Theme**: Sophisticated dark color scheme with neural-inspired accents
- **Neural Network Background**: Animated SVG network with pulsing nodes and connections
- **Synaptic Effects**: Interactive firing patterns triggered by user interactions
- **Gradient Theming**: Neural-inspired color gradients throughout the interface

### 🧬 **Neural-Inspired Interactions**
- **Neural Firing Effects**: Profile picture clicks trigger network-wide firing patterns
- **Synaptic Transmission**: Hover effects simulate neurotransmitter release
- **Dendrite Growth**: Content loads with organic, neuron-like growth animations
- **Cognitive Load Indicators**: Visual feedback mimicking neural activity

### 🚀 **User Experience**
- **Smooth Navigation**: Tab-based section switching with animated transitions
- **Responsive Design**: Optimized for all device sizes with performance scaling
- **Accessibility**: Full keyboard navigation, focus management, and reduced motion support
- **Loading States**: Contextual feedback for all interactive elements

### 🔧 **Technical Features**
- **Modular Architecture**: Separated HTML, CSS, and JavaScript for easy maintenance
- **Performance Optimization**: Adaptive complexity based on device capabilities
- **Error Recovery**: Graceful degradation with automatic retry mechanisms
- **Analytics Tracking**: Built-in interaction tracking for optimization insights

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
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
4. **Adjust Colors**: Modify CSS variables in `styles.css` for color customization
5. **Deploy**: Upload to your web hosting service

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

### **Animation Speed**
Modify timing variables in `styles.css`:
```css
:root {
    --transition-fast: 0.2s ease;
    --transition-medium: 0.4s ease;
    --transition-slow: 0.6s ease;
    --transition-neural: 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 🧪 Development Tools

When running on localhost, access development tools via browser console:

```javascript
// Trigger neural firing manually
neuralPortfolio.triggerNeuralFiring()

// Switch sections programmatically
neuralPortfolio.switchSection('research')

// View interaction analytics
neuralPortfolio.getAnalytics()

// Toggle reduced motion mode
neuralPortfolio.reduceMotion()
```

## 📱 Browser Support

- **Modern Browsers**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **Mobile Support**: iOS Safari 13+, Chrome Mobile 80+
- **Features**: CSS Grid, Custom Properties, Intersection Observer, SVG Animations

## ♿ Accessibility Features

- **Keyboard Navigation**: Full site navigation with Tab/Arrow keys (1-3 for sections)
- **Reduced Motion**: Respects `prefers-reduced-motion` settings
- **Focus Management**: Enhanced focus indicators for keyboard users
- **Screen Reader**: Semantic HTML with proper ARIA labels
- **Color Contrast**: WCAG AA compliant color combinations

## 🚀 Performance Optimizations

- **Adaptive Complexity**: Neural network density scales based on device performance
- **Hardware Detection**: Reduces effects on low-end devices
- **Lazy Loading**: Content animations triggered by scroll visibility
- **Error Recovery**: Automatic system recovery with graceful degradation

## 🔧 Advanced Configuration

### **Neural Network Behavior**
```javascript
// Modify firing frequency (in script.js)
setInterval(() => {
    // Fire neural connections
}, 2000 + Math.random() * 3000);  // 2-5 second intervals
```

### **Content Animation Delays**
```html

Content
```

### **Profile Picture Count**
Update the `totalImages` variable in `script.js` if you have more/fewer profile pictures:
```javascript
this.totalImages = 4;  // Change to match your image count
```

## 🐛 Troubleshooting

### **Neural Network Not Appearing**
- Check browser console for JavaScript errors
- Ensure SVG support is enabled
- Try refreshing the page

### **Images Not Loading**
- Verify image files are in the correct `/images/` directory
- Check file names match exactly (`profile1.jpg`, etc.)
- Ensure proper file permissions

### **Animations Too Intensive**
- Press `Esc` key to toggle reduced motion mode
- Access dev tools: `neuralPortfolio.reduceMotion()`
- The system auto-detects low-end devices

### **Section Content Not Showing**
- Check that all required HTML elements have proper IDs
- Verify JavaScript isn't blocked by browser/extensions
- Try hard refresh (Ctrl+F5 or Cmd+Shift+R)

## 📈 Analytics & Insights

The portfolio tracks user interactions locally for optimization:
- Profile picture clicks
- Section navigation patterns
- Contact link engagement
- Time spent on site

Access analytics via: `neuralPortfolio.getAnalytics()`

## 🎯 Future Enhancements

- **Light Theme**: Alternative color scheme
- **3D Neural Networks**: WebGL-powered visualizations
- **Voice Navigation**: Speech-controlled interface
- **AI Chat Integration**: Interactive research discussion
- **Publication Timeline**: Academic paper visualization
- **Collaboration Network**: Interactive research connections

## 📄 License

This portfolio template is open source and available under the MIT License. Feel free to use, modify, and distribute as needed.

---

**Built with cognitive science in mind** 🧠✨

For questions or collaboration opportunities, reach out through the contact section!