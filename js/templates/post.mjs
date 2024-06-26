
export function postTemplate (postData) {
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerText = postData.title;
    return post;

}
//Will put post inside parent
export function renderPostTemplate(postData, parent) {
    
    parent.append(postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplate));
}