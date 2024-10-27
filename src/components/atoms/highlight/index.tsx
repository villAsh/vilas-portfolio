import React from "react";

export default function Highlight({ text }: { text: string }) {
  return <span className="font-semibold text-purple">{text}</span>;
}
