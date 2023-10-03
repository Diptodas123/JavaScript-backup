let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response.then((value) => {
    return value.json();
}).then((contests) => {
    let ihtml = "";
    Array.from(contests);   //converting object to array type
    contests.map((item) => {
        console.log(item);
        ihtml += `
            <div class="card mr-2 mb-2" style="width: 22rem;">
                <img src="https://source.unsplash.com/random/1280x700/?coding" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">Status is: ${item.status} and Site is ${item.site}</p>
                        <p>In 24hours? ${item.in_24_hours}</p>
                        <p>Starts at: ${item.start_time}</p>
                        <p>Ends at: ${item.end_time}</p>
                        <a href="${item.url}" class="btn btn-primary">Visit Page</a>
                    </div>
            </div>
        `;
    });
    // for (let item in contests) {
    //     // console.log(contests[item]);
    //     ihtml += `
    //         <div class="card mr-2 mb-2" style="width: 22rem;">
    //             <img src="https://www.springboard.com/blog/wp-content/uploads/2022/06/coding.png" class="card-img-top" alt="...">
    //                 <div class="card-body">
    //                     <h5 class="card-title">${contests[item].name}</h5>
    //                     <p class="card-text">Status is: ${contests[item].status}</p>
    //                     <p>Starts at ${contests[item].start_time}</p>
    //                     <p>Ends at ${contests[item].end_time}</p>
    //                     <a href="${contests[item].url}" class="btn btn-primary">Visit Page</a>
    //                 </div>
    //         </div>
    //     `;
    // }
    let cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML += ihtml;
});
