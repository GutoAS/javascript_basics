function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.comments = [];
  this.views = 0;
  this.isLive = false;
}

const blogPost = new Post("a", "b", "c");

console.log(blogPost);
