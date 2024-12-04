function agendar() {
    alert('Redirecionando para o agendamento...');
    // Aqui você pode adicionar a lógica para redirecionar para a página de agendamento
}


function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function() {
    const consultationSection = document.querySelector('.consultation');
    consultationSection.classList.add('show');
});


document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block'; // Alterna a visibilidade
    });
});




