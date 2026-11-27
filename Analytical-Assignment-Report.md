# Analytical Assignment Report
## Personal Portfolio Website — Md. Al-Amin

### 1. Introduction
This project is a responsive, multi-page personal portfolio website for Md. Al-Amin, a final-semester B.Sc. student in Computer Science and Engineering at Daffodil International University. It presents his profile, academic background, technical skills, selected projects, interests, and contact information.

### 2. Objectives
- Build an original multi-page website using core web technologies taught in Web Computing.
- Present personal and academic information in a clear, professional format.
- Apply responsive design for desktop and mobile devices.
- Demonstrate JavaScript-based interaction and an asynchronous data request.

### 3. Technologies Used
- **HTML5:** Semantic structure, navigation, headings, images, and form elements.
- **CSS3:** Dark editorial visual design, grid/flex layouts, responsive breakpoints, hover effects, and reduced-motion support.
- **JavaScript:** Mobile navigation, dynamic copyright year, form validation, and form submission handling.
- **Fetch API (AJAX):** Asynchronous request to load project metadata from `assets/data/projects.json` on the Projects page.

### 4. Website Architecture
The project is organized into separate HTML pages and shared asset folders:
- `assets/css/style.css` — shared styling
- `assets/js/main.js` — shared interactions
- `assets/images/` — reserved for additional images; the supplied profile photo is stored at `assets/profile.jpg`
- `assets/data/projects.json` — project metadata used by the AJAX request

### 5. Page-by-Page Description
| Page | Main content |
|---|---|
| Home | Name, tagline, profile photograph, introduction, skills preview, and project links |
| About | Biography, motivation, interests, and photograph |
| Education | B.Sc. degree, university, department, and current semester |
| Skills | Programming languages, web technologies, and SOLID principles |
| Projects | Hospital Management and AR–VR Universe Exploration project summaries |
| Contact | Email, GitHub profile, and validated contact form |

### 6. Design Decisions
The website follows a dark editorial design direction. A charcoal background, muted olive-green accents, off-white text, serif display headings, sans-serif body text, and monospace labels create a restrained academic and technology-oriented appearance. The layout uses consistent navigation and shared styles across pages.

### 7. Implementation and Functionality
- Separate HTML documents provide a genuine multi-page structure.
- Responsive CSS adjusts navigation, columns, cards, and typography for smaller screens.
- JavaScript controls the mobile navigation and automatically updates the footer year.
- The Projects page uses the Fetch API to request JSON project metadata asynchronously.
- The Contact page validates required fields and prepares an email through `mailto:`.

### 8. Testing Checklist
The following checks should be performed after uploading to GitHub Pages:
1. Open the home page and follow every navigation link.
2. Confirm the profile photograph loads on Home and About.
3. Test the navigation menu at mobile width.
4. Open Projects and confirm the AJAX status reports that two project records loaded.
5. Submit the contact form with missing fields and confirm browser validation.
6. Submit valid sample information and confirm that an email draft opens.
7. Check the website on both mobile and desktop screen sizes.

### 9. Limitations
The contact form does not use a server or database; it prepares an email draft using the visitor's email application. Previous education, achievements, professional experience, CGPA, graduation year, and skill proficiency levels were not supplied and are therefore not fabricated. The project descriptions are limited to the information provided.

### 10. Future Improvements
- Add verified academic results and achievements.
- Add screenshots and repository links for individual projects.
- Add a downloadable CV.
- Connect a secure backend or form service for server-side message handling.
- Add project demonstrations and more detailed technical documentation.

### 11. Conclusion
The portfolio demonstrates the use of HTML5, CSS3, JavaScript, responsive design, and an AJAX data request to create an original multi-page personal website. It provides a structured way to present academic and technical information and can be extended as new projects and achievements become available.
