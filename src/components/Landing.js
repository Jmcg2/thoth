const Landing = (props) => {
  return (
    <>
      <div id="lightbox">
        <div className="modalWrapper">
          <div className="modal">
            <div className="modalTop">Notice of Intent</div>
            <div className="modalBody">
              <h1>
                The purpose of this website is to serve as a collaborative
                effort between all DoD Software Factories to reduce redundant
                efforts as well as providing a single source of projects for any
                Software Developer to use.
              </h1>
              <br />
              <div className="modalFooter">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => props.setInputValue(false)}
                >
                  I Agree
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modalBackground"></div>
      </div>
    </>
  );
};

export default Landing;
