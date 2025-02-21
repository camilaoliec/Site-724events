/* eslint-disable react/require-default-props */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "../../components/Icon/index.js";
import "./style.scss";

const Modal = ({ opened = false, Content, children }) => {
  const [isOpened, setIsOpened] = useState(opened);
  return (
    <>
      {children({ isOpened, setIsOpened })}
      {isOpened && (
        <div className="modal">
          <div className="content">
            {Content}
            <button
              type="button"
              data-testid="close-modal"
              onClick={() => setIsOpened(false)}
            >
              <Icon name="close" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  opened: PropTypes.bool,
  Content: PropTypes.node.isRequired,
  children: PropTypes.func.isRequired,
}

export default Modal;
