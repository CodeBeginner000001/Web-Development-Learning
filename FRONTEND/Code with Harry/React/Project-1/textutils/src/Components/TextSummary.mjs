import React from 'react'
export default function TextSummary({Text}) {
  return (
    <>
      <h1>Text Summary</h1>
      <p>{Text.split(" ").length-1} Words and {Text.length} Character</p>
      <p>{(0.008 * (Text.split(" ").length-1)).toFixed(2)} Minutes to read</p>
      <h2>Preview</h2>
      <p>{Text}</p>
    </>
  )
}
