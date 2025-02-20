// open a post and display its details
function openPost(title, description) {
    document.getElementById('postTitle').innerText = title;
    document.getElementById('postContent').innerText = description;
    document.getElementById('postDetails').style.display = 'block'; 

    // Clear previous comments
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = ''; 
}

// close the post details
function closePost() {
    document.getElementById('postDetails').style.display = 'none'; 
}

// filter skills based on search input and selected category
function filterSkills() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const categorySelect = document.getElementById('categorySelect').value;
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        const category = card.getAttribute('data-category').toLowerCase();

        const matchesSearch = title.includes(searchInput);
        const matchesCategory = categorySelect === "" || category === categorySelect.toLowerCase();

        if (matchesSearch && matchesCategory) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none'; 
        }
    });
}

// Function to sort posts (optional, can be expanded)
function sortPosts() {
    const sortSelect = document.getElementById('sortSelect').value;
    const skillsGrid = document.getElementById('skillsGrid');
    const skillCards = Array.from(skillsGrid.children);

    if (sortSelect === "alphabetical") {
        skillCards.sort((a, b) => a.querySelector('h3').innerText.localeCompare(b.querySelector('h3').innerText));
    } else if (sortSelect === "date") {
    }

    // Clear the grid and append sorted cards
    skillsGrid.innerHTML = '';
    skillCards.forEach(card => skillsGrid.appendChild(card));
}

// Function to open the add post form
function openAddPostForm() {
    document.getElementById('addPostForm').style.display = 'block'; 
}

// Function to close the add post form
function closeAddPostForm() {
    document.getElementById('addPostForm').style.display = 'none'; 
}

// Function to add a new post
function addNewPost() {
    const title = document.getElementById('newSkillTitle').value;
    const description = document.getElementById('newSkillDescription').value;

    if (title && description) {
        const newCard = document.createElement('div');
        newCard.className = 'skill-card';
        newCard.setAttribute('data-category', 'New'); 
        newCard.onclick = () => openPost(title, description); 
        newCard.innerHTML = `<h3>${title}</h3><p>New</p>`; 

        document.getElementById('skillsGrid').appendChild(newCard);
        closeAddPostForm(); 
    }
}

// Function to submit a comment
function submitComment() {
    const commentInput = document.getElementById('commentInput');
    const commentsList = document.getElementById('commentsList');

    if (commentInput.value) {
        const newComment = document.createElement('p');
        newComment.innerText = commentInput.value;
        commentsList.appendChild(newComment);
        commentInput.value = ''; 
    }
}

// Object to store comments for each post
const postComments = {};

// Function to open a post and display its details
function openPost(title, description) {
    document.getElementById('postTitle').innerText = title;
    document.getElementById('postContent').innerText = description;
    document.getElementById('postDetails').style.display = 'block'; 

    // Display previous comments if they exist
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = ''; 

    if (postComments[title]) {
        postComments[title].forEach(comment => {
            const newComment = document.createElement('p');
            newComment.innerText = comment;
            commentsList.appendChild(newComment);
        });
    }
}

// Function to submit a comment
function submitComment() {
    const commentInput = document.getElementById('commentInput');
    const commentsList = document.getElementById('commentsList');
    const postTitle = document.getElementById('postTitle').innerText;

    if (commentInput.value) {
        if (!postComments[postTitle]) {
            postComments[postTitle] = []; 
        }
        postComments[postTitle].push(commentInput.value); 

        // Display the new comment
        const newComment = document.createElement('p');
        newComment.innerText = commentInput.value;
        commentsList.appendChild(newComment);
        commentInput.value = '';
    }
}