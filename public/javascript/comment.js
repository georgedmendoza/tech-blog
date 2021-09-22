async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if(comment_text) {
        // wait until we get promise then do something
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.ok) {
            // reloads page to view new comment entered
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);