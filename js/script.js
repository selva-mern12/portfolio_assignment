document.addEventListener('DOMContentLoaded', function() {
            showSection('home');
        });

        function showSection(id) {
            const sections = document.querySelectorAll("section");
            sections.forEach(sec => {
                sec.classList.add('d-none');
                sec.classList.remove('d-flex');
                sec.classList.remove('d-block');
            });

            const targetSection = document.getElementById(id);
            if (id === 'home' || id === 'about') {
                targetSection.classList.remove('d-none');
                targetSection.classList.add('d-flex'); // Re-add d-flex for hero-section
            } else {
                targetSection.classList.remove('d-none');
                targetSection.classList.add('d-block'); // Use d-block for other sections
            }
            setTimeout(() => {
                targetSection.classList.add('visible');
            }, 10);

            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`a[onclick="showSection('${id}')"]`).classList.add('active');
        }
        function toggleTheme() {
            const html = document.documentElement;
            const current = html.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', next);
            document.querySelector('.light-icon').classList.toggle('d-none');
            document.querySelector('.dark-icon').classList.toggle('d-none');
        }