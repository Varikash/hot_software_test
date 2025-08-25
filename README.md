# Angular Test Assignment - Terms & Conditions Application

## 📋 Project Overview

This is a responsive web application built with Angular 20 and Tailwind CSS that displays Terms and Conditions with an interactive accordion interface. The application features a side navigation menu and multiple content pages with smooth transitions and modern UI design.

## 🚀 Live Demo

[View Live Demo](https://github.com/Varikash/hot_software_test)

## 🛠️ Technologies Used

- **Frontend Framework**: Angular 20.2.0
- **Styling**: Tailwind CSS 3.x
- **Language**: TypeScript
- **Build Tool**: Angular CLI
- **Package Manager**: npm

## ✨ Features

### Core Functionality
- **Interactive Navigation**: Side menu with smooth page transitions
- **Accordion Interface**: Expandable/collapsible content sections
- **Keyboard Navigation**: ESC key support for closing accordions
- **Modern UI**: Clean, professional design with custom styling

### Pages
1. **Terms and Conditions** - Main accordion interface with expandable sections
2. **Privacy Policy** - Placeholder content (ready for implementation)
3. **Responsible Gaming** - Gambling awareness content
4. **Bonus Terms** - Placeholder content (ready for implementation)
5. **Contact Us** - Placeholder content (ready for implementation)

### Technical Features
- **Standalone Components**: Modern Angular architecture
- **Type Safety**: Full TypeScript implementation
- **Responsive Breakpoints**: Mobile, tablet, and desktop layouts
- **Accessibility**: semantic HTML

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── accordion/           # Accordion component
│   │   ├── accordion-content/   # Accordion content wrapper
│   │   ├── close-icon/          # Close icon component
│   │   ├── content-wrapper/     # Main content wrapper
│   │   ├── gambling-content/    # Responsible gaming page
│   │   ├── install-promo/       # Installation promo component
│   │   ├── main-layout/         # Main application layout
│   │   ├── side-menu/           # Navigation sidebar
│   │   ├── terms-container/     # Terms page container
│   │   └── terms-section/       # Individual terms sections
│   ├── constants/
│   │   ├── accordion-data.ts    # Accordion content data
│   │   └── pages-data.ts        # Navigation menu data
│   └── app.ts                   # Root component
```



## 🔧 Key Components

### Main Layout (`main-layout`)
- Handles overall application structure
- Manages page routing and navigation
- Responsive layout with side menu

### Terms Container (`terms-container`)
- Manages accordion state
- Handles keyboard interactions (ESC key)
- Controls which accordion section is open

### Side Menu (`side-menu`)
- Navigation component
- Highlights active page
- Responsive design (hidden on mobile)

### Gambling Content (`gambling-content`)
- Responsible gaming information
- Professional content presentation
- Accessible text formatting

