const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("https://formspree.io/f/xeozalqa", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      contact: formData.contact,
      message: formData.message,
    }),
  });

  if (res.ok) {
    setStatus("✅ Message sent successfully!");
    setFormData({ name: "", email: "", contact: "", message: "" });
  } else {
    setStatus("❌ Failed to send message.");
  }
};
