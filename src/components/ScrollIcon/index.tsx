import React from "react";
import { ScrollContainer } from "./styles";

export function ScrollIcon() {
  return (
    <ScrollContainer>
      <div className="MouseContainer">
        <div className="scrollWheel" />
      </div>
    </ScrollContainer>
  );
}
