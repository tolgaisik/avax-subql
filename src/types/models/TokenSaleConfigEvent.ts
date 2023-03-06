// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type TokenSaleConfigEventProps = Omit<TokenSaleConfigEvent, NonNullable<FunctionPropertyNames<TokenSaleConfigEvent>>>;

export class TokenSaleConfigEvent implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public tierId?: number;

    public name?: string;

    public price?: string;

    public count?: number;

    public saleEnabled?: boolean;

    public startDate?: string;

    public endDate?: string;

    public state?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save TokenSaleConfigEvent entity without an ID");
        await store.set('TokenSaleConfigEvent', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove TokenSaleConfigEvent entity without an ID");
        await store.remove('TokenSaleConfigEvent', id.toString());
    }

    static async get(id:string): Promise<TokenSaleConfigEvent | undefined>{
        assert((id !== null && id !== undefined), "Cannot get TokenSaleConfigEvent entity without an ID");
        const record = await store.get('TokenSaleConfigEvent', id.toString());
        if (record){
            return this.create(record as TokenSaleConfigEventProps);
        }else{
            return;
        }
    }



    static create(record: TokenSaleConfigEventProps): TokenSaleConfigEvent {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
