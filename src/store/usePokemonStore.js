import { create } from "zustand";
export const usePokemonStore = create((set) => {
  return {
    value: {
      isModalOpen: false,
      pokemon: null,
    },
    openModal: (pokemon) =>
      set((state) => ({
        ...state,
        value: { isModalOpen: true, pokemon },
      })),
    closeModal: () =>
      set((state) => ({
        ...state,
        value: { ...state.value, isModalOpen: false },
      })),
  };
});
