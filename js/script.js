document.getElementById('professionalForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    category: document.getElementById('category').value,
    agency: document.getElementById('agency').checked,
    address: document.getElementById('address').value,
  };

  try {
    const response = await fetch('https://perpennyprofs-backend.onrender.com/professionals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      window.location.href = '/success.html';
    } else {
      window.location.href = '/failure.html';
    }
  } catch (error) {
    console.error('Error:', error);
    window.location.href = '/failure.html';
  }
});
