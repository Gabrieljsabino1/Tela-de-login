import { useState } from 'react';
import academiaIMG from './assets/Academia-logo-2021.svg'
import './styles.css'


function App() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Academia Arca</span>
            <span className="login-form-title">
              <img src={academiaIMG} alt="academia" />
            </span>

          <div className="wrap-input">
            <input 
              className={email !== "" ? 'has-val input' : 'input'} 
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
            <span className="focus-input" data-placeholder="Login"></span>
          </div>

          <div className="wrap-input">
            <input 
              className={senha !== "" ? 'has-val input' : 'input'} 
              type="senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Senha"></span>
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">Login</button>
          </div>

          <div className="text-center">
            <span className="naoPossuiConta">Não possui conta?</span> 
            <a className="criarConta" href="#">Criar conta.</a>
            </div>

            <div className="text-center1">
            <a className="esqueciSenha" href="!">Esqueci minha senha</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default App;
