/* eslint-disable @typescript-eslint/no-unused-vars */
import {create} from "zustand";

import {persist} from "zustand/middleware";


export interface CartItem {
    id: string;
    image: string | null;
    quantity: number;
    name: string;
    price: number
}

export interface CartStore {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
}


export const useCartStore = create<CartStore>()