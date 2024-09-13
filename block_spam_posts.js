const filter_spam_posts = (blacklisted_words) => {
    const posts = document.querySelectorAll(".forum_topic");
    posts.forEach((post) => {
        const post_title = post.querySelector(".forum_topic_name").textContent.toLowerCase();
        const post_content_preview = post.getAttribute("data-tooltip-forum").toLowerCase();
        if (blacklisted_words.some(word => post_title.includes(word.toLowerCase())) || blacklisted_words.some(word => post_content_preview.includes(word.toLowerCase()))) {
            post.remove();
        }
    });
};

const blacklisted_words = ["spam", "woke", "clown", "bait", "advertisement", "offensive", "denuvo", "DRM", "SJW", "SBI", "identity", "identify", "palestine", "spyware", "ccp", 
                           "homosexual", "homophobic", "banned", "censorship", "racist", "racism", "transgender", "transsexual", "transphobic", "jester", "gud", "sexist", "semetic"];
// Observer will look for changes in the document bodys child list indicating a URL change
const observer = new MutationObserver(() => { filter_spam_posts(blacklisted_words); }); 
const observer_config = { childList: true };
observer.observe(document.body, observer_config);
