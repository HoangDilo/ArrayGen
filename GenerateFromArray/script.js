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
const email_DOM_1 = document.querySelectorAll('.email')[0];
const email_DOM_2 = document.querySelectorAll('.email')[1];
const toast_list_DOM = document.querySelector('.toast-message-list');

function Generate(parent, arr) {
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

Generate('.list', array);


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