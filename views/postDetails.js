const timeAgo = require("node-time-ago");
const html = require("html-template-tag");

module.exports = (post) => {
  if (!post.id) {
    res.status(404);
    const html = html` <!DOCTYPE html>
      <html>
        <head>
          <title>Wizard News</title>
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <header><img src="/logo.png" />Wizard News</header>
          <div class="not-found">
            <p>404: Page Not Found</p>
          </div>
        </body>
      </html>`;
    return html;
  }
  const message = html`<!DOCTYPE html>
    <html>
      <head>
        <title>Wizard News</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div class="news-list">
          <header><img src="/logo.png" />Wizard News</header>
          <div class="news-item">
            <p>
              <span class="news-position">${post.id}. ▲</span>
              ${post.title}
              <small>(by ${post.name})</small>
            </p>
            <small class="news-info">
              ${post.upvotes} upvotes | ${timeAgo(post.date.getTime())}
            </small>
            <p>${post.content}</p>
          </div>
          )
        </div>
      </body>
    </html>`;
  return message;
};
