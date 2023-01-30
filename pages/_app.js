import { StateContext } from "../context/StateContext";
import "../styles/globals.css";
import { Lora } from "@next/font/google";

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: "normal",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={lora.className}>
      <StateContext>
        <Component {...pageProps} />;
      </StateContext>
    </main>
  );
}
