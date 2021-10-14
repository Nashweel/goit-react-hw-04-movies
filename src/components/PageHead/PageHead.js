import s from "./PageHead.module.css";

export default function PageHead({ text }) {
  return <h1 className={s.title}>{text}</h1>;
}
