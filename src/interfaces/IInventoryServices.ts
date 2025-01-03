import { IInventoryItem } from "../types/inventoryTypes";

// Interface for the Inventory Service
export interface IInventoryService {
  createItem(item: IInventoryItem): Promise<IInventoryItem >;
  getAllItems(): Promise<IInventoryItem[]>;
  getItemById(id: string): Promise<IInventoryItem>;
  updateItem(
    id: string,
    item: Partial<IInventoryItem>
  ): Promise<IInventoryItem>;
  deleteItem(id: string): Promise<void>;
}
