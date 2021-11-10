import create from "zustand";

const useStore = create(set => ({
  currentUser: null,
  setCurrentUser: currentUser => set({ currentUser })
}));

export default useStore;
