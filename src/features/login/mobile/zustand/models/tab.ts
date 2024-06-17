export interface TabSlice {
    tab: {
        selected: { id: string; name: string } | null;
    };
    setTabSelected: (payload: TabSlice["tab"]["selected"]) => void;
}
