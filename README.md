# GymVis+ Gym Landing Page

GymVis+ is a Ukrainian-language, single-page website for a fictional fitness club. It introduces the gym, presents membership options and coaches, and gives visitors a way to explore the club and submit a training enquiry.

## What the project includes

- A hero section with a call to action leading to the membership plans.
- Membership cards with different access schedules and prices, plus student and military discounts.
- A coach section with profile images, biographies, and quotes.
- An about section describing the club's mission.
- A training video with a poster image and supporting information.
- A sign-up form and a footer with contact and information links.
- A responsive navigation menu and a membership carousel on smaller screens.

## Design and implementation decisions

- **One-page layout:** All key information is presented in a single scrolling page, with navigation links that jump to each section.
- **No framework or build step:** The page uses plain HTML, CSS, and browser JavaScript to keep the project lightweight and easy to run.
- **Responsive behavior:** Separate media queries adapt the layout for smaller screens. The navigation becomes a slide-in menu, and membership cards become a carousel on narrower viewports.
- **Reusable visual style:** Montserrat typography, a restrained grayscale palette, and consistent card styling are used throughout the page.
- **Local media assets:** Illustrations, coach portraits, slider arrows, and the training video are stored in `images/`. Montserrat is loaded from Google Fonts.

## Project structure

```text
.
├── index.html            # Page content and section markup
├── js/
│   └── index.js          # Mobile navigation and membership carousel
├── styles/
│   ├── normalize.min.css # Browser style normalization
│   ├── style.css         # Base styles and desktop layout
│   └── media.css         # Responsive styles and breakpoints
├── images/
│   ├── about.svg         # About-section illustration
│   ├── arrow-left.svg    # Previous-slide arrow
│   ├── arrow-right.svg   # Next-slide arrow
│   ├── coach1.svg        # Coach profile illustrations
│   ├── coach2.svg
│   ├── coach3.svg
│   ├── coach4.svg
│   ├── fon.svg           # Hero background and video poster
│   ├── gjft.svg          # Discount gift icon
│   └── video.mp4         # Training video
└── README.md
```

## Run locally

No package installation or build command is required. Open `index.html` in a browser, or serve the project directory with any static web server.

## Current scope

This repository contains the presentation layer only. The sign-up form has browser-level required-field checks but is not connected to a server or email service. Membership purchase buttons and social links are also presentation elements; checkout and external destinations have not been implemented.
