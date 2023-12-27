enum ViewState {
    Home = 1,
    Routines = 2
}

export interface ChangeViewState {
    to: ViewState
}

export default ViewState;