export interface UiState {
    userId: number;
    currentThreadId: number;
    loaded: boolean;
    loading: boolean;
}

export const INITIAL_UI_STATE: UiState = {
    userId: undefined,
    currentThreadId: undefined,
    loaded: false,
    loading: false
};
