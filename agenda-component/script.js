$(function () {
  const contactos = [];

  $("#addBtn").on("click", function () {
    const telefono = $("#indexInput").val().trim();
    const nombre = $("#valueInput").val().trim();

    if (telefono === "" || nombre === "") return;

    contactos.push({ telefono, nombre });
    renderLista();

    $("#indexInput").val("").focus();
    $("#valueInput").val("");
  });

  function renderLista() {
    $("#tableBody").empty();
    contactos.forEach((contacto) => {
      const row = `<tr><td>${contacto.telefono}</td><td>${contacto.nombre}</td></tr>`;
      $("#tableBody").append(row);
    });
  }
});
