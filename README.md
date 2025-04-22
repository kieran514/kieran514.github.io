# Kieran Saunders - Personal Academic Website

This repository contains the source code for my personal academic website, built with Jekyll and the Minimal Mistakes theme, hosted on GitHub Pages.

## Local Development

1.  **Prerequisites:** Ensure you have Ruby and Bundler installed. See [Jekyll Docs](https://jekyllrb.com/docs/installation/).
2.  **Clone:** `git clone https://github.com/yourusername/yourusername.github.io.git`
3.  **Navigate:** `cd yourusername.github.io`
4.  **Install Dependencies:** `bundle install`
5.  **Run Server:** `bundle exec jekyll serve --livereload`
6.  Open your browser to `http://127.0.0.1:4000`

## Deployment

Pushing changes to the `main` (or `master`) branch of this repository (`yourusername.github.io`) will automatically trigger a rebuild and deployment on GitHub Pages. The site will be available at `https://yourusername.github.io`.

## Customization Notes

*   **Content:** Edit Markdown files in the `_pages` directory.
*   **Configuration:** Modify site title, author details, social links, etc., in `_config.yml`.
*   **Navigation:** Update top navigation links in `_data/navigation.yml`.
*   **Styling:** Add custom CSS/Sass overrides in `assets/css/main.scss`.
*   **Animation:** Configure particle effects in `assets/js/custom-particles.js`.
*   **Profile Picture:** Replace `assets/images/kieran_avatar.jpg`.
