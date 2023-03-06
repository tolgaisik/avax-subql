// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type OwnerOfProps = Omit<OwnerOf, NonNullable<FunctionPropertyNames<OwnerOf>>>;

export class OwnerOf implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public owner: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save OwnerOf entity without an ID");
        await store.set('OwnerOf', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove OwnerOf entity without an ID");
        await store.remove('OwnerOf', id.toString());
    }

    static async get(id:string): Promise<OwnerOf | undefined>{
        assert((id !== null && id !== undefined), "Cannot get OwnerOf entity without an ID");
        const record = await store.get('OwnerOf', id.toString());
        if (record){
            return this.create(record as OwnerOfProps);
        }else{
            return;
        }
    }



    static create(record: OwnerOfProps): OwnerOf {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
