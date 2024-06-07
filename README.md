<h1 align="center">Bookstore Web Project</h1>

<p align="center">Table of Contents:</p>

- [Installation](#installation)
- [API Usage](#api-usage)
- [Contributing](#contributing)
- [Create a new branch for your feature or fix:](#create-a-new-branch-for-your-feature-or-fix)
- [Example of use:](#example-of-use)

## Installation

- Clone the repository to your desktop:

```bash
git clone https://github.com/ayalamarcelo/cac-project.git
```
- Open the index.html file in your browser.

## API Usage

- To fetch authors, books, genres, and quantities, edit the endpoints of this constant:

`const apiURL = 'https://www.googleapis.com/books/v1/volumes?q=related:Kasuo+Ishiguro&maxResults=30&langRestrict=en&filter=ebooks';`

## Contributing

- Fork the repository
- Clone your forked repository to your local machine:

```bash

git clone https://github.com/YOUR-USERNAME/cac-project.git
```

## Create a new branch for your feature or fix:

```bash

git checkout -b feature/your-feature-name
```
- Make your changes and commit them:

```bash

git add .
git commit -m "Add your message here"
```
- Push your changes to your fork:

```bash

git push origin feature/your-feature-name
```
- Open a pull request on the original repository.

>[!IMPORTANT]
> We use Gitmoji for commits

```markdown

? Choose a gitmoji:
❓  :speech_balloon: - Adding comments
✨  :sparkles: - Adding a new feature
➕  :heavy_plus_sign: - Adding a dependency
🐛  :bug: - Fixing a bug
🔥  :fire: - Removing code or files
```

## Example of use:

- Input git:

`git commit -m "Fix a bug :bug:"`

- Output:

`Fix a bug 🐛`

Thank you for your contribution!