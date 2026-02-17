## Essential pages for a typical website

This document lists the core pages that most websites and web apps should have.  
You can map each of these to a Page entry in Hygraph.

---

## Recommended pages for this project

Based on the Hygraph models defined in `hygraph-data-model.md`, these are the concrete pages and routes we plan to use in this project.

### Core top-level pages (Page model)

- Home  
  - Slug: `home`  
  - Route: `/`  
  - Uses sections for hero, services teaser, portfolio teaser, blog teaser, and a main call to action.

- About  
  - Slug: `about`  
  - Route: `/about`  
  - Explains who you are, your story, and why people should trust you.

- Services  
  - Slug: `services`  
  - Route: `/services`  
  - Lists what you offer, who it is for, and what problems you solve.

- Portfolio  
  - Slug: `portfolio`  
  - Route: `/portfolio`  
  - Shows a grid of Project entries with names, short descriptions, and thumbnails.

- Blog  
  - Slug: `blog`  
  - Route: `/blog`  
  - Lists BlogPost entries with title, excerpt, date, and optional cover image.

- Contact  
  - Slug: `contact`  
  - Route: `/contact`  
  - Contains a contact form that creates ContactLead entries, plus email and social links.

- Privacy Policy  
  - Slug: `privacy-policy`  
  - Route: `/privacy-policy`  
  - Describes how you handle data and cookies.

- Terms of Service (optional)  
  - Slug: `terms`  
  - Route: `/terms`  
  - Basic rules for using the website or app.

### Dynamic pages from models

- Project detail pages  
  - Model: Project  
  - Route pattern: `/portfolio/{project-slug}`  
  - Each Project entry becomes a case study page with full description, gallery, and SEO fields.

- Blog post pages  
  - Model: BlogPost  
  - Route pattern: `/blog/{post-slug}`  
  - Each BlogPost entry becomes a full article page with content and SEO fields.

### Special pages

- 404 / Not Found  
  - Route: handled by the app framework, optionally backed by a Page entry.  
  - Shows a friendly message and links back to Home, Portfolio, Blog, and Contact.

### 1. Home

Purpose  

Purpose  
Main entry point for visitors.

Content ideas
- Clear value proposition in the hero section.
- Short overview of key services or features.
- Highlights of portfolio items, blog posts, or case studies.
- Strong call to action, such as contact, signup, or view work.

### 2. About

Purpose  
Explain who you are and why you exist.

Content ideas
- Short story about the company or individual.
- Mission, vision, or core values.
- Team introduction, photos, or founder bio.
- Social proof, such as client logos or small testimonials.

### 3. Services or What We Do

Purpose  
Describe what you offer in a clear and structured way.

Content ideas
- List of services or capabilities with short descriptions.
- For each service, mention who it is for and what problem it solves.
- Optional detail pages per service for deep information.

### 4. Portfolio or Work

Purpose  
Show real examples of projects and results.

Content ideas
- Grid of projects with names, short descriptions, and thumbnails.
- Each project links to a detailed case study page.
- Mention tools, technologies, and outcomes for each project.

### 5. Blog or Articles

Purpose  
Share knowledge, updates, and improve SEO.

Content ideas
- List of recent posts with title, excerpt, and date.
- Categories or tags to group topics.
- Author information if there are multiple writers.

### 6. Contact

Purpose  
Make it easy for people to reach you.

Content ideas
- Contact form that creates ContactLead entries in Hygraph.
- Email address and optional phone number.
- Location or time zone if relevant.
- Links to social profiles.

### 7. Legal pages

Purpose  
Cover basic legal and trust requirements.

Common pages
- Privacy Policy – how you handle data and cookies.
- Terms of Service – rules for using the website or app.
- Cookie Policy or banner text if you track analytics.

### 8. FAQ

Purpose  
Answer common questions and reduce support requests.

Content ideas
- Short list of repeated questions from clients or users.
- Clear, simple answers.
- Group by topic if there are many questions.

### 9. 404 / Not Found

Purpose  
Handle broken links or mistyped URLs gracefully.

Content ideas
- Friendly message that the page could not be found.
- Links back to Home, Portfolio, Blog, or Contact.

### 10. Optional but useful pages

- Pricing – overview of packages or pricing models.
- Testimonials – social proof with quotes and names.
- Careers – open positions and information for applicants.
- Press or Media – logos, photos, and contact details for press.
