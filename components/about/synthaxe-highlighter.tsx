"use client";

import { JetBrains_Mono } from "next/font/google";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy } from "lucide-react";

const code = {
  javascript: `console.log("Hello, World!");`,
  python: `print("Hello, World!")`,
  java: `public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`,
};

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: "200" });

type CodeSnippets = keyof typeof code;

export default function Code() {
  const [tab, setTab] = React.useState<CodeSnippets>("python");
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code[tab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="font-light border my-10">
      <div className="flex items-center justify-between border-b">
        <div className="text-xs pl-5">
          {(["python", "javascript", "java"] as CodeSnippets[]).map((lang) => (
            <button
              key={lang}
              className={
                "py-3 px-4 " +
                (tab === lang
                  ? "border-b border-b-foreground"
                  : "text-muted-foreground hover:text-foreground transition-colors")
              }
              onClick={() => setTab(lang)}
            >
              {lang === "javascript"
                ? ".js"
                : lang === "java"
                  ? ".java"
                  : ".py"}
            </button>
          ))}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 mr-2 text-xs rounded transition-colors text-muted-foreground hover:text-foreground"
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? "Copié" : "Copier"}
        </button>
      </div>
      <SyntaxHighlighter
        style={atomDark}
        language={tab}
        PreTag={({ children, ...rest }) => (
          <pre {...rest} style={{ ...rest.style, background: "transparent" }}>
            {children}
          </pre>
        )}
        customStyle={{
          fontSize: 13,
          background: "transparent",
          fontFamily: jetbrainsMono.style.fontFamily,
          padding: "1.1rem",
          margin: 0,
        }}
        codeTagProps={{
          style: {
            fontWeight: 200,
            fontFamily: jetbrainsMono.style.fontFamily,
          },
        }}
      >
        {code[tab]}
      </SyntaxHighlighter>
    </div>
  );
}
