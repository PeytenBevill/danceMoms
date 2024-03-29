import { useState } from "react";
import { useNavigate } from "react-router";
import { LockSimple } from "@phosphor-icons/react";
import "./passcode.css";

const Passcode: React.FC = () => {
  const [passcode, setPasscode] = useState<number[]>([]);
  const navigate = useNavigate();
  const correct = [1, 5, 4, 6, 7, 2];

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, "blank", 0, "blank"];

  const handleInput = (val: number) => {
    if (passcode.length < 6) {
      setPasscode([...passcode, val]);
    }

    if (passcode.length === 5) {
      setPasscode([...passcode, val]);
      const updatedPasscode = [...passcode, val];
      const isCorrect = updatedPasscode.every(
        (num, index) => num === correct[index]
      );
      if (isCorrect) {
        navigate("/home");
      } else {
        setPasscode([]);
      }
    }
  };

  const handleDelete = () => {
    if (passcode.length > 0) {
      const updatedPasscode = [...passcode];
      updatedPasscode.pop();
      setPasscode(updatedPasscode);
    }
  };

  return (
    <div className="passcodeBody">
      <LockSimple size={22} color="#ffffff" weight="fill" />
      <h1 style={{ color: "white", fontSize: "25px", textAlign: "center" }}>
        Enter Passcode
      </h1>
      <section className="iconContainer">
        <div
          className={passcode.length >= 1 ? "iconFilled" : "inputIcon"}
          id="1"
        ></div>
        <div
          className={passcode.length >= 2 ? "iconFilled" : "inputIcon"}
          id="2"
        ></div>
        <div
          className={passcode.length >= 3 ? "iconFilled" : "inputIcon"}
          id="3"
        ></div>
        <div
          className={passcode.length >= 4 ? "iconFilled" : "inputIcon"}
          id="4"
        ></div>
        <div
          className={passcode.length >= 5 ? "iconFilled" : "inputIcon"}
          id="5"
        ></div>
        <div
          className={passcode.length === 6 ? "iconFilled" : "inputIcon"}
          id="6"
        ></div>
      </section>
      <section className="nums">
        {nums.map((num, i) => (
          <>
            {typeof num === "string" ? (
              <button className="blank"></button>
            ) : (
              <button
                key={i}
                className="numButton"
                onClick={() => handleInput(num)}
              >
                {num}
              </button>
            )}
          </>
        ))}
      </section>
      <section className="bottom">
        <p className="emergency">Emergency</p>
        <p className="delete" onClick={handleDelete}>
          Delete
        </p>
      </section>
    </div>
  );
};

export default Passcode;
