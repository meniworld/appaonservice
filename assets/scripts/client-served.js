const counters = document.querySelectorAll('.count');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const current = +counter.innerText;
        const increment = Math.ceil(target / 100);

        if (current < target) {
            counter.innerText = current + increment;
            setTimeout(updateCount, 30);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});
