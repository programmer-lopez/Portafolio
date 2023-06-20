import stylesUrl from "~/styles/contactme.css";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function ContactoPortafolioRoute() {
    return (
      <main>
  <div className="wrapper">
    <article className="flow">
      <div className="cluster">
        <div className="chat-ui">
  <div className="chat-titlebar">
    <h5>Chat Window</h5>
    <div className="chat-avatar">
      <img src="https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif" alt=""/>
    </div>
  </div>
  
  <div className="chat-scrollview">
    <div className="chat-messagelist">
      
      <div className="chat-cluster">
        <div className="chat-avatar">
          <img src="https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif" alt=""/>
        </div>
        <section>
          <h3>Learn CSS Bot</h3>
          <div className="chat-message">Hi!</div>
          <div className="chat-message">I'm a bot</div>  
          <div className="chat-message">Think of each message as a child in this chat window</div>
        </section>
      </div>
      
      <div mine class="chat-cluster">
        <section>
          <div className="chat-message">Hi!</div>
          <div className="chat-message">I'm not a bot</div>
          <div className="chat-message">But I am static text that was put here by a human to help you learn about CSS Overflow!</div>
        </section>
      </div>
      
      <div className="chat-cluster">
        <div className="chat-avatar">
          <img src="https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif" alt=""/>
        </div>
        <section>
          <h3>Learn CSS Bot</h3>
          <div className="chat-message">Cool.</div>
          <div className="chat-message">I see this chat implementation is using the overflow property...</div>
          <div className="chat-message">Can you tell me more about that?</div>
        </section>
      </div>
      
      <div mine class="chat-cluster">
        <section>
          <div className="chat-message">sure!</div>
          <div className="chat-message">Element `overflow` is a property set on an element to control what happens when the children of an element are requesting more space than it has available.</div>
          <div className="chat-message">Learn CSS can teach you more about overflow!</div>
        </section>
      </div>
      
    </div>
  </div>
  
  <div className="chat-authoring" content="editable"></div>
</div>
      </div>
    </article>
  </div>
</main>
    );
  }