document.querySelectorAll("[data-current-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

document.querySelectorAll(".smsOptInForm").forEach((form) => {
  const successId = form.querySelector(".smsSuccessText")?.id;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const phone = form.querySelector("[type=tel]")?.value?.trim();
    const consent = form.querySelector("[type=checkbox]")?.checked;

    if (!phone || !consent) return;

    const subject = encodeURIComponent("Bootstrap SMS Opt-In");
    const body = encodeURIComponent(`Phone: ${phone}\nConsent: granted`);
    window.location.href = `mailto:hello@tldr.is?subject=${subject}&body=${body}`;

    if (successId) {
      const success = document.getElementById(successId);
      if (success) {
        success.hidden = false;
        form.querySelector("[type=tel]").value = "";
        form.querySelector("[type=checkbox]").checked = false;
      }
    }
  });
});
