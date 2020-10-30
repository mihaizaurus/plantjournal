import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TestDetail({ match }) {
  useEffect(() => {
    console.log(match);
  }, []);

  return (
    <div className="flex-shrink-0" style={{ paddingTop: "150px" }}>
      <h1>Provided Item:{match.params.id}</h1>
    </div>
  );
}

export default TestDetail;
