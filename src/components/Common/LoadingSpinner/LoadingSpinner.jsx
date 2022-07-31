import React from "react";
import './LoadingSpinner';
import Spinner from 'react-bootstrap/Spinner';

export default function LoadingSpinner() {
  return (
    <div className="container text-center mt-5">
      <Spinner animation="border" />
    </div>
  );
}
