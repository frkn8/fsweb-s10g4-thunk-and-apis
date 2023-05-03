import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

function Item({ data }) {
  const [visible, setVisible] = useState(false);
  return (
    <div
      onClick={() => setVisible(!visible)}
      className="shadow-md bg-white text-center"
    >
      <p className="text-2xl p-10">{data.setup}</p>
      {visible && (
        <p className="text-xl p-10 bg-blue-100">
          {data.punchline} {toast.success(`Tarafını Seç: 🤣||🤢||😶`)};
        </p>
      )}
    </div>
  );
}

export default Item;