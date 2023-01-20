import { create } from "zustand";
import { Actions, State } from "../types/CountType";

export const useStore = create<State & Actions>((set) => ({
    count: 0,
    increament: () => set((state) => ({
        count: state.count + 1
    })),
    decreament: () => set((state) => ({
        count: state.count - 1
    }))
}))