import { CrossnoteTheme } from "./theme";
import { LightTheme } from "./light";
import { DarkTheme } from "./dark";
import { OneDarkTheme } from "./one-dark";
import { SolarizedLight } from "./solarized-light";
import { setTheme as VickyMDSetTheme, ThemeName } from "vickymd/theme";
import { Editor } from "codemirror";
import { VickyMDVersion } from "../editor";

export function setTheme({
  editor,
  themeName,
}: {
  editor?: Editor;
  themeName: ThemeName;
}) {
  return VickyMDSetTheme({
    editor,
    themeName,
    baseUri: `./styles/vickymd@${VickyMDVersion}/`,
  });
}

export class ThemeManager {
  public themes: CrossnoteTheme[] = [];
  public selectedTheme: CrossnoteTheme = null;
  public addTheme(theme: CrossnoteTheme) {
    this.themes.push(theme);
    if (!this.selectedTheme) {
      this.selectTheme(theme.name);
    }
  }

  public getTheme(name: string) {
    return this.themes.find((theme) => theme.name === name);
  }

  public selectTheme(name: string) {
    if (!name) {
      return;
    }
    const theme = this.themes.find((t) => t.name === name);
    if (!theme) {
      return;
    }
    this.selectedTheme = theme;
    setTheme({
      themeName: theme.name,
    });
  }
}

const _themeManager = new ThemeManager();
_themeManager.addTheme(LightTheme);
_themeManager.addTheme(DarkTheme);
_themeManager.addTheme(OneDarkTheme);
_themeManager.addTheme(SolarizedLight);

export const themeManager = _themeManager;
