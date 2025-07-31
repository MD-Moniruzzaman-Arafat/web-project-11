async function loadAllPost() {
    const posts = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await posts.json()
    displayAllPost(data.posts)
}
loadAllPost();

async function latestPost() {
    const posts = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await posts.json()
    displayLatestPost(data)
}
latestPost();

function displayAllPost(posts) {
    // console.log(posts)
    if (posts) {
        document.getElementById('loading').classList.add('hidden')
    }
    const postsContainer = document.getElementById('posts')
    posts.forEach(post => {
        // console.log(post)
        const div = document.createElement('div');
        div.classList = "flex mb-5 p-10 gap-10 bg-[#797DFC1A] rounded-2xl";
        div.innerHTML = `
    <div class="indicator">
        <span class="indicator-item badge  ${post?.isActive ? "bg-[green]" : "bg-[red]"} rounded-full"></span>
        <div class="bg-base-300 grid h-20 w-20 place-items-center rounded-lg">
        <img src="${post?.image}" class="rounded-lg"/>
        </div>
    </div>
    <div class="w-full">
        <div class=" text-[#12132DCC] font-bold text-sm flex gap-5 mb-2 items-center">
            <span># <span>${post?.category}</span></span>
            <span>Author : <span>${post?.author?.name}</span></span>
        </div>
        <h1 class="text-[#12132D] font-bold text-2xl mb-2">${post?.title}</h1>
        <p class="text-[#12132D99]">${post?.description}</p>
        <p class="border-b-1 border-[#12132D40] border-dashed my-5"></p>
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-5">
                <span><i class="fa-solid fa-message"></i> <span>${post?.comment_count}</span></span>
                <span><i class="fa-solid fa-eye"></i> ${post?.view_count}</span>
                <span><i class="fa-solid fa-clock"></i> <span>${post?.posted_time}</span> min</span>
            </div>
            <div class="bg-[#10B981] text-white px-2 py-1 rounded-full">
                <i class="fa-solid fa-envelope-open"></i>
            </div>
        </div>
    </div>
    `
        postsContainer.append(div)
    })

}

function displayLatestPost(posts) {
    // console.log(posts)
    const latestPostContainer = document.getElementById('latest-posts')
    posts.forEach(post => {
        console.log(post)
        const div = document.createElement('div')
        div.classList = 'card bg-base-100 w-96 shadow-sm'
        div.innerHTML = `
    
                        <figure class="m-5">
                            <img src="${post?.cover_image}" />
                        </figure>
                        <div class="card-body">
                            <p class="text-[#12132D99]"><i class="fa-solid fa-calendar"></i> ${post?.author?.posted_date ? post?.author?.posted_date : "No publish date"}</p>
                            <h2 class="card-title">${post?.title}</h2>
                            <p class="text-[#12132D99]">${post?.description}</p>
                            <div class="card-actions items-center">
                                <div class="avatar avatar-placeholder">
                                    <div class="bg-neutral text-neutral-content w-8 rounded-full">
                                        <img src="${post?.profile_image}" />
                                    </div>
                                </div>
                                <div>
                                    <p class="font-bold">${post?.author?.name}</p>
                                    <p>${post?.author?.designation ? post?.author?.designation : "Unknown"}</p>
                                </div>
                            </div>
                        </div>
                    
        `
        latestPostContainer.appendChild(div)
    })

}