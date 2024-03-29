import { useState } from "react";
import AppHeader from "./AppHeader";
import { texts } from "./texts";
import { Plus, CaretLeft } from "@phosphor-icons/react";
import "./message.css";

interface TextMessage {
  date: string;
  message: string;
  blue: boolean;
}

const Message: React.FC = () => {
  const [contactClick, setContactClick] = useState(false);
  const [renderTexts, setRenderTexts] = useState<TextMessage[]>([]);
  const [contactName, setContactName] = useState('')
  const [showNumber, setShowNumber] = useState(false)
  const [theIndex, setTheIndex] = useState(0)

  const handleContactClick = (i: number) => {
    setContactClick(true);
    setTheIndex(i)
    setContactName(texts[i].contact)
    const foundTexts = texts[i].textHistory;
    setRenderTexts(foundTexts);
  };

  const goBack = () => {
    setContactClick(false)
  }
  
  const handleToggleNum = () => {
    if(!showNumber){
      setShowNumber(true)
    } else {
      setShowNumber(false)
    }
  }
  return (
    <>
      {!contactClick && (
        <>
          <AppHeader />
          <div className="messageBody">
            <h1>Messages</h1>
            {texts.map((person, i) => (
              <p key={i} onClick={() => handleContactClick(i)} className="contactCard">
                {person.contact}
              </p>
            ))}
          </div>
        </>
      )}
      {contactClick && (
        <div className="textBody">
          <header>
            <span style={{marginTop: '50%'}} onClick={goBack}>
          <CaretLeft size={42} color="#0040ff" />
            </span>
            <div className="contactButton" onClick={handleToggleNum}>
              <img src="https://i.ibb.co/xM961wP/321556657089211.webp" alt="" />
              {!showNumber ? (
                <p>{contactName}</p>
              ) : (
                <p>{texts[theIndex].number}</p>
              )}
            </div>
          </header>
          {renderTexts.map((text) => (
            <div style={{padding: '2%', overflowY: 'scroll'}}>
              {text.date.length > 0 && <p className="date">{text.date}</p>}
              <div className={text.blue ? "bubble-b" : "bubble-w"}>
                <p className={text.blue ? "blue" : "white"}>{text.message}</p>
              </div>
            </div>
          ))}
          <footer>
            <button className="plusButton">
              <Plus size={22} color="#575757" />
            </button>
            <div className="messageBar">
              <p style={{color: '#e7e7e7', marginLeft: '2%'}}>iMessage</p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Message;
