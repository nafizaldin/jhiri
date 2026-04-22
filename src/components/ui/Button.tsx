import styles from "./Button.module.scss";
import clsx from "clsx";

type Variant = "solid" | "gold" | "ghost" | "back" | "moss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  as?: "button";
}

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  as: "a";
  href: string;
}

type Props = ButtonProps | AnchorProps;

export default function Button({ variant = "solid", as: Tag = "button", className, children, ...rest }: Props) {
  const cls = clsx(styles.base, styles[variant], className);

  if (Tag === "a") {
    const { href, ...anchorRest } = rest as AnchorProps;
    return (
      <a href={href} className={cls} {...(anchorRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
