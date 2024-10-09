import { createTheme } from "@mui/material";
import { green, purple } from '@mui/material/colors';
import { StatProps } from "~/ui/Stat";
import {
  ComponentsOverrides,
  ComponentsVariants,
  Theme as MuiTheme,
} from '@mui/material/styles';

type Theme = Omit<MuiTheme, 'components'>;

declare module '@mui/material/styles' {
  interface Palette {
    green: Palette['primary'];
    purple: Palette['primary'];
  }
  interface PaletteOptions {
    green?: PaletteOptions['primary'];
    purple?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    green: true;
    purple: true;
  }
}


declare module '@mui/material/styles' {
  interface ComponentNameToClassKey {
    MuiStat: 'root' | 'value' | 'unit';
  }

  interface ComponentsPropsList {
    MuiStat: Partial<StatProps>;
  }

  interface Components {
    MuiStat?: {
      defaultProps?: ComponentsPropsList['MuiStat'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiStat'];
      variants?: ComponentsVariants['MuiStat'];
    };
  }
}

export const theme = createTheme({
  palette: {
    green: {
      main: green[500],
      contrastText: "#fff"

    },
    purple: {
      main: purple[500],
      contrastText: "#fff"
    }
  },
  components: {
    MuiStat: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          backgroundColor: '#121212',
        },
        value: {
          color: '#fff',
        },
        unit: {
          color: '#888',
        },
      },
    },
  }
})