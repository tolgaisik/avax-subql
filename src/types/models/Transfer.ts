// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type TransferProps = Omit<Transfer, NonNullable<FunctionPropertyNames<Transfer>>>;

export class Transfer implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public address?: string;

    public data?: string;

    public blockNumber: number;

    public transactionHash?: string;

    public transactionIndex?: number;

    public blockHash: string;

    public logIndex: number;

    public removed?: boolean;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Transfer entity without an ID");
        await store.set('Transfer', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Transfer entity without an ID");
        await store.remove('Transfer', id.toString());
    }

    static async get(id:string): Promise<Transfer | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Transfer entity without an ID");
        const record = await store.get('Transfer', id.toString());
        if (record){
            return this.create(record as TransferProps);
        }else{
            return;
        }
    }



    static create(record: TransferProps): Transfer {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
