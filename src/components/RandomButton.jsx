import React from "react";

const RandomButton = ({ pick, randomItem, disable }) => {
  return (
    <>
      <button
        onClick={randomItem}
        disabled={disable}
        type="button"
        className="btn btn-outline-dark btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal">
        Random
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Your Choice is...
              </h5>
            </div>
            <div className="modal-body">
              <h3 className="text-center">{pick}</h3>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomButton;
