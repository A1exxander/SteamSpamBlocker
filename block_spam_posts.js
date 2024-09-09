const filterPosts = (blacklisted_words) => {

    const posts = document.querySelectorAll(".forum_topic");
    let posts_removed_count = 0;
    
    posts.forEach((post) => {

        const post_title = post.querySelector(".forum_topic_name").textContent.toLowerCase();

        if (blacklisted_words.some(word => post_title.includes(word.toLowerCase()))) {
            post.remove();
            ++posts_removed_count;
        }

    });
    
    return posts_removed_count;

};

const keywordsToFilter = ["spam", "advertisement", "offensive"]; // Replace it w whatever words you wish to filter out
console.log(`Hid ${filterPosts(keywordsToFilter)} spam post(s)!`);