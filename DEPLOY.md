# Deploying Your GitHub Portfolio

This package has two parts. Both deploy to **github.com/mohsin980**.

## 1. Profile README (shows on your GitHub profile page)

1. Create a new **public** repo named exactly `mohsin980` (must match your username).
2. Add `profile-readme/README.md` to it as the repo's `README.md` (at the root).
3. Push it. GitHub automatically shows this on `github.com/mohsin980`.

```bash
git init mohsin980-profile
cd mohsin980-profile
cp ../profile-readme/README.md README.md
git add README.md
git commit -m "Add profile README"
git branch -M main
git remote add origin https://github.com/mohsin980/mohsin980.git
git push -u origin main
```

> The GitHub stats badges (`github-readme-stats`, streak stats) will start working automatically once the repo is public — no extra setup needed.

## 2. Portfolio website (GitHub Pages)

1. Create a new **public** repo, e.g. `portfolio` (or `mohsin980.github.io` if you want it at the root domain — that name is special and serves at `https://mohsin980.github.io` directly with no `/portfolio` path).
2. Push the contents of `portfolio-site/` to it.
3. In the repo: **Settings → Pages → Source → Deploy from a branch → main / (root)**.
4. Your site goes live at `https://mohsin980.github.io/portfolio/` (or `https://mohsin980.github.io/` if you used the special repo name).

```bash
cd portfolio-site
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/mohsin980/portfolio.git
git push -u origin main
```

Then enable Pages in the repo settings as described above. It usually goes live within a minute or two.

## After deploying

- Update the profile README's "Featured Work" link to point at your live portfolio URL.
- Update the GitHub link in `portfolio-site/index.html`'s contact section if you use a different repo/profile name.
- Optional: add a custom domain via Settings → Pages → Custom domain.
