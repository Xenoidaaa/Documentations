const hamburgerButton = document.getElementById ('hamburgerId');
const sidebarMenu = document.getElementById ('dropId');
const hamburgerIcon = document.getElementById ('hamburgerIcon');
const closeIcon = document.getElementById ('closeIcon');

hamburgerButton.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active');

    if (sidebarMenu.classList.contains('active')) {
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});

// COUNTING ANIMASION

const counters = document.querySelectorAll ('.stats-number');

counters.forEach (counter => {
    const target = +counter.getAttribute ('data-target');
    let count = 0;

    const updateCount = () => {
        const delay = target === 100 ? 15 : 250;

        if (count < target) {
            count++;

            if (target === 100) {
                counter.innerText = count + '%';
            } else {
                counter.innerText = count;
            }

            setTimeout (updateCount, delay);
        } else {
            counter.innerText = target === 100 ? target + '%' : target;
        }
    };

    updateCount();
});