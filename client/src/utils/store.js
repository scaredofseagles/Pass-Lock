import create from "zustand";

const useStore = create(set => ({
  currentUser: null,
  openAcct: false,
  setCurrentUser: currentUser => set({ currentUser }),
  setOpenAcct: openAcct => set({ openAcct })
}));

export default useStore;
