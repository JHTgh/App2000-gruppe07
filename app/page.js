"use client";
import { firebase } from "./database/firebase";
import  styles  from "./page.module.css";
import { handleLoginSubmit } from './login/login';
import { handleRegSubmit } from './signup/signup';
import { HandleUsers } from './userlist/handleUsers';


export default function Home() {
  return (
    <div>
      <div>
        <form onSubmit={handleRegSubmit}>
          <h1>Her kan du opprette bruker</h1>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
          <label htmlFor="email" id="email">Email:</label>
          <input type="email" id="email" />
          <label htmlFor="password" id="password">Password:</label>
          <input type="password" id="password" required />
          <br />
          <div>
            <button type="submit">Create account</button>
          </div>
        </form>
      </div>

      <div>
        <form onSubmit={handleLoginSubmit}>
          <h3>Her kan du prøve å logge inn med brukeren du nettopp opprettet</h3>
          <label htmlFor="email" id="email">Email:</label>
          <input type="email" id="email" required />
          <label htmlFor="password" id="password">Password:</label>
          <input type="password" id="password" required />
          <br />  
          <div>
            <button type="submit">Log in</button>
          </div>
        </form>
      </div>
      <HandleUsers />
  </div>
  );
}

