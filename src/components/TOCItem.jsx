import { useEffect, useState, useRef } from "react";

export default function TOCItem(props) {
  const { title, episode, abstract } = props;
  return (
    <>
      <div>
        {episode} {title}
      </div>
    </>
  );
}
