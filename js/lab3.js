document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tabs ul li a');
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove active
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });

            const panel = document.querySelectorAll('.tabs div[role="tabpanel"]');
            panel.forEach(panel => {
                panel.classList.remove('active');
            });

            // Add 'active' class when the tab is pressed
            this.classList.add('active');

            // show the tabpanel that is selected
            const panelId = this.getAttribute('href').substring(1);
            const target = document.getElementById(panelId);
            if (target) {
                target.classList.add('active');
            }
        });
    });
});