import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Tag extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id : number;

    @Column()
    label : string ; 

    



}