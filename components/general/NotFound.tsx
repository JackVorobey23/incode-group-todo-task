import React from "react";
import "@styles/error.css";
import Link from "next/link";
interface NotFoundProps {
  errorMessage: string;
  tip?: string;
}

function ErrorPage({ errorMessage, tip }: NotFoundProps) {
  return (
    <div className="error_container">
      <h1 className="error_message">{errorMessage}</h1>
      {tip ? <h3 className="error_tip">Tip: {tip}</h3> : <></>}
      <Link className="home_link" href={"/"}>Go back home</Link>
    </div>
  );
}

export default ErrorPage;
