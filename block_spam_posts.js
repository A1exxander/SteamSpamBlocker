const filter_spam_posts = (blacklisted_words) => {

    const posts = document.querySelectorAll(".forum_topic");
    let posts_removed_count = 0;
    
    posts.forEach((post) => {

        const post_title = post.querySelector(".forum_topic_name").textContent.toLowerCase();
        const post_content_preview = post.getAttribute("data-tooltip-forum");

        if (blacklisted_words.some(word => post_title.includes(word.toLowerCase())) || blacklisted_words.some(word => post_content_preview.includes(word))) {
            post.remove();
            ++posts_removed_count;
        }

    });
    
    return posts_removed_count;

};

const blacklisted_words = ["spam", "advertisement", "offensive"]; // Replace it w whatever words you wish to filter out
console.log(`Hid ${filter_spam_posts(blacklisted_words)} spam post(s)!`);