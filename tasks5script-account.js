// Mock User Data
const currentUser = {
  name: "John Doe",
  orderHistory: [
    {
      date: "2026-03-01",
      total: 120,
      items: ["Mouse", "Keyboard"]
    },
    {
      date: "2026-03-10",
      total: 80,
      items: ["Speaker"]
    }
  ]
};

// Greeting
const greeting = document.querySelector('.greeting');
greeting.textContent = `Welcome, ${currentUser.name}!`;

// Orders
const summaries = document.querySelectorAll('summary');

summaries.forEach((summary, index) => {
  summary.addEventListener('click', () => {
    const details = summary.parentElement;

    const order = currentUser.orderHistory[index];

    const info = document.createElement('p');
    info.textContent = `Date: ${order.date}, Total: $${order.total}, Items: ${order.items.join(", ")}`;

    details.appendChild(info);
  });
});
