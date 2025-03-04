import { ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  const { children, mode } = props;

  if (mode === "hint") {
    return (
      <aside className="info-box info-box-hint">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;

  if (mode === "warning") {
    return (
      <aside className={`info-box info-box-warning warning--${severity}`}>
        <h2>Warning</h2>
        <p>{children}</p>
      </aside>
    );
  }
}
