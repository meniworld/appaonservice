document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const content = item.querySelector('.faq-answer');

        // Close all other items
        document.querySelectorAll('.faq-item.active').forEach(openItem => {
            if (openItem !== item) {
                openItem.classList.remove('active');
                const openContent = openItem.querySelector('.faq-answer');
                openContent.style.maxHeight = null;
                openContent.style.opacity = 0;
                openContent.style.padding = "0 20px";
            }
        });

        // Toggle current item
        if (item.classList.contains('active')) {
            content.style.maxHeight = null;
            content.style.opacity = 0;
            content.style.padding = "0 20px";
            item.classList.remove('active');
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.opacity = 1;
            content.style.padding = "20px";
            item.classList.add('active');
        }
    });
});
