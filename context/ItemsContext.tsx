import { createContext, useContext, useState } from "react";

interface Item {
  id: string;
  name: string;
  price: number;
  purchaseDate: Date;
  icon: string;
}

interface ItemsContextType {
  items: Item[];
  addItem: (item: Omit<Item, "id">) => void;
}

const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

export function ItemsProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (newItem: Omit<Item, "id">) => {
    const itemWithId = {
      ...newItem,
      id: Date.now().toString(),
    };
    setItems((currentItems) => [...currentItems, itemWithId]);
  };

  return (
    <ItemsContext.Provider value={{ items, addItem }}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItems() {
  const context = useContext(ItemsContext);
  if (context === undefined) {
    throw new Error("useItems must be used within an ItemsProvider");
  }
  return context;
} 