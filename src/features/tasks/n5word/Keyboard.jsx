import { t } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import KeyboardUI from "react-simple-keyboard";

export function Keyboard({ onChange }) {
  const { i18n } = useLingui();

  return (
    <div style={{ maxWidth: 400 }}>
      <KeyboardUI
        va
        onKeyPress={onChange}
        display={{
          "{ent}": t`ввод`,
          "{backspace}": "⌫",
        }}
        layout={{
          default: [
            "й ц у к е н г ш щ з х ъ {backspace}",
            "ф ы в а п р о л д ж э",
            "я ч с м и т ь б ю {ent}",
          ],
        }}
      />
    </div>
  );
}
