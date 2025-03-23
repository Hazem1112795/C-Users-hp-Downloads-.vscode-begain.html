<script>
    function toggleMode() {
        document.body.classList.toggle("dark-mode");

        const elements = document.querySelectorAll('h2, p, label, button, .toggle-mode');
        elements.forEach(el => {
            el.classList.toggle('dark-text');
        });

        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.classList.toggle('dark-input');
        });
    }
</script>
