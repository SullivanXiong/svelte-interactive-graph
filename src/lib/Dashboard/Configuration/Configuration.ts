const enum Theme {
  Light = "LIGHT",
  Dark = "DARK",
  Custom = "CUSTOM",
  Default = "DEFAULT",
}

const enum Layout {
  Grid = "GRID",
  List = "LIST",
  Column = "COLUMN",
  Centered = "CENTERED",
}

interface Configuration {
  theme: Theme;
  layout: Layout;
}

export { Theme, Layout, type Configuration };
