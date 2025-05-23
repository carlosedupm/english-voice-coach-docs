document.addEventListener('DOMContentLoaded', function() {
    // Carrega a sidebar
    fetch('sidebar.html')
        .then(response => response.text())
        .then(html => {
            const sidebarContainer = document.createElement('div');
            sidebarContainer.innerHTML = html;
            document.body.insertBefore(
                sidebarContainer.firstChild, 
                document.body.firstChild
            );
            
            // Ajusta layout para sidebar
            const mainContent = document.querySelector('.container');
            if (mainContent) {
                mainContent.style.marginLeft = '250px';
                mainContent.style.width = 'calc(100% - 270px)';
            }
        })
        .catch(error => console.error('Error loading sidebar:', error));
});
