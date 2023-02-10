import "./styles.css";
import * as React from "react";

export default function Form() {
  const [selected, setSelected] = React.useState("");

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };
  const saoPaulo = ["Mogi Das Cruzes", "Suzano", "Poá", "Guararema"];
  const rioDeJaneiro = ["Angra dos Reis", "Niterói", "Itaboraí"];
  const minasGerais = ["Belo Horizonte", "Monte Azul", "Muzambinho"];

  let type = null;

  let options = null;

  if (selected === "São Paulo") {
    type = saoPaulo;
  } else if (selected === "Rio de Janeiro") {
    type = rioDeJaneiro;
  } else if (selected === "Minas Gerais") {
    type = minasGerais;
  }

  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  return (
    <div className="Form">
      <div class="tituloForm">
        <h2>Cadastro de Ingressantes</h2>
      </div>
      <form>
        <label for="nya">Nome: </label>
        <br />
        <input class="textName" type="text" name="nya" id="nya" />
        <br />
        <label for="curso">Curso:</label>
        <br />
        <select class="sizeSelect" name="curso">
          <option value="semvalor" selected></option>
          <option value="valor1">Matemática</option>
          <option value="valor2">Letras</option>
          <option value="valor3">Geografia</option>
        </select>
        <br />
        <label for="Estado">Estado:</label>
        <br />
        <select
          class="sizeSelect"
          onChange={changeSelectOptionHandler}
          name="Estado"
          id="Estado"
        >
          <option></option>
          <option>São Paulo</option>
          <option>Rio de Janeiro</option>
          <option>Minas Gerais</option>
        </select>
        <br />
        <label for="edad">Cidade:</label>
        <br />
        <select class="sizeSelect" name="Cidade" id="Cidade">
          {options}
        </select>
        <br />
        <br />
        <div>
          <div>
            <ul class="botoes">
              <li class="botoes-item botoes-item_Voltar">
                <button type="submit" value="Voltar" />
                Voltar
              </li>
              <li class="botoes-item botoes-item_Gravar">
                <button type="submit" value="Gravar" />
                Gravar
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
