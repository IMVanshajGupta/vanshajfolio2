document.addEventListener('DOMContentLoaded', () => {
    const blogPosts = [
      {
        title: 'First Blog Post',
        content: 'This is the content of the first blog post...',
      },
      {
        title: 'Second Blog Post',
        content: 'This is the content of the second blog post...',
      },
      // Add more blog posts as needed
    ];
  
    const blogPostsContainer = document.querySelector('.blog-posts');
  
    blogPosts.forEach((post) => {
      const postElement = document.createElement('div');
      postElement.classList.add('blog-post');
  
      const titleElement = document.createElement('h2');
      titleElement.classList.add('blog-title');
      titleElement.textContent = post.title;
  
      const contentElement = document.createElement('p');
      contentElement.classList.add('blog-content');
      contentElement.textContent = post.content;
  
      const readMoreLink = document.createElement('a');
      readMoreLink.classList.add('read-more');
      readMoreLink.href = '#'; // Replace with actual link to the full blog post
      readMoreLink.textContent = 'Read More';
  
      postElement.appendChild(titleElement);
      postElement.appendChild(contentElement);
      postElement.appendChild(readMoreLink);
  
      blogPostsContainer.appendChild(postElement);
    });
  });
  