import { useState } from "react";
import AppHeader from "./AppHeader";
import { CaretDown } from "@phosphor-icons/react";
import "./voicemail.css";

const Voicemail: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const voicemails = [
    {
      contact: "(800) 772-1213",
      transcript:
        "Hello, this is Sandra from the social security office. I'm calling to speak with Ms. Abby Lee Miller regarding an overpayment. Please call your local office as soon as possible to resolve this matter.",
      date: "3/23/24",
    },
    {
      contact: "(877) 223-4456",
      transcript:
        "This communication is from a debt collector. Any information obtained will be used for those purposes. Please call Capital Collections Inc. at your earliest convenience to discuss an important business matter at 877-223-4456.",
      date: "3/10/24",
    },
    {
      contact: "(674) 967-0011",
      transcript:
        "Hello Ms. Miller, this is Heath Bullock, representing the Hylands in case number 337045-6985, 337045-7021, and 337046-0091. We need to settle this case soon. James Moorison, your attorney, let me know that you're considering settling the case. This case has been open much longer than any of us expected, I'm sure you'd agree. If this is true, I urge you to contact Mr. Moorison as soon as possible so we can get the paperwork prepared. Thank you.",
      date: "3/5/24",
    },
    {
      contact: "Cathy N",
      transcript:
        "Abby, it's Cathy. I can't believe you're refusing to sign the paperwork. This is ridiculous! You can't just sabotage this deal because you're bitter. Grow up, Abby. We both know you're just scared of a little competition. Well, guess what? I'm not backing down. You can't hold onto that studio forever. You said it yourself, you need the money. Call me back when you're ready to act like an adult.",
      date: "3/3/24",
    },
  ];

  const handleExpand = (i: number) => {
    setExpandedIndex(i === expandedIndex ? null : i);
  };
  return (
    <>
      <AppHeader />
      <div className="voicemailBody">
        <section className="list">
          {voicemails.map((voicemail, i) => (
            <>
            <div className="tab">
              <p key={i} style={{ fontSize: "20px" }}>{voicemail.contact}</p>

              <button key={i} className="dropdown" onClick={() => handleExpand(i)}>
                <CaretDown size={32} />
              </button>
            </div>
            {expandedIndex === i && (
              <div style={{backgroundColor: 'white', padding: '2%'}}>
              <p>{voicemail.transcript}</p>
              <p>Date: {voicemail.date}</p>
            </div>
            )}
            </>
          ))}
        </section>
      </div>
    </>
  );
};

export default Voicemail;
