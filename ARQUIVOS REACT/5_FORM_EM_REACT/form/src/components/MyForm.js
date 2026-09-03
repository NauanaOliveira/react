import { useState } from "react";
import "./MyForm.css";

const MyForm = ({user}) => {
  // 6 - controlled inputs
  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name:'');
  const [email, setEmail] = useState(user ? user.email:'');
  const [bio, setBio] = useState(user ? user.bio: "");
  const [role, setRole] = useState(user ? user.role: "");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando um formulário");
    console.log(name, email, bio, role);
    
    // 7 limpar form
    setName("");
    setEmail("");
    setBio("");

  };
  

  // console.log(name);
  // console.log(email);

  return (
    <div>
        {/* envio de form */}
        {/* 1 - criação */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Digite seu nome" 
                  onChange={handleName}
                  value={name} />
            </div>
            {/* 1 - criação */}
            <label>
              <span>E-mail</span>
              <input 
                type="email"
                name="email"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>
            </label>
            {/* 8 textarea */}
            <label>
              <span>Bio: </span>
              <textarea 
                name="bio" 
                placeholder="Descrição do Usuário"
                onChange={(e) => setBio(e.target.value)}
                value={bio}
                ></textarea>
            </label>
            {/* 9 - select */}
              <label>
                <span>Função do sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                  <option value="user">Usuário</option>
                  <option value="editor">editor</option>
                  <option value="admin">administrador</option>
                </select>
              </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  );
};

export default MyForm;