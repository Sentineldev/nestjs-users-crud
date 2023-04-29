
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'user', schema:"public"})
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    firstName: string;


    @Column()
    lastName: string;
}

