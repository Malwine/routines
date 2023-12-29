enum ViewState {
    Home,
    Routines,
    Routine
}

export interface ChangeViewState {
    to: ViewState,
    name?: string
}

export default ViewState;