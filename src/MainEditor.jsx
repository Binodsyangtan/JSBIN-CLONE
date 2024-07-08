import React, { useState } from "react";
import Nav from "./Components/Nav";
import { Editor } from "@monaco-editor/react";

export default function MainEditor() {
  const [output, setOutput] = useState("");
  const [cssCode, setcssCode] = useState("");
  const [jsCode, setJs] = useState("");
  const [htmlDisplay, setHtmlDisplay] = useState("block");
  const [cssDisplay, setCssDisplay] = useState("block");
  const [jsDisplay, setJsDisplay] = useState("block");

  let htmlCode =
    "<html>\n<head>\n<title></title>\n </head>\n <body>\n</body>\n</html>";

  function handleEditorChangeHtml(value) {
    setOutput(value);
  }
  function handleEditorChangeCss(value) {
    setcssCode(value);
  }
  function handleEditorChangeJs(value) {
    setJs(value);
  }

  function htmlDisplayChange() {
    if (htmlDisplay == "block") {
      setHtmlDisplay("hidden");
    } else {
      setHtmlDisplay("block");
    }
  }

  function cssDisplayChange() {
    if (cssDisplay == "block") {
      setCssDisplay("hidden");
    } else {
      setCssDisplay("block");
    }
  }
  function jsdDisChng() {
    if (jsDisplay == "block") {
      setJsDisplay("hidden");
    } else {
      setJsDisplay("block");
    }
  }
  return (
    <>
      <Nav
        className="z-50-"
        HtmlFunction={htmlDisplayChange}
        CssFunction={cssDisplayChange}
        JsFunction={jsdDisChng}
      />

      <div className=" ">
        <div className=" grid border grid-cols-4  ">
          <div className={`${htmlDisplay}`}>
            <p className="text-sm text-sky-400 p-2 px-4">HTML v</p>
            <Editor
              height="100vh"
              defaultLanguage="html"
              defaultValue={htmlCode}
              onChange={handleEditorChangeHtml}
            />
            ;
          </div>
          <div className={`${cssDisplay}`}>
            <p className="text-sm text-sky-400 p-2 px-4">CSS v</p>
            <Editor
              height="100vh"
              defaultLanguage="css"
              defaultValue=""
              onChange={handleEditorChangeCss}
            />
            ;
          </div>
          <div className={`${jsDisplay}`}>
            <p className="text-sm text-sky-400 p-2 px-4">Javascript v</p>
            <Editor
              height="100vh"
              defaultLanguage="javascript"
              defaultValue=""
              theme="light"
              onChange={handleEditorChangeJs}
            />
          </div>

          <div>
            <p className="text-sm text-slate-500 font-bold p-2 px-4">output</p>
            <iframe
              className="h-screen w-full"
              srcDoc={`<style${cssCode} <style/> ${setOutput} <script>${jsCode}</script>`}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
