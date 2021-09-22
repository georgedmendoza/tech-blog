async function newFormHandler(event) {
    event.preventDefault();
  
    // obtain title of post and url
    const title = document.querySelector('input[name="post-title"]').value;
    const post_url = document.querySelector('input[name="post-url"]').value;
  
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
        title,
        post_url
    }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // if there is a post then refresh the page to show new post
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
}
  
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);