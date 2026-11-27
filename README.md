# Md. Al-Amin — Personal Portfolio

An original, responsive, multi-page portfolio website for **Md. Al-Amin**, a final-semester B.Sc. Computer Science and Engineering student at Daffodil International University.

## Pages
- `index.html` — Home and introduction
- `about.html` — Biography and interests
- `education.html` — Academic background
- `skills.html` — Technical skills
- `projects.html` — Selected projects
- `contact.html` — Contact details and email form

## Technologies
- HTML5 for semantic page structure
- CSS3 for the dark editorial design and responsive layouts
- JavaScript for navigation, form handling, and dynamic footer year
- Fetch API (AJAX) to request `assets/data/projects.json` on the Projects page

## Run locally
You can open `index.html` directly in a browser. All pages and images are local. The optional AJAX request for the project JSON works when the site is served over HTTP(S), such as GitHub Pages; browsers may block local JSON fetches when opening a file directly.

## Publish with GitHub Pages
1. Create or open a GitHub repository.
2. Upload **all files and folders inside this project folder** (not only the ZIP file).
3. Ensure `index.html` is in the repository root.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch `main` and folder `/(root)`, then click **Save**.
7. Wait for the Pages deployment to finish. The URL normally looks like `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

Alternatively, the repository includes `.github/workflows/pages.yml` for deployment through GitHub Actions. If using that workflow, select **GitHub Actions** as the Pages source in Settings → Pages.

## Contact form limitation
The contact form uses a `mailto:` link. It prepares an email in the visitor's email application; it does not send or store messages on a server.

## Personal-data accuracy
No previous education, achievements, work experience, CGPA, graduation year, or skill proficiency percentages were invented. Add these only when accurate details are available.
