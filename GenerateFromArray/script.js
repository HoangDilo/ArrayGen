const email_DOM_1 = document.querySelectorAll('.email')[0];
const email_DOM_2 = document.querySelectorAll('.email')[1];
const toast_list_DOM = document.querySelector('.toast-message-list');
const DOM = document.getElementsByTagName('html')[0];
const ss1_DOM = document.querySelector('.session-1');

const array = [
    {
        name: 'CSS',
        src: './Assets/css.svg',
    },
    {
        name: 'JavaScript',
        src: './Assets/js.svg',
    },
    {
        name: 'Tailwind',
        src: './Assets/tailwind.svg',
    },
    {
        name: 'Vue JS',
        src: './Assets/vuejs.svg',
    },
    {
        name: 'React JS',
        src: './Assets/reactjs.svg',
    }
]

const post_array = [
    {
        category: 'featured_article',
        image: "./Assets/picture_1.svg",
        title: 'Fundamental of javascript',
        author_img: "./Assets/theauthor.svg",
        author_name: "Dasteen",
        date: 'Jan 10, 2022',
        length: '3 min read'
    },
    {
        category: 'featured_article',
        image: "./Assets/picture_2.svg",
        title: 'Grid CSS make your life easier',
        author_img: "./Assets/theauthor.svg",
        author_name: "Dasteen",
        date: 'Jan 10, 2022',
        length: '3 min read'
    },
    {
        category: 'featured_article',
        image: "./Assets/picture_3.svg",
        title: 'Make animated light mode and dark mode toggle with CSS',
        author_img: "./Assets/theauthor.svg",
        author_name: "Dasteen",
        date: 'Jan 10, 2022',
        length: '3 min read'
    },
    {
        category: 'featured_article',
        image: "./Assets/picture_4.svg",
        title: 'Make tic tac toe games with react JS',
        author_img: "./Assets/theauthor.svg",
        author_name: "Dasteen",
        date: 'Jan 10, 2022',
        length: '3 min read'
    },
    {
        category: 'CSS',
        image: "./Assets/picture_5.svg",
        title: 'Flexbox cSS : Everything you need to know',
        author_img: "./Assets/theauthor.svg",
        author_name: "Dasteen",
        date: 'Jan 10, 2022',
        length: '3 min read'
    },
    {
        category: 'CSS',
        image: "./Assets/picture_2.svg",
        title: 'Grid CSS make your life easier',
        author_img: "./Assets/theauthor.svg",
        author_name: "Dasteen",
        date: 'Jan 10, 2022',
        length: '3 min read'
    },
    {
        category: 'CSS',
        image: "./Assets/picture_7.svg",
        title: '3 easy way to make div center',
        author_img: "./Assets/theauthor.svg",
        author_name: "Dasteen",
        date: 'Jan 10, 2022',
        length: '3 min read'
    },
    {
        category: 'CSS',
        image: "./Assets/picture_3.svg",
        title: 'Make animated light mode and dark mode toggle with CSS',
        author_img: "./Assets/theauthor.svg",
        author_name: "Dasteen",
        date: 'Jan 10, 2022',
        length: '3 min read'
    },
    {
        category: 'JS',
        image: "./Assets/picture_8.svg",
        title: 'array in javasript - Learn JS #3',
        author_img: "./Assets/theauthor.svg",
        author_name: "Dasteen",
        date: 'Jan 10, 2022',
        length: '3 min read'
    },
    {
        category: 'JS',
        image: "./Assets/picture_1.svg",
        title: 'Fundamental of javascript',
        author_img: "./Assets/theauthor.svg",
        author_name: "Dasteen",
        date: 'Jan 10, 2022',
        length: '3 min read'
    },
    {
        category: 'JS',
        image: "./Assets/picture_9.svg",
        title: '7 project with javascript you must try for your portfolio',
        author_img: "./Assets/theauthor.svg",
        author_name: "Dasteen",
        date: 'Jan 10, 2022',
        length: '3 min read'
    },
    {
        category: 'JS',
        image: "./Assets/picture_10.svg",
        title: 'make simple calculator with javascript',
        author_img: "./Assets/theauthor.svg",
        author_name: "Dasteen",
        date: 'Jan 10, 2022',
        length: '3 min read'
    },
    {
        category: 'ReactJS',
        image: "./Assets/picture_11.svg",
        title: 'first month of leaning react jS',
        author_img: "./Assets/theauthor.svg",
        author_name: "Dasteen",
        date: 'Jan 10, 2022',
        length: '3 min read'
    },
    {
        category: 'ReactJS',
        image: "./Assets/picture_12.svg",
        title: 'build markdown editor with react JS',
        author_img: "./Assets/theauthor.svg",
        author_name: "Dasteen",
        date: 'Jan 10, 2022',
        length: '3 min read'
    },
    {
        category: 'ReactJS',
        image: "./Assets/picture_13.svg",
        title: '3 easy way to make div center',
        author_img: "./Assets/theauthor.svg",
        author_name: "Dasteen",
        date: 'Jan 10, 2022',
        length: '3 min read'
    },
    {
        category: 'ReactJS',
        image: "./Assets/picture_4.svg",
        title: 'Make tic tac toe games with react JS',
        author_img: "./Assets/theauthor.svg",
        author_name: "Dasteen",
        date: 'Jan 10, 2022',
        length: '3 min read'
    },
];

const categories = [
    {
        id: 'featured_article',
        label: 'Featured Article',
    },
    {
        id: 'CSS',
        label: 'CSS',
    },
    {
        id: 'JS',
        label: 'Javascript',
    },
    {
        id: 'ReactJS',
        label: 'React JS',
    }
]

function handleScroll() {
    st = DOM.scrollTop
    if (st > 200) document.getElementById('go-to-top').className = '';
    else document.getElementById('go-to-top').className = 'hidden';
}

function goTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function Generate(parent, arr) {
    console.log('generating array');
    const DOM = document.querySelector(parent);
    //console.log(DOM);
    for (let item of arr) {
        const biggercards = document.createElement('div');
        biggercards.className = 'biggercards';

        const cards = document.createElement('div');
        cards.className = 'cards';

        const images = document.createElement('div');
        images.className = 'images';

        const svgs = document.createElement('img');
        svgs.src = item.src;
        svgs.className = 'svgs';

        const names = document.createElement('div');
        names.innerText = item.name;
        names.className = 'names';

        images.appendChild(svgs);
        cards.appendChild(images);
        cards.appendChild(names);
        biggercards.appendChild(cards);

        DOM.appendChild(biggercards);

        //console.log(DOM);
    }
}

function renderInsideElement(parent_selector) {
    const parentEl_DOM = document.querySelector(`#${parent_selector}`);
    //  let test_DOM = '';

    let items_strings = filterByCategory(post_array, parent_selector).map(item => `
                <div class="cards-2">
                    <div class="imgs-container">
                        <img src="${item.image}" alt="" class="img">
                        <p>${item.title}</p>
                    </div>
                    <div class="users">
                        <img src="${item.author_img}" alt="" class="author">
                        <div class="author-info">
                            <div class="author-name">
                                ${item.author_name}
                            </div>
                            <div class="date-time">
                                ${item.date} <span class="the-other-dots">∙</span> ${item.length}
                            </div>
                        </div>
                    </div>
                </div>`).join('');

    parentEl_DOM.innerHTML = `
            <div class="category-container">
                <div class="category-title">
                    <div class="browse-category">
                            ${categories.find(item => item.id == parent_selector).label}
                        <img src="./Assets/line.svg" alt="" style="width: 35px">
                    </div>
                    <div class="see-all">
                        <p>See All Article</p>
                        <div class="arrow-container">
                            <img src="./Assets/arrow.svg" alt="" class="arrow">
                        </div>
                    </div>
                </div>
            </div>
            <div class="cards-post">
    ` + items_strings + '</div>'

}

function filterByCategory(arr, category) {
    return arr.filter(item =>
        item.category == category)
}

function validate(element_selector_index, type) {
    switch (type) {
        case 'email':
            const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            const DOM_fake = document.querySelectorAll('.email')[element_selector_index];
            let result = DOM_fake.value.toLowerCase().match(regex_email);
            console.log(DOM_fake);
            if (!DOM_fake.value) {
                DOM_fake.className += ' invalid';
                //console.log('dang tao ra toast empty');
                generateToast('empty');
                setTimeout(() => {
                    toast_list_DOM.removeChild(toast_list_DOM.children[0]);
                }, 5000);
            } else {
                if (result) {
                    DOM_fake.value = '';
                    generateToast('success');
                    setTimeout(() => {
                        toast_list_DOM.removeChild(toast_list_DOM.children[0]);
                    }, 5000);
                    //console.log('Thoa man');
                } else {
                    generateToast('fail');
                    DOM_fake.className += ' invalid';
                    setTimeout(() => {
                        toast_list_DOM.removeChild(toast_list_DOM.children[0]);
                    }, 5000);
                    //console.log('Khong thoa man');
                }
            }
            break;
        default:
            break;
    }
}

function generateToast(type) {
    switch (type) {
        case 'empty':
            const toast_child_empty = document.createElement('div');
            toast_child_empty.className = 'toast-message toast-fail';

            const icon_child_empty = document.createElement('img');
            icon_child_empty.src = "./Assets/x.svg";

            const message_child_empty = document.createElement('div');
            message_child_empty.innerText = 'Please make sure this field is not empty!';

            toast_child_empty.appendChild(icon_child_empty);
            toast_child_empty.appendChild(message_child_empty);

            toast_list_DOM.appendChild(toast_child_empty);
            break;
        case 'fail':
            const toast_child_fail = document.createElement('div');
            toast_child_fail.className = 'toast-message toast-fail';

            const icon_child_fail = document.createElement('img');
            icon_child_fail.src = "./Assets/x.svg";

            const message_child_fail = document.createElement('div');
            message_child_fail.innerText = 'Email must have this format: \'abc@xyz.ijk\'';

            toast_child_fail.appendChild(icon_child_fail);
            toast_child_fail.appendChild(message_child_fail);

            toast_list_DOM.appendChild(toast_child_fail);
            break;
        case 'success':
            const toast_child_success = document.createElement('div');
            toast_child_success.className = 'toast-message toast-success';

            const icon_child = document.createElement('img');
            icon_child.src = "./Assets/v.svg";

            const message_child_success = document.createElement('div');
            message_child_success.innerText = 'I\'ve successfully subscribe!';

            toast_child_success.appendChild(icon_child);
            toast_child_success.appendChild(message_child_success);

            toast_list_DOM.appendChild(toast_child_success);
            break;
        default:
            break;
    }
}

function handleFocus(element, type) {
    switch (type) {
        case 'email':
            element.className = 'email';
            break;

        default:
            break;
    }
}
function renderContainer(id) {
    ss1_DOM.innerHTML += `<div class="container-4" id="${id}"></div>`
}

Generate('.list', array);

categories.forEach(item => {
    renderContainer(item.id);
    renderInsideElement(item.id);
})

ss1_DOM.innerHTML = ss1_DOM.innerHTML + `<button class="button-2">More Article</button>`