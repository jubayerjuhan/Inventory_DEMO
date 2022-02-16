import React from "react";

const Minicard = ({ title, amount, nosign, icon = "fab fa-sellsy" }) => {
  return (
    <div class="seles-item">
      <div class="seles-text">
        <h3>
          {!nosign && <i class="fas fa-euro-sign"></i>}
          {amount}
        </h3>
        <h4>{title}</h4>
      </div>
      <div class="seles-icon">
        <i class={icon}></i>
      </div>
    </div>
  );
};

export default Minicard;
