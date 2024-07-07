import React from 'react'
export default function TextSummary({Text,mode}) {
  return (
    <>
      <h1 className={`text-${mode==='light'? 'dark' : 'light'}`}>Text Summary</h1>
      <p className={`text-${mode==='light'? 'dark' : 'light'}`}>{Text.split(" ").length-1} Words and {Text.length} Character</p>
      <p className={`text-${mode==='light'? 'dark' : 'light'}`}>{(0.008 * (Text.split(" ").length-1)).toFixed(2)} Minutes to read</p>
      <h2 className={`text-${mode==='light'? 'dark' : 'light'}`}>Preview</h2>
      <p className={`text-${mode==='light'? 'dark' : 'light'}`}>{Text}</p>
    </>
  )
}
