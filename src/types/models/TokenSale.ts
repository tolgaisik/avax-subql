// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type TokenSaleProps = Omit<TokenSale, NonNullable<FunctionPropertyNames<TokenSale>>>;

export class TokenSale implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public tierId?: number;

    public nftAmountPurchased?: number;

    public paymentAmount?: number;

    public tokenId?: number;

    public reamingAmount?: number;

    public seller?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save TokenSale entity without an ID");
        await store.set('TokenSale', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove TokenSale entity without an ID");
        await store.remove('TokenSale', id.toString());
    }

    static async get(id:string): Promise<TokenSale | undefined>{
        assert((id !== null && id !== undefined), "Cannot get TokenSale entity without an ID");
        const record = await store.get('TokenSale', id.toString());
        if (record){
            return this.create(record as TokenSaleProps);
        }else{
            return;
        }
    }



    static create(record: TokenSaleProps): TokenSale {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
