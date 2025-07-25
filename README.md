# Da Big Homie | Community Sounds & Events

(Developer: Leon Freeman)

![ami](https://github.com/user-attachments/assets/be8b5355-62ea-45ae-9542-30fac679fd8d)

[Live webpage](https://leon4721.github.io/project-one/)

## Table of Content

1. [Project Goals](#project-goals)
   1. [User Goals](#user-goals)
   2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
   1. [Target Audience](#target-audience)
   2. [User Requirements and Expectations](#user-requirements-and-expectations)
   3. [User Stories](#user-stories)
3. [Design](#design)
   1. [Design Choices](#design-choices)
   2. [Colour](#colours)
   3. [Fonts](#fonts)
   4. [Structure](#structure)
   5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
   1. [Languages](#languages)
   2. [Frameworks & Tools](#frameworks-&-tools)
5. [Features](#features)
6. [Testing](#validation)
   1. [HTML Validation](#HTML-validation)
   2. [CSS Validation](#CSS-validation)
   3. [Accessibility](#accessibility)
   4. [Performance](#performance)
   5. [Device testing](#performing-tests-on-various-devices)
   6. [Browser compatibility](#browser-compatibility)
   7. [Testing user stories](#testing-user-stories)
7. [Bugs](#Bugs)
8. [Deployment](#deployment)
9. [Credits](#credits)
10. [Acknowledgements](#acknowledgements)

### Rationale

Da Big Homie is a multimedia web platform built to connect, empower, and amplify voices within the hip-hop community through live events, video showcases, and collaborative opportunities. Its primary goal is to create a digital home for underground artists, DJs, and fans to engage with culture in a grassroots, authentic way.

This project was inspired by the lack of accessible, centralized platforms for local talent to showcase their work and connect with an audience outside of traditional social media. Many creatives face barriers in visibility, promotion, and monetization without corporate backing — this site aims to shift that narrative.

Rooted in the spirit of community and DIY culture, Da Big Homie fills the gap between artists and audiences through curated event listings, submission forms for performers, and multimedia features like video playlists and artist profiles. The project addresses the issue of underrepresentation by providing both visibility and participation channels.

Its key features — including event registration, video galleries, interactive forms, and responsive layouts — are tailored specifically to meet the needs of emerging creatives. Unlike standard platforms, it highlights cultural storytelling and local pride, making it more relevant to its target audience.

Benefits include increased exposure for independent artists, smoother communication between organizers

## Project Vision & Inspiration

-“Da Big Homie” was conceived as more than a website—it’s a digital tribute to the creative energy and resilience of urban artists and the African diaspora. Growing up immersed in hip-hop culture, I noticed the lack of dedicated, visually engaging spaces online for local talent to share their stories, promote events, and build a genuine sense of community. This project is my answer to that gap: a platform that not only celebrates homegrown greatness, but also empowers both established and aspiring artists to connect, collaborate, and reach wider audiences.

-I deliberately fused nostalgic 90s hip-hop visuals (pixel fonts, burnt orange and purple, gritty backdrops) with modern web standards to evoke authenticity and emotional resonance. This theme is reflected everywhere—from the animated hero slider and custom mascot to the vibrant, branded card designs and interactive elements that echo classic mixtape covers and block party flyers.

# User-Centered Design Approach

- From the outset, the project was developed with the user journey at its core. I mapped user stories based on interviews and casual feedback from local artists, fans, and event organizers. Early wireframes and mockups were validated with real users, whose feedback directly shaped both feature prioritization and content tone. For example, a local artist emphasized the need for easy track submission, which led to the dynamic file-upload feature and responsive contact form. An event organizer suggested integrating ticket booking and artist registration modals—ensuring the platform serves both fans and creators.

- Accessibility was prioritized throughout: every interactive element is keyboard-accessible, images include descriptive alt text, and forms use ARIA roles and clear feedback. I tested the site with WAVE, Lighthouse, and across a spectrum of devices, iterating layouts and color contrasts to ensure a welcoming experience for everyone.

- Innovative Features & Iterative Process
Beyond essential requirements, I wanted to inject originality and a professional edge:

- Animated 3D Hero Slider: Reinforces brand energy, provides immediate engagement, and showcases the site mascot—unifying the user experience.

# Media Hub & Modular Content: 

-The four-tile media grid centralizes discovery and supports future scaling (additional media types or artist profiles).

-Dynamic Modals for Event Booking & Blog: Artist registration and ticket purchasing are handled via ARIA-compliant modals, reducing friction and ensuring accessibility. The blog section leverages modals for full-article previews, echoing popular mobile news feeds.

# Gallery & Music Cards:
- Gallery and music sections offer responsive, non-cropped media displays, in direct response to user requests for “full experience” previews.

-Each iteration was guided by real user testing. For example, I refined modal focus management after a tester flagged difficulty closing popups with only a keyboard. When an artist found form error messages unclear, I revised the validation feedback and labels. Regular bug reviews and mobile device testing ensured a seamless experience across platforms.

# Design & Brand Consistency

-Brand identity is woven through every detail: logo, color palette, font, and iconography were selected for maximum impact and nostalgia, always with usability in mind. Custom graphics, hover states, and subtle transitions add depth and character, transforming basic navigation into an immersive, memorable journey.

# Reflection & Forward Planning

-This project has deepened my appreciation for user-centric design, accessibility, and continuous improvement. Every feature, style choice, and bug fix was rooted in genuine user need and creative vision. Going forward, I’d like to introduce user authentication for artists, real-time event updates, and richer content curation powered by user submissions and feedback. Launching “Da Big Homie” as a live, evolving platform would be the ultimate tribute to the culture that inspired it.

# In summary:

-This project combines creativity, community, technical polish, and professional branding to deliver a unique, inclusive space for urban arts. Every step was informed by real user feedback, accessibility best practice, and an enduring respect for the stories at the heart of hip-hop culture.


## Project Goals

### User Goals

- Discover local urban artists and their work
- Listen to music, browse images, and watch educational videos from featured or selected artists.
- Easily contact the team to collaborate or submit work
- Read well curated literature regarding specific or relating topics
- Find online or local events to showcase my work
- Book or purchase tickets for shows with minimal steps

### Site Owner Goals

- Increase visibility and engagement for local artists
- Promote local or online events and multimedia content
- Streamline event registration and attendee data collection
- Make it easy for users such as artists to connect, submit content, and get involved
- Maintain clear branding and an inviting, community-driven aesthetic

---

## User Experience

### Target Audience

- Urban music fans and event-goers
- Aspiring and established local artists (musicians, dancers, visual artists, etc.)
- Event organizers and promoters
- Anyone interested in hip-hop, diaspora culture, and community events

### User Requirements & Expectations

- Simple intuitive navigation
- Fast access to music, videos, galleries, and blog content
- Clear event calendar and RSVP/ticket features
- Simple, mobile-friendly contact forms
- Responsive layout with visually engaging design on all devices

### User Stories

#### First-time User

1. As a first time user, I want to see upcoming event venues so that I know where or when "Big Homie" shows are located.
2. As a first time user, I want to know ticket price ranges on each event card so that I can decide which shows fit my budget.
3. As a first-time user, I want to sample audio, images, and video so that I get a feel for what to expect at the scene.
4. As a first time user, I want to get a feel of what to expect in terms of the "mission" so that I can learn about the Big Homie’s ideology through community story and context.

#### Returning User

5. As a returning user, I want to control playback (play/pause/skip) inline while browsing so that my listening isn’t interrupted.
6. As a returning user, I want to use the Contact form so that I can quickly send feedback or collab requests
7. As a returning user, I want to use the Contact section with a map integration so that I can quickly see where the venue is located.
8. As a returning user, I want to replay tracks I enjoyed on demand as well as download the music so that I can listen to it whenever wherever (offline)

#### Site Owner

13. As the site owner, I want to update hero slider images, captions, and links so that I can keep the homepage spotlight fresh.
14. As the site owner, I want users to get to know the ideology of what we stand for
15. As the site owner, I want to create natural engagement either online or local through grassroots engagements and competition
16. As the site owner, I want the users to be able to submit content to be curated and accessed before competitions or artist spots

| As a…           | I want to…                                      | So that I can…                                |
| --------------- | ----------------------------------------------- | --------------------------------------------- |
| New Visitor     | See upcoming events and RSVP or buy tickets     | Attend local shows and connect with the scene |
| Artist          | Submit my music or register to perform          | Get exposure and collaborate                  |
| Event Organizer | Promote my event and handle guest registrations | Reach more fans and streamline attendance     |
| Fan             | Listen to new tracks and browse images/videos   | Discover fresh talent in my community         |
| Any User        | Contact the team for info or collaborations     | Get quick responses and join the movement     |

---

## Design

### Design Choices

- The website was designed with a 90s hip-hop vibe with a gritty, urban palette: burnt orange (#FB621C),
  and moody purple (#410547). Smoky backgrounds, pixel fonts, and graffiti-inspired layouts create a raw, nostalgic feel.
- Built for edge and nostalgia—like a mixtape in website form
- Each main page features a distinct hero section (carousel, video, banner)
- Modal and carousel interactions reinforce modern, dynamic feel

### Colour Scheme

![AdobeColor-My Color Theme (1)](https://github.com/user-attachments/assets/65cee7e3-7e49-419b-9ccd-049ec4f320c7)

- Rich dark backgrounds (#000, #111) for immersive vibe
- Accent colors drawn from cover art and background
- High contrast for all buttons/text over video

### Fonts

Press Start 2P with cursive as a fallback is used everywhere (headings, body text) to reinforce Big Homie’s retro, underground mixtape vibe.
Its blocky, pixelated forms echo classic arcade type and street-art stencil lettering while remaining legible at all sizes.

### Structure

The site follows a familiar, easy-to-learn layout: a left-aligned logo in the navbar, right-aligned links that collapse into a hamburger menu on mobile, and five main pages:

- **index.html**: Home/landing, hero slider,
- **about.html**: Community story, mission, and call to action
- **media.html**: Grid links to music, gallery, video, and blogz
- **music.html**: Track cards with player and cover art
- **gallery.html**: Image carousel, full-screen responsive
- **video.html**: Video cards, responsive YouTube embeds
- **blogz.html**: Article previews, interactive modal for full stories
- **events.html**: Event cards, modal RSVP/ticket/artist forms
- **contact.html**: Contact form, Google Map, info box

## Wireframes

### Home Page

<details><summary>Home</summary>
<img src="docs/wireframes/home.png">
</details>

### About Page

<details><summary>About</summary>
<img src="docs/wireframes/about.png">
</details>

### Blogz Page

<details><summary>Blogz</summary>
<img src="docs/wireframes/blogz.png">
</details>

### Contact Page

<details><summary>Contact</summary>
<img src="docs/wireframes/contact.png">
</details>

### Events Page

<details><summary>Events</summary>
<img src="docs/wireframes/events.png">
</details>

### Gallery Page

<details><summary>Gallery</summary>
<img src="docs/wireframes/images.png">
</details>

### Media Hub Page

<details><summary>Media</summary>
<img src="docs/wireframes/medi.png">
</details>

### Music Page

<details><summary>Music</summary>
<img src="docs/wireframes/music.png">
</details>

### Video Page

<details><summary>Video</summary>
<img src="docs/wireframes/video.png">
</details>

## Technologies Used

### Languages

- HTML5
- CSS3
- JavaScript (ES6+)

### Frameworks & Tools

- Bootstrap 5.3 (CDN)
- Custom CSS (`assets/css/style.css`)
- Google Fonts
- FontAwesome (for icons)
- Git & GitHub for version control
- GitHub Pages for deployment
- WAVE, Lighthouse, W3C Validator for accessibility/validation
- Tinypng
- Balsamiq
- Adobe Color
- Font Awesome
- Favicon.io

---

## Features

The website consists of nine HTML pages, with five main pages featured in the navigation bar.

### Logo and Navigation Bar

- The logo and nav bar appear at the top of every page.
- The navigation bar is fully responsive—on smaller screens, it changes to a hamburger menu for mobile usability.
- The navbar includes direct links to the five core pages: Home, About, Events, Media, and Contact.
- This structure allows users to easily find and explore different sections of the site.
- The link for the currently active main page is highlighted in the navigation bar, helping users keep track of where they are.
- The logo itself is clickable and always links back to the Home page, making it simple for users to return to the main section from anywhere on the site.
- User stories covered: This fulfills all navigation-related user stories for easy access on all devices.

![hamburger](https://github.com/user-attachments/assets/7169862b-57a2-420f-af15-591b4f765fab)
![nav-bar](https://github.com/user-attachments/assets/bd170238-2e5c-4603-8b52-2d9a08b59967)

### Hero Banner & Mascot Slider (Home)

- Animated hero section with a 3D mascot slider greets users on the home page.
- Fulfills: User Story 4 — gives first-time users a clear sense of mission, vibe, and the site's community focus.

![homepage](https://github.com/user-attachments/assets/fd263bd1-4017-4c32-b61c-586f0808970b)

### About Page Story

- Column layout with community roots, platform mission, and a call-to-action.
- Fulfills: User Story 4 — helps users and returning visitors understand the site's values and story.

![about](https://github.com/user-attachments/assets/8d043de9-bbd9-4a49-993d-5821bed955b0)

### Media Hub Grid

- Central page with four interactive tiles for music, gallery, video, and blogs.
- Fulfills: User Story 5 — lets returning users instantly access media and blog content.

![media](https://github.com/user-attachments/assets/d3f7a786-3801-4212-ab84-14f65dda3b50)

### Music Player Cards

- Vinyl-inspired cards with built-in audio players and track/artist info.
- Fulfills: User Story 3 (first-timers can sample music); User Story 5 (returning users can replay tracks).

![music](https://github.com/user-attachments/assets/67ecf31d-6a51-4d05-8a23-8dbb6100f544)

### Gallery Carousel

- Responsive Bootstrap carousel displays full images with no cropping.
- Fulfills: User Story 3 — lets users view community photos to get the site’s vibe.

![gallery](https://github.com/user-attachments/assets/bf1ba32f-eb59-48f1-9271-c8ed42e96815)

### Video Cards

- Embedded, responsive video players with titles, upload dates, and descriptions.
- Fulfills: User Story 3 — lets users watch videos of performances, battles, and tutorials.

![video](https://github.com/user-attachments/assets/90787808-78f9-4d0a-9ec5-f3e8b7ff4680)

### Blog Previews & Modals

- Preview cards open full articles in accessible modals.
- Fulfills: User Story 5 (easy access to blog content for returning users); Admin Story 9 (site owner can easily update content).

![blogz](https://github.com/user-attachments/assets/3b6ae4ad-da1d-41c0-a502-d22cb2cf7093)

### Event Cards & Booking Modals

- Cards display event title, venue, price, and open modals for tickets or artist registration.
- Fulfills: User Story 1 (see upcoming events and locations); User Story 2 (see ticket prices); Admin Story 10 (easy artist and attendee registration).

![pricecard](https://github.com/user-attachments/assets/37f916f0-8130-48a3-997f-b3ec7c788eca)

### Contact Form

- Multi-purpose form with file upload for submissions and integrated Google Map.
- Fulfills: User Story 6 (users can submit feedback/collaborations or songs); User Story 7 (users can get directions via the map).
<img src="docs/user-story-testing/7-submit.png">


### Custom Styling & Theming

- The site features cohesive brand visuals using CSS variables, a dark retro-inspired color palette, and fully responsive layouts.
- Fulfills: User Story 8 (provides a responsive, mobile-friendly experience) and Admin Story 11 (maintains strong, consistent community branding).
- The site’s design and functionality have been successfully tested on both iPhone 5s and iPad Pro.

![iPhone 5s](https://github.com/user-attachments/assets/0ca80203-314f-4319-95c5-7dba69ff3056)
![iPad Pro](https://github.com/user-attachments/assets/406572b8-db11-4826-8fc7-d1aa81a59550)

---

## Testing & Validation

### HTML Validation- All pages validated with [W3C HTML Validator](https://validator.w3.org/)

- No errors found (custom code only; some 3rd-party libraries may generate benign warnings).

<details>
  <summary>Home</summary>
  <img src="docs/validation/home.png">
</details>

<details>
  <summary>About</summary>
  <img src="docs/validation/about.png">
</details>
    
<details>
  <summary>Media</summary>
  <img src="docs/validation/media.png">
</details>

<details>
  <summary>Events</summary>
  <img src="docs/validation/event.png">
</details>

<details>
  <summary>Contact</summary>
  <img src="docs/validation/contact.png">
</details>

<details>
  <summary>Music</summary>
  <img src="docs/validation/music.png">
</details>

<details>
  <summary>Video</summary>
  <img src="docs/validation/video.png">
</details>

<details>
  <summary>Gallery</summary>
  <img src="docs/validation/gallery.png">
</details>

<details>
  <summary>Blogz</summary>
  <img src="docs/validation/blogz.png">
</details>

### CSS Validation

-<details><summary>CSS</summary>
<img src="docs/validation/css.png">

</details>

- Custom CSS validated via
- No errors, minor warnings for variables

### Accessibility Validation

### Accessibility

-The WAVE WebAIM web accessibility evaluation tool was used to ensure the website met high accessibility standards. All pages pass with 0 errors.

-<details><summary>Home</summary>
<img src="docs/accessibility/home.png">

</details>

<details><summary>About</summary>
<img src="docs/accessibility/about.png">
</details>

<details><summary>Media</summary>
<img src="docs/accessibility/media.png">
</details>

<details><summary>Events</summary>
<img src="docs/accessibility/event.png">
</details>

<details><summary>Contact</summary>
<img src="docs/accessibility/contact.png">
</details>

<details><summary>Music</summary>
<img src="docs/accessibility/music.png">
</details>

<details><summary>Video</summary>
<img src="docs/accessibility/video.png">
</details>

<details><summary>Gallery</summary>
<img src="docs/accessibility/image.png">
</details>

<details><summary>Blogz</summary>
<img src="docs/accessibility/blogz.png">
</details>

### Performance

Google Lighthouse in Google Chrome Developer Tools was used to test the performance of the website.

- <details><summary>Home</summary>
  <img src="docs/performance/home.png">
  </details>

<details><summary>About</summary>
<img src="docs/performance/about.png">
</details>

<details><summary>Media</summary>
<img src="docs/performance/media.png">
</details>

<details><summary>Events</summary>
<img src="docs/performance/events.png">
</details>

<details><summary>Contact</summary>
<img src="docs/performance/contact.png">
</details>

<details><summary>Music</summary>
<img src="docs/performance/music.png">
</details>

<details><summary>Video</summary>
<img src="docs/performance/videos.png">
</details>

<details><summary>Gallery</summary>
<img src="docs/performance/gallery.png">
</details>

<details><summary>Blogz</summary>
<img src="docs/performance/blogz.png">
</details>

### Device & Browser Compatibility

Performing tests on various devices
The website was tested on the following devices:

- iPhone: 5s, 15, 15 Pro Max and 16
- Samsung S25 Ultra
- MetaQuest 3s
- Windows 10
- iPad Pro

In addition, the website was tested using Google Chrome Developer Tools Device Toggling option for all available device options.

### Testing User Stories
| User Story | Feature | Action | Expected Result | Actual Result | Screenshots |
|------------|---------|--------|----------------|---------------|-------------|
| As a first-time user, I want to know where the event or venue is located | Google Map | Navigate to the Contact page and find the embedded map | View a map showing the venue location | Works as expected | <details><summary>Here</summary><img src="docs/user-story-testing/1.png"></details> |
| As a first-time user, I want to know the price for events | Event Cards | Go to the Events page and browse event listings | See ticket prices displayed on each event card | Works as expected | <details><summary>Screenshots</summary><img src="docs/user-story-testing/2.png"></details> |
| As a first-time user, I want to get a feel for what to expect at an event | Video Showcase | Go to the Video page and play a performance or battle | Watch highlight clips or artist interviews | Works as expected | <details><summary>Screenshots</summary><img src="docs/user-story-testing/3.png"></details> |
| ^ | Gallery | Navigate to the Gallery page | View photos from past events and community moments | Works as expected | <details><summary>Screenshots</summary><img src="docs/user-story-testing/4.png"></details> |
| As a returning user, I want to replay music or see new blog posts | Music Cards | Go to the Music page and play a track | Listen to music from featured artists | Works as expected | <details><summary>Screenshots</summary><img src="docs/user-story-testing/5.png"></details> |
| ^ | Blogz | Go to the Blogz page and read new articles | Find recent posts and urban stories | Works as expected | <details><summary>Screenshots</summary><img src="docs/user-story-testing/6-blogs.png"></details> |
| As a returning user, I want to contact the team or submit my music | Contact Form | On the Contact page, fill out and submit the form (including file upload for music) | Send a message or song submission | Works as expected | <details><summary>Screenshots</summary><img src="docs/features/songsub.png"></details> |
| As a returning user, I want the site to work smoothly on my phone | Responsive Layout | Visit any page on a mobile device | Navigation, forms, and media adapt to screen size | Works as expected | <details><summary>Screenshots</summary><img src="docs/user-story-testing/9phonesize.png"></details> |
| As a site owner, I want users to RSVP or register as artists | Event Modal Forms | On the Events page, use the "Book Now" or "Artist Register" buttons | Open a modal form for tickets or artist sign-up | Works as expected | <details><summary>Screenshots</summary><img src="docs/user-story-testing/artist-reg.png"></details> |
| As a site owner, I want the site branding to stay consistent | Custom Styling | Browse any page | Colors, fonts, and layout reflect hip-hop/urban theme | Works as expected | <details><summary>Screenshots</summary><img src="docs/features/ipad pro.png"> <img src="docs/features/pc wide screen (1200px).png"><img src="docs/features/pc wide screen (1200px).png"></details> |


## Bugs & Issues

-The homepage banner slider did not animate in 3D after first deployment.
Fix: Reviewed the tutorial and corrected the slider’s HTML structure. Made sure every .item element had a unique --position variable and confirmed the CSS @keyframes were present in style.css.

-On the Events page, clicking the "Get Tickets" or "Register as Artist" buttons did nothing.
Fix: Fixed a typo in the data-form-type attribute and updated the button event listeners in main.js to target the correct modal IDs. Confirmed the modals now open as expected.

-Gallery images appeared stretched and were not displaying at the correct aspect ratio on desktop.
Fix: Updated the gallery CSS to use object-fit: contain; width: 100%; height: auto; for all carousel/gallery images. Checked that Bootstrap’s carousel settings did not override these styles.

-The contact form’s file upload was visible for all inquiry types.
Fix: Refined the JavaScript so the file upload section is shown only when "Song Submission" is selected, and remains hidden for other inquiry types. Also updated aria-expanded for accessibility.

-Browser console showed a 404 error for site.webmanifest after deploying to GitHub Pages.
Fix: Added the missing site.webmanifest file to the project root. Updated all <link rel="manifest"> tags in each HTML file to use the correct path (href="site.webmanifest").

The hamburger navigation icon appeared too low on mobile devices.
Fix: Adjusted the navbar CSS to vertically center the hamburger menu icon by modifying padding and alignment rules. Tested on multiple devices to ensure proper placement.

## Deployment

The Da Big Homie website was deployed using GitHub Pages. To deploy your own version:

1. Navigate to your project repository on GitHub.
2. Click on the **Settings** tab.
3. In the sidebar, select **Pages**.
4. Under the **Source** section, choose the branch you want to deploy from (typically `main`).
5. Click **Save**. A banner will appear at the top of the page with a confirmation and a link to your live site, such as:  
   `https://leon4721.github.io/project-one/`

---

### Forking the Repository

If you'd like to fork Da Big Homie:

1. Go to the GitHub repository page.
2. Click the **Fork** button in the upper right-hand corner.

---

### Cloning the Repository

To clone Da Big Homie to your local machine:

1. Go to the GitHub repository.
2. Click the green **Code** button above the file list.
3. Choose your preferred method (HTTPS, SSH, or GitHub CLI) and copy the URL.
4. Open your terminal or Git Bash.
5. Change to the directory where you want to store the project.
6. Type:"git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY"
7. Press Enter. The repository will be cloned to your machine.

## Credits & Attribution

### Images & Media

- All images and artwork are originals created by Sora AI (leonfreemans creations) unless credited below.
- The following media assets were sourced from Pngtree and used under their free license:

# blogz.png (used in the Media Hub section)

# dvd.png (used in the Media Hub section)

# vinyl.png (used in the Media Hub section)

### Code

- Bootstrap components adapted from official documentation.
- Banner slider implementation adapted from Lun Dev’s CSS-only tutorial: "Create Crazy 3D Image Slider Effects Using CSS Only" (YouTube).

### Music & Audio

- All music tracks are original compositions by Leon Freeman and personal friends e.g. aka keyz, Tev and Chev
- Any embedded media (YouTube) is used with permission or as allowed by platform.

### JavaScript

- All scripts written by Leon Freeman. Any snippets adapted from forums/tutorials are credited in code comments.

### Fonts

- Google Fonts: Press Start 2P

### Acknowledgements

- I want to thank my wife for her incredible support with our kids, giving me the time and space I needed to be productive.
- A special thanks to my mentor, Mo Shami, for his advice and constant support.
- I’d also like to acknowledge Jess and the rest of the team from the college for their ongoing encouragement.
- Lastly, thank you to my friends for contributing their time to help test the site.
