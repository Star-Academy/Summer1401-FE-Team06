import {SnackbarTheme} from '../enums/snackbar-theme.enum';

export interface SnackbarOptions {
    message: string;
    theme?: SnackbarTheme;
}
