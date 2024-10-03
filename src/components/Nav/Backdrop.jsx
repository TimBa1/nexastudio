"use client"

const Backdrop = ({ show, clicked }) =>
  show ? (
    <div
      className="fixed  w-full h-full z-50 bg-black top-0 left-0 right-0"
      onClick={clicked}
    ></div>
  ) : null;

export default Backdrop