import styles from "./KanjiCard.module.css";
import KanjiCharacter from "./KanjiCharacter";
import KanjiCharacterDefinition from "./KanjiCharacterDefinition";
import {
  LineShareButton,
  LineIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

const KanjiCard = ({ kanjiName, eachKanjiData }) => {
  // const copyToClipboard = async () => {
  //   await navigator.clipboard.writeText(kanjiName);
  //   alert("Copied " + kanjiName + " !");
  // };

  return (
    <article className={styles.kanjiCard}>
      <div className={styles.kanjiName}>
        {eachKanjiData.map((kanji, index) => (
          <KanjiCharacter
            character={kanji.character}
            hiragana={kanji.hiragana}
            romaji={kanji.romaji}
            key={index}
          />
        ))}
      </div>

      <div className={styles.kanjiNameInfo}>
        {eachKanjiData.map((kanji, index) => (
          <KanjiCharacterDefinition
            character={kanji.character}
            definition={kanji.definition}
            key={index}
          />
        ))}
      </div>

      <div className={styles.shareButtons}>
        <LineShareButton
          url={"https://kanjify.vercel.app"}
          title={`My name in Japanese is ${kanjiName}. Check out Kanjify to discover yours!`}
        >
          <LineIcon size={40} round />
        </LineShareButton>
        <FacebookShareButton
          url={"https://kanjify.vercel.app"}
          quote={`My name in Japanese is ${kanjiName}. Check out Kanjify to discover yours!`}
          hashtag={"#kanjify"}
        >
          <FacebookIcon size={40} round />
        </FacebookShareButton>
        <TwitterShareButton
          value={kanjiName}
          url={"https://kanjify.vercel.app"}
          title={`My name in Japanese is ${kanjiName}. Check out Kanjify to discover yours!`}
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>
        <WhatsappShareButton
          url={"https://kanjify.vercel.app"}
          title={`My name in Japanese is ${kanjiName}. Check out Kanjify to discover yours!`}
          separator=":: "
        >
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>
        <LinkedinShareButton url={"https://kanjify.vercel.app"}>
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>
      </div>
    </article>
  );
};

export default KanjiCard;
