import { getPost } from "../api/posts/getPosts.mjs";
import { updatePost } from "../api/posts/updatePost.mjs";

export async function setUpdatePostListener() {
    console.log("hello");
    const form = document.querySelector("#editPost");
    

    const url = new URL(location.href);
    const id = url.searchParams.get("id");


    if (form) {
        const response = await getPost(id);
        const post = response.data;
       

        form.title.value = post.title;
        form.content.value = post.body; // Assuming the form field is named 'content'
        form.tags.value = post.tags.join(", ");

        form.media.value = post.media.url;

        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const post = Object.fromEntries(formData.entries());
            post.id = id;

            if (post.content) {
                post.body = post.content;
                delete post.content;
            }

            if (post.tags) {
                post.tags = post.tags.split(",").map(tag => tag.trim());
            }

            if (post.media) {
                post.media = { url: post.media};
            } else {
                post.media = null;
            }

            try {
                const updatedPost = await updatePost(post);
                console.log("Post updated successfully:", updatedPost);
                // Display success message or navigate to a different page
            } catch (error) {
                console.error("Failed to update post:", error);
                // Display error message to the user
            }
        });
    }
}

