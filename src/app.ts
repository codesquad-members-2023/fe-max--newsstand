export function App() {
  const root = document.querySelector("#root");

  render();

  function render() {
    root!.innerHTML = `
    <div class="header"></div>
    <div class="roller"></div>
    <div class="media"></div>
    `;
  }
}
