const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const base_url = "https://api.github.com";

btnSearch.addEventListener("click", async () => {
  const userName = inputSearch.value;
  if (userName) {
    const response = await fetch(`${base_url}/users/${userName}`);
    if (!response.ok) {
      alert(
        "Usuário não econtrado. Por favor, verifique o nome de usuário e tente novamente.",
      );
    }
    const data = await response.json();
    console.log(data);
  } else {
    alert("Por favor,X digite um nome de usuário do GitHub.");
  }
});
