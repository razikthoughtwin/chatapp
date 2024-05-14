import React, { useState } from "react";
import Attachment from "./svg/Attachment";
import Picker from "emoji-picker-react";

const MessageForm = ({ handleSubmit, text, setText, setImg }) => {
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (e) => {
    setText((prevInput) => prevInput + e.emoji);
    console.log(e.emoji);
    setShowPicker(false);
  };

  return (
    <form className="message_form" onSubmit={handleSubmit}>
      <div>
        <img
          className="emoji-icon"
          src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
          alt="emoji"
          onClick={() => setShowPicker((val) => !val)}
        />
        {showPicker && (
          <Picker emojiStyle={{ width: "50%" }} onEmojiClick={onEmojiClick} />
        )}
        </div>
        <label htmlFor="img">
          <Attachment/>
        </label>
        <input
          onChange={(e) => setImg(e.target.files[0])}
          type="file"
          id="img"
          accept="image/*"
          style={{ display: "none" }}
        />
        <input
          type="text"
          placeholder="Enter message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      
      <div>
        <button className="btn">Send</button>
      </div>
    </form>
  );
};

export default MessageForm;
