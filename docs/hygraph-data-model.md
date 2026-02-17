## Hygraph Data Model

### Overview

Content is modeled in Hygraph using a small set of models:

- Page – top-level pages of the site (home, about, etc.).
- Section – reusable content blocks that belong to a page.
- Asset – images and files managed by Hygraph’s built-in asset system.

---

### Model: Page

Purpose  
Represents a single URL or page in the app or website.

Fields
- title  
  - Type: String  
  - Description: Human-readable title of the page (for example “Home”, “About”).

- slug  
  - Type: Slug (based on title)  
  - Description: URL identifier for the page (for example `home`, `about`). Used to build routes like `/about`.

- description  
  - Type: Rich Text or String  
  - Description: Main descriptive content or introductory text for the page.

- seoTitle  
  - Type: String (optional)  
  - Description: Custom title for SEO and meta tags. Falls back to title if empty.

- seoDescription  
  - Type: String (optional)  
  - Description: Short description for SEO and social previews.

Relations
- sections  
  - Type: One Page → Many Sections  
  - Description: Ordered list of sections that make up the page layout.

---

### Model: Section

Purpose  
A flexible block of content that can be reused and arranged to build a page.

Fields
- name  
  - Type: String  
  - Description: Internal label to identify the section (for example “Hero top”, “Pricing block”).

- type  
  - Type: Enum  
  - Example values: HERO, FEATURES, PRICING, CTA, FOOTER  
  - Description: Tells the front end which component to render for this section.

- content  
  - Type: Rich Text or JSON  
  - Description: Body content or configuration for the section. Exact use depends on type.

- image or backgroundImage (optional)  
  - Type: Asset (Image)  
  - Description: Image used by this section if needed, such as a hero background or illustration.

Relations
- page  
  - Type: Many Sections → One Page  
  - Description: The parent page that this section belongs to.

---

### Model: Asset

Purpose  
Store images and files used across Page and Section.

Usage
- Attach assets to specific fields like Section.image or Page.heroImage.
- Hygraph provides URLs and transformations such as resizing for these assets.

---

### Querying (high level)

Get a page by slug (conceptually)
- Input: slug
- Output: title, description, SEO fields, and the list of sections with their type, content, and any images.

Render logic in the front end
- Fetch page by slug.
- Loop through sections in order.
- For each section, pick a component by type and pass content and assets as props.

---

### Blog content

Use the existing Page and Section models to power the blog, and add a dedicated BlogPost model for rich article content and better SEO.

#### Model: BlogPost

Purpose  
Represents a single blog article.

Fields
- title  
  - Type: String  
  - Description: Blog post title. Also used for meta and Open Graph titles.

- slug  
  - Type: Slug (based on title)  
  - Description: URL part for the post, for example `my-first-post`.

- excerpt  
  - Type: String  
  - Description: Short summary shown in blog lists and used as default meta description.

- content  
  - Type: Rich Text  
  - Description: Main article body.

- coverImage (optional)  
  - Type: Asset (Image)  
  - Description: Main image for the post, used in cards and social previews.

- publishedAt  
  - Type: DateTime  
  - Description: Publication date of the post.

- seoTitle (optional)  
  - Type: String  
  - Description: Custom SEO title. Falls back to title if missing.

- seoDescription (optional)  
  - Type: String  
  - Description: Custom SEO description. Falls back to excerpt if missing.

Relations
- page (optional)  
  - Type: Many BlogPosts → One Page  
  - Description: Use if you want a Page record that represents the blog index route.

SEO notes
- Use slug to build clean URLs, for example `/blog/{slug}`.
- Always fill excerpt so pages have a good default meta description.
- Prefer unique seoTitle and seoDescription for important posts.

---

### Portfolio content

Portfolio can reuse the same ideas: a portfolio Page with Sections, plus a Project model for each item.

#### Model: Project

Purpose  
Represents a single portfolio item or case study.

Fields
- name  
  - Type: String  
  - Description: Project name shown on cards and detail page.

- slug  
  - Type: Slug (based on name)  
  - Description: URL part for the project, for example `my-portfolio-item`.

- shortDescription  
  - Type: String  
  - Description: One or two sentences used on grid cards and meta description.

- description  
  - Type: Rich Text  
  - Description: Detailed description or case study content.

- thumbnail  
  - Type: Asset (Image)  
  - Description: Small image used in grids and lists.

- gallery (optional)  
  - Type: List of Assets (Images)  
  - Description: Extra images for the project detail page.

- tags (optional)  
  - Type: List of Strings or Enum  
  - Description: Technologies or categories, for example “React”, “Design”.

- seoTitle (optional)  
  - Type: String  
  - Description: Custom SEO title for the project page.

- seoDescription (optional)  
  - Type: String  
  - Description: Custom SEO description. Falls back to shortDescription if missing.

Relations
- page (optional)  
  - Type: Many Projects → One Page  
  - Description: Use if you want a Page record that represents the main portfolio route.

SEO notes
- Use slug to generate URLs, for example `/portfolio/{slug}`.
- Keep shortDescription under about 160 characters for better meta descriptions.
- Use meaningful alt text on thumbnails and gallery images.

---

### Contact and leads

Use a dedicated model to store emails and messages from contact forms or newsletter signups.

#### Model: ContactLead

Purpose  
Represents a single contact form submission or email signup.

Fields
- name (optional)  
  - Type: String  
  - Description: Person’s name from the form.

- email  
  - Type: String  
  - Description: Email address to reply to or add to a mailing list.

- message (optional)  
  - Type: Rich Text or String  
  - Description: Message body from a contact form.

- source (optional)  
  - Type: Enum  
  - Example values: CONTACT_FORM, NEWSLETTER, PORTFOLIO_CONTACT, OTHER  
  - Description: Where this lead came from.

- consent (optional)  
  - Type: Boolean  
  - Description: Whether the person agreed to receive marketing emails.

- createdAt  
  - Type: System field (created by Hygraph)  
  - Description: Date and time the entry was created. Useful for sorting.

Relations
- page (optional)  
  - Type: Many ContactLeads → One Page  
  - Description: Optionally link leads to the page they submitted from, such as a Contact page.

Usage notes
- Use email and consent fields to safely manage mailing lists.
- Use source to separate general contact messages from newsletter signups.

