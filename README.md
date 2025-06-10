# Da Big Homie | Community Sounds & Events
(Developer: Leon Freeman)
[Mockup image](![ami](https://github.com/user-attachments/assets/606b9487-13ec-4496-9e52-83f288abc2e1)


[Live webpage](https://leon4721.github.io/project-one/)

## Table of Content

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requrements and Expectations](#user-requrements-and-expectations)
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
    6. [Browser compatibility](#browser-compatability)
    7. [Testing user stories](#testing-user-stories)
7. [Bugs](#Bugs)
8. [Deployment](#deployment)
9. [Credits](#credits)
10. [Acknowledgements](#acknowledgements)
## Project Goals

### User Goals

- Discover local urban artists and their work  
- Listen to music, browse images, and watch videos from featured artists  
- Easily contact the team to collaborate or submit work  
- Quickly navigate all content on any device  

### Site Owner Goals

- Increase visibility and engagement for local artists  
- Promote events and multimedia content  
- Make it easy for users to connect, submit content, and get involved  
- Maintain clear branding and an inviting, community-driven aesthetic  


---

## User Experience

### Target Audience

- Urban music fans and event-goers
- Aspiring and established local artists (musicians, dancers, visual artists, etc.)
- Event organizers and promoters
- Anyone interested in hip-hop, diaspora culture, and community events

### User Requirements & Expectations

- simple Intuitive navigation 
- Fast access to music, videos, galleries, and blog content
- Clear event calendar and RSVP/ticket features
- Simple, mobile-friendly contact forms
- Responsive layout with visually engaging design on all devices

### Accessibility

- High contrast for text over backgrounds
- All images and controls have descriptive `alt` text and `aria` labels
- Keyboard navigation for navbars, carousels, and modals
- Responsive design adapts from iPhone SE to 4K desktop
- Forms provide validation messages and use semantic labels

### User Stories

| As a…            | I want to…                                             | So that I can…                                   |
|------------------|--------------------------------------------------------|--------------------------------------------------|
| New Visitor      | See upcoming events and RSVP or buy tickets            | Attend local shows and connect with the scene    |
| Artist           | Submit my music or register to perform                 | Get exposure and collaborate                     |
| Event Organizer  | Promote my event and handle guest registrations        | Reach more fans and streamline attendance        |
| Fan              | Listen to new tracks and browse images/videos          | Discover fresh talent in my community            |
| Any User         | Contact the team for info or collaborations            | Get quick responses and join the movement        |

---

## Design

### Design Choices

- the website ws desgine with a 90s hip-hop vibe with a gritty, urban palette: burnt orange (#FB621C),
 and moody purple (#410547). VHS glitches, pixel fonts, and graffiti-inspired layouts create a raw, nostalgic feel. 
- Built for edge and nostalgia—like a mixtape in website form
- Each main page features a distinct hero section (carousel, video, banner)
- Modal and carousel interactions reinforce modern, dynamic feel


### Colour Scheme
![AdobeColor-Big homie](https://github.com/user-attachments/assets/09c4afbf-7a97-416e-8ebc-a64ceb820bc7)

- Rich dark backgrounds (#000, #111) for immersive vibe
- Accent colors drawn from cover art and afro-futurist palettes
- High contrast for all buttons/text over video

### Fonts

- Bebas Neue (headers)
- Inter (body text)
- Oswald and Macondo (stylish accents)
- Google Fonts CDN for all

### Structure

- **index.html**: Home/landing, hero slider, and about modal
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
<img src="docs/wireframes/homepage.png">
</details>


### About Page
<details><summary>Home</summary>
<img src="docs/wireframes/about.png">
</details>


### Blogz Page
<details><summary>Home</summary>
<img src="docs/wireframes/blogz.png">
</details>


### Contact Page
<details><summary>contact</summary>
<img src="docs/wireframes/contact.png">
</details>

### Events Page
<details><summary>IEvents</summary>
<img src="docs/wireframes/events.png">
</details>

### Images/Gallery Page
<details><summary>Images</summary>
<img src="docs/wireframes/images.png">
</details>

### Media Hub Page
<details><summary>Media</summary>
<img src="docs/wireframes/media.png">
</details>

### Music Page
<details><summary> Music</summary>
<img src="docs/wireframes/music.png">
</details>

### Video Page
<details><summary>Vidoe</summary>
<img src="docs/wireframes/video.png">
</details>





## Technologies Used

### Languages

- HTML5
- CSS3
  
### Frameworks & Tools

- Bootstrap 5.3 (CDN)
- Custom CSS (`assets/css/style.css`)
- Google Fonts
- FontAwesome (for icons)
- Git & GitHub for version control
- GitHub Pages for deployment
- WAVE, Lighthouse, W3C Validator for accessibility/validation

---

## Features

| Feature                | Page(s)        | User Stories Addressed          | Screenshot  |
|------------------------|---------------|-------------------------------|-------------|
| Responsive Navbar      | All           | All (navigation)               | [(doc/features)]       |
| Hero Banner/Slider     | index.html    | Welcome, brand immersion       | [img]       |
| Modal About            | index.html    | Learn about platform           | [img]       |
| Event Modal Forms      | events.html   | RSVP, Register, Tickets        | [img]       |
| Dynamic Gallery        | gallery.html  | Browse images, feel vibe       | [img]       |
| Music Player           | music.html    | Listen to new tracks           | [img]       |
| Video Cards            | video.html    | Watch battles, performances    | [img]       |
| Blog Modal             | blogz.html    | Read urban stories             | [img]       |
| Contact Form & Map     | contact.html  | Message, find location         | [img]       |

---

## Testing & Validation

### HTML Validation

- All pages validated with [W3C HTML Validator](https://validator.w3.org/)  
  - No errors found (custom code only; some 3rd-party libs may generate benign warnings)
  - 
<details><summary>Home</summary>
<img src="docs/validation/index.jpg">
</details>
<details><summary>About</summary>
<img src="docs/validation/about.jpg>
</details>
<details><summary>Media</summary>
<img src="docs/validation/media.jpg">
</details>
<details><summary>Events</summary>
<img src="docs/validation/events.jpg">
</details>
<details><summary>Contact</summary>
<img src="docs/validation/contact.jpg">
</details>
<details><summary>Music</summary>
<img src="docs/.jpg">
</details>
<details><summary>Video</summary>
<img src="docs/validation/video.jpg">
</details>
<details><summary>Gallery</summary>
<img src="docs/validation/gallery.jpg">
</details>
<details><summary>Blogz</summary>
<img src="docs/validation/blogz.jpg">
</details>
### CSS Validation

- Custom CSS validated via [W3C Jigsaw](https://jigsaw.w3.org/css-validator/)
  - No errors, minor warnings for variables
  - ![CSS Validator Screenshot](assets/testing/css.png)

### Accessibility Validation

- WAVE and Lighthouse run on all main pages
  - 0 critical accessibility errors reported
  - High color contrast, focusable nav, ARIA labels
  -<details><summary>Home</summary>
<img src="docs/accessibility/index.jpg">
</details>
<details><summary>About</summary>
<img src="docs/accessibility/about.jpg>
</details>
<details><summary>Media</summary>
<img src="docs/accessibility/media.jpg">
</details>
<details><summary>Events</summary>
<img src="docs/accessibility/events.jpg">
</details>
<details><summary>Contact</summary>
<img src="docs/accessibility/contact.jpg">
</details>
<details><summary>Music</summary>
<img src="docs/accessibility.jpg">
</details>
<details><summary>Video</summary>
<img src="docs/accessibility/video.jpg">
</details>
<details><summary>Gallery</summary>
<img src="docs/accessibility/gallery.jpg">
</details>
<details><summary>Blogz</summary>
<img src="docs/accessibility/blogz.jpg">
</details>

### Performance

- Lighthouse scores:  
  - Performance: 
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100
  - ![Lighthouse Screenshot](assets/testing/lighthouse.png)

### Device & Browser Compatibility

| Device           | Browser          | Result       |
|------------------|------------------|--------------|
| iPhone SE        | Safari/Chrome    | Pass         |
| Galaxy S10       | Chrome           | Pass         |
| iPad             | Safari           | Pass         |
| Windows 11       | Edge/Chrome/FF   | Pass         |
| MacBook Air      | Safari/Chrome    | Pass         |

### Testing User Stories

| User Story             | Feature/Page          | Action                       | Expected Result                | Actual Result | Screenshot |
|------------------------|----------------------|------------------------------|-------------------------------|---------------|------------|
| See upcoming events    | events.html          | View event cards             | Events displayed               | Pass          | [img]      |
| RSVP/buy tickets       | events.html          | Use event modal form         | Success modal/confirmation     | Pass          | [img]      |
| Submit music/art       | contact.html         | Upload via form              | Confirmation, reset form       | Pass          | [img]      |
| Browse images/videos   | gallery.html, video.html | Carousel/YouTube embeds    | Content displays/plays         | Pass          | [img]      |
| Contact the team       | contact.html         | Submit contact form          | Success alert, email sent*     | Pass          | [img]      |

---

## Bugs & Issues

| Bug                               | Fix / Status                |
|------------------------------------|-----------------------------|
| Modal not closing on esc           | Added event listener, fixed |
| Carousel not scaling on iPhone     | Adjusted CSS for 320px min  |
| Navbar active class not switching  | JS patch, fixed             |
| Form submit w/o message possible   | Set `required` attribute    |
| Gallery carousel overflow (tablet) | Media queries added         |

---

## Deployment

1. Pushed project files to GitHub repo ([link](https://github.com/leon4721/project-one))
2. Enabled GitHub Pages in repo settings
3. Site published at: https://leon4721.github.io/project-one/
4. For local development:  
   - Clone repo, open `index.html` in browser
   - All assets are relative; no server needed

---

## Credits

- **Bootstrap 5** (CDN) for grid/layout
- **FontAwesome** for icons
- **Images/Artwork:**  
  - `cover 1.png`, `afri 1.png`, etc: [Unsplash artist], [Pixabay], or original  
  - All other images and video by Leon Freeman unless otherwise stated
- **Code references:**  
  - Modal/event handler patterns adapted from Bootstrap docs  
  - Carousel logic inspired by [Bootstrap examples]
- **Audio:** Tracks by Leon Freeman and collaborators

---

## Acknowledgements

- Inspiration: Local artist community and the African diaspora
- Special thanks: Family, friends, and Code Institute Slack reviewers

