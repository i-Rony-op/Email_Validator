let result = {
  tag: "",
  free: true,
  role: false,
  user: "kruskalsinghkishan",
  email: "kruskalsinghkishan@gmail.com",
  score: 0.48,
  state: "undeliverable",
  domain: "gmail.com",
  reason: "invalid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: false,
  did_you_mean: "",
  format_valid: true,
};

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("Clicked");
  let key = "ema_live_Ai2lkAqTq9OXmbxZ37dz3FvnklKPRBVy3PQyCqdU";
  let email = document.getElementById("username").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();
  let str = ``;
  for (values of Object.keys(result)) {
    if (result[values] !== "" && result[values] !== " ") {
      str = str + `<div>${values}: ${result[values]}</div>`;
    }
  }
  console.log(str);

  resultCont.innerHTML = str;
});
