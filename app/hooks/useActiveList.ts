import { create } from 'zustand'

interface ActiveListStore {
  members: string[];
  add: (id: string) => void;
  remove: (id: string) => void;
  set: (ids: string[]) => void;
}

const useActiveList = create<ActiveListStore>((set: (arg0: { (state: { members: any; }): { members: any[]; }; (state: { members: any[]; }): { members: any[]; }; members?: any; }) => any) => ({
  members: [],
  add: (id: any) => set((state: { members: any; }) => ({ members: [...state.members, id] })),
  remove: (id: any) => set((state: { members: any[]; }) => ({ members: state.members.filter((memberId) => memberId !== id) })),
  set: (ids: any) => set({ members: ids })
}));

export default useActiveList;